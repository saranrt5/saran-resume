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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="4d916836-b1ce-48fc-9641-01a241b89887" data-file-name="components/achievements-section.tsx">
      <div className="p-6" data-unique-id="f1e20819-ff3a-44f8-954a-958b1378c426" data-file-name="components/achievements-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="270fff59-bf9d-4b10-8dc6-aec7aa965120" data-file-name="components/achievements-section.tsx">
          <div className="flex items-start space-x-4" data-unique-id="692cd4cf-619d-482e-a415-1f1582ee3479" data-file-name="components/achievements-section.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white" data-unique-id="562724ba-ee47-44bb-997c-dbb47a1b1667" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {icon}
            </div>
            <div data-unique-id="ca7d35a4-c2cb-4634-8f5d-15e676340864" data-file-name="components/achievements-section.tsx">
              <h3 className="text-lg font-bold text-slate-900 mb-1" data-unique-id="85c4edef-eac5-4e2c-8dc0-784da8a48535" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{title}</h3>
              <p className="text-slate-600 font-medium" data-unique-id="e7bc70ce-d589-42bb-8e92-5667f79ed5c2" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{organization}</p>
              <p className="text-slate-500 text-sm" data-unique-id="cb59750f-28de-4e16-bfe3-0ee952bebf3e" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{year}</p>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors" data-unique-id="151f2333-a66d-405b-9678-3e36f9f338f4" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="90187820-0b04-46e2-88ab-072435343d85" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="d4c993e9-0e6c-499e-9309-5663246d1d11" data-file-name="components/achievements-section.tsx">
          <div className="pt-4 border-t border-slate-200" data-unique-id="3cfd7990-8ee8-4ec1-8d1e-bd5da70e9efc" data-file-name="components/achievements-section.tsx">
            <ul className="space-y-2" data-unique-id="7670406c-a41d-4c11-aad2-c6b5d17d092b" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {details.map((detail, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="c0ff6d7c-a32b-4d21-bb0c-81df8fb0871c" data-file-name="components/achievements-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" data-unique-id="ada4a7c6-33bf-46a2-8d20-b249efd1d318" data-file-name="components/achievements-section.tsx" />
                  <span className="text-slate-600" data-unique-id="5b641512-7196-48ae-bb24-5e5fb5e5f57b" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{detail}</span>
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
  }} data-unique-id="28738dae-596b-49cf-affc-81e1d54ec0f0" data-file-name="components/achievements-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="c70dfeaf-6ae7-4e0a-b4cc-c08c52e35dd3" data-file-name="components/achievements-section.tsx"><span className="editable-text" data-unique-id="b8647963-060f-4b16-a827-28e43b3cde57" data-file-name="components/achievements-section.tsx">Major Achievements</span></h2>
      <div className="grid grid-cols-2 gap-6" data-unique-id="7fee3396-c48f-4aa8-b31b-bd3b15896eb5" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} data-unique-id="8d378add-16a5-421d-8c8f-4ac43244fb4b" data-file-name="components/achievements-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}