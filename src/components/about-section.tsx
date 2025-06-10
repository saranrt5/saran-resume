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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="6dfa2fb3-a451-48ef-b19a-326d7eb6cbc1" data-file-name="components/about-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-6" data-unique-id="83eb4435-f32c-497c-92b3-2bc4781af991" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="89ff95ed-beaf-4185-a7fa-e4f2cfa05eda" data-file-name="components/about-section.tsx">About Me</span></h2>
      <div className="prose prose-slate max-w-none" data-unique-id="134df947-b62f-455f-892f-6acd6f1f261a" data-file-name="components/about-section.tsx">
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="f91951f7-8585-4bdf-95a8-3b845a061f5f" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="dce1a33f-170d-444c-ad27-9f4abfbc1b63" data-file-name="components/about-section.tsx">
          Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for 
          Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business 
          strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="d2c459a5-87d2-41ba-af3a-4a3331fbb512" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="8ca178a5-c8b8-44b0-b1b5-6b3f89891a8d" data-file-name="components/about-section.tsx">
          At my current role at UST Global serving Walmart Stores and Sam's Club, I've defined and monitored 
          OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment 
          authentication and transaction speed, achieving 40% faster time-to-market and $10M+ in cost efficiencies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600" data-unique-id="ab8bcbc4-347d-4318-a52e-be98e7032b20" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="1e60d483-4e47-4a91-89f4-9d98c0873664" data-file-name="components/about-section.tsx">
          Passionate about building adaptive, user-centric platforms that scale to B2B & B2C users. Proven success 
          in leading cross-functional teams to execute product roadmaps that align customer needs, revenue targets, 
          and compliance standards, boosting conversion rates by 25%+ and reducing risk exposure by 75%.
        </span></p>
      </div>
    </motion.div>;
}