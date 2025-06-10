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
  }} className="mb-6" data-unique-id="2b80c5ee-fbbb-482a-88b3-ab5fb139e9ad" data-file-name="components/skills-section.tsx">
      <div className="flex justify-between items-center mb-2" data-unique-id="6d603edf-1dc2-46be-bf40-f3b6af4f56d6" data-file-name="components/skills-section.tsx">
        <span className="text-slate-700 font-medium" data-unique-id="d9159c48-9063-46a2-84b0-27c2d16c3238" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{name}</span>
        <span className="text-slate-500 text-sm" data-unique-id="3f4ec7e4-9f01-4f58-a461-e7f2c598b8ba" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{level}<span className="editable-text" data-unique-id="7cb2d938-bdf3-4743-b165-b292e8c75cc9" data-file-name="components/skills-section.tsx">%</span></span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3" data-unique-id="d17f54f5-ab79-43be-b49b-4f6f31c88245" data-file-name="components/skills-section.tsx">
        <div className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }} data-unique-id="8d01b6c9-0c82-43bd-a6d1-c77aa014fc99" data-file-name="components/skills-section.tsx" />
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
  }} data-unique-id="ed8a5d6e-0a24-44fd-b69a-a91da9b9f510" data-file-name="components/skills-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="bca22e67-4f30-44a2-8e16-504363928be7" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="c5a46df9-2a35-4568-8faf-d3af23493006" data-file-name="components/skills-section.tsx">Skills & Expertise</span></h2>
      <div className="grid grid-cols-2 gap-8" data-unique-id="128835d0-a665-422d-a010-a4f29bd6fd3f" data-file-name="components/skills-section.tsx">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="5ab06ba5-e81a-4089-a932-571797e4502f" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="b3cb28bc-a191-463f-9701-ac71457e003d" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="286cd559-5ff2-4db8-8de8-6310a6ad86fe" data-file-name="components/skills-section.tsx">Core Competencies</span></h3>
          {skillBars.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} delay={index * 200} data-unique-id="72f666fd-c8f2-41d3-9cc0-13ec259b1f2a" data-file-name="components/skills-section.tsx" data-dynamic-text="true" />)}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="afcddf3d-d171-4153-9068-6c861e0eb722" data-file-name="components/skills-section.tsx">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="66c44f0f-9627-4592-9784-23504de2e912" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="dfdb5480-1467-4dfd-a18a-98948f287d8f" data-file-name="components/skills-section.tsx">Expertise Radar</span></h3>
          <div className="h-80" data-unique-id="f19c7671-856b-453c-8b7b-e3dc10c4b839" data-file-name="components/skills-section.tsx">
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