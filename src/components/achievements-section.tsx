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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="91a3e5ea-710c-487a-968b-f5708c26d537" data-file-name="components/achievements-section.tsx">
      <div className="p-6" data-unique-id="9792831e-89dd-4c38-9a19-bedf2a67672c" data-file-name="components/achievements-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="589dec07-6a0b-4176-91c8-917fc93e7626" data-file-name="components/achievements-section.tsx">
          <div className="flex items-start space-x-4" data-unique-id="f7513c6c-13cd-4885-b19d-65e188935992" data-file-name="components/achievements-section.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white" data-unique-id="b9929696-8d45-4082-b227-25f94ca820f0" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {icon}
            </div>
            <div data-unique-id="c3650fe6-a2ce-4fe8-956b-5e9383e534b9" data-file-name="components/achievements-section.tsx">
              <h3 className="text-lg font-bold text-slate-900 mb-1" data-unique-id="a2a4dd9c-8e06-4430-ac39-4c83bb359f41" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{title}</h3>
              <p className="text-slate-600 font-medium" data-unique-id="9e2ebd02-262b-4717-948e-6d4b759e4da5" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{organization}</p>
              <p className="text-slate-500 text-sm" data-unique-id="2fe39f7c-7cba-488d-8fce-daa2182ca378" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{year}</p>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors" data-unique-id="0363baf9-16cd-4256-8c50-d543de474ed6" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="cc40276a-d31a-4202-9a05-b1ac551b2ce6" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="97b49d8c-e147-401e-998f-7739236a2727" data-file-name="components/achievements-section.tsx">
          <div className="pt-4 border-t border-slate-200" data-unique-id="2693a5dc-0936-4eaf-bc2e-9e5fc38368b1" data-file-name="components/achievements-section.tsx">
            <ul className="space-y-2" data-unique-id="aba42c43-f7e0-4bc0-91c2-51bc1edd4e0f" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {details.map((detail, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="0cff9a2f-2f03-4889-b944-784f422bc021" data-file-name="components/achievements-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" data-unique-id="dc368457-8f4f-47f3-be74-8c99aae5a3c9" data-file-name="components/achievements-section.tsx" />
                  <span className="text-slate-600" data-unique-id="4b82aae6-096f-485a-9277-4ee8632f5b76" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{detail}</span>
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
  }} data-unique-id="89637fa1-e781-40c3-a29c-d2832261319a" data-file-name="components/achievements-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="53bd536c-9647-4f78-99dd-f86b5f5f8837" data-file-name="components/achievements-section.tsx"><span className="editable-text" data-unique-id="cb42248f-2b3c-4052-b946-e3517b1cf363" data-file-name="components/achievements-section.tsx">Achievements & Awards</span></h2>
      <div className="grid grid-cols-2 gap-6" data-unique-id="708cd002-09ad-45fe-a22b-43d25e6b1965" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} data-unique-id="2b3b45bd-3d56-44bc-9ad0-57f966ef8e8a" data-file-name="components/achievements-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}