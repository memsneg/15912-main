import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");

const RATE_LIMIT = new Map<string, { count: number; reset: number }>();
const MAX_PER_MINUTE = 60;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT.get(ip);
  if (!entry || now > entry.reset) {
    RATE_LIMIT.set(ip, { count: 1, reset: now + 60_000 });
    return false;
  }
  entry.count++;
  return entry.count > MAX_PER_MINUTE;
}

function isSuspiciousBot(ua: string | null): boolean {
  if (!ua) return true;
  const botPatterns = [
    /headless/i,
    /phantom/i,
    /selenium/i,
    /curl/i,
    /wget/i,
    /python-requests/i,
  ];
  return botPatterns.some((p) => p.test(ua));
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const ua = request.headers.get("user-agent");

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Rate limited" }, { status: 429 });
    }

    const body = await request.json();
    const event = {
      ...body,
      ip,
      userAgent: ua,
      isBot: isSuspiciousBot(ua),
      country: request.headers.get("cf-ipcountry") || null,
      receivedAt: new Date().toISOString(),
    };

    await fs.mkdir(DATA_DIR, { recursive: true });
    let events: unknown[] = [];
    try {
      events = JSON.parse(await fs.readFile(EVENTS_FILE, "utf-8"));
    } catch {
      /* empty */
    }
    events.push(event);
    if (events.length > 10000) events = events.slice(-5000);
    await fs.writeFile(EVENTS_FILE, JSON.stringify(events, null, 2));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
