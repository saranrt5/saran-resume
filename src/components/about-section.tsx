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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="62bc411d-a71a-41b3-b1c3-4a736937dcab" data-file-name="components/about-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-6" data-unique-id="8a4b37e8-de7f-4c4b-9893-71e15950222a" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="ec75d528-c0be-4c2b-a818-4a94f9de2510" data-file-name="components/about-section.tsx">About Me</span></h2>
      <div className="prose prose-slate max-w-none" data-unique-id="e6183714-d84d-4b52-b93d-a16c9c478371" data-file-name="components/about-section.tsx">
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="a8fbf814-9e97-4935-972f-004e917529c7" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="5dc6d8b6-650e-4df5-82e1-6629d29ec3bd" data-file-name="components/about-section.tsx">
          Passionate Senior Software Engineer with 8+ years of experience building scalable web applications 
          and leading high-performing engineering teams. Specialized in full-stack development with expertise 
          in React, Node.js, and cloud technologies.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4" data-unique-id="c48fcf28-db10-48ec-accc-d57a6e701de1" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="44926114-6802-4c01-8475-0cad74de3b08" data-file-name="components/about-section.tsx">
          At my current role at TechCorp, I've led the development of critical user-facing features that 
          serve over 2M daily active users, resulting in a 40% increase in user engagement and $5M in 
          additional annual revenue.
        </span></p>
        <p className="text-lg leading-relaxed text-slate-600" data-unique-id="acafdf89-2b82-4caf-b5be-03b445e8ffde" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="07c74b0f-e313-4802-b5e8-6c2f4e88b909" data-file-name="components/about-section.tsx">
          I'm passionate about mentoring junior developers, contributing to open-source projects, and 
          staying at the forefront of emerging technologies. Currently exploring AI/ML integration in 
          web applications and distributed systems architecture.
        </span></p>
      </div>
    </motion.div>;
}