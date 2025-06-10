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
  }} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <div className="flex space-x-2">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
              <TrendingUp className="w-4 h-4" />
            </motion.div>
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
  }}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Key Project Achievements</span></h2>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project, index) => <ProjectCard key={index} {...project} delay={index * 200} />)}
      </div>
    </motion.div>;
}