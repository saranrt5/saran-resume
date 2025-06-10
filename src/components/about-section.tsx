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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="7279f7cb-3900-4204-a8b9-3d6ad343f1bf" data-file-name="components/about-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-6" data-unique-id="83627d8f-b0fe-40d5-9521-0e92c8664b2b" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="0b4d650f-6555-4a37-8c3d-d30a7451db66" data-file-name="components/about-section.tsx">About Me</span></h2>
      <div className="prose prose-slate max-w-none" data-unique-id="7bc3fcca-d444-4876-bd10-90f8796bc5d4" data-file-name="components/about-section.tsx">
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="7a156bab-3d21-4a7a-a605-1a88d9a4c4c6" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="1f98c1e3-b81d-478e-bc32-f76ca4d40893" data-file-name="components/about-section.tsx">
          Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for 
          Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business 
          strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="18969ec9-f8d7-4ccd-8c89-3d75a823b163" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="613a08be-860e-4506-adf1-316ddae648af" data-file-name="components/about-section.tsx">
          At my current role at UST Global serving Walmart Stores and Sam's Club, I've defined and monitored 
          OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment 
          authentication and transaction speed, achieving 40% faster time-to-market and $10M+ in cost efficiencies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600" data-unique-id="2b943695-b3d7-482e-a83b-c060e06b6a61" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="4e87a623-6b84-41f1-8934-ccbaaa088f65" data-file-name="components/about-section.tsx">
          Passionate about building adaptive, user-centric platforms that scale to B2B & B2C users. Proven success 
          in leading cross-functional teams to execute product roadmaps that align customer needs, revenue targets, 
          and compliance standards, boosting conversion rates by 25%+ and reducing risk exposure by 75%.
        </span></p>
      </div>
    </motion.div>;
}