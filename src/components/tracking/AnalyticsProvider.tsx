"use client";

import { useEffect } from "react";
import { captureUTM, initScrollTracking } from "@/lib/tracking";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    captureUTM();
    initScrollTracking();
  }, []);

  return <>{children}</>;
}
