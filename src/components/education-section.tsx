"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
interface EducationCardProps {
  degree: string;
  school: string;
  period: string;
  place: string;
  gpa?: string;
  achievements: string[];
  delay: number;
}
function EducationCard({
  degree,
  school,
  period,
  place,
  gpa,
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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow" data-unique-id="0cf8011b-9acd-493a-9b16-7f92ea1376af" data-file-name="components/education-section.tsx">
      <div className="flex items-start space-x-4" data-unique-id="193213eb-d0e4-4a4f-84a3-3f0e63108d96" data-file-name="components/education-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="c57de1fc-f5c6-4676-90d0-2826df865f3c" data-file-name="components/education-section.tsx">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1" data-unique-id="ec48aa77-fedc-4e82-8865-5698181007ce" data-file-name="components/education-section.tsx">
          <h3 className="text-lg font-bold text-slate-900 mb-2" data-unique-id="dad00d22-5645-4f84-a0b9-c4bb3878cd73" data-file-name="components/education-section.tsx" data-dynamic-text="true">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2" data-unique-id="20776572-3dde-43fe-be61-07407081f999" data-file-name="components/education-section.tsx" data-dynamic-text="true">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4" data-unique-id="6e4591a5-32e4-4fca-aae7-e79b1f1da0eb" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            <div className="flex items-center space-x-1" data-unique-id="fab8c004-1291-4a39-8f97-c3507bdf8d20" data-file-name="components/education-section.tsx">
              <Calendar className="w-4 h-4" data-unique-id="8c63b2d5-2cc6-4911-a3fa-96ba7d077287" data-file-name="components/education-section.tsx" />
              <span className="text-sm" data-unique-id="53d2ac30-a98f-40ea-bffc-b0fdeacaa14f" data-file-name="components/education-section.tsx" data-dynamic-text="true">{period}</span>
            </div>
            <div className="flex items-center space-x-1" data-unique-id="99fb95e6-cdc3-470d-afbc-2a2a65be8788" data-file-name="components/education-section.tsx">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-unique-id="092996c4-3cd5-44ad-96ec-3dc9b91829f2" data-file-name="components/education-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
            {gpa && <div className="flex items-center space-x-1" data-unique-id="caaa0670-6c1d-48bf-aef6-fbe54af0ed91" data-file-name="components/education-section.tsx">
                <Award className="w-4 h-4" />
                <span className="text-sm" data-unique-id="55298b6f-d922-44a4-8b2c-41458d1d3ba0" data-file-name="components/education-section.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d7686477-2d26-4c7a-b94e-83efec4d8807" data-file-name="components/education-section.tsx">GPA: </span>{gpa}</span>
              </div>}
          </div>
          
          <div data-unique-id="79f46005-d06b-4984-b360-2d534962e333" data-file-name="components/education-section.tsx">
            <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="301b46e3-10f0-433d-adbc-6371fa4dfc82" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="5676bfc3-35a6-4292-9665-f58e20699927" data-file-name="components/education-section.tsx">Achievements:</span></h4>
            <ul className="space-y-1" data-unique-id="5b5a2621-de83-47cd-a179-26f7e4a43fa6" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="b50c17da-db57-404a-bfff-26e50a9dd5d0" data-file-name="components/education-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="5dc5a62e-0b02-43b5-b7bb-9cf3ff103e4d" data-file-name="components/education-section.tsx" />
                  <span className="text-slate-600 text-sm" data-unique-id="e0c64a77-c0aa-4c24-9a0f-aa8619a02235" data-file-name="components/education-section.tsx" data-dynamic-text="true">{achievement}</span>
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
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2015 - 2017",
    place: "Stanford, CA",
    gpa: "3.9/4.0",
    achievements: ["Specialized in Distributed Systems and Machine Learning", "Teaching Assistant for CS106A (Programming Methodology)", "Published research on scalable web architectures", "Dean's List for all four semesters"]
  }, {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of California, Berkeley",
    period: "2011 - 2015",
    place: "Berkeley, CA",
    gpa: "3.8/4.0",
    achievements: ["Magna Cum Laude graduate", "President of Computer Science Society", "Led team that won campus-wide coding competition", "Completed honors thesis on web security"]
  }];
  const certifications = ["AWS Certified Solutions Architect - Professional", "Google Cloud Professional Developer", "Certified Kubernetes Administrator (CKA)", "MongoDB Certified Developer"];
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
  }} data-unique-id="f9e220c8-ba7f-4763-9587-3f55fa6e3967" data-file-name="components/education-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="4ddada10-2fce-4ef6-90cf-1be46c57e059" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="7bb38db0-9288-467c-a9bc-a3811af856a5" data-file-name="components/education-section.tsx">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8" data-unique-id="95152b47-1464-418a-b66f-3abef4a177e3" data-file-name="components/education-section.tsx">
        <div className="space-y-6" data-unique-id="461aa05d-049d-4fac-b008-7e7c6b684322" data-file-name="components/education-section.tsx" data-dynamic-text="true">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} data-unique-id="3668f2c1-e967-4791-8381-952370da27eb" data-file-name="components/education-section.tsx" data-dynamic-text="true" />)}
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
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6" data-unique-id="aa472df6-b4d5-4c88-b438-57557a6cf793" data-file-name="components/education-section.tsx">
          <h3 className="text-xl font-bold text-slate-900 mb-6" data-unique-id="3e890e28-1910-425f-91df-c7aab860b5fe" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="b716074f-ded0-46f5-8c0a-11a61f102a15" data-file-name="components/education-section.tsx">Professional Certifications</span></h3>
          <div className="space-y-4" data-unique-id="2f88a68e-acba-4b75-9bc6-aea8ec1bf970" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" data-unique-id="02c0bc69-718e-4ac0-9f7b-3fbc216ba149" data-file-name="components/education-section.tsx">
                <div className="p-2 rounded-lg bg-blue-500 text-white" data-unique-id="4a0bd0da-a71b-4f07-bdf8-8f6d1044e7ef" data-file-name="components/education-section.tsx">
                  <Award className="w-4 h-4" data-unique-id="d0ccaa1e-40dd-4e1b-bb5a-1fd530f41a37" data-file-name="components/education-section.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-slate-700 font-medium" data-unique-id="aed3acb4-f81b-4331-aa51-29a03ca337d5" data-file-name="components/education-section.tsx" data-dynamic-text="true">{cert}</span>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </motion.div>;
}