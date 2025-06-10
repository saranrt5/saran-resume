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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-2">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{place}</span>
            </div>
            {grade && <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span className="text-sm">{grade}</span>
              </div>}
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-2"><span className="editable-text">Achievements:</span></h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{achievement}</span>
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
  }}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} />)}
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
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6"><span className="editable-text">Professional Certifications</span></h3>
          <div className="space-y-4">
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
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-slate-700 font-medium">{cert}</span>
              </motion.div>)}
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-800 mb-6"><span className="editable-text">Tools & Technologies</span></h4>
            
            <div className="grid grid-cols-3 gap-6">
              {/* Product Management */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-3 text-center"><span className="editable-text">Product Management</span></h5>
                <div className="space-y-2">
                  {["JIRA", "Confluence", "Aha!", "ProductPlan", "Miro", "Asana"].map((tool, index) => <motion.div key={index} initial={{
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
                  delay: 0.8 + index * 0.02
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-3 text-center"><span className="editable-text">Data & Analytics</span></h5>
                <div className="space-y-2">
                  {["SQL", "Tableau", "Looker", "DBeaver", "Power BI"].map((tool, index) => <motion.div key={index} initial={{
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
                  delay: 0.9 + index * 0.02
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* AI & ML */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-3 text-center"><span className="editable-text">AI & ML</span></h5>
                <div className="space-y-2">
                  {["TensorFlow", "Machine Learning Platforms", "Jupyter Notebooks", "Python ML Libraries"].map((tool, index) => <motion.div key={index} initial={{
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
                  delay: 1.0 + index * 0.02
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200">
                      {tool}
                    </motion.div>)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
              {/* Design */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-3 text-center"><span className="editable-text">Design</span></h5>
                <div className="space-y-2">
                  {["Figma", "Balsamiq", "Sketch"].map((tool, index) => <motion.div key={index} initial={{
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
                  delay: 1.1 + index * 0.02
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Enterprise Systems */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-3 text-center"><span className="editable-text">Enterprise Systems</span></h5>
                <div className="space-y-2">
                  {["SAP Hybris", "SAP Mercury", "ServiceNow", "Worldpay"].map((tool, index) => <motion.div key={index} initial={{
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
                  delay: 1.2 + index * 0.02
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Quality & Testing */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-3 text-center"><span className="editable-text">Quality & Testing</span></h5>
                <div className="space-y-2">
                  {["HP QC", "TestRail"].map((tool, index) => <motion.div key={index} initial={{
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
                  delay: 1.3 + index * 0.02
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200">
                      {tool}
                    </motion.div>)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>;
}