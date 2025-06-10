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
  }} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow" data-unique-id="8a17577f-56d5-4d0e-9df1-bcc86bf67901" data-file-name="components/metrics-section.tsx">
      <div className="flex items-center justify-between mb-4" data-unique-id="e072bd33-e21d-4999-9aeb-bf5d14addef7" data-file-name="components/metrics-section.tsx">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white" data-unique-id="901f2480-935d-4dae-9589-d4d3de37b388" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-2" data-unique-id="3b42c58a-98c8-48e0-bcbc-237195dd61a8" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium" data-unique-id="30a0f348-8d4b-4757-9fe8-7eab1a9576fe" data-file-name="components/metrics-section.tsx" data-dynamic-text="true">{label}</div>
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
  }} data-unique-id="0cc2c920-6d08-4607-a8c1-e92ec445f365" data-file-name="components/metrics-section.tsx">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" data-unique-id="520dfcf1-badd-4bb4-8373-1970af36fed0" data-file-name="components/metrics-section.tsx"><span className="editable-text" data-unique-id="16cfc626-44b8-46af-b48e-974131391597" data-file-name="components/metrics-section.tsx">Key Metrics</span></h2>
      <div className="grid grid-cols-4 gap-6" data-unique-id="75f089ab-043c-4994-a738-0cfb2f1e0092" data-file-name="components/metrics-section.tsx">
        <MetricCard icon={<Award className="w-6 h-6" />} value={15} label="Years Experience" suffix="+" delay={200} />
        <MetricCard icon={<TrendingUp className="w-6 h-6" />} value={40} label="Faster Time-to-Market" suffix="%" delay={400} />
        <MetricCard icon={<DollarSign className="w-6 h-6" />} value={27} label="Cost Efficiencies" suffix="M+" prefix="$" delay={600} />
        <MetricCard icon={<Users className="w-6 h-6" />} value={2} label="Transaction Volume" suffix="M/month" delay={800} />
      </div>
    </motion.div>;
}