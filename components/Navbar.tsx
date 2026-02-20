"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px 0px 0px" }
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-slate-800/40 bg-slate-950/50 backdrop-blur-md"
      }`}
    >
      <div className="container-xl flex h-14 items-center justify-between gap-4 sm:h-16">
        {/* Logo / Name */}
        <button
          type="button"
          onClick={() => handleClick("hero")}
          className="flex shrink-0 items-center gap-2.5 rounded-lg py-1.5 pr-2 transition-colors hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
          aria-label="Retour à l'accueil"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 text-sm font-bold text-white shadow-md shadow-indigo-500/30">
            ME
          </span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:inline">
            Mehdi Ennaciri
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden flex-1 justify-center lg:flex" aria-label="Navigation principale">
          <ul className="flex items-center gap-0.5 rounded-full bg-slate-900/70 p-1 ring-1 ring-slate-700/60">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => handleClick(section.id)}
                  className={`relative rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    active === section.id ? "text-slate-50" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {active === section.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500/90"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://www.linkedin.com/in/mehdi-ennaciri-099a4925b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 text-slate-400 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/mehdiEnnaciri1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 text-slate-400 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <span className="mx-1 h-4 w-px bg-slate-700" aria-hidden="true" />
          <a
            href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/50 px-3 py-2 text-[0.8125rem] font-medium text-slate-300 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <FileText className="h-3.5 w-3.5" />
            CV
          </a>
          <button
            type="button"
            onClick={() => handleClick("contact")}
            className="flex items-center gap-1.5 rounded-lg border border-indigo-500/50 bg-gradient-to-r from-indigo-500 to-emerald-500 px-4 py-2 text-[0.8125rem] font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Me contacter
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile: menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://www.linkedin.com/in/mehdi-ennaciri-099a4925b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/mehdiEnnaciri1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-300"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/50 text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-500/10"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-xl py-4" aria-label="Navigation mobile">
              <ul className="space-y-0.5">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => handleClick(section.id)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                        active === section.id
                          ? "bg-indigo-500/15 text-indigo-300"
                          : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-100"
                      }`}
                    >
                      {section.label}
                      {active === section.id && (
                        <span className="h-2 w-2 rounded-full bg-indigo-400" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                <a
                  href={`${basePath}/CV_Mehdi_ENNACIRI_FR.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-slate-100"
                >
                  <FileText className="h-4 w-4" />
                  Télécharger le CV
                </a>
                <button
                  type="button"
                  onClick={() => handleClick("contact")}
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/50 bg-gradient-to-r from-indigo-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30"
                >
                  Me contacter
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
