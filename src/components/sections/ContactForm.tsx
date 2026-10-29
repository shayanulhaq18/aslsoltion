"use client";

import { useState, type FormEvent } from "react";
import { categories } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "w-full rounded-xl border border-line bg-page px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 transition-colors focus:border-amber-500 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-amber-500/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-fg">{label}</span>
      {children}
    </label>
  );
}

// No backend yet: the enquiry is sent as a pre-filled WhatsApp message.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "New enquiry from website",
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business") || "-"}`,
      `Phone: ${data.get("phone")}`,
      `Interested in: ${data.get("category")}`,
      `Quantity: ${data.get("quantity") || "-"}`,
      `Message: ${data.get("message") || "-"}`,
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-surface p-6 shadow-xl shadow-navy-900/5 sm:p-10">
      <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">Request a quote</h2>
      <p className="mt-2 text-sm text-fg-muted">Fill in the details and we&apos;ll get back to you within a few hours.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full name *">
          <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </Field>
        <Field label="Business name">
          <input name="business" autoComplete="organization" placeholder="Restaurant / company" className={fieldClass} />
        </Field>
        <Field label="Phone / WhatsApp *">
          <input name="phone" required type="tel" autoComplete="tel" placeholder="+92 3xx xxxxxxx" className={fieldClass} />
        </Field>
        <Field label="Interested in">
          <select name="category" className={fieldClass} defaultValue={categories[0].name}>
            {categories.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
            <option>Export Enquiry</option>
            <option>Charity / Sadqa</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Estimated quantity">
            <input name="quantity" placeholder="e.g. 50 kg per week" className={fieldClass} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea name="message" rows={4} placeholder="Cuts, sizes, delivery schedule..." className={fieldClass} />
          </Field>
        </div>
      </div>
      <Button type="submit" size="lg" icon="arrowRight" className="mt-8 w-full sm:w-auto">
        Send Enquiry
      </Button>
      {sent && (
        <p role="status" className="mt-4 text-sm font-medium text-accent">
          WhatsApp opened with your enquiry. Just press send and our team will reply shortly.
        </p>
      )}
    </form>
  );
}
