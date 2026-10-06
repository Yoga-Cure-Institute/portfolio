"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiArrowRight, FiCheck, FiLoader, FiAlertCircle } from "react-icons/fi";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name must be 80 characters or less.")
    .regex(/^[a-zA-ZÀ-ÿ\s.'-]+$/, "Please enter a valid name."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email must be 150 characters or less."),

  phone: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^[+]?[0-9\s()-]{8,18}$/.test(value),
      "Please enter a valid phone number.",
    ),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(120, "Subject must be 120 characters or less."),

  message: z
    .string()
    .trim()
    .min(20, "Message must contain at least 20 characters.")
    .max(3000, "Message must be 3000 characters or less."),

  consent: z
    .boolean()
    .refine((value) => value === true, "Please agree to be contacted."),

  faxNumber: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-2 flex items-center gap-1.5 text-[9px] leading-relaxed text-[#A23C2C]">
      <FiAlertCircle size={11} />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
      faxNumber: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "We could not send your message. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your message has been sent successfully. We will get back to you shortly.",
      });

      reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-7 mt-9"
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="new-password"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("faxNumber")}
      />

      {/* NAME + EMAIL */}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <div
            className={`border-b transition-colors ${
              errors.name
                ? "border-[#A23C2C]"
                : "border-[#292725]/20 focus-within:border-[#6B3020]"
            }`}
          >
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your Name *"
              maxLength={80}
              disabled={isSubmitting}
              {...register("name")}
              className="w-full bg-transparent pb-3 text-16px] text-[#292725] outline-none placeholder:text-[#999188] disabled:opacity-50"
            />
          </div>

          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <div
            className={`border-b transition-colors ${
              errors.email
                ? "border-[#A23C2C]"
                : "border-[#292725]/20 focus-within:border-[#6B3020]"
            }`}
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email Address *"
              maxLength={150}
              disabled={isSubmitting}
              {...register("email")}
              className="w-full bg-transparent pb-3 text-16px] text-[#292725] outline-none placeholder:text-[#999188] disabled:opacity-50"
            />
          </div>

          <FieldError message={errors.email?.message} />
        </div>
      </div>

      {/* PHONE + SUBJECT */}
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <div
            className={`border-b transition-colors ${
              errors.phone
                ? "border-[#A23C2C]"
                : "border-[#292725]/20 focus-within:border-[#6B3020]"
            }`}
          >
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone Number"
              maxLength={18}
              disabled={isSubmitting}
              {...register("phone")}
              className="w-full bg-transparent pb-3 text-16px] text-[#292725] outline-none placeholder:text-[#999188] disabled:opacity-50"
            />
          </div>

          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <div
            className={`border-b transition-colors ${
              errors.subject
                ? "border-[#A23C2C]"
                : "border-[#292725]/20 focus-within:border-[#6B3020]"
            }`}
          >
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="Subject *"
              maxLength={120}
              disabled={isSubmitting}
              {...register("subject")}
              className="w-full bg-transparent pb-3 text-16px] text-[#292725] outline-none placeholder:text-[#999188] disabled:opacity-50"
            />
          </div>

          <FieldError message={errors.subject?.message} />
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <div
          className={`border-b transition-colors ${
            errors.message
              ? "border-[#A23C2C]"
              : "border-[#292725]/20 focus-within:border-[#6B3020]"
          }`}
        >
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>

          <textarea
            id="message"
            rows={5}
            placeholder="Your Message *"
            maxLength={3000}
            disabled={isSubmitting}
            {...register("message")}
            className="w-full resize-none bg-transparent pb-3 text-16px] leading-[1.7] text-[#292725] outline-none placeholder:text-[#999188] disabled:opacity-50"
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <FieldError message={errors.message?.message} />

          <p className="ml-auto mt-2 shrink-0 text-[10px] text-[#999188]">
            Max 3000 characters
          </p>
        </div>
      </div>

      {/* CONSENT */}
      <div>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            disabled={isSubmitting}
            {...register("consent")}
            className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#6B3020]"
          />

          <span className="text-16px] leading-[1.5] text-[#716A62]">
            I agree to be contacted by Yoga Cure Institute regarding my enquiry.
          </span>
        </label>

        <FieldError message={errors.consent?.message} />
      </div>

      {/* STATUS */}
      {status && (
        <div
          role="alert"
          className={`flex items-start gap-2 border px-4 py-3 text-[10px] leading-[1.6] ${
            status.type === "success"
              ? "border-[#6D8A64]/25 bg-[#E7EEE2] text-[#48613F]"
              : "border-[#A23C2C]/20 bg-[#F5E4DF] text-[#8A3428]"
          }`}
        >
          {status.type === "success" ? (
            <FiCheck className="mt-0.5 shrink-0" size={14} />
          ) : (
            <FiAlertCircle className="mt-0.5 shrink-0" size={14} />
          )}

          <span>{status.message}</span>
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex min-w-[145px] items-center justify-center gap-3 bg-[#6B3020] px-6 py-3.5 text-16px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#FF6634] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            Sending
            <FiLoader size={13} className="animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <FiArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>
    </form>
  );
}
