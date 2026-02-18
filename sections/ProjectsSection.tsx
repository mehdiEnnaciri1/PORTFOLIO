"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Classification multimodale IA",
    type: "Computer Vision & NLP",
    description:
      "Système de classification combinant vision par ordinateur et texte pour analyser des documents et signaux complexes.",
    tech: ["Python", "Deep Learning", "Computer Vision", "NLP", "MLOps"],
    links: { demo: "#", github: "#" },
    icon: <Sparkles className="h-5 w-5 text-emerald-300" />,
  },
  {
    title: "Data Warehouse & pipelines ETL",
    type: "Data Engineering",
    description:
      "Architecture data pour centraliser, transformer et exposer des données métiers pour reporting et IA.",
    tech: ["Python", "SQL", "ETL", "DWH", "Automatisation"],
    links: { demo: "#", github: "#" },
    icon: <Database className="h-5 w-5 text-indigo-300" />,
  },
  {
    title: "Applications web full-stack",
    type: "Web Apps",
    description:
      "Applications web modernes orientées produit, avec dashboards, APIs sécurisées et intégration de modèles IA.",
    tech: ["React", "Next.js", "Django / FastAPI", "Tailwind CSS"],
    links: { demo: "#", github: "#" },
    icon: <Code2 className="h-5 w-5 text-sky-300" />,
  },
];

export function ProjectsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="group glass-panel flex flex-col rounded-2xl p-4 transition-transform hover:-translate-y-1"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-slate-700/80">
                {project.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {project.type}
                </p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-xs leading-relaxed text-slate-300 md:text-sm">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.7rem] font-medium text-slate-200 ring-1 ring-slate-700/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-2 text-[0.72rem]">
            <a
              href={project.links.demo}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-indigo-400/80"
            >
              Demo
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={project.links.github}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-emerald-400/80"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

