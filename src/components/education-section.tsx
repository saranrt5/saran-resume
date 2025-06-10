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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow" data-unique-id="53470f7b-f803-487a-9063-6d8354b646ce" data-file-name="components/education-section.tsx">
      <div className="flex items-start space-x-4" data-unique-id="80fa91fb-9188-4d5b-adcb-f8fdb6f7f628" data-file-name="components/education-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="58d3d230-4fc3-486e-8dd3-94ddaff2da03" data-file-name="components/education-section.tsx">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1" data-unique-id="94a19a6f-7263-46d3-b040-213518f5f75f" data-file-name="components/education-section.tsx">
          <h3 className="text-lg font-bold text-slate-900 mb-2" data-unique-id="0d4bc523-fe24-49da-8b3d-fcb82d374524" data-file-name="components/education-section.tsx" data-dynamic-text="true">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2" data-unique-id="836fd8c5-f82c-42c6-bd05-76198f9c5e42" data-file-name="components/education-section.tsx" data-dynamic-text="true">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4" data-unique-id="b4f2b3f6-4007-493b-9e68-7c816ecb7607" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            <div className="flex items-center space-x-1" data-unique-id="1179a59f-8ca1-4b05-86a2-c2934d9c14cf" data-file-name="components/education-section.tsx">
              <Calendar className="w-4 h-4" data-unique-id="f4472802-261e-4c99-97e7-30534fc46180" data-file-name="components/education-section.tsx" />
              <span className="text-sm" data-unique-id="1e56e766-6942-448c-956f-9d6c33328158" data-file-name="components/education-section.tsx" data-dynamic-text="true">{period}</span>
            </div>
            <div className="flex items-center space-x-1" data-unique-id="4ee9a3a2-7c63-491f-a5d3-71dd61012df8" data-file-name="components/education-section.tsx">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-unique-id="3a2606eb-297b-49c8-89b6-e383cd0ef7c2" data-file-name="components/education-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
            {grade && <div className="flex items-center space-x-1" data-unique-id="33953de1-08e1-4187-9f78-7a4b9d442703" data-file-name="components/education-section.tsx">
                <Award className="w-4 h-4" />
                <span className="text-sm" data-unique-id="2bc2d939-5a0a-4bf9-9644-d61da1f055bd" data-file-name="components/education-section.tsx" data-dynamic-text="true">{grade}</span>
              </div>}
          </div>
          
          <div data-unique-id="034755ee-6b54-4a3c-92d0-71d4176b2c7c" data-file-name="components/education-section.tsx">
            <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="9d983afa-65cf-4f1c-ae73-dd41c8eba54a" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="c589a907-323f-4d19-b02e-42279d0c9fc2" data-file-name="components/education-section.tsx">Achievements:</span></h4>
            <ul className="space-y-1" data-unique-id="e0180720-3637-41fa-8580-5efde0042c91" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="a663857a-8ec8-433b-9598-ac5dd0c9df71" data-file-name="components/education-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="121a083e-a460-448e-ac58-186f32737d5b" data-file-name="components/education-section.tsx" />
                  <span className="text-slate-600 text-sm" data-unique-id="de7e15c7-6d37-4e07-82bd-5df584109af0" data-file-name="components/education-section.tsx" data-dynamic-text="true">{achievement}</span>
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
  }} data-unique-id="5a59291d-fe2e-43cd-a99b-9d52b83e2e99" data-file-name="components/education-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="84b64c4e-c608-4cb8-8b6d-6928e5823368" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="4e37c767-da22-4c63-a1ff-117a6a30722b" data-file-name="components/education-section.tsx">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8" data-unique-id="19639991-bf7b-457f-bbbe-d8a3b4a46462" data-file-name="components/education-section.tsx">
        <div className="space-y-6" data-unique-id="2bed4f24-66d5-4b3a-bf40-dccd11a46faa" data-file-name="components/education-section.tsx" data-dynamic-text="true">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} data-unique-id="93a57ab8-32df-413f-aadf-ad772a050278" data-file-name="components/education-section.tsx" data-dynamic-text="true" />)}
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
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6" data-unique-id="35c5a18c-82b1-43d4-a9ab-d0e0a5db065d" data-file-name="components/education-section.tsx">
          <h3 className="text-xl font-bold text-slate-900 mb-6" data-unique-id="15e83eb2-4e9c-4cb6-94b4-87dbc1984c46" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="da12f3be-b903-4eef-990e-d18a37ab6680" data-file-name="components/education-section.tsx">Professional Certifications</span></h3>
          <div className="space-y-4" data-unique-id="7b0d7d51-bf97-4d2a-b4ff-38cfeb51f148" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" data-unique-id="04fb5b63-61b5-47ca-b8a1-d5c5967c9fd8" data-file-name="components/education-section.tsx">
                <div className="p-2 rounded-lg bg-blue-500 text-white" data-unique-id="6e5542a6-03a8-4124-9db3-9622c7f7a9ba" data-file-name="components/education-section.tsx">
                  <Award className="w-4 h-4" data-unique-id="95561c1a-ca19-4d38-adb2-c595a50d032e" data-file-name="components/education-section.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-slate-700 font-medium" data-unique-id="f7296be9-8c63-4c01-87c1-7b134985b238" data-file-name="components/education-section.tsx" data-dynamic-text="true">{cert}</span>
              </motion.div>)}
          </div>
          
          <div className="mt-8" data-unique-id="d54515a4-f5a5-4930-97e1-8590e7948ea9" data-file-name="components/education-section.tsx">
            <h4 className="text-lg font-semibold text-slate-800 mb-4" data-unique-id="6a3eb5da-b436-4185-9045-51bc57120a44" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="98c4c316-bb5e-4ec5-8095-c09f7b90b3d1" data-file-name="components/education-section.tsx">Technical Tools & Proficiency</span></h4>
            <div className="grid grid-cols-2 gap-3" data-unique-id="bb00023b-90f5-4060-9dee-7aac1fd0ba45" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
            }} className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium text-center" data-unique-id="9b8339f2-fbe8-4822-a073-c72dec187d8f" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                  {tool}
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>;
}