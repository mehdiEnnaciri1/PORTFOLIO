import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { BackToTopButton } from "@/components/BackToTopButton";
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

      <BackToTopButton />
    </div>
  );
}
