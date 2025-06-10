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
  }} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow" data-unique-id="fb5eb79a-fdf5-443c-8234-2b4908c0d36a" data-file-name="components/metrics-section.tsx">
      <div className="flex items-center justify-between mb-4" data-unique-id="7c4a7f38-07a4-4dcf-9537-18443e380bdc" data-file-name="components/metrics-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="5f8e6ac9-80ce-4837-8870-2e4176f74e46" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-2" data-unique-id="e0f38219-59fa-446a-b6bf-38e91f3a04c6" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium" data-unique-id="8212e4b4-650d-40c3-974d-1135ab13afa4" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">{label}</div>
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
  }} data-unique-id="e684ca13-8bff-4a32-81e9-e59680d63a1f" data-file-name="components/metrics-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="82179808-ab34-4bd5-85f0-b4a8a4b1a97d" data-file-name="components/metrics-section.tsx"><span className="editable-text" data-unique-id="34912ed1-225f-45ef-96c4-e3e467369352" data-file-name="components/metrics-section.tsx">Key Metrics</span></h2>
      <div className="grid grid-cols-4 gap-6" data-unique-id="c5420ad2-71ad-4697-9e47-3a58f2676eab" data-file-name="components/metrics-section.tsx">
        <MetricCard icon={<Award className="w-6 h-6" />} value={15} label="Years Experience" suffix="+" delay={200} />
        <MetricCard icon={<TrendingUp className="w-6 h-6" />} value={40} label="Faster Time-to-Market" suffix="%" delay={400} />
        <MetricCard icon={<DollarSign className="w-6 h-6" />} value={27} label="Cost Efficiencies" suffix="M+" prefix="$" delay={600} />
        <MetricCard icon={<Users className="w-6 h-6" />} value={2} label="Transaction Volume" suffix="M/month" delay={800} />
      </div>
    </motion.div>;
}