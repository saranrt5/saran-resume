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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow">
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
              <span>{place}</span>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden">
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2"><span className="editable-text">Key Achievements:</span></h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">{achievement}</span>
                  </li>)}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-2"><span className="editable-text">Key Skills:</span></h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
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
    company: "UST Global",
    position: "Product Manager",
    period: "09/2021 - Present",
    place: "Bentonville, United States",
    description: "Led the e-commerce payments team for Walmart Stores | Sam's Club, defining OKRs and KPIs that resulted in significant improvements in payment authentication and transaction speed. Implemented AI/ML algorithms for customer classification and predictive analytics.",
    achievements: ["Defined and monitored OKRs and KPIs resulting in 15% reduction in payment authentication errors and 10% increase in transaction speed", "Optimized authentication workflow with Worldpay, reducing transaction fees by $1.2M annually", "Implemented fraud detection tools that decreased chargebacks by 55% while maintaining 99.9% uptime", "Led development of replenishment product roadmap that decreased manual order processing by 30%"],
    technologies: ["OKR Strategy", "Agile Roadmapping", "Technical Documentation", "Vendor Negotiation", "Cost Optimization", "JIRA", "Confluence", "Worldpay", "Looker", "SQL"]
  }, {
    company: "Hexaware Technologies",
    position: "Lead Business Analyst",
    period: "05/2019 - 07/2021",
    place: "Chennai, India",
    description: "Led the automation of purchase order creation in ServiceNow from SAP Mercury, streamlining the procurement process and improving efficiency for E&Y.",
    achievements: ["Delivered $15 million in annual cost savings by identifying and automating key manual processes", "Developed comprehensive functional requirement specifications (FSRs) for critical business processes", "Successfully spearheaded cross-functional teams achieving 20% efficiency increase and $100,000 in annual cost savings", "Created detailed functional specifications for Reports, Interfaces, Conversions, Enhancements, and Forms (RICEFW) development"],
    technologies: ["Process Automation", "Requirements Gathering", "Cross-functional Leadership", "SAP Mercury", "ServiceNow"]
  }, {
    company: "Arrow Electronics",
    position: "Technical Analyst",
    period: "03/2018 - 01/2019",
    place: "Denver, United States",
    description: "Spearheaded the migration of an eCommerce platform to SAP Hybris from a micro-service architecture, enhancing system efficiency and scalability.",
    achievements: ["Launched shipping consolidation feature optimizing over 500,000 orders and deliveries, resulting in $5 million in annual cost savings", "Designed and implemented single-page checkout process, improving conversion rates by 11% and boosting revenue by 6%", "Integrated third-party APIs for address validation and tracking, enhancing operational accuracy", "Managed technical oversight for User Profile, Cart, and Checkout modules across multiple projects"],
    technologies: ["SAP Hybris Migration", "Cost Reduction Strategies", "Conversion Rate Optimization (CRO)", "API Integrations", "Agile Product Ownership"]
  }, {
    company: "HCL America Inc",
    position: "Senior Business Analyst",
    period: "01/2016 - 02/2018",
    place: "Denver, United States",
    description: "Led the development of an internal application for CenturyLink's customer support team, streamlining the onboarding process for internet, telephone, and digital TV services.",
    achievements: ["Streamlined onboarding process by managing grid connections and generating telephone numbers for customer selection", "Spearheaded creation of eCommerce portal for SD-WAN service company with key features", "Designed innovative solutions for grid management and telephone number generation improving efficiency", "Developed comprehensive use cases, user profiles, and requirement traceability matrices"],
    technologies: ["Business Analysis", "Requirements Gathering", "User Story Creation", "CenturyLink Systems"]
  }, {
    company: "Photon Infotech Inc",
    position: "Senior Business Analyst",
    period: "04/2013 - 08/2015",
    place: "Dallas, United States",
    description: "Partnered with Fortune 500 clients (Walgreens, Neiman Marcus) to deliver strategic business analysis, identifying $12M+ in omnichannel revenue opportunities.",
    achievements: ["Identified $12M+ in omnichannel revenue opportunities through customer journey mapping", "Conceptualized native iOS/Android apps for Olive Garden and Capital Grille achieving 4.8-star ratings across 500K+ downloads", "Led development of innovative iOS app for major retailer integrating advanced features like magic mirror and image search", "Spearheaded design and implementation of adaptive digital platform for Walgreens improving user experience"],
    technologies: ["Enterprise Retail Solutions", "Computer Vision Integration", "Cross-Functional Stakeholder Leadership", "A/B Testing Optimization"]
  }, {
    company: "Royal Bank of Scotland",
    position: "Analyst",
    period: "03/2011 - 04/2013",
    place: "Chennai, India",
    description: "Spearheaded the design, development, and maintenance of the payments, user accounts management, and application security modules.",
    achievements: ["Enhanced system efficiency by 20% and reduced security incidents by 15%", "Served as Subject-Matter Expert (SME) for payments, user accounts management, and application security", "Ensured strict adherence to RBS Group's security and compliance standards achieving zero compliance violations", "Processed 2M+ transactions monthly with zero audit findings"],
    technologies: ["Payment Gateways", "Identity & Access Management (IAM)", "Regulatory Compliance", "Cross-Functional Leadership"]
  }, {
    company: "eNoah iSolutions",
    position: "Business Analyst",
    period: "11/2009 - 02/2011",
    place: "Chennai, India",
    description: "Spearheaded the design and development of a secure .NET project for Hooper Holmes, integrating insurance and medical records into company applications and EHR systems.",
    achievements: ["Designed and developed secure .NET applications for healthcare integration", "Successfully integrated insurance and medical records into company applications", "Implemented efficient solutions to streamline processes and improve data accuracy", "Enhanced EHR system functionality and data security protocols"],
    technologies: [".NET Development", "Healthcare Integration", "Data Security", "EHR Systems"]
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
  }}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center"><span className="editable-text">Professional Experience</span></h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} delay={index * 200} />)}
      </div>
    </motion.div>;
}