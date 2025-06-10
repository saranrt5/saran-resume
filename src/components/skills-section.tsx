"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
const skillsData = [{
  skill: "Product Roadmapping",
  fullMark: 100,
  value: 95
}, {
  skill: "Agile Methodology",
  fullMark: 100,
  value: 90
}, {
  skill: "Payment Systems",
  fullMark: 100,
  value: 92
}, {
  skill: "Stakeholder Mgmt",
  fullMark: 100,
  value: 95
}, {
  skill: "Cost Optimization",
  fullMark: 100,
  value: 92
}, {
  skill: "Cross-functional Leadership",
  fullMark: 100,
  value: 95
}];
const skillBars = [{
  name: "Product Roadmapping",
  level: 95,
  color: "from-blue-500 to-blue-600"
}, {
  name: "Agile Methodology",
  level: 90,
  color: "from-teal-500 to-teal-600"
}, {
  name: "Payment Systems",
  level: 92,
  color: "from-amber-500 to-amber-600"
}, {
  name: "Business Intelligence",
  level: 88,
  color: "from-emerald-500 to-emerald-600"
}, {
  name: "OKR Strategy",
  level: 90,
  color: "from-purple-500 to-purple-600"
}, {
  name: "Vendor Negotiation",
  level: 90,
  color: "from-rose-500 to-rose-600"
}];
interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay: number;
}
function SkillBar({
  name,
  level,
  color,
  delay
}: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    x: -20
  }} animate={isInView ? {
    opacity: 1,
    x: 0
  } : {
    opacity: 0,
    x: -20
  }} transition={{
    duration: 0.5,
    delay: delay / 1000
  }} className="mb-6" data-unique-id="c134c499-72f7-4c7c-88d4-f082eb5c0251" data-file-name="components/skills-section.tsx">
      <div className="flex justify-between items-center mb-2" data-unique-id="c513d2c6-1c74-4821-9034-a34ac138eb9e" data-file-name="components/skills-section.tsx">
        <span className="text-slate-700 font-medium" data-unique-id="e26fc8a0-7f0b-4add-9ab1-7c52fe9e9fc5" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{name}</span>
        <span className="text-slate-500 text-sm" data-unique-id="7ad31960-5260-4bde-ae7b-93c55e1d73d4" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{level}<span className="editable-text" data-unique-id="54bb0e5d-ab75-4e41-b72b-bdba8523efc6" data-file-name="components/skills-section.tsx">%</span></span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3" data-unique-id="9caed9e1-f0e8-4118-8ece-c8a11b24bf26" data-file-name="components/skills-section.tsx">
        <div className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }} data-unique-id="2bd71473-09b3-46d6-b8ab-525eefde1757" data-file-name="components/skills-section.tsx" />
      </div>
    </motion.div>;
}
export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
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
  }} data-unique-id="fe2aa858-af01-4eb5-9783-6d6e4a62794a" data-file-name="components/skills-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="94cf786f-b19d-493a-b393-0dd8ff8f9148" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="30f9a590-391e-4c77-9434-c88552651925" data-file-name="components/skills-section.tsx">Skills & Expertise</span></h2>
      <div className="grid grid-cols-2 gap-8" data-unique-id="61121a9b-ee07-4a0c-bcdd-dcd0baf332e8" data-file-name="components/skills-section.tsx">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="25ce7b85-0cdf-4aa3-9e1c-eff5a5d0d5bc" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="0292adb5-1d14-492c-9f2f-4ca262745dfd" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="ccb2ee6a-0240-468c-84eb-7f1ec8ebf55e" data-file-name="components/skills-section.tsx">Core Competencies</span></h3>
          {skillBars.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} delay={index * 200} data-unique-id="2f9f005c-b0f3-43ac-9491-9ce67ec7a1dd" data-file-name="components/skills-section.tsx" data-dynamic-text="true" />)}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="fd7f860a-6945-4b0d-ab3f-2ce9be221bf2" data-file-name="components/skills-section.tsx">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="e0170e29-86cf-4126-85f4-a5c15e27d0c0" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="5f90190a-cef2-4cf1-a471-21b41e321d56" data-file-name="components/skills-section.tsx">Expertise Radar</span></h3>
          <div className="h-80" data-unique-id="e4e6cf6d-0482-41e2-9cb2-8545434a729d" data-file-name="components/skills-section.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" tick={{
                fontSize: 12,
                fill: '#64748b'
              }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                <Radar name="Skills" dataKey="value" stroke="#1e40af" fill="#1e40af" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>;
}