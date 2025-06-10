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
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <div className="flex space-x-2">
            {github && <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href={github} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <Github className="w-4 h-4" />
              </motion.a>}
            {demo && <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href={demo} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </motion.a>}
          </div>
        </div>
        
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full text-sm font-medium">
                {tech}
              </span>)}
          </div>
        </div>
        
        <div className="space-y-2">
          {metrics.map((metric, index) => <div key={index} className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-slate-600 text-sm">{metric}</span>
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
  }}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Featured Projects</span></h2>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} />)}
      </div>
    </motion.div>;
}