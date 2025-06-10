"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Trophy, Medal, ChevronDown, ChevronUp, Target } from "lucide-react";
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
    title: "Payment Processing Excellence",
    organization: "UST Global - Walmart",
    year: "2021-Present",
    description: "Led transformational improvements in e-commerce payments processing, achieving significant cost savings and error reduction.",
    details: ["15% reduction in payment authentication errors", "10% increase in transaction processing speed", "$1.2M annual savings through Worldpay optimization", "55% reduction in chargebacks while maintaining 99.9% uptime"]
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Process Automation Champion",
    organization: "Hexaware Technologies",
    year: "2019-2021",
    description: "Delivered exceptional cost savings through strategic automation of procurement processes for E&Y using advanced SAP Mercury integration.",
    details: ["$15 million in annual cost savings achieved", "20% efficiency increase through cross-functional team leadership", "Comprehensive RICEFW development specifications created", "Successfully automated critical manual processes organization-wide"]
  }, {
    icon: <Medal className="w-6 h-6" />,
    title: "Enterprise Digital Transformation",
    organization: "Arrow Electronics",
    year: "2018-2019",
    description: "Spearheaded major eCommerce platform migration and optimization initiatives resulting in significant business impact.",
    details: ["$5 million annual savings through shipping consolidation", "11% conversion rate improvement with single-page checkout", "500,000+ orders optimized for enhanced delivery efficiency", "Successful SAP Hybris migration from microservice architecture"]
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "Fortune 500 Revenue Growth",
    organization: "Photon Infotech",
    year: "2013-2015",
    description: "Delivered exceptional business analysis for major retail clients, identifying substantial omnichannel revenue opportunities.",
    details: ["$12M+ revenue growth opportunities identified", "4.8-star mobile app ratings across 500K+ downloads", "30M users reached through innovative digital solutions", "Strategic partnerships with Walgreens and Neiman Marcus"]
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
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Major Achievements</span></h2>
      <div className="grid grid-cols-2 gap-6">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} />)}
      </div>
    </motion.div>;
}