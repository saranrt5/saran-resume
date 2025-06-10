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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow" data-unique-id="2691eb17-7980-43b4-91d1-059c4e5a02a2" data-file-name="components/experience-section.tsx">
      <div className="p-6" data-unique-id="b409b93b-3ff7-4265-9451-a117ef1468ad" data-file-name="components/experience-section.tsx">
        <div className="flex items-start justify-between mb-4" data-unique-id="5727d54a-9414-47ab-ad97-ac2787023a92" data-file-name="components/experience-section.tsx">
          <div data-unique-id="a4a35725-89b5-433f-a173-1108d86321d4" data-file-name="components/experience-section.tsx">
            <h3 className="text-xl font-bold text-slate-900" data-unique-id="f8231839-58df-4200-8b15-3f72f1ee9584" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{position}</h3>
            <div className="flex items-center space-x-4 mt-2 text-slate-600" data-unique-id="18e336cb-b2b8-4bd8-a991-1cf3cbffd59c" data-file-name="components/experience-section.tsx">
              <div className="flex items-center space-x-2" data-unique-id="2f0c0564-4931-4001-b0e9-bdc73f6f605e" data-file-name="components/experience-section.tsx">
                <Building className="w-4 h-4" />
                <span className="font-medium" data-unique-id="85e4a1fd-7ecd-4728-be62-40dec68c507b" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{company}</span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="91906f2d-6a73-4d0a-91c6-b620be4c10b8" data-file-name="components/experience-section.tsx">
                <Calendar className="w-4 h-4" data-unique-id="15b19554-6d86-4c22-ad0b-0d481c6b9d4d" data-file-name="components/experience-section.tsx" />
                <span data-unique-id="eead7e2f-a6e1-47a4-9474-652cd7a414b1" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{period}</span>
              </div>
              <span data-unique-id="d38b7d57-3818-4136-bce1-0954b650c9f7" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" data-unique-id="91bcb2f4-f9e8-4e34-848a-f313b0def894" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <p className="text-slate-600 mb-4" data-unique-id="6175e5cc-e5a0-4fce-ae03-4b81213bd450" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{description}</p>
        
        <motion.div initial={false} animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden" data-unique-id="ffe97950-7496-413e-b1cd-9b828f85eed1" data-file-name="components/experience-section.tsx">
          <div className="space-y-4 pt-4 border-t border-slate-200" data-unique-id="c9b08f82-b663-4636-8872-d06ad5c26e83" data-file-name="components/experience-section.tsx">
            <div data-unique-id="436308f0-757f-476c-9826-504ea248c5d4" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="7d53db7f-b1ba-4f4e-bf96-3ce73999535e" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="fa4dc737-0c21-4cd2-bfef-3dac4c47f49d" data-file-name="components/experience-section.tsx">Key Achievements:</span></h4>
              <ul className="space-y-2" data-unique-id="581c7478-45df-4b64-a2c7-87030a2ba2d8" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="bbe6fd39-2d6e-4018-87a0-a543da1f068f" data-file-name="components/experience-section.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="1fca4931-8c11-40b3-ad49-339d0606ed99" data-file-name="components/experience-section.tsx" />
                    <span className="text-slate-600" data-unique-id="b22e2491-e845-4c23-9ba9-c461e669fcc5" data-file-name="components/experience-section.tsx" data-dynamic-text="true">{achievement}</span>
                  </li>)}
              </ul>
            </div>
            
            <div data-unique-id="5afdaa1c-681b-4adb-895f-168fe2251dca" data-file-name="components/experience-section.tsx">
              <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="f8becda2-a135-41c8-aee6-a31cf0772ae2" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="005f561c-4ed7-4e4c-905a-a1ef3728d2e8" data-file-name="components/experience-section.tsx">Key Skills:</span></h4>
              <div className="flex flex-wrap gap-2" data-unique-id="bf16311b-25c9-4762-b7c4-cdccdbedec00" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
                {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium" data-unique-id="f9ed83a3-61b5-44f6-b506-192228c34dfd" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
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
  }} data-unique-id="22c23f7d-323b-48a6-a6f5-6a8a25b49590" data-file-name="components/experience-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="bacce9ce-cccc-4332-bf53-596b6467702b" data-file-name="components/experience-section.tsx"><span className="editable-text" data-unique-id="290000b6-792b-4f81-b0e6-b8487b4599ad" data-file-name="components/experience-section.tsx">Professional Experience</span></h2>
      <div className="space-y-6" data-unique-id="c7ddc3e7-18a2-4f82-87cd-2074b23a5af0" data-file-name="components/experience-section.tsx" data-dynamic-text="true">
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} delay={index * 200} data-unique-id="41cbaf75-a000-43ab-a142-24d31ead2b4d" data-file-name="components/experience-section.tsx" data-dynamic-text="true" />)}
      </div>
    </motion.div>;
}