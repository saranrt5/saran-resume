"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
const skillsData = [{
  skill: "React/Next.js",
  fullMark: 100,
  value: 95
}, {
  skill: "Node.js",
  fullMark: 100,
  value: 90
}, {
  skill: "TypeScript",
  fullMark: 100,
  value: 92
}, {
  skill: "Python",
  fullMark: 100,
  value: 85
}, {
  skill: "AWS/Cloud",
  fullMark: 100,
  value: 88
}, {
  skill: "System Design",
  fullMark: 100,
  value: 90
}];
const skillBars = [{
  name: "JavaScript/TypeScript",
  level: 95,
  color: "from-blue-500 to-blue-600"
}, {
  name: "React & Next.js",
  level: 92,
  color: "from-teal-500 to-teal-600"
}, {
  name: "Node.js & Express",
  level: 90,
  color: "from-amber-500 to-amber-600"
}, {
  name: "Python & Django",
  level: 85,
  color: "from-emerald-500 to-emerald-600"
}, {
  name: "AWS & Docker",
  level: 88,
  color: "from-purple-500 to-purple-600"
}, {
  name: "System Design",
  level: 87,
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
  }} className="mb-6" data-unique-id="9249454f-02a1-45bb-a507-b78ccade82d5" data-file-name="components/skills-section.tsx">
      <div className="flex justify-between items-center mb-2" data-unique-id="092c45d4-aa42-4508-ad6d-f903c42a50df" data-file-name="components/skills-section.tsx">
        <span className="text-slate-700 font-medium" data-unique-id="acf3df3a-ee08-4255-ae1e-2224620bce2d" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{name}</span>
        <span className="text-slate-500 text-sm" data-unique-id="e6f3ae7b-a0fd-4e1d-a59c-2f7a145e0c5e" data-file-name="components/skills-section.tsx" data-dynamic-text="true">{level}<span className="editable-text" data-unique-id="3ba20a6a-d997-4b2f-ae16-7c335186c687" data-file-name="components/skills-section.tsx">%</span></span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3" data-unique-id="a841471c-4777-4cba-ab69-779c2ed26518" data-file-name="components/skills-section.tsx">
        <div className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }} data-unique-id="f27f4ccc-fc06-40e1-b0bb-188445b91d00" data-file-name="components/skills-section.tsx" />
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
  }} data-unique-id="f6395b20-cdac-4e8b-b67a-e2f504bc9403" data-file-name="components/skills-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="dff5d549-12ef-4909-9a3b-e70367a33912" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="b4789c05-b319-4bb7-974c-080b8806cdb6" data-file-name="components/skills-section.tsx">Skills & Expertise</span></h2>
      <div className="grid grid-cols-2 gap-8" data-unique-id="6db7cd0d-f46a-4b28-91ab-0b473d6cbad3" data-file-name="components/skills-section.tsx">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="badd3358-31ed-4457-96cd-45f9fe3df85f" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="685c85a6-6eaa-423d-b4ea-2ee86087a53f" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="c2a8bb8f-710a-4482-b6a3-43954a2abf48" data-file-name="components/skills-section.tsx">Technical Skills</span></h3>
          {skillBars.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} delay={index * 200} data-unique-id="7fe1745c-d968-46a6-8e26-ea8c7e6165b0" data-file-name="components/skills-section.tsx" data-dynamic-text="true" />)}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="4b7807d2-63d7-40cc-a5b4-491d970e1a6e" data-file-name="components/skills-section.tsx">
          <h3 className="text-xl font-semibold text-slate-800 mb-6" data-unique-id="70a3078e-7aee-499d-bf45-dbc6a278730c" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="39863264-c5eb-422d-8971-82ecab404dc7" data-file-name="components/skills-section.tsx">Expertise Radar</span></h3>
          <div className="h-80" data-unique-id="4b7c6130-4cef-444a-a808-f5f9c6b59bcf" data-file-name="components/skills-section.tsx">
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