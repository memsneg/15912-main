"use client";

import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext<(msg?: string) => void>(() => {});

export function useCopyToast() {
  return useContext(ToastContext);
}

export function CopyToastProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm transition-all duration-200 pointer-events-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        role="status"
      >
        تم النسخ ✓
      </div>
    </ToastContext.Provider>
  );
}

export function CopyToast() {
  return null;
}
