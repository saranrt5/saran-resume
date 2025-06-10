"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, DollarSign, TrendingUp, Award } from "lucide-react";
interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}
function MetricCard({
  icon,
  value,
  label,
  suffix = "",
  prefix = "",
  delay = 0
}: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = value / 50;
        const counter = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 30);
        return () => clearInterval(counter);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    scale: 0.9
  }} animate={isInView ? {
    opacity: 1,
    scale: 1
  } : {
    opacity: 0,
    scale: 0.9
  }} transition={{
    duration: 0.5,
    delay: delay / 1000
  }} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow" data-unique-id="99a99cf1-9bc6-47ec-8221-491f4d68ab3b" data-file-name="components/metrics-section.tsx">
      <div className="flex items-center justify-between mb-4" data-unique-id="9f82d2a3-47fa-4a53-973e-ceb33565c8ea" data-file-name="components/metrics-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="3da72d60-3602-4b57-b3e3-2fb05e06d334" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-2" data-unique-id="0cf36f8c-ef2c-48e0-9240-639f106e2c78" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium" data-unique-id="e353625b-fc16-4d6c-918f-6994b97db3ed" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">{label}</div>
    </motion.div>;
}
export function MetricsSection() {
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
    duration: 0.6
  }} data-unique-id="5d7f6ec0-0729-46b2-8726-5861eb8eacd2" data-file-name="components/metrics-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="cc64b460-f060-47c0-8ace-c0ae007fb0d4" data-file-name="components/metrics-section.tsx"><span className="editable-text" data-unique-id="dd7c32d4-3868-4fdc-a867-9fabc7dee7a1" data-file-name="components/metrics-section.tsx">Key Metrics</span></h2>
      <div className="grid grid-cols-4 gap-6" data-unique-id="39f0a34f-e454-4d36-86f9-36bee61f0048" data-file-name="components/metrics-section.tsx">
        <MetricCard icon={<Award className="w-6 h-6" />} value={15} label="Years Experience" suffix="+" delay={200} />
        <MetricCard icon={<TrendingUp className="w-6 h-6" />} value={40} label="Faster Time-to-Market" suffix="%" delay={400} />
        <MetricCard icon={<DollarSign className="w-6 h-6" />} value={27} label="Cost Efficiencies" suffix="M+" prefix="$" delay={600} />
        <MetricCard icon={<Users className="w-6 h-6" />} value={2} label="Transaction Volume" suffix="M/month" delay={800} />
      </div>
    </motion.div>;
}