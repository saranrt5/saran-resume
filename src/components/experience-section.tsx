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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="535c449a-0083-4e82-a8dc-f911f230eb22" data-file-name="components/experience-section.tsx">
      <div className="p-6" data-unique-id="5517729e-0c85-4cab-becb-0119d32de406" data-file-name="components/experience-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="552761a4-0da6-42ef-980f-9911ad836b58" data-file-name="components/experience-section.tsx">
          <div data-unique-id="15bdd58d-38c1-48de-8995-a07543d097f2" data-file-name="components/experience-section.tsx">
            <h3 className="text-xl font-bold text-slate-900" data-unique-id="954e8ebc-0dc3-4148-985e-6a39612dc9cc" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{position}</h3>
            <div className="flex items-center space-x-4 mt-2 text-slate-600" data-unique-id="fec10276-db12-490a-8b5a-a7f485e3f679" data-file-name="components/experience-section.tsx">
              <div className="flex items-center space-x-2" data-unique-id="cf7ddc5e-c7a5-4f79-a28c-7667ba0cca1d" data-file-name="components/experience-section.tsx">
                <Building className="w-4 h-4" />
                <span className="font-medium" data-unique-id="c5e5605e-80e2-4cd6-9865-43ca86c7f42e" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{company}</span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="ce1d2f59-8d73-4d58-b27a-eb76f85116b7" data-file-name="components/experience-section.tsx">
                <Calendar className="w-4 h-4" data-unique-id="07afb5aa-9c2c-4d08-ad75-459380c39cda" data-file-name="components/experience-section.tsx" />
                <span data-unique-id="28284479-2475-44fc-b712-2eb63f4078ce" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{period}</span>
              </div>
              <span data-unique-id="036ca752-e4a5-4326-8522-cb55fc0479e3" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="fbefb43b-45ff-4ddb-9146-52ee57d3b1a0" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="793ff718-3eac-4904-8c47-e733a9937ad8" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="99f211cf-52e4-49b3-8cd7-6d1ec1ad351e" data-file-name="components/experience-section.tsx">
          <div className="space-y-4 pt-4 border-t border-slate-200" data-unique-id="505f5346-360d-4fda-86dd-56ae9188da5f" data-file-name="components/experience-section.tsx">
            <div data-unique-id="fdc23f14-badb-4b7b-af79-0c46130b6f07" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="f07d99fb-9c3f-42d3-9ebb-8ef5fd7590a7" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="5a56b284-78b3-455f-8ba0-bd89a726abbe" data-file-name="components/experience-section.tsx">Key Achievements:</span></h4>
              <ul className="space-y-2" data-unique-id="6c224291-c677-4f17-a92e-089fc81d1d88" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="9f6935ec-cce6-47d3-9f6b-367dd3756d53" data-file-name="components/experience-section.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="cb11cb0e-8266-44a8-ad43-b01169ed6cb6" data-file-name="components/experience-section.tsx" />
                    <span className="text-slate-600" data-unique-id="641cc54a-97cc-4188-8eae-e047859b115f" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{achievement}</span>
                  </li>)}
              </ul>
            </div>
            
            <div data-unique-id="02d6a58d-a264-4cfc-94c9-55b67fe273c9" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="3a83a559-cbbe-4757-a900-a0416453fc86" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="c7290907-f27a-4332-aa4b-a4d92ae21f92" data-file-name="components/experience-section.tsx">Key Skills:</span></h4>
              <div className="flex flex-wrap gap-2" data-unique-id="a60887bc-1d66-46b1-b690-40dfb5c6c835" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium" data-unique-id="4c729e6d-89ac-45bd-9252-cfdd6e443033" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
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
  }} data-unique-id="b75c0398-d62a-4e05-b1e2-97a4a6908679" data-file-name="components/experience-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="4dd115c5-0363-48a5-b677-b4d4504476a5" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="605b92db-3f00-4729-be00-aaaddc8ee456" data-file-name="components/experience-section.tsx">Professional Experience</span></h2>
      <div className="space-y-6" data-unique-id="58fb93cd-9b57-43ec-be56-182a2db639cf" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} delay={index * 200} data-unique-id="72da4981-86ef-467d-9422-1de686708c41" data-file-name="components/experience-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}