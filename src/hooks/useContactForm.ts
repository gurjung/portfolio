"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { siteConfig } from "@/config";

export function useContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        siteConfig.emailService.serviceId,
        siteConfig.emailService.templateId,
        formRef.current,
        siteConfig.emailService.publicKey
      );
      toast.success("Email sent successfully! I will get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send email via EmailJS:", error);
      toast.error("Failed to send email. Please try again later or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formRef,
    isSubmitting,
    handleSubmit,
  };
}
