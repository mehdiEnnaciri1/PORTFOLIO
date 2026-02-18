"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TELEXCEL",
    role: "Ingénieur informatique",
    period: "sept. 2025 - janv. 2026 · 5 mois",
    location: "Casablanca, Casablanca-Settat, Maroc · Hybride",
    type: "Temps plein",
    description:
      "En tant qu'Ingénieur Informatique chez TELEXCEL, j'interviens sur plusieurs applications web full-stack dans un environnement orienté production, maintenance et évolution continue.",
    responsibilities: [
      "Analyse approfondie des projets existants (backend, frontend, base de données, architecture globale) pour comprendre le fonctionnement métier et technique.",
      "Maintenance, correction et stabilisation d'applications web existantes (bug fixing, refactoring, optimisation).",
      "Évolution fonctionnelle et technique de plateformes déjà déployées.",
      "Conception et développement backend avec FastAPI (Python) : APIs REST, logique métier, modèles de données.",
      "Développement et maintenance frontend avec React, TypeScript, TailwindCSS.",
      "Intégration et gestion de services avancés : LiveKit (RTC / téléphonie), OpenAI, MinIO / S3, PostgreSQL, Redis, Celery.",
      "Gestion de workers asynchrones et de traitements temps réel.",
      "Collaboration via GitLab : gestion des tâches, issues, branches, merge requests et code reviews.",
      "Veille à la qualité du code, la stabilité et la sécurité des applications.",
      "Maintenance simultanée de plusieurs applications web en environnement de production.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "GitLab",
      "LiveKit",
      "OpenAI",
      "Auth0",
      "MinIO / S3",
    ],
  },
  {
    company: "Orange Maroc",
    role: "Data Engineering Analyst",
    period: "mars 2025 - août 2025 · 6 mois",
    location: "Casablanca, Casablanca-Settat, Maroc · Sur site",
    type: "Stage",
    description:
      "J'ai conçu et développé deux plateformes web innovantes, ORANGE-ADMIN (Django) et ALERTS-ORANGE (Flask), destinées à automatiser la supervision des dégradations réseau, la détection des clients hors service, et le traitement des alertes techniques.",
    responsibilities: [
      "Développement back-end en Python (Django & Flask) pour automatiser l'extraction, le traitement (via Pandas) et la visualisation des données réseau issues de Huawei et ZTE.",
      "Intégration de scripts Selenium et PyAutoGUI pour automatiser les connexions aux plateformes réseau et collecter les fichiers CSV/XLSX.",
      "Génération de dashboards dynamiques, graphiques (Matplotlib) et cartes interactives (Folium) pour localiser les incidents réseau en temps réel.",
      "Mise en place de traitements automatiques (toutes les 10 min / 2h) avec multithreading, sans base de données.",
      "Application de la méthode SCRUM pour la planification et le suivi du projet en autonomie.",
    ],
    tech: [
      "Python",
      "Django",
      "Flask",
      "Pandas",
      "Selenium",
      "PyAutoGUI",
      "Matplotlib",
      "Folium",
      "Multithreading",
      "SCRUM",
    ],
    results: [
      "Réduction de 70% du temps de traitement manuel des alertes réseau.",
      "Amélioration de la réactivité opérationnelle du SAV grâce à une visualisation instantanée des clients impactés.",
      "Outil prêt à être répliqué pour d'autres filiales d'Orange à l'international.",
    ],
  },
  {
    company: "Ellendir",
    role: "Developer in Computer Vision",
    period: "mars 2025 - avr. 2025 · 2 mois",
    location: "Paris, France · À distance",
    type: "Freelance",
    description:
      "Développement d'un système de vision par ordinateur pour analyser des combats UFC.",
    responsibilities: [
      "Détection de combattants via Roboflow et YOLOv5.",
      "Suivi personnalisé d'ID (Tracking).",
      "Extraction des points clés biomécaniques avec YOLOv8-pose.",
      "Analyse des positions des combattants dans l'octogone.",
    ],
    tech: [
      "Python",
      "Computer Vision",
      "YOLOv5",
      "YOLOv8-pose",
      "Roboflow",
      "Object Tracking",
      "Pose Estimation",
    ],
  },
  {
    company: "Arrondissement ain-sbaa",
    role: "Stagiaire",
    period: "avr. 2023 - juin 2023 · 3 mois",
    location: "Casablanca-Settat, Maroc",
    type: "Stage",
    description:
      "J'ai participé à la création d'une application Web avec le framework Laravel en PHP, renforçant ainsi mes compétences pratiques. Ma contribution a été significative pour la mise en place de solutions fonctionnelles en gestion des ressources humaines, du stock et des mobiliers.",
    tech: [
      "Laravel",
      "PHP",
      "SQL",
      "XAMPP",
      "Travail d'équipe",
      "Gestion de projet",
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className="space-y-5 md:space-y-6">
      {experiences.map((exp, index) => (
        <motion.article
          key={exp.company}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="glass-panel flex flex-col rounded-2xl p-4 md:flex-row md:gap-6 md:p-5"
        >
          <div className="mb-3 flex items-start gap-3 md:mb-0 md:w-1/3 md:flex-col md:gap-2">
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-slate-700">
              <Briefcase className="h-4 w-4 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                {exp.company}
              </h3>
              <p className="text-xs font-medium text-slate-400 md:text-sm">
                {exp.role}
              </p>
              {exp.type && (
                <p className="mt-0.5 text-[0.7rem] text-slate-400">{exp.type}</p>
              )}
              <p className="mt-1 text-[0.7rem] text-slate-500">{exp.period}</p>
              {exp.location && (
                <p className="mt-0.5 text-[0.7rem] text-slate-500">
                  {exp.location}
                </p>
              )}
            </div>
          </div>

          <div className="flex-1 space-y-3 text-xs text-slate-300 md:text-sm">
            {exp.description && <p className="text-sm md:text-base">{exp.description}</p>}
            {exp.responsibilities && (
              <ul className="space-y-1.5 pl-4 text-[0.78rem] text-slate-300 md:text-[0.8rem]">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="list-disc">
                    {r}
                  </li>
                ))}
              </ul>
            )}
            {exp.results && exp.results.length > 0 && (
              <ul className="mt-1 list-disc space-y-1 pl-4 text-[0.78rem] text-slate-300 md:text-[0.8rem]">
                {exp.results.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            )}
            {exp.tech && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.7rem] font-medium text-slate-200 ring-1 ring-slate-700/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

