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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-6"><span className="editable-text">About Me</span></h2>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed text-slate-600 mb-4"><span className="editable-text">
          Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for 
          Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business 
          strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4"><span className="editable-text">
          At my current role at UST Global serving Walmart Stores and Sam's Club, I've defined and monitored 
          OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment 
          authentication and transaction speed, achieving 40% faster time-to-market and $10M+ in cost efficiencies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600"><span className="editable-text">
          Passionate about building adaptive, user-centric platforms that scale to B2B & B2C users. Proven success 
          in leading cross-functional teams to execute product roadmaps that align customer needs, revenue targets, 
          and compliance standards, boosting conversion rates by 25%+ and reducing risk exposure by 75%.
        </span></p>
      </div>
    </motion.div>;
}