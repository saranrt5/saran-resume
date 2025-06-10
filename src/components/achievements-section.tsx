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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="ae348d51-0d91-4449-bfc0-0427c7d7a126" data-file-name="components/achievements-section.tsx">
      <div className="p-6" data-unique-id="bb84d6d8-e8ab-467b-86db-b680b40c9b1f" data-file-name="components/achievements-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="1f752158-03cb-4361-9fef-cfe550d4a760" data-file-name="components/achievements-section.tsx">
          <div className="flex items-start space-x-4" data-unique-id="9d22392f-9de4-4085-a8e6-e6661bd3d355" data-file-name="components/achievements-section.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white" data-unique-id="745fe6d2-ed8f-4c2f-ac77-c4799dca7dba" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {icon}
            </div>
            <div data-unique-id="54b51d35-2816-4b8b-b620-091d4eff17a7" data-file-name="components/achievements-section.tsx">
              <h3 className="text-lg font-bold text-slate-900 mb-1" data-unique-id="8f241818-182b-49c2-b98e-2e6df792fc35" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{title}</h3>
              <p className="text-slate-600 font-medium" data-unique-id="48fc26d1-fc64-4d24-b2b1-87035c0c19d3" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{organization}</p>
              <p className="text-slate-500 text-sm" data-unique-id="06bed966-dd70-47c5-b781-12889cfe3ffa" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{year}</p>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors" data-unique-id="b7db674a-2c70-4cc9-925c-c521c5868cdf" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="e06107d1-f145-4d2d-bccb-c9a8cba36884" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="62738ee7-0d37-48c8-9aa9-56e9a330dfda" data-file-name="components/achievements-section.tsx">
          <div className="pt-4 border-t border-slate-200" data-unique-id="37523721-588b-4ff7-804d-178ba88f982a" data-file-name="components/achievements-section.tsx">
            <ul className="space-y-2" data-unique-id="3ecc9226-4697-44d7-a2b0-2f40cef878ec" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
              {details.map((detail, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="16113a7f-801b-4270-9b68-d2b73e9ef35d" data-file-name="components/achievements-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" data-unique-id="de2e119b-79d8-4f87-aef1-3c2ab1f29063" data-file-name="components/achievements-section.tsx" />
                  <span className="text-slate-600" data-unique-id="ef155aeb-0ce5-4aa3-8431-4f0e7dfe0e8d" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">{detail}</span>
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
  }} data-unique-id="57672118-da26-4d5f-abe2-1251b8d2825a" data-file-name="components/achievements-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="9285271b-7dc9-4b62-a866-7f0a473f23d8" data-file-name="components/achievements-section.tsx"><span className="editable-text" data-unique-id="c0633893-ce80-410f-8c13-ebacea0e859f" data-file-name="components/achievements-section.tsx">Major Achievements</span></h2>
      <div className="grid grid-cols-2 gap-6" data-unique-id="116090e9-8524-4edd-8ab7-acf79d46ec46" data-file-name="components/achievements-section.tsx" data-dynamic-text="true">
        {achievements.map((achievement, index) => <AchievementCard key={index} {...achievement} delay={index * 200} data-unique-id="42804090-4bbe-47d0-9d4f-93ba77042d22" data-file-name="components/achievements-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}