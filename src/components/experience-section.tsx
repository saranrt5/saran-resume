"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Building, Calendar } from "lucide-react";
interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  place: string;
  description: string;
  achievements: string[];
  technologies: string[];
  delay: number;
}
function ExperienceCard({
  company,
  position,
  period,
  place,
  description,
  achievements,
  technologies,
  delay
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const [isExpanded, setIsExpanded] = useState(false);
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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="abb989c4-aa82-4438-bec5-132c9482aafc" data-file-name="components/experience-section.tsx">
      <div className="p-6" data-unique-id="b3e00909-a764-4e58-86cc-41d01e4a80d7" data-file-name="components/experience-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="ee8fb8bd-9d4e-4367-ba4e-bf844c7aa38f" data-file-name="components/experience-section.tsx">
          <div data-unique-id="e021512a-a58e-4866-a9f5-fbde9cfdf181" data-file-name="components/experience-section.tsx">
            <h3 className="text-xl font-bold text-slate-900" data-unique-id="3a72e36f-5d66-4e3a-8a68-4df1e27a57f2" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{position}</h3>
            <div className="flex items-center space-x-4 mt-2 text-slate-600" data-unique-id="1845c29f-6dd6-4db1-9e04-be5ad90a3941" data-file-name="components/experience-section.tsx">
              <div className="flex items-center space-x-2" data-unique-id="0e6e0c82-b84a-41e3-8cc3-19ea0648b943" data-file-name="components/experience-section.tsx">
                <Building className="w-4 h-4" />
                <span className="font-medium" data-unique-id="b8beb630-600d-4c2f-af4d-7f3640280428" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{company}</span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="890fa731-334d-4958-ae17-a9d7be406523" data-file-name="components/experience-section.tsx">
                <Calendar className="w-4 h-4" data-unique-id="57160424-f2e5-40bc-9b10-fd22644675be" data-file-name="components/experience-section.tsx" />
                <span data-unique-id="d452be23-6429-4e1b-b32b-eee8e9ea0987" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{period}</span>
              </div>
              <span data-unique-id="c9dc4b17-1f61-4a41-8d38-759ab1f84f6e" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="f4ae9c4e-5e24-4f9e-9b74-01071e4954d7" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="83ae8141-273e-4cd8-9cbb-16dc1db9e7b3" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="d7a66604-c203-459b-8f93-1c64ec258acb" data-file-name="components/experience-section.tsx">
          <div className="space-y-4 pt-4 border-t border-slate-200" data-unique-id="24a4919c-a2cb-40c0-882e-8a2a2d403f06" data-file-name="components/experience-section.tsx">
            <div data-unique-id="23287d38-0008-4b3f-97e6-fe88d71dda0a" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="60cd8c6a-c23d-47f1-b010-98780bdd0f13" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="4651d22c-6051-4d9e-a5d8-dabcc7002c2d" data-file-name="components/experience-section.tsx">Key Achievements:</span></h4>
              <ul className="space-y-2" data-unique-id="0232c402-6d2d-4641-814b-dc145f224b15" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="cf4e587b-9b9f-4f17-b834-3de23f24f430" data-file-name="components/experience-section.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="3daa9f3f-d539-4472-8483-6164f16eb8d1" data-file-name="components/experience-section.tsx" />
                    <span className="text-slate-600" data-unique-id="4196b70a-9b11-4704-bdb9-fcaf761ddf9d" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{achievement}</span>
                  </li>)}
              </ul>
            </div>
            
            <div data-unique-id="1afb4ac5-cd12-49b0-9a35-eb66b935b2e8" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="5d2c80ac-1a03-4055-b604-a3afbb2f406f" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="561dff14-9e72-4b61-9753-b6360dd3d9e8" data-file-name="components/experience-section.tsx">Technologies:</span></h4>
              <div className="flex flex-wrap gap-2" data-unique-id="3b12853e-313c-466f-8b2b-b8f886b1793d" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium" data-unique-id="8b1849e8-60e6-415f-af26-b82b61c65ce4" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                    {tech}
                  </span>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>;
}
export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const experiences = [{
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    period: "2021 - Present",
    place: "San Francisco, CA",
    description: "Leading full-stack development of user-facing features for a platform serving 2M+ daily active users.",
    achievements: ["Increased user engagement by 40% through implementation of real-time features", "Led migration to microservices architecture, reducing system downtime by 60%", "Mentored 5 junior developers and established code review best practices", "Delivered $5M in additional annual revenue through conversion optimization"],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
  }, {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    place: "Austin, TX",
    description: "Built scalable web applications from scratch and grew engineering team from 3 to 12 members.",
    achievements: ["Architected and built the core platform serving 500K+ users", "Implemented CI/CD pipeline reducing deployment time by 80%", "Designed and built REST APIs handling 1M+ requests per day", "Reduced page load times by 65% through performance optimization"],
    technologies: ["React", "Python", "Django", "Redis", "PostgreSQL", "AWS", "Jenkins"]
  }, {
    company: "Digital Agency Co.",
    position: "Software Developer",
    period: "2017 - 2019",
    place: "Remote",
    description: "Developed custom web applications for enterprise clients across various industries.",
    achievements: ["Delivered 20+ client projects with 100% on-time completion rate", "Built custom CMS that increased client productivity by 50%", "Implemented automated testing reducing bug reports by 70%", "Established development workflow adopted company-wide"],
    technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "Vue.js", "jQuery"]
  }];
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
  }} data-unique-id="460ad9fb-a330-4306-a0f9-fbb6259b72ec" data-file-name="components/experience-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="027c5c5f-f488-4aec-9365-0788cc784c1f" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="bad46d09-f508-42c6-b719-46b4b6c53abf" data-file-name="components/experience-section.tsx">Work Experience</span></h2>
      <div className="space-y-6" data-unique-id="17456642-5bbd-4cae-a854-90c114f9fe6e" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} delay={index * 200} data-unique-id="c7ca46d2-6b39-4911-8a84-7f8df5d56333" data-file-name="components/experience-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}