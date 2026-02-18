"use client";

import { FormEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, Send, CheckCircle2, AlertCircle, Github, Instagram, Linkedin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

const isEmailJSConfigured = () =>
  SERVICE_ID.length > 0 &&
  TEMPLATE_ID.length > 0 &&
  PUBLIC_KEY.length > 0 &&
  !SERVICE_ID.startsWith("your_") &&
  !TEMPLATE_ID.startsWith("your_") &&
  !PUBLIC_KEY.startsWith("your_");

const CONTACT_EMAIL = "mahdiennaciri9@gmail.com";
const CONTACT_PHONE = "+212 607996151";
const CONTACT_PHONE_RAW = "212607996151"; // pour tel: et wa.me (sans espaces)

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [configReady, setConfigReady] = useState(false);

  useEffect(() => {
    if (isEmailJSConfigured()) {
      emailjs.init({ publicKey: PUBLIC_KEY });
      setConfigReady(true);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!isEmailJSConfigured()) {
      setStatus("error");
      setErrorMessage(
        "L'envoi par formulaire n'est pas configuré. Utilisez le lien ci-dessous pour m'envoyer un email directement."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus("error");
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'envoi.";
      setErrorMessage(
        `${message} Vous pouvez m'écrire directement à ${CONTACT_EMAIL}.`
      );
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-start">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-panel space-y-4 rounded-2xl p-4 md:p-6"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-200"
            >
              Nom
            </label>
            <input
              id="name"
              name="user_name"
              required
              placeholder="Votre nom complet"
              className="h-9 w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-200"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="vous@exemple.com"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-950/80 pl-8 pr-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-medium text-slate-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Parlez-moi de votre projet, de votre besoin ou de votre équipe..."
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer le message
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300 ring-1 ring-emerald-500/40">
            <CheckCircle2 className="h-4 w-4" />
            <p>Merci ! Votre message a bien été envoyé.</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col gap-2 rounded-xl bg-red-500/10 px-3 py-2 text-xs text-red-300 ring-1 ring-red-500/40">
            <div className="flex items-start gap-2">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>{errorMessage}</p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 font-medium text-emerald-300 hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              Envoyer un email à {CONTACT_EMAIL}
            </a>
          </div>
        )}

        {!configReady && status === "idle" && (
          <p className="text-[0.7rem] text-slate-500">
            Ou envoyez directement un email à{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-indigo-400 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        )}

        <p className="text-[0.68rem] text-slate-500">
          En envoyant ce formulaire, vous acceptez que vos informations soient
          utilisées pour vous répondre.
        </p>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-4"
      >
        <div className="glass-panel rounded-2xl p-4 md:p-5">
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            Contact direct
          </h3>
          <p className="mt-2 text-xs text-slate-300 md:text-sm">
            Vous pouvez également me contacter par email ou téléphone :
          </p>
          <p className="mt-2 text-xs font-medium text-slate-100 md:text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-indigo-300 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-3 text-xs font-medium text-slate-100 md:text-sm">
            <span className="text-slate-400">Téléphone :</span>{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="inline-flex items-center gap-1 text-indigo-300 hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT_PHONE}
            </a>
          </p>
          <p className="mt-1 text-[0.7rem] text-slate-400">
            Appels ou{" "}
            <a
              href={`https://wa.me/${CONTACT_PHONE_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>

        <div className="glass-panel flex items-center justify-between gap-3 rounded-2xl p-4 md:p-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              Réseaux
            </p>
            <p className="mt-1 text-sm text-slate-100">
              Suivez mes travaux et contributions open-source.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 ring-1 ring-slate-700/80 hover:ring-sky-400/80"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/mehdi_ennaciri1?igsh=MTltcDVtZXYzNmtvag%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 ring-1 ring-slate-700/80 hover:ring-pink-500/80"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 ring-1 ring-slate-700/80 hover:ring-emerald-400/80"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

