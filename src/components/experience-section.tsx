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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="e0607b09-7059-4768-a1df-506e4d884009" data-file-name="components/experience-section.tsx">
      <div className="p-6" data-unique-id="7a7edb03-cebd-4a71-ab3d-46974932a826" data-file-name="components/experience-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="2d28d4f7-f53c-463c-8e72-0fbdf236dd9c" data-file-name="components/experience-section.tsx">
          <div data-unique-id="5234999b-a2d7-4ccb-a05b-23dd951cae9e" data-file-name="components/experience-section.tsx">
            <h3 className="text-xl font-bold text-slate-900" data-unique-id="459f8ccf-c9b1-4306-ae8f-9acd131bd600" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{position}</h3>
            <div className="flex items-center space-x-4 mt-2 text-slate-600" data-unique-id="4a3d8176-ec03-4efe-a336-111dc43f78d0" data-file-name="components/experience-section.tsx">
              <div className="flex items-center space-x-2" data-unique-id="56307d11-1340-4501-88f2-05cebf7b1a9b" data-file-name="components/experience-section.tsx">
                <Building className="w-4 h-4" />
                <span className="font-medium" data-unique-id="01e83726-b303-46fd-baa8-e246fef74981" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{company}</span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="b3ceb224-485a-428d-8529-abeb58f539bc" data-file-name="components/experience-section.tsx">
                <Calendar className="w-4 h-4" data-unique-id="0ea35c73-41db-440b-90dd-5482097364c2" data-file-name="components/experience-section.tsx" />
                <span data-unique-id="71b9f320-d51f-4507-b25c-abe46c23d35e" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{period}</span>
              </div>
              <span data-unique-id="4b734fad-8049-411a-9442-f8a2138c9d54" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="d3313b07-7f02-4021-8945-d12293d1750a" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="edb8bb0e-2391-4263-826f-f6db0c5121b6" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="cc754e7e-8b11-424c-98a5-f0dfaf8ee576" data-file-name="components/experience-section.tsx">
          <div className="space-y-4 pt-4 border-t border-slate-200" data-unique-id="2b09073d-2383-48bf-b55d-5f1ab4e4d165" data-file-name="components/experience-section.tsx">
            <div data-unique-id="6b40a065-7de3-4b14-8ca9-32bc0c5f4927" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="57ff1818-a3c9-444f-9a97-b6af60101f7c" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="b9f3aa1b-5749-4689-8d00-eb99958e7b7c" data-file-name="components/experience-section.tsx">Key Achievements:</span></h4>
              <ul className="space-y-2" data-unique-id="6fed2345-9d83-4b0d-a76a-e53a5dc02b00" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="2c4481c3-56b4-4e44-9af1-e20d58feaca4" data-file-name="components/experience-section.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="afafdc9b-43b1-411c-a082-f2cf1de48f51" data-file-name="components/experience-section.tsx" />
                    <span className="text-slate-600" data-unique-id="8dbc4ff6-d211-4ef5-b876-4bd7132d43e5" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{achievement}</span>
                  </li>)}
              </ul>
            </div>
            
            <div data-unique-id="b2e68708-a0ae-4537-97c3-801e61160f70" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="8c5160af-a00d-440a-8ad3-eb27901c4e38" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="f6cbbee9-58b9-4933-8414-8c15c4209d1c" data-file-name="components/experience-section.tsx">Key Skills:</span></h4>
              <div className="flex flex-wrap gap-2" data-unique-id="bd37c885-5951-4191-820d-beba58942b74" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium" data-unique-id="683c4b78-937c-431a-afe4-72670dfca42b" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
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
  }} data-unique-id="d2006c0a-1675-4f1b-b58b-993cc11e9d7e" data-file-name="components/experience-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="c792bcf4-f5a2-4147-bd72-88079547939e" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="f6f0e974-15fc-433e-bdac-770fc72556f5" data-file-name="components/experience-section.tsx">Professional Experience</span></h2>
      <div className="space-y-6" data-unique-id="a2935291-aa56-4546-908b-88189260a471" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} delay={index * 200} data-unique-id="7db4fdb3-7806-4b9c-8b2a-fa69c7c3bd11" data-file-name="components/experience-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}