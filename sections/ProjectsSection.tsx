"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  LayoutDashboard,
  Phone,
  Wifi,
  X,
  Layers,
  Zap,
  Activity,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function ProjectImageCarousel({
  images,
  title,
  heightClassName = "h-48 sm:h-52",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  images: string[];
  title: string;
  heightClassName?: string;
  sizes?: string;
}) {
  const safeImages = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [safeImages.join("|")]);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [safeImages.length]);

  if (safeImages.length === 0) return null;
  const current = safeImages[index]!;

  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden bg-slate-900/80 ${heightClassName}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            src={`${basePath}/${current}`}
            alt={title}
            fill
            className="object-cover"
            sizes={sizes}
            priority={false}
          />
        </motion.div>
      </AnimatePresence>

      {safeImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/35 px-2 py-1 ring-1 ring-white/10">
          {safeImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    title: "Clementia",
    type: "Plateforme IA · Full-Stack",
    description:
      "Plateforme de supervision d'appels pilotée par l'IA : campagnes Inbound/Outbound, agents conversationnels (GPT-4), transcription temps réel (Whisper), analyse vocale (Parselmouth/Praat) et qualification automatique. Intégration LiveKit (VoIP/SIP), Calendly, stack React/TypeScript/Vite + FastAPI/PostgreSQL/Redis/Celery.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenAI (GPT-4, Whisper)",
      "LiveKit",
      "Celery",
      "Docker",
    ],
    features: [
      "Campagnes Inbound / Outbound",
      "Agents conversationnels (GPT-4)",
      "Transcription temps réel (Whisper)",
      "Analyse vocale (Parselmouth / Praat)",
      "Qualification automatique des appels",
      "Intégration LiveKit (VoIP / SIP)",
      "Intégration Calendly",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/CLEMENTIA" },
    icon: <Phone className="h-5 w-5 text-emerald-300" />,
    image: "clementia.png",
  },
  {
    title: "ORANGE-ADMIN",
    type: "Network Automation · Django",
    description:
      "Application conçue pour automatiser le traitement des dégradations réseau et détecter les clients en indisponibilité totale à partir des plateformes ZTE (NetNumen) et Huawei (iMaster NCE). Développée dans l'entreprise Orange Maroc, ce projet assure un traitement national sur tout le territoire marocain.",
    tech: [
      "Python",
      "Selenium",
      "PyAutoGUI",
      "Pandas",
      "NumPy",
      "Multiprocessing",
      "Threads",
      "Matplotlib",
      "Django",
      "AdminLTE",
    ],
    features: [
      "Collecte automatisée des données depuis iMaster NCE (ZIP → CSV) et NetNumen ZTE (CSV)",
      "Nettoyage, structuration et consolidation des données",
      "Optimisation des performances via multiprocessing et threads",
      "Génération de graphiques des situations critiques",
      "Génération automatique de rapports et exports CSV",
      "Traitement planifié toutes les 2 heures (actualisation continue)",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/orange-admin" },
    icon: <Wifi className="h-5 w-5 text-orange-300" />,
    images: ["orange1.png", "orange2.png", "orange3.png", "orange4.png"],
  },
  {
    title: "ALERTS-ORANGE",
    type: "Automatisation alertes · Flask",
    description:
      "Automatisation du traitement des alertes réseau en continu (Flask). Extraction des alertes depuis iMaster NCE et NetNumen ZTE, dashboards et carte du Maroc pour localiser les clients impactés. Développée chez Orange Maroc.",
    detailsDescription:
      "Cette application est dédiée à l'automatisation du traitement des alertes réseau générées en continu. Elle est construite avec Flask, pour une flexibilité de conception et une interface plus libre, et repose sur : Selenium et PyAutoGUI pour l'extraction automatisée des fichiers d'alertes (format XLSX) depuis \"iMaster NCE Network Management\" (Huawei) et l'application \"NetNumen ZTE\" ; Pandas et NumPy pour le traitement et la classification des alertes ; Matplotlib pour la visualisation des tendances et fréquences d'alerte ; Multiprocessing et threads pour améliorer les temps de réponse ; une interface développée avec Flask, permettant une architecture web souple adaptée aux besoins métier ; une exécution du traitement toutes les 10 minutes, pour une prise en charge quasi instantanée des alertes ; une visualisation via dashboards dynamiques et une carte géographique du Maroc localisant les clients impactés. Ce système renforce l'efficacité du SAV dans la gestion des incidents instantanés, tout en offrant un outil puissant pour la supervision technique à l'échelle nationale. Conçue dans le cadre d'un stage Data Engineering Analyst chez Orange Maroc (mars - août 2025).",
    tech: [
      "Python",
      "Flask",
      "Selenium",
      "PyAutoGUI",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Folium",
      "Multiprocessing",
      "Threads",
    ],
    features: [
      "Extraction automatisée des alertes (XLSX) depuis iMaster NCE et NetNumen ZTE",
      "Traitement et classification des alertes (Pandas, NumPy)",
      "Visualisation des tendances et fréquences (Matplotlib)",
      "Multiprocessing et threads pour améliorer les temps de réponse",
      "Exécution du traitement toutes les 10 minutes",
      "Dashboards dynamiques et carte géographique du Maroc (Folium)",
      "Localisation des clients impactés en temps réel",
      "Renforcement du SAV et supervision technique à l'échelle nationale",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/Alerts-ORANGE" },
    icon: <Bell className="h-5 w-5 text-orange-300" />,
    images: ["alert1.png", "alert2.png", "alert3.png"],
  },
  {
    title: "UFC DETECTION",
    type: "Computer Vision · Freelance",
    description:
      "Système intelligent d'analyse des combats UFC par vision par ordinateur, en remplacement des observations humaines souvent imprécises et subjectives. Détection et suivi des combattants, extraction des points clés biomécaniques et analyse des positions dans l'octogone. Développé pour Ellendir (Paris, à distance).",
    tech: [
      "Python",
      "YOLOv5",
      "YOLOv8-pose",
      "Roboflow",
      "Computer Vision",
      "Pose estimation",
      "Object tracking",
    ],
    features: [
      "Détection des combattants via Roboflow et YOLOv5",
      "Suivi personnalisé d'ID (Tracking)",
      "Extraction des points clés biomécaniques avec YOLOv8-pose",
      "Analyse des positions des combattants dans l'octogone",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/UFC_Computer_Vision" },
    icon: <Activity className="h-5 w-5 text-rose-400" />,
    image: "ufc1.png",
  },
  {
    title: "AIN-SBAA Admin",
    type: "Gestion administrative · Laravel",
    description:
      "Plateforme web de gestion administrative pour l'Arrondissement AIN-SBAA : employés, articles, mobilier, demandes et audits. Authentification sécurisée, rôles et permissions, tableau de bord et traçabilité complète des modifications.",
    tech: [
      "Laravel 9",
      "PHP 8",
      "MySQL",
      "AdminLTE 3",
      "Bootstrap 5",
      "Laravel Fortify",
      "Spatie Permission",
      "Vite",
      "Blade",
    ],
    features: [
      "Gestion des employés (matricule, CIN, grade, affectation)",
      "Gestion des articles et inventaire",
      "Gestion du mobilier (localisation et état)",
      "Traitement et suivi des demandes administratives",
      "Système d'audit et historique des modifications",
      "Authentification sécurisée avec rôles et permissions",
      "Dashboard avec statistiques et accès rapide",
      "Localisation de l'arrondissement (géolocalisation)",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/EMPLOYEES_APP" },
    icon: <LayoutDashboard className="h-5 w-5 text-blue-400" />,
    images: ["laravel1.png", "laravel2.png", "laravel3.png"],
  },
];

type Project = (typeof projects)[number];

export function ProjectsSection() {
  const [detailsProject, setDetailsProject] = useState<Project | null>(null);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailsProject(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group glass-panel flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
          >
            {("images" in project && project.images?.length) ||
            ("image" in project && project.image) ? (
              <ProjectImageCarousel
                images={
                  ("images" in project && project.images?.length
                    ? project.images
                    : ("image" in project && project.image
                        ? [project.image]
                        : [])) as string[]
                }
                title={project.title}
              />
            ) : null}
            <div className="flex flex-1 flex-col p-4">
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

              <div className="mt-auto flex gap-2">
                <button
                  type="button"
                  onClick={() => setDetailsProject(project)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 text-[0.72rem] font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-indigo-400/80"
                >
                  Détails
                  <Layers className="h-3 w-3" />
                </button>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 text-[0.72rem] font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-emerald-400/80"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {detailsProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setDetailsProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-panel relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setDetailsProject(null)}
                className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 hover:bg-slate-800/80 hover:text-slate-100"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[90vh] overflow-y-auto p-6 pt-10">
                {("images" in detailsProject && detailsProject.images?.length) ||
                ("image" in detailsProject && detailsProject.image) ? (
                  <div className="mb-5">
                    <ProjectImageCarousel
                      images={
                        ("images" in detailsProject && detailsProject.images?.length
                          ? detailsProject.images
                          : ("image" in detailsProject && detailsProject.image
                              ? [detailsProject.image]
                              : [])) as string[]
                      }
                      title={detailsProject.title}
                      heightClassName="h-64 sm:h-72"
                      sizes="(max-width: 768px) 100vw, 520px"
                    />
                  </div>
                ) : null}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-slate-700/80">
                    {detailsProject.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {detailsProject.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {detailsProject.type}
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-slate-300">
                  {"detailsDescription" in detailsProject &&
                  detailsProject.detailsDescription
                    ? detailsProject.detailsDescription
                    : detailsProject.description}
                </p>

                <div className="mb-5">
                  <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Zap className="h-4 w-4 text-amber-400/80" />
                    Fonctionnalités
                  </h4>
                  <ul className="space-y-1.5">
                    {"features" in detailsProject &&
                      detailsProject.features?.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
                          {f}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Layers className="h-4 w-4 text-sky-400/80" />
                    Stack technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {detailsProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-slate-700/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={detailsProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900/90 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-emerald-400/80"
                >
                  Voir sur GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

