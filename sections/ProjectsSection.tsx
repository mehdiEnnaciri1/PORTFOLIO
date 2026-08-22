"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  Bot,
  LayoutDashboard,
  Phone,
  Smartphone,
  Sparkles,
  Users,
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
    title: "DONNA",
    type: "Assistant IA Desktop · Windows",
    description:
      "Assistant IA résident pour Windows 11 (Google Gemini / Groq) : injecte l'IA depuis n'importe quel champ de saisie de n'importe quelle application, sans jamais changer de fenêtre ni voler le focus. Se déclenche par une simple formule tapée au clavier et transforme ou génère du texte en ~1 seconde.",
    detailsDescription:
      "DONNA tourne en arrière-plan et permet d'appeler l'IA depuis n'importe quel champ de saisie (mail, éditeur, navigateur, bloc-notes...) via une formule tapée au clavier : <texte> donna <instruction> suivi d'un double espace. DONNA envoie le texte à l'IA, efface la formule tapée et injecte la réponse à sa place, en ~1 seconde. Elle choisit automatiquement entre 3 modes selon le contexte : génération pure (aucune source), transformation d'un texte tapé (injection Unicode, fonctionne partout), ou lecture du champ via UI Automation quand rien n'a été tapé avant la formule (avec repli automatique et transparent sur la génération pure si la lecture échoue). L'écriture dispose elle aussi d'un repli : si l'application refuse l'écriture directe (WhatsApp Web, Word...), DONNA calcule le nombre exact de Backspace à envoyer puis réinjecte la réponse par frappe clavier. Une fonction \"Annuler la dernière transformation\" permet de restaurer le texte d'origine en un clic. Développée en C# (.NET 10, WinForms), publiée en exécutable unique self-contained avec installeur Inno Setup, testée avec xUnit. Les clés API (Gemini et/ou Groq, détectées automatiquement) sont chiffrées via DPAPI et liées au compte Windows — jamais stockées en clair, et aucune journalisation par défaut.",
    tech: [
      "C#",
      ".NET 10",
      "WinForms",
      "Google Gemini API",
      "Groq API",
      "UI Automation (COM)",
      "DPAPI",
      "xUnit",
      "Inno Setup",
    ],
    features: [
      "Déclenchement par formule clavier (\"donna\") dans n'importe quelle application, sans changer de fenêtre ni voler le focus",
      "3 modes automatiques : génération pure, transformation de texte tapé, lecture via UI Automation",
      "Injection de texte universelle par frappe Unicode, avec repli clavier intelligent si l'écriture directe est refusée",
      "Multi-fournisseurs IA (Google Gemini, Groq) avec bascule automatique en cas d'échec (quota, clé invalide...)",
      "Clés API chiffrées via DPAPI, liées au compte Windows, jamais stockées en clair",
      "Fonction \"Annuler la dernière transformation\" (undo à un niveau)",
      "Publication en exécutable unique self-contained (.NET 10) + installeur Inno Setup",
      "Suite de tests xUnit pour la logique de détection et de nettoyage de la réponse",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/DONNA" },
    icon: <Bot className="h-5 w-5 text-sky-300" />,
    image: "donna.ico",
  },
  {
    title: "Clementia",
    type: "Plateforme IA · Full-Stack",
    description:
      "Plateforme de supervision d'appels pilotée par l'IA, construite sur une architecture microservices et des services asynchrones (Celery, Redis). Campagnes Inbound/Outbound, agents conversationnels (GPT-4), transcription temps réel (Whisper), analyse vocale et qualification automatique. Intégration LiveKit (VoIP/SIP), Calendly, stack React/TypeScript/Vite + FastAPI/PostgreSQL/Redis/Celery.",
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
    techGroups: {
      ia: ["OpenAI (GPT-4, Whisper)", "Agents conversationnels"],
      infrastructure: ["FastAPI", "React / TypeScript", "LiveKit", "Redis", "Celery", "PostgreSQL", "Docker"],
    },
    features: [
      "Architecture microservices et services asynchrones (Celery, Redis)",
      "Campagnes Inbound / Outbound",
      "Agents conversationnels (GPT-4)",
      "Transcription temps réel (Whisper)",
      "Analyse vocale",
      "Qualification automatique des appels",
      "Intégration LiveKit (VoIP / SIP)",
      "Intégration Calendly",
    ],
    links: { github: "" },
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
    links: { github: "" },
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
  {
    title: "Multi-Label Classification",
    type: "Multi-Label Image & Text · Deep Learning",
    description:
      "Participation à la compétition Kaggle \"Multi-label Classification Competition 2023\". Modèle de classification multi-label combinant Computer Vision et NLP : classification d'images et de descriptions textuelles via une architecture hybride (EfficientNet + RoBERTa/LSTM).",
    tech: [
      "Python",
      "PyTorch",
      "EfficientNet",
      "RoBERTa",
      "LSTM",
      "Pandas",
      "NumPy",
      "Kaggle Notebooks",
    ],
    features: [
      "Classification multi-label d'images et de captions",
      "Extraction des caractéristiques visuelles avec EfficientNet",
      "Traitement des descriptions textuelles avec RoBERTa et LSTM",
      "Fusion des caractéristiques image et texte pour la prédiction",
      "Optimisation avec torch.no_grad() en phase d'inférence",
    ],

    links: {
      github: "",
      kaggle:
        "https://www.kaggle.com/code/firdaouscharchaoui/multi-label-classification-project-final",
    },
    icon: <Sparkles className="h-5 w-5 text-amber-400" />,
    image: "kaggle.jpg",
  },
  {
    title: "PODOMETRE",
    type: "Application Mobile · IoT & Santé",
    description:
      "Application mobile de podomètre en React Native (iOS et Android). Suivi des pas en temps réel, estimation des calories brûlées, mesure de la vitesse et objectifs personnalisés. Architecture IoT : collecte et traitement des données de mouvement (accéléromètre), algorithmes d'optimisation pour la précision du comptage et le calcul des calories, interface réactive avec graphiques de performance, gestion de l'autonomie batterie.",
    tech: [
      "React Native",
      "iOS & Android",
      "Accéléromètre / Capteurs",
      "Algorithmes d'analyse de signal",
      "Firebase",
      "UX/UI",
    ],
    features: [
      "Suivi des pas en temps réel",
      "Estimation des calories brûlées",
      "Mesure de la vitesse",
      "Objectifs personnalisés",
      "Collecte et traitement des données de mouvement (architecture IoT)",
      "Algorithmes d'optimisation pour la précision du comptage",
      "Interface réactive avec graphiques de performance",
      "Gestion de l'autonomie batterie et précision des capteurs",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/PODOMETRE" },
    icon: <Smartphone className="h-5 w-5 text-violet-400" />,
    image: "podometre.png",
  },
  {
    title: "Gestion Employés",
    type: "Full-Stack · Spring Boot & Angular",
    description:
      "Application web full-stack pour gérer départements et employés : CRUD complet, association employés par département avec nom, âge et photo. Backend API REST Spring Boot 3 (Java 17, JPA, MySQL), frontend Angular 18 (standalone) avec design unifié, upload de photos (PNG/JPG jusqu'à 10 Mo).",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Data JPA",
      "MySQL",
      "Maven",
      "Angular 18",
      "TypeScript",
      "RxJS",
      "SCSS",
    ],
    features: [
      "CRUD départements et employés par département",
      "Upload de photos employés (PNG/JPG, max 10 Mo)",
      "API REST (départements, employés, photos)",
      "Frontend Angular 18 standalone, routing",
      "Interface unifiée : Accueil, Départements, détail avec grille de cartes employés",
      "CORS configuré, design cohérent (modals, tableaux, cartes)",
    ],
    links: { github: "https://github.com/mehdiEnnaciri1/AngularSpring" },
    icon: <Users className="h-5 w-5 text-teal-400" />,
    image: "employe.png",
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

              <div className="mb-4 space-y-2">
                {"techGroups" in project && project.techGroups ? (
                  <>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techGroups.ia.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-emerald-500/15 px-2 py-1 text-[0.7rem] font-medium text-emerald-300 ring-1 ring-emerald-400/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techGroups.infrastructure.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-sky-500/15 px-2 py-1 text-[0.7rem] font-medium text-sky-300 ring-1 ring-sky-400/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
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

              <div className="mt-auto flex gap-2">
                <button
                  type="button"
                  onClick={() => setDetailsProject(project)}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 text-[0.72rem] font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-indigo-400/80 ${project.links.github || ("kaggle" in project.links && project.links.kaggle) ? "flex-1" : "w-full"}`}
                >
                  Détails
                  <Layers className="h-3 w-3" />
                </button>
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 text-[0.72rem] font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-emerald-400/80"
                  >
                    GitHub
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : null}
                {"kaggle" in project.links && project.links.kaggle ? (
                  <a
                    href={project.links.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1.5 text-[0.72rem] font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-amber-400/80"
                  >
                    Kaggle
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : null}
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
                  {"techGroups" in detailsProject && detailsProject.techGroups ? (
                    <div className="space-y-3">
                      <div>
                        <p className="mb-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-emerald-400/90">IA & Modèles</p>
                        <div className="flex flex-wrap gap-2">
                          {detailsProject.techGroups.ia.map((t) => (
                            <span key={t} className="rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/40">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-sky-400/90">Infrastructure & Back-End</p>
                        <div className="flex flex-wrap gap-2">
                          {detailsProject.techGroups.infrastructure.map((t) => (
                            <span key={t} className="rounded-full bg-sky-500/15 px-3 py-1.5 text-xs font-medium text-sky-300 ring-1 ring-sky-400/40">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {detailsProject.tech.map((t) => (
                        <span key={t} className="rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-slate-700/70">{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {(detailsProject.links.github ||
                  ("kaggle" in detailsProject.links &&
                    detailsProject.links.kaggle)) ? (
                  <div className="flex flex-col gap-2 sm:flex-row">
                    {detailsProject.links.github ? (
                      <a
                        href={detailsProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900/90 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-emerald-400/80 sm:flex-1"
                      >
                        Voir sur GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    {"kaggle" in detailsProject.links &&
                    detailsProject.links.kaggle ? (
                      <a
                        href={detailsProject.links.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900/90 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-slate-700/80 hover:ring-amber-400/80 sm:flex-1"
                      >
                        Voir sur Kaggle
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

