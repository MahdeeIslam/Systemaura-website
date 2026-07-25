"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { INDUSTRY_OPTIONS, COMPANY } from "@/lib/content";
import { cn } from "@/lib/cn";

/* ============================================================================
   ContactForm — the booking form. Validates on the client and shows a calm
   success state. No backend in v1.
   TODO: connect to Calendly / CRM / email — replace the body of `submit()`
   below (the place that currently just logs and shows the success state).
   ============================================================================ */

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  industry: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border bg-ink px-4 py-3 text-paper placeholder:text-slate-soft/60 transition-colors focus:outline-none focus-visible:border-electric focus-visible:ring-2 focus-visible:ring-electric/40";

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) {
    errors.email = "We need an email to send your audit details.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email doesn't look quite right.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      // Clear a field's error as soon as the user starts fixing it.
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first invalid field for keyboard/screen-reader users.
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");

    // Booking requests are emailed via Web3Forms (free, no backend needed).
    // SETUP: create a free access key at https://web3forms.com using the
    // business email, then set it as the env var NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    // (locally in .env.local, and in your host's project settings). Every request
    // then lands in that inbox. Prefer Calendly / a CRM instead? Swap the fetch.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // No email service configured yet — log and confirm so the form still
      // works in development and preview.
      console.log("Audit request (email delivery not configured yet):", values);
      setStatus("idle");
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Free Operational Audit request",
          from_name: `${COMPANY.name} website`,
          replyto: values.email,
          name: values.name,
          business: values.business || "—",
          email: values.email,
          phone: values.phone || "—",
          industry: values.industry || "—",
          message: values.message || "—",
          botcheck: "", // honeypot
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (data.success) {
        setStatus("idle");
        setSubmitted(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-electric/30 bg-ink-card p-8 text-center sm:p-10"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-electric/15 text-electric ring-1 ring-inset ring-electric/30">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Thanks, {values.name.split(" ")[0] || "there"} — request received.
        </h3>
        <p className="mt-3 max-w-md text-slate-soft">
          We&rsquo;ll be in touch within one business day to book your free
          Operational Audit at a time that suits you. No pressure, no obligation.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-electric transition-colors hover:text-electric-soft"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          required
          value={values.name}
          onChange={update("name")}
          error={errors.name}
          autoComplete="name"
          placeholder="Jordan Smith"
        />
        <Field
          id="business"
          label="Business name"
          value={values.business}
          onChange={update("business")}
          error={errors.business}
          autoComplete="organization"
          placeholder="Smith & Co"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          autoComplete="email"
          placeholder="jordan@smithco.com.au"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={update("phone")}
          error={errors.phone}
          autoComplete="tel"
          placeholder="0400 000 000"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="industry" className="text-sm font-medium text-paper">
          Industry
        </label>
        <select
          id="industry"
          value={values.industry}
          onChange={update("industry")}
          className={cn(inputClass, "border-line")}
        >
          <option value="">Select your industry</option>
          {INDUSTRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-paper">
          What&rsquo;s slowing your business down?
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us a little about where time and money are leaking — we'll come prepared."
          className={cn(inputClass, "resize-y border-line")}
        />
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          withArrow={status !== "submitting"}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Book My Free Audit"}
        </Button>
        <p className="text-xs text-slate-soft">
          No obligation. We reply within one business day.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Sorry — something went wrong sending your request. Please email us
          directly at{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-medium underline">
            {COMPANY.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

/* ---- Small labelled input used throughout the form ---- */
interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  placeholder,
  autoComplete,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-paper">
        {label}
        {required && <span className="ml-0.5 text-copper">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(inputClass, error ? "border-red-400/70" : "border-line")}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
