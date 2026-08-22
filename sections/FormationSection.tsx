"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const items = [
  {
    title: "Master Spécialisé, Computer Engineering",
    institution: "Université Abdelmalek Essaâdi",
    period: "2023 – 2025",
    description:
      "Spécialisation en ingénierie informatique : architectures logicielles, développement full-stack et gestion de projet.",
    skills: "React Native, Gestion d'entreprise, +25 compétences",
  },
  {
    title: "Licence Fondamentale, Sciences mathématiques et informatiques - Base de données",
    institution: "Université Hassan II",
    period: "2020 – 2023",
    description:
      "Formation fondamentale en mathématiques et informatique avec spécialisation en bases de données.",
    skills: "Programmation orientée objet (POO), Bases de données, +16 compétences",
  },
  {
    title: "Etude Université Générale, Sciences mathématiques et informatiques",
    institution: "Université Hassan II",
    period: "2020 – 2022",
    description:
      "Parcours général en sciences mathématiques et informatiques.",
    skills: "Script Shell, Bases de données, +8 compétences",
  },
  {
    title: "Baccalauréat, Science mathématique B",
    institution: "Lycée qualifiant Ibno Mandor",
    period: "sept. 2019 – juin 2020",
    description:
      "Baccalauréat scientifique option mathématiques.",
  },
];

export function FormationSection() {
  return (
    <div className="relative">
      <div className="fgrid rv">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <figure className="fpic">
          <img src={`${basePath}/fac1.jpg`} alt="Faculté des Sciences Ben M'sik" />
          <figcaption>Faculté des Sciences Ben M&apos;sik · Casablanca</figcaption>
        </figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <figure className="fpic">
          <img src={`${basePath}/fac2.jpg`} alt="Faculté des Sciences, Tétouan" />
          <figcaption>Faculté des Sciences · Tétouan</figcaption>
        </figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <figure className="fpic">
          <img src={`${basePath}/fac3.jpg`} alt="Université Abdelmalek Essaâdi" />
          <figcaption>Université Abdelmalek Essaâdi · Tétouan</figcaption>
        </figure>
      </div>

      <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500/60 via-slate-700/80 to-emerald-400/60 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-8 md:space-y-10">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex gap-4 md:gap-10"
          >
            <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 ring-2 ring-indigo-500/70 md:mt-0">
              <GraduationCap className="h-4 w-4 text-indigo-300" />
            </div>

            <div className="glass-panel relative flex-1 rounded-2xl px-4 py-4 md:px-6 md:py-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                  {item.title}
                </h3>
                <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[0.7rem] font-medium text-emerald-300 ring-1 ring-emerald-400/40">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-400 md:text-sm">
                {item.institution}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 md:text-sm">
                {item.description}
              </p>
              {"skills" in item && item.skills && (
                <p className="mt-2 text-[0.7rem] text-slate-400 md:text-xs">
                  Compétences : {item.skills}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

