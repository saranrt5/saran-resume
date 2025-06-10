"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: string[];
  github?: string;
  demo?: string;
  delay: number;
}
function ProjectCard({
  title,
  description,
  image,
  technologies,
  metrics,
  github,
  demo,
  delay
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    scale: 0.9
  }} animate={isInView ? {
    opacity: 1,
    scale: 1
  } : {
    opacity: 0,
    scale: 0.9
  }} transition={{
    duration: 0.5,
    delay: delay / 1000
  }} whileHover={{
    y: -8
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-unique-id="cf38ea63-f32a-43db-98d8-ea1f77648012" data-file-name="components/projects-section.tsx">
      <div className="h-48 overflow-hidden" data-unique-id="a31094f4-a24b-4625-85b8-31282048c544" data-file-name="components/projects-section.tsx">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-unique-id="0f6ee89b-75d8-4eb1-96f3-f1b577f547b3" data-file-name="components/projects-section.tsx" />
      </div>
      
      <div className="p-6" data-unique-id="31c93524-1b56-43b0-90fb-3cdb66e876e4" data-file-name="components/projects-section.tsx">
        <div className="flex items-center justify-between mb-3" data-unique-id="0ddd1ef1-2d13-44a2-b0d1-56dfd3def7dd" data-file-name="components/projects-section.tsx">
          <h3 className="text-xl font-bold text-slate-900" data-unique-id="719314f2-caf1-4152-86f9-ede7f6d369f2" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{title}</h3>
          <div className="flex space-x-2" data-unique-id="1f246d82-7877-4e09-9848-397532ab507f" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
            {github && <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href={github} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" data-unique-id="d3618cbe-a23c-4766-85fc-0bbfaf1c9845" data-file-name="components/projects-section.tsx">
                <Github className="w-4 h-4" />
              </motion.a>}
            {demo && <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href={demo} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="46f48f6d-26fe-492d-948d-51e3a538bb22" data-file-name="components/projects-section.tsx">
                <ExternalLink className="w-4 h-4" />
              </motion.a>}
          </div>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="af227b81-060e-45ad-83a2-2bceb11884a5" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{description}</p>
        
        <div className="mb-4" data-unique-id="05c2ea1d-33d8-4f8d-b601-c4b536965499" data-file-name="components/projects-section.tsx">
          <div className="flex flex-wrap gap-2" data-unique-id="22f09642-5ad1-4b35-a652-b050b2da7342" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full text-sm font-medium" data-unique-id="f39ca347-6fe4-4059-bd46-7d1a8e9f4e1b" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                {tech}
              </span>)}
          </div>
        </div>
        
        <div className="space-y-2" data-unique-id="b6e27d3a-5b9e-4b27-b840-9aceca48cf8a" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
          {metrics.map((metric, index) => <div key={index} className="flex items-center space-x-2" data-unique-id="128d3db8-57aa-4bbb-bec7-bf465f939b17" data-file-name="components/projects-section.tsx">
              <Star className="w-4 h-4 text-amber-500" data-unique-id="076b9d54-1308-4476-89cb-c0e5ad389be0" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
              <span className="text-slate-600 text-sm" data-unique-id="0b389251-3bc6-42f5-84d0-550cd61749e7" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{metric}</span>
            </div>)}
        </div>
      </div>
    </motion.div>;
}
export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const projects = [{
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    metrics: ["Processes $2M+ in monthly transactions", "Serves 50K+ monthly active users", "99.9% uptime reliability"],
    github: "#",
    demo: "#"
  }, {
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for monitoring application performance with real-time data visualization and alerting system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["React", "D3.js", "WebSocket", "Node.js", "MongoDB"],
    metrics: ["Monitors 100+ application metrics", "Sub-second data refresh rates", "Reduced incident response time by 75%"],
    github: "#",
    demo: "#"
  }, {
    title: "AI-Powered Content Platform",
    description: "Content management system with AI-driven recommendations, automated SEO optimization, and multi-tenant architecture.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    technologies: ["Python", "FastAPI", "OpenAI", "Docker", "AWS"],
    metrics: ["Increased content engagement by 60%", "Automated 80% of SEO tasks", "Serves 200+ enterprise clients"],
    github: "#",
    demo: "#"
  }];
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 50
  }} transition={{
    duration: 0.6
  }} data-unique-id="d630b13b-1549-42a3-bced-e4faa90e398f" data-file-name="components/projects-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="ea901a6d-730e-45a8-b545-58fe95baf5a7" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="6088f71b-dfbe-45d2-a643-f663bd1e8223" data-file-name="components/projects-section.tsx">Featured Projects</span></h2>
      <div className="grid grid-cols-3 gap-8" data-unique-id="2c324cb7-1530-45e0-85e2-fbbac5194a1d" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} data-unique-id="7315ca75-8a7a-47b8-b19f-4b63aa2d95d9" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}