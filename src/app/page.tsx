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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200" data-unique-id="a00ff340-7e9d-46cf-85da-a9edcc1edeb5" data-file-name="app/page.tsx">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12" data-unique-id="0335b5e5-66c2-4758-9394-c2053085b505" data-file-name="app/page.tsx">
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