"use client";

import { Header } from "@/components/header";
import { AboutSection } from "@/components/about-section";
import { MetricsSection } from "@/components/metrics-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { AchievementsSection } from "@/components/achievements-section";
import { EducationSection } from "@/components/education-section";
export default function HomePage() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200" data-unique-id="7b9d46ae-c3bd-497c-8933-c7328711bce5" data-file-name="app/page.tsx">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12" data-unique-id="29e016b1-2835-4710-a2d8-4972f21d93fe" data-file-name="app/page.tsx">
        <Header />
        <AboutSection />
        <MetricsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
      </div>
    </div>;
}