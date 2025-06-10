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
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-unique-id="5910e7a9-d2e0-4d57-85b1-ed73d47817a9" data-file-name="components/projects-section.tsx">
      <div className="h-48 overflow-hidden" data-unique-id="ee25f397-f87a-4731-9588-88da066ef835" data-file-name="components/projects-section.tsx">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-unique-id="62fcc7af-d941-4635-8d25-5dbcdc2bce82" data-file-name="components/projects-section.tsx" />
      </div>
      
      <div className="p-6" data-unique-id="222e9109-b4b6-41d7-a656-efae8891825c" data-file-name="components/projects-section.tsx">
        <div className="flex items-center justify-between mb-3" data-unique-id="c6267361-2b0a-49b5-b514-1c064e1f4d0f" data-file-name="components/projects-section.tsx">
          <h3 className="text-xl font-bold text-slate-900" data-unique-id="1f11874e-2d7b-4304-b615-5a235a63262d" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{title}</h3>
          <div className="flex space-x-2" data-unique-id="847d0086-4a97-4dad-bbf6-a0f9b7b6a9c7" data-file-name="components/projects-section.tsx">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="7b8c0bdb-bed7-4606-a85c-6f82a57316c4" data-file-name="components/projects-section.tsx">
              <TrendingUp className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="bacecd2e-0425-4ff6-84b4-1361d16cd5f3" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{description}</p>
        
        <div className="mb-4" data-unique-id="f1180c42-350b-484b-9fdf-3afa0870755b" data-file-name="components/projects-section.tsx">
          <div className="flex flex-wrap gap-2" data-unique-id="b92e7e8e-c681-4167-b8f9-81666bd09b6d" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full text-sm font-medium" data-unique-id="04ffee4c-0ef0-4cc2-860a-3e82824e9ccd" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                {tech}
              </span>)}
          </div>
        </div>
        
        <div className="space-y-2" data-unique-id="dc205ee3-e3f7-4677-96a1-f6a001e400ef" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
          {metrics.map((metric, index) => <div key={index} className="flex items-center space-x-2" data-unique-id="af10ec93-5b32-4c2d-a7e0-5193a7606d55" data-file-name="components/projects-section.tsx">
              <Star className="w-4 h-4 text-amber-500" data-unique-id="0c701d1d-8e4e-457d-954d-a7ee838bd93a" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
              <span className="text-slate-600 text-sm" data-unique-id="477733b1-13f4-495b-81d5-c4ddf555c8b2" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{metric}</span>
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
  }} data-unique-id="55f5087c-246b-48a3-bdb7-9163c0181503" data-file-name="components/projects-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="0c933610-9f83-4351-8f1e-7ca05805462d" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="bf101996-fa6d-4ce1-a691-8009171285dd" data-file-name="components/projects-section.tsx">Key Project Achievements</span></h2>
      <div className="grid grid-cols-3 gap-8" data-unique-id="b0d51c49-b93c-4335-ba12-2ae0e5ae96f9" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} data-unique-id="73a9144e-6f81-4160-8181-efbd303dacb2" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}