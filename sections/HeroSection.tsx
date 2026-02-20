"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, FileText, Github, Linkedin } from "lucide-react";

const gradientText =
  "bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-20 pt-16 sm:pt-20 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 gradient-ring opacity-60" />

      <div className="container-xl relative">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 shadow-lg shadow-slate-950/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Disponible immédiatement · Open to opportunities</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)] md:items-center">
          <div className="space-y-7">
            <div className="flex items-start gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900 shadow-lg shadow-slate-950/70 sm:h-24 sm:w-24 md:h-28 md:w-28"
              >
                <Image
                  src={`${basePath}/mehdi.jfif`}
                  alt="Photo de Mehdi Ennaciri"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <div className="space-y-3 flex-1">

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
                >
                  <span className="block">Mehdi&nbsp;Ennaciri</span>
                  <span className={`mt-2 block text-xl sm:text-2xl ${gradientText}`}>
                    PhD Student | Computer Engineer & Full-Stack Developer
                  </span>
                </motion.h1>
              </div>
            </div>

            <div className="w-full max-w-full space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                I am a Computer Engineering graduate with a Bachelor&apos;s degree in Mathematics
                and Computer Science from Ben M&apos;sik Faculty of Sciences, Casablanca, and a
                Specialized Master&apos;s degree in Computer Engineering from Abdelmalek Essaadi
                University, Tetouan. I am currently a PhD student in Artificial Intelligence,
                with a research focus on causality and causal machine learning, particularly the
                integration of large language models and formal causal inference for discovering
                actionable causal rules from real-world data.
              </p>
              <p>
                I specialize in full-stack development, AI, and data engineering, with strong
                expertise in Python (FastAPI, Django, Flask), React.js, TypeScript, Docker,
                PostgreSQL, Redis, Celery, real-time/asynchronous systems, and AI/ML (CNN,
                LSTM, TensorFlow, PyTorch, computer vision). I also have experience in DevOps
                practices, testing, refactoring, and performance optimization.
              </p>
              <p>
                Motivated by continuous learning and innovation, I am open to research
                collaborations and industry opportunities at the intersection of AI, causality,
                and data-intensive systems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 hover:brightness-110"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/70 hover:bg-slate-900"
              >
                Me contacter
              </button>

              <a
                href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/70 hover:bg-slate-900 hover:border-indigo-500/50"
              >
                <FileText className="h-4 w-4" />
                Voir le CV
              </a>
              <a
                href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
                download="CV_Mehdi_ENNACIRI_FR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/70 hover:bg-slate-900 hover:border-indigo-500/50"
              >
                <FileDown className="h-4 w-4" />
                Télécharger mon CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-slate-100 hover:border-indigo-500/70 hover:bg-slate-900"
              >
                <Linkedin className="h-4 w-4 text-sky-400" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-slate-100 hover:border-emerald-400/70 hover:bg-slate-900"
              >
                <Github className="h-4 w-4 text-slate-200" />
                <span className="text-xs font-medium">GitHub</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="glass-panel relative overflow-hidden rounded-3xl px-6 py-7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),transparent_55%)] opacity-70" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium text-slate-200">
                    Research Focus: Causal ML & LLMs
                  </span>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-emerald-300 ring-1 ring-emerald-400/40">
                    PhD Student
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl bg-slate-950/80 p-3 ring-1 ring-slate-700/70">
                    <p className="mb-1 text-[0.7rem] font-medium text-slate-400">
                      Full-Stack
                    </p>
                    <p className="text-[0.78rem] text-slate-100">
                      Python, FastAPI, Django, Flask, React.js, TypeScript, PostgreSQL, Redis.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-3 ring-1 ring-slate-700/70">
                    <p className="mb-1 text-[0.7rem] font-medium text-slate-400">
                      AI & ML
                    </p>
                    <p className="text-[0.78rem] text-slate-100">
                      Causal ML, LLMs, TensorFlow, PyTorch, CNN, LSTM, Computer Vision.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-3 ring-1 ring-slate-700/70">
                    <p className="mb-1 text-[0.7rem] font-medium text-slate-400">
                      DevOps & Systems
                    </p>
                    <p className="text-[0.78rem] text-slate-100">
                      Docker, Celery, real-time/async systems, testing, optimization.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-3 ring-1 ring-slate-700/70">
                    <p className="mb-1 text-[0.7rem] font-medium text-slate-400">
                      Research & Innovation
                    </p>
                    <p className="text-[0.78rem] text-slate-100">
                      Open to collaborations in AI, causality, and data-intensive systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

