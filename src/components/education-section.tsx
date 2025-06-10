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
  }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow" data-unique-id="7a058137-06e8-458d-930b-a33b6eb4a218" data-file-name="components/education-section.tsx">
      <div className="flex items-start space-x-4" data-unique-id="f485a46d-c9f9-4c4b-8d27-443e25026513" data-file-name="components/education-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="f151d645-2b39-4426-9e33-1470977d70eb" data-file-name="components/education-section.tsx">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1" data-unique-id="0b00fccc-6f13-4a95-b3c9-cd2d4e4be9b8" data-file-name="components/education-section.tsx">
          <h3 className="text-lg font-bold text-slate-900 mb-2" data-unique-id="56f49753-9b88-4e0c-8083-5cdb0e91e83b" data-file-name="components/education-section.tsx" data-dynamic-text="true">{degree}</h3>
          <p className="text-slate-700 font-medium mb-2" data-unique-id="b636287f-d0e7-4c39-bfcc-de776ffa529b" data-file-name="components/education-section.tsx" data-dynamic-text="true">{school}</p>
          <div className="flex items-center space-x-4 text-slate-600 mb-4" data-unique-id="391aa153-1e09-4497-8675-7aa7bcd868b4" data-file-name="components/education-section.tsx" data-dynamic-text="true">
            <div className="flex items-center space-x-1" data-unique-id="571e017a-9213-4c5a-982a-958fe033df10" data-file-name="components/education-section.tsx">
              <Calendar className="w-4 h-4" data-unique-id="c3f1bf2b-e705-4fd9-af8f-3ef229f3840e" data-file-name="components/education-section.tsx" />
              <span className="text-sm" data-unique-id="228f3fa0-59ad-454c-bab1-133a26c12f62" data-file-name="components/education-section.tsx" data-dynamic-text="true">{period}</span>
            </div>
            <div className="flex items-center space-x-1" data-unique-id="15f4d2bb-1f99-4a8a-b72f-602973ac0773" data-file-name="components/education-section.tsx">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-unique-id="0a94601f-9f55-4da5-9353-9f0bea3f19d5" data-file-name="components/education-section.tsx" data-dynamic-text="true">{place}</span>
            </div>
            {grade && <div className="flex items-center space-x-1" data-unique-id="c7bde95e-9ef8-4c00-bd82-60760cb07895" data-file-name="components/education-section.tsx">
                <Award className="w-4 h-4" />
                <span className="text-sm" data-unique-id="5735200c-afbb-4943-807a-c0e5cf405ffe" data-file-name="components/education-section.tsx" data-dynamic-text="true">{grade}</span>
              </div>}
          </div>
          
          <div data-unique-id="c04854f7-b193-49bc-ac21-9d159b5dcafe" data-file-name="components/education-section.tsx">
            <h4 className="font-semibold text-slate-800 mb-2" data-unique-id="f468c7d1-99eb-47de-8d29-e0571383882d" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="2d58467f-ddb6-4665-8d6a-1986fba15ac5" data-file-name="components/education-section.tsx">Achievements:</span></h4>
            <ul className="space-y-1" data-unique-id="77384da6-b9f6-4435-abf1-db4531966267" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start space-x-2" data-unique-id="f20af70a-e8b6-4270-b4e5-5de553f4cc6f" data-file-name="components/education-section.tsx">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" data-unique-id="500276b8-22d7-4d85-bddb-cd396ce1267d" data-file-name="components/education-section.tsx" />
                  <span className="text-slate-600 text-sm" data-unique-id="3cf5c8d3-b4d0-48b9-a94d-603152e8ef2e" data-file-name="components/education-section.tsx" data-dynamic-text="true">{achievement}</span>
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
  }} data-unique-id="fef632ae-3c54-4032-8659-d4ea25ad3134" data-file-name="components/education-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="e47db362-7caa-45f4-8e22-cb378d3e8c00" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="f33c85ed-39c2-4072-9bad-e82523e04c41" data-file-name="components/education-section.tsx">Education & Certifications</span></h2>
      
      <div className="grid grid-cols-2 gap-8" data-unique-id="76fcc3a5-368f-4e92-8cd9-49d1e2d25903" data-file-name="components/education-section.tsx">
        <div className="space-y-6" data-unique-id="1c0dd21d-6142-4614-9277-07e96384c9e1" data-file-name="components/education-section.tsx" data-dynamic-text="true">
          {education.map((edu, index) => <EducationCard key={index} {...edu} delay={index * 200} data-unique-id="7d8961ef-5b4e-4e3e-8730-b0b01f8021ac" data-file-name="components/education-section.tsx" data-dynamic-text="true" />)}
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
      }} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6" data-unique-id="e71c0794-a7d5-4a31-95e7-05782c21c05a" data-file-name="components/education-section.tsx">
          <h3 className="text-xl font-bold text-slate-900 mb-6" data-unique-id="a1fc5b61-e738-4dd2-993d-c0c9aed7040c" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="d77e9bf6-78d6-4820-af80-1034e5d7e3a5" data-file-name="components/education-section.tsx">Professional Certifications</span></h3>
          <div className="space-y-4" data-unique-id="02f962df-6621-473f-957b-ec0bd7ee706a" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
          }} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" data-unique-id="983b45e8-0950-412e-aea2-ac6c77865ba7" data-file-name="components/education-section.tsx">
                <div className="p-2 rounded-lg bg-blue-500 text-white" data-unique-id="6d943446-9698-4fe9-8fa8-d2fa87060ae5" data-file-name="components/education-section.tsx">
                  <Award className="w-4 h-4" data-unique-id="0757a9db-a88a-4fa1-a828-dce7117bd034" data-file-name="components/education-section.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-slate-700 font-medium" data-unique-id="0af77ba3-8438-4b05-b732-2b9d52418d98" data-file-name="components/education-section.tsx" data-dynamic-text="true">{cert}</span>
              </motion.div>)}
          </div>
          
          <div className="mt-8" data-unique-id="ceb8a473-d39d-4b6a-94b3-f3389656536d" data-file-name="components/education-section.tsx">
            <h4 className="text-lg font-semibold text-slate-800 mb-6" data-unique-id="f05bc3ca-5563-4084-a823-edd6873461e0" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="fb853d31-0e66-4f83-98fe-957239493855" data-file-name="components/education-section.tsx">Tools & Technologies</span></h4>
            
            <div className="grid grid-cols-3 gap-6" data-unique-id="2954c901-bab5-4f28-9f12-1ec511635b2c" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {/* Product Management */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="b0257f58-4d02-43a2-86bd-281204d562f6" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="06d775b8-a3e2-421e-b031-947327875e2c" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="7887d678-841c-45bf-b847-0b6504e8fa1d" data-file-name="components/education-section.tsx">Product Management</span></h5>
                <div className="space-y-2" data-unique-id="b3718edf-8b15-42b4-834e-8003d5cbc8b2" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="4db41015-fc52-4be5-9c5a-7f29e6c7c23b" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="9ff2c09d-be84-4b4a-8948-5f8103046704" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="665e6181-0631-4898-9621-8a7c0ed06673" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="22fd0634-9d8a-4e3b-937e-48d5c34ab098" data-file-name="components/education-section.tsx">Data & Analytics</span></h5>
                <div className="space-y-2" data-unique-id="e840f654-ad5d-490a-b252-07ace381de24" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="9f59192d-b4c0-4cd9-ab6d-3e4247949f34" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* AI & ML */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="07007f7a-e037-4e43-a841-7a4c095ba7c0" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="82b2a24e-a8c6-4aa9-a7d5-87791f095742" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="fd2bf4f2-2740-4742-a108-f97576cd2a55" data-file-name="components/education-section.tsx">AI & ML</span></h5>
                <div className="space-y-2" data-unique-id="2090186d-dd1d-48dd-8b7c-b8f7b80e3412" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="c2e2a468-f584-40d1-ae4b-f8874cd0def8" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6" data-unique-id="13d583b6-5eb8-4948-b700-d6ce46585df3" data-file-name="components/education-section.tsx" data-dynamic-text="true">
              {/* Design */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="dbc9d450-0479-4a3e-a578-cfc9c4082c27" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="6ed5b702-09f9-4b33-8418-360b70152d85" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="8358cbd0-d232-42ce-938e-5c4da3e48ff8" data-file-name="components/education-section.tsx">Design</span></h5>
                <div className="space-y-2" data-unique-id="b7026e46-3682-4924-b894-01d86e309f59" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="c6235b79-3902-4261-a9fd-91c33ee42a87" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Enterprise Systems */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="eb8c93f4-6a87-4ab6-901e-74ffa537b59d" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="9ab3f675-0756-41b0-a10c-cb3412247482" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="5fa51511-4113-4818-b624-52ded484db44" data-file-name="components/education-section.tsx">Enterprise Systems</span></h5>
                <div className="space-y-2" data-unique-id="dc3df4be-d43a-4f92-942a-1319ec76fab9" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="d0c0b19a-3293-433d-97de-fc2fbfc7a8f0" data-file-name="components/education-section.tsx" data-dynamic-text="true">
                      {tool}
                    </motion.div>)}
                </div>
              </div>

              {/* Quality & Testing */}
              <div className="bg-slate-50 rounded-lg p-4" data-unique-id="af2d9f0d-3a77-4bdd-8c47-d7647b4f8ee6" data-file-name="components/education-section.tsx">
                <h5 className="font-semibold text-slate-800 mb-3 text-center" data-unique-id="926698b7-df28-4c7d-ab0b-1f247398c41f" data-file-name="components/education-section.tsx"><span className="editable-text" data-unique-id="94cff823-7693-4b5a-9fab-cd2536e3ef34" data-file-name="components/education-section.tsx">Quality & Testing</span></h5>
                <div className="space-y-2" data-unique-id="79cfdf3d-50f6-4ade-ab91-fb9e7297be0d" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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
                }} className="px-3 py-2 bg-white text-slate-700 rounded-md text-sm font-medium text-center border border-slate-200" data-unique-id="b0790257-e00e-42b0-8008-8d5c70d28b3c" data-file-name="components/education-section.tsx" data-dynamic-text="true">
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