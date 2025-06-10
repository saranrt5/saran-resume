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
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-unique-id="af31d555-a9eb-4c74-8f95-40fdd736dd36" data-file-name="components/projects-section.tsx">
      <div className="h-48 overflow-hidden" data-unique-id="86b16342-049e-4d84-b246-a17a012dc578" data-file-name="components/projects-section.tsx">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-unique-id="f49e2f74-c645-4cc5-8a6f-9ccde80276e8" data-file-name="components/projects-section.tsx" />
      </div>
      
      <div className="p-6" data-unique-id="2d12c252-5706-41ea-a1c4-7034ba37290c" data-file-name="components/projects-section.tsx">
        <div className="flex items-center justify-between mb-3" data-unique-id="bca667f9-7536-4643-a16f-78c552a3db66" data-file-name="components/projects-section.tsx">
          <h3 className="text-xl font-bold text-slate-900" data-unique-id="e0c966ec-b9af-48f3-bbcb-27b837ad2883" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{title}</h3>
          <div className="flex space-x-2" data-unique-id="0c38a6c3-5093-48bb-99bf-d4fa5b3e532c" data-file-name="components/projects-section.tsx">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="193232f9-7e65-422b-aaed-8d38b68abcae" data-file-name="components/projects-section.tsx">
              <TrendingUp className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="9cfc9a82-37b9-4981-928d-54e3c5009c25" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{description}</p>
        
        <div className="mb-4" data-unique-id="c16da2c0-f903-4a68-a71e-eadb9aedaa21" data-file-name="components/projects-section.tsx">
          <div className="flex flex-wrap gap-2" data-unique-id="2aeb0ec7-fe93-49f0-aaa4-f60c79c0b37d" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full text-sm font-medium" data-unique-id="c897235f-ee24-44f2-9408-3763e99cbfa8" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                {tech}
              </span>)}
          </div>
        </div>
        
        <div className="space-y-2" data-unique-id="e858db96-17a4-43bd-9077-e140d70adc2c" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
          {metrics.map((metric, index) => <div key={index} className="flex items-center space-x-2" data-unique-id="994f453c-a335-4bcb-9cc6-c8d558fecc8f" data-file-name="components/projects-section.tsx">
              <Star className="w-4 h-4 text-amber-500" data-unique-id="ac59ac25-a44c-46fa-bff7-73cb0b6a11cd" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
              <span className="text-slate-600 text-sm" data-unique-id="f132b353-b335-4e63-ae8a-8527beb5e551" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{metric}</span>
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
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=300&fit=crop",
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
  }} data-unique-id="a4ed0913-06ee-4504-83c0-617414bb51af" data-file-name="components/projects-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="5ae7796d-d973-48df-a22f-462290672641" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="2196d817-db48-47d3-b276-276e38ad3ac8" data-file-name="components/projects-section.tsx">Key Project Achievements</span></h2>
      <div className="grid grid-cols-3 gap-8" data-unique-id="c95a8544-0f71-4139-a351-ce5b9d2b544e" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} data-unique-id="5d93e47e-1951-4d56-913c-d753d01c21c4" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}