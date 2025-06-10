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
  }} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow" data-unique-id="59762fff-9541-4816-9ebf-028f5e6adc62" data-file-name="components/metrics-section.tsx">
      <div className="flex items-center justify-between mb-4" data-unique-id="c611af38-6039-4718-b1e0-129a988d8df2" data-file-name="components/metrics-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="f3378634-9a01-42f7-bb2c-bd91f2cec281" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-2" data-unique-id="d8f74923-3bc7-4690-bf0b-600e69fd1781" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium" data-unique-id="51ce7c49-9b21-4b54-b061-f762e51254c5" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">{label}</div>
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
  }} data-unique-id="8d2267da-42a4-40ae-ac5e-5c517fd425a6" data-file-name="components/metrics-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="55c21d24-5b6c-48e9-af31-fe4281840df1" data-file-name="components/metrics-section.tsx"><span className="editable-text" data-unique-id="b48ece07-4057-40f2-a522-b20fd465e88f" data-file-name="components/metrics-section.tsx">Key Metrics</span></h2>
      <div className="grid grid-cols-4 gap-6" data-unique-id="65aa1083-62e8-4e4d-ab55-b2d6417c7908" data-file-name="components/metrics-section.tsx">
        <MetricCard icon={<Award className="w-6 h-6" />} value={15} label="Years Experience" suffix="+" delay={200} />
        <MetricCard icon={<TrendingUp className="w-6 h-6" />} value={40} label="Faster Time-to-Market" suffix="%" delay={400} />
        <MetricCard icon={<DollarSign className="w-6 h-6" />} value={27} label="Cost Efficiencies" suffix="M+" prefix="$" delay={600} />
        <MetricCard icon={<Users className="w-6 h-6" />} value={2} label="Transaction Volume" suffix="M/month" delay={800} />
      </div>
    </motion.div>;
}