"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, FileText, Menu, X } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SECTIONS = [
  { id: "hero", label: "Accueil" },
  { id: "formation", label: "Formation" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.4 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-40 border-b border-slate-800/60 backdrop-blur-xl transition-colors ${
        scrolled ? "bg-slate-950/80" : "bg-slate-950/40"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleClick("hero")}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-50"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 text-xs font-bold text-slate-950 shadow-lg shadow-indigo-500/40">
            ME
          </span>
          <span className="hidden text-sm md:inline">
            Mehdi Ennaciri
            <span className="ml-1 text-xs font-normal text-slate-400">
              / Software Engineer
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-2 py-1 text-xs text-slate-300 shadow-lg shadow-slate-950/50 md:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleClick(section.id)}
              className={`relative rounded-full px-3 py-1 transition-colors ${
                active === section.id
                  ? "text-slate-50"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {active === section.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/90 to-emerald-400/90"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-indigo-500/50 hover:bg-slate-900 md:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Voir le CV
          </a>
          <button
            type="button"
            onClick={() => handleClick("contact")}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-indigo-500/40 hover:brightness-110 md:inline-flex"
          >
            Me contacter
            <ArrowUpRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 p-1.5 text-slate-200 shadow-lg shadow-slate-950/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir la navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 py-3 md:hidden">
          <div className="container-xl flex flex-col gap-1 text-sm text-slate-100">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleClick(section.id)}
                className={`flex items-center justify-between rounded-lg px-2 py-1.5 text-left ${
                  active === section.id
                    ? "bg-gradient-to-r from-indigo-500/20 to-emerald-400/20 text-slate-50"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                <span>{section.label}</span>
                {active === section.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            ))}
            <a
              href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-slate-300 hover:bg-slate-900"
              onClick={() => setOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Voir le CV
            </a>
            <a
              href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
              download="CV_Mehdi_ENNACIRI_FR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-slate-300 hover:bg-slate-900"
              onClick={() => setOpen(false)}
            >
              <FileDown className="h-4 w-4" />
              Télécharger mon CV
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

