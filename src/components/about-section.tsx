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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="886e7fb9-5eee-4eeb-a7eb-600fa585f9f1" data-file-name="components/about-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-6" data-unique-id="98eb677a-a59b-47f2-8833-34236a81e12b" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="100837d6-9b9b-403e-baba-a55f5474fe3d" data-file-name="components/about-section.tsx">About Me</span></h2>
      <div className="prose prose-slate max-w-none" data-unique-id="3df4c1ec-88cf-4ad6-a716-d72e55310528" data-file-name="components/about-section.tsx">
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="702ad097-6b80-4d5f-92bd-7f3908e2cbb2" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="41b0b271-d3d1-484c-89f5-eb979eb2782c" data-file-name="components/about-section.tsx">
          Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for 
          Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business 
          strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="d16a42ba-c417-429d-8be8-eb8bf26876e2" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="b6b461c6-9366-45ab-aced-0fc9520537e3" data-file-name="components/about-section.tsx">
          At my current role at UST Global serving Walmart Stores and Sam's Club, I've defined and monitored 
          OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment 
          authentication and transaction speed, achieving 40% faster time-to-market and $10M+ in cost efficiencies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600" data-unique-id="13113f13-f182-4f83-a8f2-97bc343a40b3" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="e4347bca-8123-4b55-98e8-f92dcb37f9fa" data-file-name="components/about-section.tsx">
          Passionate about building adaptive, user-centric platforms that scale to B2B & B2C users. Proven success 
          in leading cross-functional teams to execute product roadmaps that align customer needs, revenue targets, 
          and compliance standards, boosting conversion rates by 25%+ and reducing risk exposure by 75%.
        </span></p>
      </div>
    </motion.div>;
}