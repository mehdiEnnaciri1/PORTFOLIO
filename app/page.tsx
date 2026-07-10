import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { BackToTopButton } from "@/components/BackToTopButton";
import { BackgroundFX } from "@/components/BackgroundFX";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SectionShell } from "@/components/SectionShell";
import { FormationSection } from "@/sections/FormationSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <BackgroundFX />
      <Navbar />

      <main className="pb-16">
        <HeroSection />

        <SectionShell id="profil" num="01" title="About Me">
          <AboutSection />
        </SectionShell>

        <SectionShell id="skills" num="02" title="Skills">
          <SkillsSection />
        </SectionShell>

        <SectionShell id="experience" num="03" title="Expérience">
          <ExperienceSection />
        </SectionShell>

        <SectionShell id="projects" num="04" title="Projets">
          <ProjectsSection />
        </SectionShell>

        <SectionShell id="formation" num="05" title="Formation">
          <FormationSection />
        </SectionShell>

        <SectionShell id="contact" num="06" title="Contact">
          <ContactSection />
        </SectionShell>
      </main>

      <footer className="border-t border-[rgba(122,160,210,.15)] py-7 text-center">
        <span className="mono text-[11px] text-[#8ba0bd]">
          © {new Date().getFullYear()} MEHDI ENNACIRI — PORTFOLIO · CASABLANCA, MAROC
        </span>
      </footer>

      <BackToTopButton />
    </div>
  );
}
