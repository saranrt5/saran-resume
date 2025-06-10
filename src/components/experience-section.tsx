"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Building, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  delay: number;
}

function ExperienceCard({ 
  company, 
  position, 
  period, 
  location, 
  description, 
  achievements, 
  technologies, 
  delay 
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{position}</h3>
            <div className="flex items-center space-x-4 mt-2 text-slate-600">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span className="font-medium">{company}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
              <span>{location}</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4">{description}</p>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: "Leading full-stack development of user-facing features for a platform serving 2M+ daily active users.",
      achievements: [
        "Increased user engagement by 40% through implementation of real-time features",
        "Led migration to microservices architecture, reducing system downtime by 60%",
        "Mentored 5 junior developers and established code review best practices",
        "Delivered $5M in additional annual revenue through conversion optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Built scalable web applications from scratch and grew engineering team from 3 to 12 members.",
      achievements: [
        "Architected and built the core platform serving 500K+ users",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
        "Designed and built REST APIs handling 1M+ requests per day",
        "Reduced page load times by 65% through performance optimization"
      ],
      technologies: ["React", "Python", "Django", "Redis", "PostgreSQL", "AWS", "Jenkins"]
    },
    {
      company: "Digital Agency Co.",
      position: "Software Developer",
      period: "2017 - 2019",
      location: "Remote",
      description: "Developed custom web applications for enterprise clients across various industries.",
      achievements: [
        "Delivered 20+ client projects with 100% on-time completion rate",
        "Built custom CMS that increased client productivity by 50%",
        "Implemented automated testing reducing bug reports by 70%",
        "Established development workflow adopted company-wide"
      ],
      technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "Vue.js", "jQuery"]
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            delay={index * 200}
          />
        ))}
      </div>
    </motion.div>
  );
}
