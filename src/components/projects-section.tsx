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
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-unique-id="dd1246cb-9cc7-4edb-ab36-a5e1434f168a" data-file-name="components/projects-section.tsx">
      <div className="h-48 overflow-hidden" data-unique-id="3e4b00a1-0b9c-4145-ba65-6d61c8075f53" data-file-name="components/projects-section.tsx">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-unique-id="f3b13076-b7a3-4f98-84ea-1063341f8b63" data-file-name="components/projects-section.tsx" />
      </div>
      
      <div className="p-6" data-unique-id="34dc9b8e-166b-47cc-b427-c6d11e9cca78" data-file-name="components/projects-section.tsx">
        <div className="flex items-center justify-between mb-3" data-unique-id="e6c704c5-f640-485d-8594-96de2c17e6cb" data-file-name="components/projects-section.tsx">
          <h3 className="text-xl font-bold text-slate-900" data-unique-id="d6d722a6-b5bf-442f-86a9-b4b1cc2581b3" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{title}</h3>
          <div className="flex space-x-2" data-unique-id="fd4f9e84-02c3-4282-ac88-656bfd04c9cc" data-file-name="components/projects-section.tsx">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="78c682fb-abfd-4b48-99ea-2459ac7af9fa" data-file-name="components/projects-section.tsx">
              <TrendingUp className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="d85f99e0-6698-48b1-bd85-c6828f81b1cb" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{description}</p>
        
        <div className="mb-4" data-unique-id="c82907af-8cd9-4256-bbd9-d45e2554c826" data-file-name="components/projects-section.tsx">
          <div className="flex flex-wrap gap-2" data-unique-id="afe39913-246e-4e60-abe5-53af2cdd61e9" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full text-sm font-medium" data-unique-id="7e06689b-235b-43c7-97fc-bbb18325db82" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                {tech}
              </span>)}
          </div>
        </div>
        
        <div className="space-y-2" data-unique-id="e3abc455-765b-4f00-a4d4-7caadd20074f" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
          {metrics.map((metric, index) => <div key={index} className="flex items-center space-x-2" data-unique-id="aa66569f-0c7f-49a2-b212-b8c043c3cb75" data-file-name="components/projects-section.tsx">
              <Star className="w-4 h-4 text-amber-500" data-unique-id="7a4ae12f-cf88-4941-a2ef-ed6912e22035" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
              <span className="text-slate-600 text-sm" data-unique-id="7e0bf219-faf1-4e66-8061-5ff11b22ce02" data-file-name="components/projects-section.tsx" data-dynamic-text="true">{metric}</span>
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
  }} data-unique-id="4d399be7-d09c-449e-940b-5ac640584db1" data-file-name="components/projects-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="706d58f3-cdb7-4487-b63a-ba49bd0b4081" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="d07a84d8-e120-4c39-b4c1-d526597c4841" data-file-name="components/projects-section.tsx">Key Project Achievements</span></h2>
      <div className="grid grid-cols-3 gap-8" data-unique-id="66b78c96-b81d-4c19-89a3-3492363d90b4" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} data-unique-id="94b9bc47-1847-4ee2-b43c-7f52856dfcea" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}