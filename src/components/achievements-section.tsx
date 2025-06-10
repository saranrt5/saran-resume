"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Trophy, Medal, ChevronDown, ChevronUp } from "lucide-react";
interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  organization: string;
  year: string;
  description: string;
  details: string[];
  delay: number;
}
function AchievementCard({
  icon,
  title,
  organization,
  year,
  description,
  details,
  delay
}: AchievementCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const [isExpanded, setIsExpanded] = useState(false);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 30
  }} transition={{
    duration: 0.5,
    delay: delay / 1000
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 font-medium">{organization}</p>
              <p className="text-slate-500 text-sm">{year}</p>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden">
          <div className="pt-4 border-t border-slate-200">
            <ul className="space-y-2">
              {details.map((detail, index) => <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-600">{detail}</span>
                </li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>;
}
export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const achievements = [{
    icon: <Trophy className="w-6 h-6" />,
    title: "Tech Innovation Award",
    organization: "TechCorp Inc.",
    year: "2023",
    description: "Recognized for developing breakthrough real-time collaboration features that increased user engagement by 40%.",
    details: ["Led cross-functional team of 8 engineers", "Implemented WebSocket-based real-time features", "Reduced latency from 2s to 50ms", "Featured in company's annual innovation showcase"]
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "Outstanding Performance",
    organization: "StartupXYZ",
    year: "2020",
    description: "Exceeded all performance targets and successfully led the migration to microservices architecture.",
    details: ["Achieved 150% of quarterly goals", "Reduced system downtime by 60%", "Mentored 3 junior developers to promotion", "Implemented monitoring system saving $200K annually"]
  }, {
    icon: <Medal className="w-6 h-6" />,
    title: "Hackathon Winner",
    organization: "Global Dev Challenge",
    year: "2019",
    description: "First place winner in international hackathon with AI-powered accessibility solution.",
    details: ["Competed against 500+ developers worldwide", "Built AI tool improving web accessibility", "Generated 50K+ users in first month", "Open-sourced project with 2K+ GitHub stars"]
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
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Achievements & Awards</span></h2>
      <div className="grid grid-cols-2 gap-6">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} />)}
      </div>
    </motion.div>;
}