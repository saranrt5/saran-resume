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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow" data-unique-id="0d3de4dc-b8c7-4220-9d5c-62a4f2aa9804" data-file-name="components/education-section.tsx">
      <div className="flex items-start space-x-4" data-unique-id="32d40aad-0086-4871-bda3-afb77db5443d" data-file-name="components/education-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="dccdcc1b-fba6-4673-affe-db1b14639e85" data-file-name="components/education-section.tsx">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1" data-unique-id="e674bb5b-5d66-4cda-a0dc-d58bb2558cff" data-file-name="components/education-section.tsx">
          <h3 className="text-lg font-bold text-slate-900 mb-2" data-unique-id="f20f77c8-25b8-47db-944e-f427ebc191ec" data-file-name="components/education-section.tsx" data-dynamic-text="true">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2" data-unique-id="23b3aa3a-6c33-4be5-b22b-1432ae307157" data-file-name="components/education-section.tsx" data-dynamic-text="true">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4" data-unique-id="fedf00c8-97f9-4230-9e29-8c74873c50a3" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            <div className="flex items-center space-x-1" data-unique-id="4e3e3c67-3b35-40da-b011-36d17a3bc3a2" data-file-name="components/education-section.tsx">
              <Calendar className="w-4 h-4" data-unique-id="027617ca-847d-42b8-a493-acb91fc2d1d2" data-file-name="components/education-section.tsx" />
              <span className="text-sm" data-unique-id="ccb83eb9-483e-40de-a1a3-f1cec9ae1048" data-file-name="components/education-section.tsx" data-dynamic-text="true">{period}</span>
            </div>
            <div className="flex items-center space-x-1" data-unique-id="16fabfc6-ede7-4f1f-a0c7-14abb7d07bc9" data-file-name="components/education-section.tsx">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-unique-id="af7a8d94-0939-4cfd-a067-12aa869c494e" data-file-name="components/education-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
            {grade && <div className="flex items-center space-x-1" data-unique-id="98892b01-d9ac-4009-91e4-ba2fdb822344" data-file-name="components/education-section.tsx">
                <Award className="w-4 h-4" />
                <span className="text-sm" data-unique-id="787317fe-d9b3-4b84-a0ea-60654bfa27e7" data-file-name="components/education-section.tsx" data-dynamic-text="true">{grade}</span>
              </div>}
          </div>
          
          <div data-unique-id="6590c0eb-e28e-4215-a263-8291b2fb32b6" data-file-name="components/education-section.tsx">
            <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="2d478da9-7216-4a1a-8074-62f99ed2b959" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="4f066fe3-cc22-4051-aca8-c5be5aa8b9fc" data-file-name="components/education-section.tsx">Achievements:</span></h4>
            <ul className="space-y-1" data-unique-id="7e60e6f2-95ea-4c3b-9801-582a5bf533d6" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="c68788ac-04f1-4c92-9ec4-c202c82b3e70" data-file-name="components/education-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="ecaca907-8668-41af-803e-c60a2759a681" data-file-name="components/education-section.tsx" />
                  <span className="text-slate-600 text-sm" data-unique-id="fb76a375-a83c-4f12-af9a-cd90dccf3350" data-file-name="components/education-section.tsx" data-dynamic-text="true">{achievement}</span>
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
  }} data-unique-id="4f6f7dc9-1e03-4a2d-9e7e-ddd7122544a0" data-file-name="components/education-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="3e564c37-9ee2-433b-a751-3361dd0847d7" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="d370adb8-c54d-41f3-b554-e975e4770475" data-file-name="components/education-section.tsx">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8" data-unique-id="f2b6c8d4-0e6e-49e6-91a1-9e704a638d3d" data-file-name="components/education-section.tsx">
        <div className="space-y-6" data-unique-id="f87052ee-94ea-41b5-aec1-af263b9c510e" data-file-name="components/education-section.tsx" data-dynamic-text="true">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} data-unique-id="a9ced0b7-c108-43c6-89a1-0d094a36ba17" data-file-name="components/education-section.tsx" data-dynamic-text="true" />)}
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
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6" data-unique-id="63df0172-a16e-41f9-a8a2-6c0a775702cb" data-file-name="components/education-section.tsx">
          <h3 className="text-xl font-bold text-slate-900 mb-6" data-unique-id="637dd3df-6c59-4765-bf3b-fe2da43069f3" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="6db9c206-41ff-427b-b2bd-b3aea3477d46" data-file-name="components/education-section.tsx">Professional Certifications</span></h3>
          <div className="space-y-4" data-unique-id="946e7189-cfa3-4e83-878a-5ce35f240888" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" data-unique-id="f54f4396-d4b2-4881-9eae-79db01c712f1" data-file-name="components/education-section.tsx">
                <div className="p-2 rounded-lg bg-blue-500 text-white" data-unique-id="a104fda6-8600-4ccc-ba4c-ad97cbb714e1" data-file-name="components/education-section.tsx">
                  <Award className="w-4 h-4" data-unique-id="756f41b3-c090-4758-91c8-248fdd405ead" data-file-name="components/education-section.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-slate-700 font-medium" data-unique-id="7437ed66-d0e8-43a0-b17d-e07aa5d56a28" data-file-name="components/education-section.tsx" data-dynamic-text="true">{cert}</span>
              </motion.div>)}
          </div>
          
          <div className="mt-8" data-unique-id="acb004bf-835e-4022-8105-21acc4361127" data-file-name="components/education-section.tsx">
            <h4 className="text-lg font-semibold text-slate-800 mb-6" data-unique-id="c6826de9-8d89-47b2-bb14-842618c695a9" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="f71db49f-bf84-48da-8e4b-60639401dcf9" data-file-name="components/education-section.tsx">Tools & Technologies</span></h4>
            
            <div className="grid grid-cols-3 gap-6" data-unique-id="cee25da3-6cc4-46c7-a325-1e3a70b327e4" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {/* Product Management */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="365d6fd6-efbb-4069-a08d-7d5f3a3d8fac" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="3ed02984-d39b-4a9d-a834-86a64cbc2c7c" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="211a44bc-25bd-4683-9a8e-a73bf2be101a" data-file-name="components/education-section.tsx">Product Management</span></h5>
                <div className="space-y-2" data-unique-id="dbecb0a4-fd0a-4679-9fd9-d4fef40006d8" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="e40cc048-dafd-4e41-86d5-7f3cb41df818" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="a994dd76-0fbf-4564-acc6-231e4126729f" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="d77e125e-b776-498d-b926-21e71646ba62" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="d848ac4a-8ea4-4e52-8bdd-f3f2ddbfdc04" data-file-name="components/education-section.tsx">Data & Analytics</span></h5>
                <div className="space-y-2" data-unique-id="e2438a6c-c284-4f4a-950c-28b55d03c503" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="19b57ca8-d5d5-4de0-a676-766ba2eb5b90" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* AI & ML */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="8dfa4118-6cef-411a-8d27-e72a10c3f130" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="1447441c-3f34-4a6e-88e5-2511622f3144" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="79125515-e5b3-41ea-8341-81dbff6ab73c" data-file-name="components/education-section.tsx">AI & ML</span></h5>
                <div className="space-y-2" data-unique-id="3a9d2420-2f10-4b3b-a017-c9f534e68212" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="48929a42-b509-4ee3-a7bc-f95823522449" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6" data-unique-id="d14e9f5b-79b1-4239-b289-021fd52c37bf" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {/* Design */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="02b3b33d-54d0-49ce-8391-8577a6b182c5" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="7c70a9ab-2b68-472a-b522-b216e79764f6" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="42f29fc5-ab27-47b2-9dae-0d69073788d9" data-file-name="components/education-section.tsx">Design</span></h5>
                <div className="space-y-2" data-unique-id="3ec932f4-6d81-46e0-b6a4-f8b743975400" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="bc579560-cf05-4155-a2b1-cfd9f2952977" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Enterprise Systems */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="bfbb5b9a-9dd8-40aa-8752-51c1d17cf198" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="9c4c8df6-85d2-4d3e-a628-721860a76259" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="faf65c63-a9f4-4f1f-b9e6-e57c60a81b15" data-file-name="components/education-section.tsx">Enterprise Systems</span></h5>
                <div className="space-y-2" data-unique-id="bab19094-f1e9-4fed-a2cf-185da2dfb1dc" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="0775de8e-d638-4c83-9025-37055906ab12" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Quality & Testing */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="8c57b0c6-b1f3-47cc-aea7-e039bddb0ccc" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="16116b0b-aff2-4ce9-b3a3-c645bdc0d9d9" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="99c39df1-55ca-4bde-ae13-efe9c2710c3e" data-file-name="components/education-section.tsx">Quality & Testing</span></h5>
                <div className="space-y-2" data-unique-id="564dcbe0-b530-4b5b-8882-f72cdca13ec9" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="a04e7e51-ff9e-487f-b91e-69cffd17ade2" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
