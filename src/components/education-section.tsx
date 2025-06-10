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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow" data-unique-id="69c53881-9626-4efd-ba39-fc1ebc5c948d" data-file-name="components/education-section.tsx">
      <div className="flex items-start space-x-4" data-unique-id="9036065c-ba72-48dc-91ae-f217248b6226" data-file-name="components/education-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="316a11b4-1819-4d91-bc33-734866bdc61a" data-file-name="components/education-section.tsx">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1" data-unique-id="83a6a9c3-a712-4ae3-bf46-f5e02760d971" data-file-name="components/education-section.tsx">
          <h3 className="text-lg font-bold text-slate-900 mb-2" data-unique-id="1473ae81-f3fe-4bc2-a14a-a78740521cea" data-file-name="components/education-section.tsx" data-dynamic-text="true">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2" data-unique-id="ba4ca141-2a39-49b4-ad82-fd04faf566d1" data-file-name="components/education-section.tsx" data-dynamic-text="true">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4" data-unique-id="00d433f5-3590-44a2-a953-817444efb3d0" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            <div className="flex items-center space-x-1" data-unique-id="b5fccc01-3245-4510-8583-35b410b63661" data-file-name="components/education-section.tsx">
              <Calendar className="w-4 h-4" data-unique-id="6c754c1e-9b8d-49fa-95a6-3b23eea50afb" data-file-name="components/education-section.tsx" />
              <span className="text-sm" data-unique-id="742673f4-74bb-4e6f-9464-7134966fe6d7" data-file-name="components/education-section.tsx" data-dynamic-text="true">{period}</span>
            </div>
            <div className="flex items-center space-x-1" data-unique-id="7e142238-1ed9-4c89-84b0-a6538088c81f" data-file-name="components/education-section.tsx">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-unique-id="9dac8575-eb29-476f-b1fe-d93c1f52edc4" data-file-name="components/education-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
            {grade && <div className="flex items-center space-x-1" data-unique-id="79b01769-7c85-4dff-aa07-05f7550001bc" data-file-name="components/education-section.tsx">
                <Award className="w-4 h-4" />
                <span className="text-sm" data-unique-id="0322958c-7d30-4b62-b632-8614791298a4" data-file-name="components/education-section.tsx" data-dynamic-text="true">{grade}</span>
              </div>}
          </div>
          
          <div data-unique-id="17a739b2-8d12-49d1-8d76-85ff7928ee0c" data-file-name="components/education-section.tsx">
            <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="ffdf0ba1-841b-4986-bd5b-fc3dab900255" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="cb9c4149-52f4-42f8-b5ea-cc537e7f890d" data-file-name="components/education-section.tsx">Achievements:</span></h4>
            <ul className="space-y-1" data-unique-id="433e2efb-16d3-409d-b1e5-9b4bcb4ccf8a" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="87ed4ec7-bab0-4bfe-9318-691070b53978" data-file-name="components/education-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="7027fcf4-f99b-4fc5-8177-0506af601d93" data-file-name="components/education-section.tsx" />
                  <span className="text-slate-600 text-sm" data-unique-id="fb899fe9-c5db-4095-9f7d-270b4bab62b2" data-file-name="components/education-section.tsx" data-dynamic-text="true">{achievement}</span>
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
  }} data-unique-id="782a611b-c45c-46a8-ac9b-63f1bbcec443" data-file-name="components/education-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="4e65ad08-0474-4852-ae55-b88e974a5285" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="30e50844-a7d6-480c-b03c-ec0ba4069421" data-file-name="components/education-section.tsx">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8" data-unique-id="d7fc1a09-916b-4ec7-888d-346db422acb1" data-file-name="components/education-section.tsx">
        <div className="space-y-6" data-unique-id="3861f211-7d9a-4d65-aa66-8de7fca6bfdf" data-file-name="components/education-section.tsx" data-dynamic-text="true">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} data-unique-id="eec00e7a-8d01-40d3-ba85-3f4390fd11e6" data-file-name="components/education-section.tsx" data-dynamic-text="true" />)}
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
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6" data-unique-id="d1c90007-aab2-4127-a6b3-8d3c83f67776" data-file-name="components/education-section.tsx">
          <h3 className="text-xl font-bold text-slate-900 mb-6" data-unique-id="4bac1931-3774-4f28-88f1-5647e1e12b07" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="ba388215-5f84-40b6-80ec-86e629f73a27" data-file-name="components/education-section.tsx">Professional Certifications</span></h3>
          <div className="space-y-4" data-unique-id="766acd59-0ea1-42d7-9069-d412f4d20174" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" data-unique-id="13da576b-6dc3-4860-9da5-384874d417da" data-file-name="components/education-section.tsx">
                <div className="p-2 rounded-lg bg-blue-500 text-white" data-unique-id="36adc554-bda9-4786-90ce-8d1d60715549" data-file-name="components/education-section.tsx">
                  <Award className="w-4 h-4" data-unique-id="1a00ab1d-800e-4108-a0f1-26016279433c" data-file-name="components/education-section.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-slate-700 font-medium" data-unique-id="4579b230-be90-4496-b0a5-40469ca31458" data-file-name="components/education-section.tsx" data-dynamic-text="true">{cert}</span>
              </motion.div>)}
          </div>
          
          <div className="mt-8" data-unique-id="a284fa0b-2672-4929-bfdc-ae55df333925" data-file-name="components/education-section.tsx">
            <h4 className="text-lg font-semibold text-slate-800 mb-6" data-unique-id="5b8e6d9b-c85e-40b5-af40-ce1459b26a57" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="91a8931f-ec5d-4f9c-b88a-242b118e2f62" data-file-name="components/education-section.tsx">Tools & Technologies</span></h4>
            
            <div className="grid grid-cols-3 gap-6" data-unique-id="a7cc0627-e954-4080-a0b0-9e6b996fe048" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {/* Product Management */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="12eb5a75-7fcd-45be-a49b-35e94af39495" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="7a25d811-e474-4ab9-83e4-14fd29204cb4" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="bb8af430-c2bf-4b44-b1c4-af5c118bf8c0" data-file-name="components/education-section.tsx">Product Management</span></h5>
                <div className="space-y-2" data-unique-id="8f13c496-abea-4c76-9d61-c6c4f2d5f903" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="ec3ff447-9101-461c-9d7f-5ac93d05190e" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="e7698e30-599c-4cfb-971a-be054038571b" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="c0ba2884-4cae-4a94-afb0-a7217a497129" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="78e29855-9808-4d83-aa8b-2560ff1a3208" data-file-name="components/education-section.tsx">Data & Analytics</span></h5>
                <div className="space-y-2" data-unique-id="4e2d98df-7c7f-412d-bb63-66acd3ac3061" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="3fb2b8ad-d203-468b-9810-092726c64df9" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* AI & ML */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="64ab6829-f81e-49b5-97f7-320badc2e360" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="90684bd9-5b9f-4375-8aeb-f7ef1ddf5860" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="7475071d-78c7-49f4-bb98-a376dec85b5f" data-file-name="components/education-section.tsx">AI & ML</span></h5>
                <div className="space-y-2" data-unique-id="3fb512d9-d828-419e-94e7-f8f824cd3497" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="6623fabc-2810-4035-95b4-6947dc2659b9" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6" data-unique-id="315dc3e5-4654-4b27-baaf-78933ef7aa4c" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {/* Design */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="8cc8c66c-aa2a-46b7-ab2d-2bf34a354b51" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="89325455-d51a-4bc0-bf26-d7a82ee79b73" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="23cd1144-b2d3-454c-af52-014ff6b66d05" data-file-name="components/education-section.tsx">Design</span></h5>
                <div className="space-y-2" data-unique-id="a3353b26-8ee5-4e26-b93a-261343df2446" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="84a0735c-69be-4316-a1b8-1f452218b1f7" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Enterprise Systems */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="f2f4ba80-8ab6-4162-a680-25eae7f2ad1d" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="e868a7e1-6c92-4e69-9a0b-432a71a2427a" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="c0f5fa5b-8a46-475e-b897-1a5f83d13d41" data-file-name="components/education-section.tsx">Enterprise Systems</span></h5>
                <div className="space-y-2" data-unique-id="7ac87bed-dd9a-45a4-89e3-b4f2934a68db" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="6a20ef66-6ce4-4408-8d2d-1d665df3150b" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Quality & Testing */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="c80f5b68-53fc-419d-9eb8-1029eea93283" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="1b1010e7-4d26-425f-9ce0-c6566ed61aa4" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="62dea574-0d3d-4e80-8cd4-7335106581f5" data-file-name="components/education-section.tsx">Quality & Testing</span></h5>
                <div className="space-y-2" data-unique-id="706912c1-4735-4bd9-9583-c9b3ab6a1252" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="19c62efe-b68b-4efd-a7fd-98975afcdc67" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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