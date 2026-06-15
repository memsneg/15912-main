"use client";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function captureUTM(): UTMParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem("utm_params", JSON.stringify(utm));
  }
  return utm;
}

export function getStoredUTM(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("utm_params");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function trackEvent(
  event: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    ...params,
    ...getStoredUTM(),
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  // Google Analytics 4
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag("event", event, params);
  }

  // GTM dataLayer
  const dl = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (dl) {
    dl.push({ event, ...params });
  }

  // Server-side tracking
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});

  // Meta Pixel
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (fbq && event === "lead_submit") {
    fbq("track", "Lead");
  }
}

export function initScrollTracking() {
  if (typeof window === "undefined") return;
  const thresholds = [25, 50, 75, 100];
  const fired = new Set<number>();

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.round((scrollTop / docHeight) * 100);
    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent("scroll_depth", { depth: t });
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}
