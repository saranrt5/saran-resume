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
  }} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow" data-unique-id="41064ea7-723e-43fc-9288-de590eee67ce" data-file-name="components/metrics-section.tsx">
      <div className="flex items-center justify-between mb-4" data-unique-id="05c6acba-02f7-44e3-9cac-a58d8425578d" data-file-name="components/metrics-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="eec6d572-d45c-4b0e-926f-6a4eae74d329" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-2" data-unique-id="fe981c8f-dac4-4786-b71d-88f324cc7532" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium" data-unique-id="c6e407ca-9dcf-42ce-9412-c4ed58e12cd4" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">{label}</div>
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
  }} data-unique-id="f8801882-1919-4913-b61d-a5d99c0fb97d" data-file-name="components/metrics-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="f1ac48ae-5864-4f94-8455-f5aa555a9a07" data-file-name="components/metrics-section.tsx"><span className="editable-text" data-unique-id="01910ee4-29b8-4c4d-84a6-7c3d6e9cc953" data-file-name="components/metrics-section.tsx">Key Metrics</span></h2>
      <div className="grid grid-cols-4 gap-6" data-unique-id="476c1022-6248-4a14-976d-e726f6d0b282" data-file-name="components/metrics-section.tsx">
        <MetricCard icon={<Award className="w-6 h-6" />} value={15} label="Years Experience" suffix="+" delay={200} />
        <MetricCard icon={<TrendingUp className="w-6 h-6" />} value={40} label="Faster Time-to-Market" suffix="%" delay={400} />
        <MetricCard icon={<DollarSign className="w-6 h-6" />} value={27} label="Cost Efficiencies" suffix="M+" prefix="$" delay={600} />
        <MetricCard icon={<Users className="w-6 h-6" />} value={2} label="Transaction Volume" suffix="M/month" delay={800} />
      </div>
    </motion.div>;
}