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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="9ddbc6c6-994a-4aae-b6be-03565459b9d3" data-file-name="components/achievements-section.tsx">
      <div className="p-6" data-unique-id="dcf64ca6-7d16-4a7c-b981-00bd9ed2ee2a" data-file-name="components/achievements-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="71cfd72a-a35b-4e06-bc98-826656148fd8" data-file-name="components/achievements-section.tsx">
          <div className="flex items-start space-x-4" data-unique-id="366cff17-f9d5-46c2-9946-49c6c3522218" data-file-name="components/achievements-section.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white" data-unique-id="e6dd1059-65ff-4a76-92ce-7ea8e1bc6708" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {icon}
            </div>
            <div data-unique-id="725ad7b3-526c-4504-a229-4c9c12571575" data-file-name="components/achievements-section.tsx">
              <h3 className="text-lg font-bold text-slate-900 mb-1" data-unique-id="316520ad-3269-45bc-add8-9b3ff01088db" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{title}</h3>
              <p className="text-slate-600 font-medium" data-unique-id="c1bfffc7-108a-4241-965b-5470f1ff0408" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{organization}</p>
              <p className="text-slate-500 text-sm" data-unique-id="dd1a2c06-4c92-4d54-b53a-ed92bd399a8b" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{year}</p>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors" data-unique-id="736be146-a7e6-494a-a547-a7377fdd531a" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="c94e55c5-f449-4103-b1f1-4c3976898781" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="8305b175-4ae3-4074-98d3-5278d58ab7a2" data-file-name="components/achievements-section.tsx">
          <div className="pt-4 border-t border-slate-200" data-unique-id="c2503c65-92cf-4930-849c-33b58dc1db6e" data-file-name="components/achievements-section.tsx">
            <ul className="space-y-2" data-unique-id="c0e3b4cb-0c09-4b03-99af-888a9f4783da" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {details.map((detail, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="fce7e444-77a0-4bee-902b-1537ec6f9aaa" data-file-name="components/achievements-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" data-unique-id="2118e71b-a29a-49e0-881c-d0a85bc3381a" data-file-name="components/achievements-section.tsx" />
                  <span className="text-slate-600" data-unique-id="6a9bc8c8-5144-4a93-b310-759c0844e1ea" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{detail}</span>
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
  }} data-unique-id="88df3b80-502a-4ab6-9560-10c0b8ee1acc" data-file-name="components/achievements-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="92d8b20a-2d4e-47e1-874a-1137ca47cbe7" data-file-name="components/achievements-section.tsx"><span className="editable-text" data-unique-id="8c941fab-7c84-4154-b117-55f668e15b4e" data-file-name="components/achievements-section.tsx">Major Achievements</span></h2>
      <div className="grid grid-cols-2 gap-6" data-unique-id="62648520-13f2-4556-a085-975d848e57d3" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} data-unique-id="1fcfbaa8-cf78-4b19-b9fc-965cfa9e4337" data-file-name="components/achievements-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}