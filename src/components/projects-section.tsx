"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star, TrendingUp } from "lucide-react";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: string[];
  delay: number;
}
function ProjectCard({
  title,
  description,
  image,
  technologies,
  metrics,
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
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-unique-id="4a81a69b-3990-4ec0-83e8-48b5e69131e4" data-file-name="components/projects-section.tsx">
      <div className="h-48 overflow-hidden" data-unique-id="6f04e621-0889-40f9-a18f-ae51918dd488" data-file-name="components/projects-section.tsx">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-unique-id="df8a2f10-e09f-44f8-9760-0824cb88a5f7" data-file-name="components/projects-section.tsx" />
      </div>
      
      <div className="p-6" data-unique-id="7959b86e-3ca3-4fb6-97fa-14bab671cc56" data-file-name="components/projects-section.tsx">
        <div className="flex items-center justify-between mb-3" data-unique-id="b0eb8bb8-a2b4-4c98-aeed-dee5f16605ef" data-file-name="components/projects-section.tsx">
          <h3 className="text-xl font-bold text-slate-900" data-unique-id="7c71a903-fb5b-4873-afd9-6784cac92add" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{title}</h3>
          <div className="flex space-x-2" data-unique-id="5d725e60-0064-4cae-86f3-df93d0cfb712" data-file-name="components/projects-section.tsx">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="e8e85f76-1260-4275-8ed2-1e77daed437f" data-file-name="components/projects-section.tsx">
              <TrendingUp className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="031d2fbe-4bd7-4d0f-b8e5-e4749d27983c" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{description}</p>
        
        <div className="mb-4" data-unique-id="2e402d44-b7bd-467f-9de9-d4a46e86eb4c" data-file-name="components/projects-section.tsx">
          <div className="flex flex-wrap gap-2" data-unique-id="a93e434f-6741-43c3-8a82-e011e3e9abb0" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full text-sm font-medium" data-unique-id="3b0ac514-f38e-46e1-8f32-be6dcc936d6e" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                {tech}
              </span>)}
          </div>
        </div>
        
        <div className="space-y-2" data-unique-id="ab72c9a7-0907-4fab-9f8d-47eb68104f09" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
          {metrics.map((metric, index) => <div key={index} className="flex items-center space-x-2" data-unique-id="cd041741-c69e-4fc8-b467-af999cdaf5b5" data-file-name="components/projects-section.tsx">
              <Star className="w-4 h-4 text-amber-500" data-unique-id="08d6fb55-1197-4d2c-bf46-15b1103b6666" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
              <span className="text-slate-600 text-sm" data-unique-id="301e6de5-4687-4cb5-a722-0328fee48767" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{metric}</span>
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
    title: "Payment Authentication Optimization",
    description: "Optimized e-commerce payment authentication workflow for Walmart Stores, implementing advanced fraud detection and reducing transaction processing errors.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    technologies: ["Worldpay", "OKR Strategy", "Fraud Detection", "Payment Processing", "Analytics"],
    metrics: ["15% reduction in payment authentication errors", "10% increase in transaction speed", "$1.2M annual savings in transaction fees", "55% reduction in chargebacks"]
  }, {
    title: "Shipping Consolidation Platform",
    description: "Launched comprehensive shipping consolidation feature for Arrow Electronics, optimizing delivery logistics and significantly reducing operational costs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
    technologies: ["SAP Hybris", "API Integration", "Cost Optimization", "Process Automation", "Logistics"],
    metrics: ["500K+ orders optimized", "$5M annual cost savings", "11% conversion rate improvement", "6% revenue growth boost"]
  }, {
    title: "Omnichannel Revenue Platform",
    description: "Strategic business analysis for Fortune 500 clients (Walgreens, Neiman Marcus) identifying significant revenue opportunities through customer journey mapping.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["Customer Journey Mapping", "A/B Testing", "Mobile Apps", "Computer Vision", "Enterprise Solutions"],
    metrics: ["$12M+ revenue growth identified", "30M+ users reached", "4.8-star app ratings", "500K+ app downloads"]
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
  }} data-unique-id="8bd9491d-29e4-44b2-86ed-c753e4f10b9a" data-file-name="components/projects-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="0675c336-1c94-4166-9e89-51f670fed6f7" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="961b50bc-5f14-49b5-aaed-4142b150c5d3" data-file-name="components/projects-section.tsx">Key Project Achievements</span></h2>
      <div className="grid grid-cols-3 gap-8" data-unique-id="811f138f-50e3-4d83-b405-5b290f067f37" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} data-unique-id="6549ad5a-833b-45e1-a3c6-257723dd3064" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}