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
  }} className="mb-6" data-unique-id="4bf584f9-2518-49ad-93fa-cd81ec548936" data-file-name="components/skills-section.tsx">
      <div className="flex justify-between items-center mb-2" data-unique-id="cea18e1e-19af-47e0-ac28-3535de40025d" data-file-name="components/skills-section.tsx">
        <span className="text-slate-700 font-medium" data-unique-id="15a6e4c4-25a0-4489-9233-1c4c5a2a652e" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{name}</span>
        <span className="text-slate-500 text-sm" data-unique-id="3ca5fc47-844e-49c6-966a-268c0376baf9" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{level}<span className="editable-text" data-unique-id="a056c2a4-60a7-4736-b9ae-01827585c2ca" data-file-name="components/skills-section.tsx">%</span></span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3" data-unique-id="73bd177a-65ee-4f93-9e08-1a60d16fae59" data-file-name="components/skills-section.tsx">
        <div className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }} data-unique-id="b3f9b689-5a25-4b17-bb81-f4f9a517800f" data-file-name="components/skills-section.tsx" />
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
  }} data-unique-id="eca2c9fc-4e10-4475-8b52-9724b8b39c7a" data-file-name="components/skills-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="74a17929-736e-41ca-929b-28c1124dbcc2" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="124a01f8-62d1-4270-9a71-e05ca77e3bae" data-file-name="components/skills-section.tsx">Skills & Expertise</span></h2>
      <div className="grid grid-cols-2 gap-8" data-unique-id="6fd1abe9-8282-4848-9b8b-cf9277e93e81" data-file-name="components/skills-section.tsx">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="2bbbe5eb-25e5-41fc-aab5-ba6852ac44cc" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="fe8d1551-ceaf-4aec-bdeb-a784f7efaa34" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="ad9fbd4a-3c8c-4fff-9ff9-fd6370e48f2f" data-file-name="components/skills-section.tsx">Core Competencies</span></h3>
          {skillBars.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} delay={index * 200} data-unique-id="f713d3a4-25d2-4d97-9dd0-0157cd15a4e2" data-file-name="components/skills-section.tsx" data-dynamic-text="true" />)}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="e5328929-8f85-432a-b339-6ed930f9a469" data-file-name="components/skills-section.tsx">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="59eea610-420f-43a7-86bc-321094eb18e0" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="2806d0e6-c5fb-4df9-acc7-8eaa11d194f9" data-file-name="components/skills-section.tsx">Expertise Radar</span></h3>
          <div className="h-80" data-unique-id="e4d96147-3116-4f5a-8da5-409e1a7137f2" data-file-name="components/skills-section.tsx">
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