"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

interface EducationCardProps {
  degree: string;
  school: string;
  period: string;
  location: string;
  gpa?: string;
  achievements: string[];
  delay: number;
}

function EducationCard({ 
  degree, 
  school, 
  period, 
  location, 
  gpa, 
  achievements, 
  delay 
}: EducationCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow"
    >
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
              <span className="text-sm">{location}</span>
            </div>
            {gpa && (
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span className="text-sm">GPA: {gpa}</span>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Achievements:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2015 - 2017",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      achievements: [
        "Specialized in Distributed Systems and Machine Learning",
        "Teaching Assistant for CS106A (Programming Methodology)",
        "Published research on scalable web architectures",
        "Dean's List for all four semesters"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      period: "2011 - 2015",
      location: "Berkeley, CA",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude graduate",
        "President of Computer Science Society",
        "Led team that won campus-wide coding competition",
        "Completed honors thesis on web security"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Google Cloud Professional Developer",
    "Certified Kubernetes Administrator (CKA)",
    "MongoDB Certified Developer"
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Education & Certifications</h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              {...edu}
              delay={index * 200}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg border border-blue-100 p-6"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">Professional Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100"
              >
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-slate-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
