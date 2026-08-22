"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, GitBranch, Layers3, Sparkles } from "lucide-react";

const groups = [
  {
    icon: <Layers3 className="h-4 w-4 text-indigo-300" />,
    title: "Langages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    icon: <Cpu className="h-4 w-4 text-emerald-300" />,
    title: "Frameworks & Back-End",
    items: ["Django", "FastAPI", "Flask", "Laravel", "Node.js / Express", "REST / GraphQL"],
  },
  {
    icon: <Layers3 className="h-4 w-4 text-sky-300" />,
    title: "Front-End",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: <GitBranch className="h-4 w-4 text-sky-300" />,
    title: "Outils & DevOps",
    items: ["Git / GitHub / GitLab", "Docker", "CI/CD (GitLab)", "Tests unitaires", "Monitoring & Logging"],
  },
];

const iaDataScienceSubsections = [
  {
    label: "Frameworks Core",
    items: ["PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    label: "Deep Learning",
    items: ["CNN", "RNN", "LSTM"],
  },
  {
    label: "Computer Vision",
    items: ["OpenCV", "YOLOv5/v8", "face_recognition"],
  },
  {
    label: "Spécialisation Recherche",
    items: ["Causal Machine Learning"],
  },
  {
    label: "Data & Visu",
    items: ["Pandas", "NumPy", "Matplotlib", "Folium"],
  },
  {
    label: "Data Engineering",
    items: ["ETL (Talend)", "Modélisation multidimensionnelle", "Data Warehouse", "Power BI"],
  },
];

const softSkills = [
  {
    title: "Code Quality",
    description:
      "Expertise en Refactoring, Tests unitaires et optimisation de performance.",
  },
  {
    title: "Capacité d'adaptation",
    description:
      "Polyvalence démontrée par la transition réussie entre le Développement Web Full-Stack, la Vision par ordinateur (Freelance UFC) et le Data Engineering.",
  },
  {
    title: "Autonomie en environnement Agile (Scrum)",
    description:
      "Capacité à gérer des projets de manière autonome, notamment lors de la conception des plateformes ORANGE-ADMIN et ALERTS-ORANGE.",
  },
];

export function SkillsSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel flex min-w-0 flex-col overflow-hidden rounded-2xl p-4 md:p-5"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-slate-700">
                {group.icon}
              </div>
              <h3 className="min-w-0 truncate text-sm font-semibold text-slate-50 md:text-base">
                {group.title}
              </h3>
            </div>

            <div className="mt-3 flex min-w-0 flex-wrap gap-2 overflow-hidden">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200 ring-1 ring-slate-700/80 hover:ring-indigo-500/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-2xl p-4 md:p-6"
      >
        <div className="mb-5 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-slate-700">
            <Brain className="h-4 w-4 text-indigo-300" />
          </div>
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            IA & Data Science
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {iaDataScienceSubsections.map((subsection) => (
            <div
              key={subsection.label}
              className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-3"
            >
              <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-wider text-indigo-400">
                {subsection.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {subsection.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] font-medium text-slate-200 ring-1 ring-slate-700/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-2xl p-4 md:p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-slate-700">
            <Sparkles className="h-4 w-4 text-amber-300" />
          </div>
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            Soft Skills & Expertise
          </h3>
        </div>
        <ul className="space-y-4">
          {softSkills.map((item, index) => (
            <li key={item.title} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
              <div>
                <p className="text-sm font-medium text-slate-100 md:text-base">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-300 md:text-sm">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

