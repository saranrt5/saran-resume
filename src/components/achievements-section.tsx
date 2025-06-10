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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="51bb889a-1d2a-4ba9-9ba5-bd4774a757ec" data-file-name="components/achievements-section.tsx">
      <div className="p-6" data-unique-id="f3e5bffb-6f4c-4861-acbd-6c257a70f70e" data-file-name="components/achievements-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="8e04ddce-0f2d-450d-8d78-7c06d9c7f028" data-file-name="components/achievements-section.tsx">
          <div className="flex items-start space-x-4" data-unique-id="67503675-f722-460d-bafb-6e89ec8e12d9" data-file-name="components/achievements-section.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white" data-unique-id="b2258df9-8843-4a42-8d82-c8ca9c92f26c" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {icon}
            </div>
            <div data-unique-id="60b00542-fc29-4b23-864b-f5b897b2c784" data-file-name="components/achievements-section.tsx">
              <h3 className="text-lg font-bold text-slate-900 mb-1" data-unique-id="c700a886-0970-44b8-8aa2-69e9bcf9c82f" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{title}</h3>
              <p className="text-slate-600 font-medium" data-unique-id="770b17ab-05c7-4ab1-8efb-0114fc34fe19" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{organization}</p>
              <p className="text-slate-500 text-sm" data-unique-id="8ceedab1-79a6-4913-8709-f34c3b4d972c" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{year}</p>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors" data-unique-id="e827a5bc-7c2d-4cf4-87f7-9330faf4b6ba" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="bb756bbb-9bb3-48f8-93ce-f54838f110a6" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="7e5c9b94-60d5-43e5-a4f0-ca33e7fb38a4" data-file-name="components/achievements-section.tsx">
          <div className="pt-4 border-t border-slate-200" data-unique-id="4e36fa72-96ac-4eec-a51c-46e41dc4902a" data-file-name="components/achievements-section.tsx">
            <ul className="space-y-2" data-unique-id="bc602805-8c56-44d1-bba7-0cfa34d6e2bf" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {details.map((detail, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="6e945f33-39df-40a1-8504-4cb2e36cb709" data-file-name="components/achievements-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" data-unique-id="2812b1b6-9ecc-4ca7-9e70-5a782017d198" data-file-name="components/achievements-section.tsx" />
                  <span className="text-slate-600" data-unique-id="9dc8b941-d5e9-4c57-8cf7-93cabdbdeab9" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{detail}</span>
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
  }} data-unique-id="a2ab1b45-5312-4168-9bf9-719ecab45453" data-file-name="components/achievements-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="24be44de-0f1c-4c82-a87a-18f679c456de" data-file-name="components/achievements-section.tsx"><span className="editable-text" data-unique-id="8a5bc88d-e0d1-4668-88fa-3fd2952f182b" data-file-name="components/achievements-section.tsx">Major Achievements</span></h2>
      <div className="grid grid-cols-2 gap-6" data-unique-id="99c074d4-7417-4e2b-95c4-17053a044747" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} data-unique-id="e2fffbf8-2784-4e4c-bf2b-19f181afb617" data-file-name="components/achievements-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}