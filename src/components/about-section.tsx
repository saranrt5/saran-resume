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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="41a6d868-a1aa-4b11-9660-cb9a5c8b0c57" data-file-name="components/about-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-6" data-unique-id="26c99289-8655-4cda-a06b-bf3dfc97e9a9" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="66ee4efb-2555-48f5-81a1-e16abd70fcb7" data-file-name="components/about-section.tsx">About Me</span></h2>
      <div className="prose prose-slate max-w-none" data-unique-id="a329ea3d-fa6a-4fc9-afc4-ac408812f198" data-file-name="components/about-section.tsx">
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="b7cb6517-059a-4b2c-81cc-8ba889fbabc2" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="74990ccd-5978-4254-bf62-5c92f7e845fb" data-file-name="components/about-section.tsx">
          Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for 
          Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business 
          strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="5f4c0361-3385-4f6d-8f0b-5278081ffa1a" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="6f1c7c39-c4cb-4543-8bc8-9d5de1a5902e" data-file-name="components/about-section.tsx">
          At my current role at UST Global serving Walmart Stores and Sam's Club, I've defined and monitored 
          OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment 
          authentication and transaction speed, achieving 40% faster time-to-market and $10M+ in cost efficiencies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600" data-unique-id="af6e1319-04bb-4a42-9169-faccaee7074a" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="f2dab669-70a9-4410-8761-6477998bbd3f" data-file-name="components/about-section.tsx">
          Passionate about building adaptive, user-centric platforms that scale to B2B & B2C users. Proven success 
          in leading cross-functional teams to execute product roadmaps that align customer needs, revenue targets, 
          and compliance standards, boosting conversion rates by 25%+ and reducing risk exposure by 75%.
        </span></p>
      </div>
    </motion.div>;
}