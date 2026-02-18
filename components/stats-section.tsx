"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FileCode, Code, Package, Scale } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: 19540,
    suffix: "+",
    label: "Lines of Code",
    description: "Production-ready intelligence",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileCode,
    value: 31,
    suffix: "",
    label: "Files Created",
    description: "Comprehensive documentation",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Package,
    value: 3,
    suffix: "",
    label: "Powers Released",
    description: "Full stack coverage",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Scale,
    value: 100,
    suffix: "%",
    label: "Open Source",
    description: "MIT License • Free forever",
    gradient: "from-pink-500 to-purple-500",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Built for <span className="gradient-text">Production</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Enterprise-grade quality with comprehensive documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                
                {/* Description */}
                <div className="text-xs text-muted">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl glass border border-white/10 text-center">
              <div className="text-2xl font-bold mb-2">8</div>
              <div className="text-sm text-muted">Steering Workflows</div>
            </div>
            <div className="p-6 rounded-xl glass border border-white/10 text-center">
              <div className="text-2xl font-bold mb-2">v2.0.0</div>
              <div className="text-sm text-muted">Enterprise Grade</div>
            </div>
            <div className="p-6 rounded-xl glass border border-white/10 text-center">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted">TypeScript</div>
            </div>
          </div>

          {/* MIT License Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10">
              <Scale className="w-5 h-5 text-primary" />
              <span className="font-semibold">MIT License</span>
              <span className="text-muted">• Free & Open Source</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
