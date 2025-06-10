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
  }} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-700 font-medium">{name}</span>
        <span className="text-slate-500 text-sm">{level}<span className="editable-text">%</span></span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }} />
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
  }}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Skills & Expertise</span></h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <h3 className="text-xl font-semibold text-slate-800 mb-6"><span className="editable-text">Core Competencies</span></h3>
          {skillBars.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} delay={index * 200} />)}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <h3 className="text-xl font-semibold text-slate-800 mb-6"><span className="editable-text">Expertise Radar</span></h3>
          <div className="h-80">
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