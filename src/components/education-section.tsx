"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
interface EducationCardProps {
  degree: string;
  school: string;
  period: string;
  place: string;
  grade?: string;
  achievements: string[];
  delay: number;
}
function EducationCard({
  degree,
  school,
  period,
  place,
  grade,
  achievements,
  delay
}: EducationCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow" data-unique-id="4f2fd5be-f29a-4c4c-afaf-8e32110aa268" data-file-name="components/education-section.tsx">
      <div className="flex items-start space-x-4" data-unique-id="0a65907f-1064-4d86-848e-e1de80317978" data-file-name="components/education-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="42ae832f-8d48-4e2d-9b85-fa79b3248782" data-file-name="components/education-section.tsx">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1" data-unique-id="a369c8e6-56a1-4f50-9e81-98a0aa3d9fc8" data-file-name="components/education-section.tsx">
          <h3 className="text-lg font-bold text-slate-900 mb-2" data-unique-id="239e3620-a964-4662-b58c-4de43e7b52e4" data-file-name="components/education-section.tsx" data-dynamic-text="true">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2" data-unique-id="6883b385-2f7c-4b4a-a1de-1ca5439457e3" data-file-name="components/education-section.tsx" data-dynamic-text="true">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4" data-unique-id="7c091ddd-4c0a-457e-8fee-56630b7338e5" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            <div className="flex items-center space-x-1" data-unique-id="e6272fc0-4c11-41d4-9f20-f42ec8fd3d67" data-file-name="components/education-section.tsx">
              <Calendar className="w-4 h-4" data-unique-id="04e1584a-abb3-4fa3-8789-d3de94ca3b2a" data-file-name="components/education-section.tsx" />
              <span className="text-sm" data-unique-id="2970cb81-3ce7-466c-b4ec-592f27205c68" data-file-name="components/education-section.tsx" data-dynamic-text="true">{period}</span>
            </div>
            <div className="flex items-center space-x-1" data-unique-id="2b483ae2-650f-44d5-b32d-ffb2118a1a7d" data-file-name="components/education-section.tsx">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-unique-id="d3fd9ecd-cd27-4645-b9c9-1f03f7cdb2af" data-file-name="components/education-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
            {grade && <div className="flex items-center space-x-1" data-unique-id="bd2b7f01-5110-4acb-a10b-0b86bb13c395" data-file-name="components/education-section.tsx">
                <Award className="w-4 h-4" />
                <span className="text-sm" data-unique-id="1729a2e6-92f2-4cbd-b30d-3e523ec7a951" data-file-name="components/education-section.tsx" data-dynamic-text="true">{grade}</span>
              </div>}
          </div>
          
          <div data-unique-id="00afd70b-97c5-4389-852a-1eff0daa1e04" data-file-name="components/education-section.tsx">
            <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="f672f733-caeb-4f32-9199-b334b115755c" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="a6fcc984-0a6c-4042-b124-d358c468d3e8" data-file-name="components/education-section.tsx">Achievements:</span></h4>
            <ul className="space-y-1" data-unique-id="eb59e368-b550-42ef-8d59-f39c078490f2" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="c727f3e7-eb1a-424f-b707-a11fca778247" data-file-name="components/education-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="ecac78aa-ac97-47fc-9040-e07f1660856e" data-file-name="components/education-section.tsx" />
                  <span className="text-slate-600 text-sm" data-unique-id="4fbae2f9-360f-4f82-a641-54466216fc00" data-file-name="components/education-section.tsx" data-dynamic-text="true">{achievement}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>;
}
export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const education = [{
    degree: "Master of Business Administration (MBA)",
    school: "Cardiff University",
    period: "09/2008 - 09/2009",
    place: "Cardiff, United Kingdom",
    grade: "First Class Honors",
    achievements: ["Achieved Class 1 degree upon graduation from Master of Business Administration program", "Spearheaded a major finance project focused on forecasting sales and cashflows for Hyundai", "Showcased advanced financial analysis skills through comprehensive business strategy projects", "Graduated from Russell Group Top 10 University with distinction"]
  }, {
    degree: "Bachelor of Technology - Information Technology",
    school: "Anna University",
    period: "07/2004 - 05/2008",
    place: "Chennai, India",
    grade: "First Class Honors",
    achievements: ["Earned a first class degree in Information Technology upon completion of B.Tech program", "Demonstrated proficiency in various IT concepts and technologies", "Acquired extensive knowledge in programming languages and software development", "Strong foundation in computer science fundamentals and software engineering principles"]
  }];
  const certifications = ["Certified Scrum Master - Scrum Alliance", "Six Sigma Green Belt - ASQ"];
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
  }} data-unique-id="734c4862-adeb-439f-85e0-0e554c251fa3" data-file-name="components/education-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="3f69c7a5-6a40-419d-9a13-b55973b75a8c" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="fbb36f20-5e92-4592-88b8-25ab5441c598" data-file-name="components/education-section.tsx">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8" data-unique-id="08d80872-a9fc-479a-b06f-837c8e7573ee" data-file-name="components/education-section.tsx">
        <div className="space-y-6" data-unique-id="76df7068-51e4-4362-8ca2-09c250bcdbb1" data-file-name="components/education-section.tsx" data-dynamic-text="true">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} data-unique-id="aee4e63f-2cf2-4574-81b5-ae0e9905b1a6" data-file-name="components/education-section.tsx" data-dynamic-text="true" />)}
        </div>
        
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: 30
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6" data-unique-id="752bd883-3365-4691-bb20-a1ef1fecd94b" data-file-name="components/education-section.tsx">
          <h3 className="text-xl font-bold text-slate-900 mb-6" data-unique-id="c4c726db-0a93-4a1e-bb4f-28a4fd5ad877" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="8f8f93f7-d46d-4d54-98cb-8fb186796bea" data-file-name="components/education-section.tsx">Professional Certifications</span></h3>
          <div className="space-y-4" data-unique-id="6e128bb0-7aff-44c0-8498-ff6c345b524d" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            {certifications.map((cert, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: 20
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.5,
            delay: 0.6 + index * 0.1
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" data-unique-id="9a5526d9-576b-4da8-a9af-a908c8771cd9" data-file-name="components/education-section.tsx">
                <div className="p-2 rounded-lg bg-blue-500 text-white" data-unique-id="efa68ca2-aa80-4616-8712-85e66c09e9c0" data-file-name="components/education-section.tsx">
                  <Award className="w-4 h-4" data-unique-id="aa1e5aa9-7c3d-4e7a-b887-b9cd9d0b0f15" data-file-name="components/education-section.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-slate-700 font-medium" data-unique-id="20b43e4a-bb58-404a-ba4e-d942646197f7" data-file-name="components/education-section.tsx" data-dynamic-text="true">{cert}</span>
              </motion.div>)}
          </div>
          
          <div className="mt-8" data-unique-id="21d59529-e741-41dc-964c-57c4cf45f88a" data-file-name="components/education-section.tsx">
            <h4 className="text-lg font-semibold text-slate-800 mb-4" data-unique-id="fee0b448-ee83-45e0-8732-4d693a3ee519" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="beac9b06-4d7c-4f29-9bc5-2de972b30adb" data-file-name="components/education-section.tsx">Technical Tools & Proficiency</span></h4>
            <div className="grid grid-cols-2 gap-3" data-unique-id="3573fac8-3e23-4833-89b6-9f52699f8352" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {["JIRA - Professional", "Confluence - Professional", "Tableau - Professional", "SAP Hybris - Professional", "MS Office Suite - Professional", "SQL & DBeaver - Professional"].map((tool, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={isInView ? {
              opacity: 1,
              scale: 1
            } : {
              opacity: 0,
              scale: 0.9
            }} transition={{
              duration: 0.3,
              delay: 0.8 + index * 0.05
            }} className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium text-center" data-unique-id="fbfc4049-557e-473d-925a-e2c83cd1737b" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                  {tool}
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>;
}