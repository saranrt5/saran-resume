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
  }} className="mb-6" data-unique-id="b4bdbad3-9278-456b-9dd5-22ca9c2a7ad4" data-file-name="components/skills-section.tsx">
      <div className="flex justify-between items-center mb-2" data-unique-id="cce97ed8-c9c8-4c9e-a62e-99167f930ea8" data-file-name="components/skills-section.tsx">
        <span className="text-slate-700 font-medium" data-unique-id="93fcd700-fa02-436f-867d-f52533f05c3c" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{name}</span>
        <span className="text-slate-500 text-sm" data-unique-id="50f2e172-6bf8-41cf-9bcc-0cb0b4f9c7f0" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{level}<span className="editable-text" data-unique-id="104504b0-48f3-49de-9f53-a223078061a1" data-file-name="components/skills-section.tsx">%</span></span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3" data-unique-id="27e98d5a-0624-4a0f-a0b8-75b2f692c5d0" data-file-name="components/skills-section.tsx">
        <div className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }} data-unique-id="801455cd-3aff-4a36-b918-28b6274071c7" data-file-name="components/skills-section.tsx" />
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
  }} data-unique-id="1861d90f-1400-403c-ab87-39e6f36dd060" data-file-name="components/skills-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="5e6a2f09-4ea6-4533-ba83-dfc31e137310" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="eb4f5e75-cfeb-4ce4-8aea-bc699c9867fe" data-file-name="components/skills-section.tsx">Skills & Expertise</span></h2>
      <div className="grid grid-cols-2 gap-8" data-unique-id="cc740071-8f4f-4504-8b00-40425aba161e" data-file-name="components/skills-section.tsx">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="ef8e587c-4e69-4448-8276-841093ba96a8" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="f0cbfa8c-caa2-400d-96cc-1a897515b4c5" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="bc6bfbb0-b086-48f8-a876-57339dec02f0" data-file-name="components/skills-section.tsx">Core Competencies</span></h3>
          {skillBars.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} delay={index * 200} data-unique-id="021cb247-aea5-4396-9a18-7e1082213cdf" data-file-name="components/skills-section.tsx" data-dynamic-text="true" />)}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="36420eff-6fc5-450f-9bb3-5a97c83ec189" data-file-name="components/skills-section.tsx">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="5f236bfd-1b97-4abe-bc74-c21311447c8a" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="be58ab33-31de-4f43-9fa5-e2763601bb8f" data-file-name="components/skills-section.tsx">Expertise Radar</span></h3>
          <div className="h-80" data-unique-id="3edd3259-e6f4-4d3e-b3e0-ebe9f0a27abc" data-file-name="components/skills-section.tsx">
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