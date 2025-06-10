"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed text-slate-600 mb-4">
          Passionate Senior Software Engineer with 8+ years of experience building scalable web applications 
          and leading high-performing engineering teams. Specialized in full-stack development with expertise 
          in React, Node.js, and cloud technologies.
        </p>
        <p className="text-lg leading-relaxed text-slate-600 mb-4">
          At my current role at TechCorp, I've led the development of critical user-facing features that 
          serve over 2M daily active users, resulting in a 40% increase in user engagement and $5M in 
          additional annual revenue.
        </p>
        <p className="text-lg leading-relaxed text-slate-600">
          I'm passionate about mentoring junior developers, contributing to open-source projects, and 
          staying at the forefront of emerging technologies. Currently exploring AI/ML integration in 
          web applications and distributed systems architecture.
        </p>
      </div>
    </motion.div>
  );
}
