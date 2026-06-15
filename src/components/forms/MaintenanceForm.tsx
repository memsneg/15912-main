"use client";

import { useState } from "react";
import { trackEvent, getStoredUTM } from "@/lib/tracking";

interface MaintenanceFormProps {
  brand?: string;
  governorate?: string;
}

export function MaintenanceForm({ brand, governorate }: MaintenanceFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          area: data.get("area"),
          appliance: data.get("appliance"),
          message: data.get("message"),
          brand: brand || data.get("brand"),
          governorate,
          ...getStoredUTM(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      trackEvent("lead_submit", { brand: brand || "general" });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          الاسم
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          رقم الهاتف
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          dir="ltr"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium mb-1">
          المنطقة
        </label>
        <input
          id="area"
          name="area"
          required
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="appliance" className="block text-sm font-medium mb-1">
          نوع الجهاز
        </label>
        <select id="appliance" name="appliance" className="w-full border rounded-lg px-4 py-2">
          <option value="refrigerator">ثلاجة</option>
          <option value="washing-machine">غسالة</option>
          <option value="air-conditioner">مكيف</option>
          <option value="cooker">بوتاجاز</option>
          <option value="other">أخرى</option>
        </select>
      </div>

      {!brand && (
        <div>
          <label htmlFor="brand" className="block text-sm font-medium mb-1">
            الماركة
          </label>
          <input id="brand" name="brand" className="w-full border rounded-lg px-4 py-2" />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          وصف العطل (اختياري)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-primary text-white font-semibold py-3 rounded-lg hover:bg-brand-secondary disabled:opacity-50"
      >
        {status === "loading" ? "جاري الإرسال..." : "طلب فني صيانة"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm">تم إرسال طلبك بنجاح. سنتواصل معك قريباً.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">حدث خطأ. يرجى الاتصال على 15912.</p>
      )}
    </form>
  );
}
