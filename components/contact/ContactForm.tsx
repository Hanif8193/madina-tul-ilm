"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "general",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(name: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData(initialFormData);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-emerald-50 p-10 text-center ring-1 ring-emerald-200">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-800 text-white">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-bold text-emerald-950">
          Message Sent Successfully
        </h3>
        <p className="mt-3 text-sm text-ink-600">
          Thank you for reaching out. We will respond to your enquiry within one
          working day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-emerald-950">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={cn(
              "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-700",
              errors.name ? "border-red-400" : "border-cream-400",
            )}
            placeholder="Enter your full name"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-emerald-950">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={cn(
              "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-700",
              errors.email ? "border-red-400" : "border-cream-400",
            )}
            placeholder="your.email@example.com"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-emerald-950">
            Phone <span className="text-tan-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="mt-2 w-full rounded-xl border border-cream-400 bg-white px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-700"
            placeholder="0300 123 4567"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-emerald-950">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            className="mt-2 w-full appearance-none rounded-xl border border-cream-400 bg-white px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-700"
          >
            <option value="general">General Enquiry</option>
            <option value="admissions">Admissions</option>
            <option value="welfare">Student Welfare</option>
            <option value="fees">Fees & Scholarships</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-emerald-950">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(
            "mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-700",
            errors.message ? "border-red-400" : "border-cream-400",
          )}
          placeholder="How can we help?"
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-800 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 sm:w-auto"
        >
          Send Message
        </button>
        <p className="mt-3 text-xs text-tan-600">
          This is a demo form. No message is actually sent.
        </p>
      </div>
    </form>
  );
}