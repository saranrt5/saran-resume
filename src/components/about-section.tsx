"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
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
    duration: 0.6,
    delay: 0.2
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="83033802-515b-45b4-9234-c77ba5df05f4" data-file-name="components/about-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-6" data-unique-id="74871f15-ff1f-4bfc-ba57-9b0a1fd56321" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="c73a5696-7949-4924-a76e-76c00ad04b9d" data-file-name="components/about-section.tsx">About Me</span></h2>
      <div className="prose prose-slate max-w-none" data-unique-id="0917addf-a875-424d-8b47-a219cddf79f3" data-file-name="components/about-section.tsx">
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="36f01c11-ab27-4730-a5f9-011b111f0bc0" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="209b3f72-d6b8-4187-a77e-ca50fc4bf2e8" data-file-name="components/about-section.tsx">
          Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for 
          Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business 
          strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="b8c99a62-5917-4053-84cd-47e0c22bf7de" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="5b35e810-fac1-4ee0-a5f6-9009f9dc29c2" data-file-name="components/about-section.tsx">
          At my current role at UST Global serving Walmart Stores and Sam's Club, I've defined and monitored 
          OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment 
          authentication and transaction speed, achieving 40% faster time-to-market and $10M+ in cost efficiencies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600" data-unique-id="83d35887-b126-4f26-b2c9-086805973dfd" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="2b3f051b-49a2-47af-ba95-5c7324040851" data-file-name="components/about-section.tsx">
          Passionate about building adaptive, user-centric platforms that scale to B2B & B2C users. Proven success 
          in leading cross-functional teams to execute product roadmaps that align customer needs, revenue targets, 
          and compliance standards, boosting conversion rates by 25%+ and reducing risk exposure by 75%.
        </span></p>
      </div>
    </motion.div>;
}