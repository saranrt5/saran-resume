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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="3424aec9-e872-47fb-97ea-772945d20c67" data-file-name="components/experience-section.tsx">
      <div className="p-6" data-unique-id="b433d6fe-4237-46e6-ad52-5d5f1e626b15" data-file-name="components/experience-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="372e5b01-a8ba-403a-8008-2afe9512337b" data-file-name="components/experience-section.tsx">
          <div data-unique-id="f7467ab4-74f9-4a5a-abed-201d86b0c345" data-file-name="components/experience-section.tsx">
            <h3 className="text-xl font-bold text-slate-900" data-unique-id="3b0821d2-2e33-47e0-be5f-c413246689be" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{position}</h3>
            <div className="flex items-center space-x-4 mt-2 text-slate-600" data-unique-id="c90f3420-c4bd-4c6f-b3f4-1e8687dc215f" data-file-name="components/experience-section.tsx">
              <div className="flex items-center space-x-2" data-unique-id="b1247ff5-bf32-4a35-9c9f-d9fcc673e5a7" data-file-name="components/experience-section.tsx">
                <Building className="w-4 h-4" />
                <span className="font-medium" data-unique-id="4066e7fc-ba43-4ed7-821c-aced93ecbd70" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{company}</span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="01223adc-92ff-4e5a-8488-9463e8a4b969" data-file-name="components/experience-section.tsx">
                <Calendar className="w-4 h-4" data-unique-id="6cfde6a6-53d6-4d7d-8336-667fd4fb2226" data-file-name="components/experience-section.tsx" />
                <span data-unique-id="74f064b9-b4e3-4e6f-b5df-022157655487" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{period}</span>
              </div>
              <span data-unique-id="576b134f-8a01-4fdb-9152-c5b5991be5bd" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="7e297b03-e3df-4261-9908-87cead72fbf9" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="ca127a33-8dfa-4585-97fc-f0d66202ad9d" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="319f88a5-4135-4f85-8b2f-a1912aafaf98" data-file-name="components/experience-section.tsx">
          <div className="space-y-4 pt-4 border-t border-slate-200" data-unique-id="78fe28a3-bd5d-4382-9a7e-3f8035ef11f1" data-file-name="components/experience-section.tsx">
            <div data-unique-id="b51012b2-106d-49a6-b79c-4f7397362cae" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="3fb20d07-fd83-4042-8bcd-25464aebf314" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="efd3d328-b646-4f02-abdd-057b9aa54ffe" data-file-name="components/experience-section.tsx">Key Achievements:</span></h4>
              <ul className="space-y-2" data-unique-id="cc7d9b56-5755-4b50-9e40-636af18f52c7" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="efc4aa43-3dfb-4b61-b55b-cfec84d53dba" data-file-name="components/experience-section.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="fff44c71-63ac-46ba-9769-f81322a1419f" data-file-name="components/experience-section.tsx" />
                    <span className="text-slate-600" data-unique-id="38d3c574-937d-4898-8077-c30517ad306f" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{achievement}</span>
                  </li>)}
              </ul>
            </div>
            
            <div data-unique-id="85ce7eae-ae16-46b7-b7a8-294df16be0a8" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="7cc2bda2-2972-4f81-8203-b107262b2008" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="223c2b81-8eaa-4751-9be7-5a548b4dcab1" data-file-name="components/experience-section.tsx">Key Skills:</span></h4>
              <div className="flex flex-wrap gap-2" data-unique-id="698f7a95-ebed-4f8c-901f-325d7b86c829" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium" data-unique-id="f8e7cf0b-bda7-4c3d-9161-ed3c03c51af6" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
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
    description: "Led the e-commerce payments team for Walmart Stores | Sam's Club, defining OKRs and KPIs that resulted in significant improvements in payment authentication and transaction speed.",
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
  }} data-unique-id="12dcb157-c3e1-4274-a599-3648019345be" data-file-name="components/experience-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="73538514-84cc-4859-9618-284c3cb67037" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="6d7f0f5f-12db-46f5-88e2-5c99dfbb46d6" data-file-name="components/experience-section.tsx">Professional Experience</span></h2>
      <div className="space-y-6" data-unique-id="c45b2be6-3ab6-498c-a5e1-5fabd5d686f9" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} delay={index * 200} data-unique-id="c3680216-70dd-4158-b53e-8864ced69581" data-file-name="components/experience-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}