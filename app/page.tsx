import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { BackToTopButton } from "@/components/BackToTopButton";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { HeroSection } from "@/sections/HeroSection";
import { SectionShell } from "@/components/SectionShell";
import { FormationSection } from "@/sections/FormationSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <Loader />
      <Navbar />

      <main className="pb-16">
        <HeroSection />

        <SectionShell
          id="formation"
          eyebrow="Parcours académique"
          title="Formation"
          description="Un parcours académique orienté IA, ingénierie logicielle et sciences mathématiques pour concevoir des systèmes intelligents robustes."
        >
          <FormationSection />
        </SectionShell>

        <SectionShell
          id="skills"
          eyebrow="Stack & expertise"
          title="Compétences techniques"
          description="Un socle full-stack et data/IA couvrant toute la chaîne : du prototypage à la mise en production industrielle."
        >
          <SkillsSection />
        </SectionShell>

        <SectionShell
          id="experience"
          eyebrow="Impact professionnel"
          title="Expérience professionnelle"
          description="Missions en environnement industriel et télécoms, avec un focus sur la valeur métier, la qualité du code et la scalabilité."
        >
          <ExperienceSection />
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow="Sélection de projets"
          title="Projets Full-Stack & IA"
          description="Quelques projets représentatifs autour de la classification multimodale, de l'architecture data et des applications web modernes."
        >
          <ProjectsSection />
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Travaillons ensemble"
          title="Contact"
          description="Vous avez un projet, une opportunité ou une idée à challenger ? Parlons-en."
        >
          <ContactSection />
        </SectionShell>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-5">
        <div className="container-xl flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
          <a
            href="https://www.linkedin.com/in/mehdi-ennaciri-099a4925b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <span className="hidden text-slate-600 sm:inline">·</span>
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} Mehdi Ennaciri. Tous droits réservés.
          </span>
        </div>
      </footer>

      <FloatingContactButton />
      <BackToTopButton />
    </div>
  );
}
