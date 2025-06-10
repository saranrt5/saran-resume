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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200" data-unique-id="442fc7da-757a-4654-af56-3c7bc1cabc33" data-file-name="app/page.tsx">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12" data-unique-id="8a3a4e02-8942-4d05-9268-4202ed817639" data-file-name="app/page.tsx">
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