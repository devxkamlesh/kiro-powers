"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Rocket, 
  Code2, 
  Database, 
  Palette,
  GitBranch,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "Accelerate your development workflow with pre-built intelligence patterns and production-ready code templates.",
    benefits: ["Reduce development time by 60%", "Skip boilerplate code", "Focus on business logic"],
  },
  {
    icon: Shield,
    title: "Enterprise Security Built-in",
    description: "Production-grade security patterns including authentication, authorization, input validation, and rate limiting out of the box.",
    benefits: ["SOC 2 compliance ready", "GDPR compliant patterns", "Security best practices"],
  },
  {
    icon: Code2,
    title: "Full Stack Coverage",
    description: "Complete coverage from frontend React components to backend APIs, database design, and DevOps deployment strategies.",
    benefits: ["Frontend + Backend + Database", "8 specialized workflows", "19,540+ lines of code"],
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "Adaptive architecture modes that grow with your needs - from MVP to enterprise scale with clear transition paths.",
    benefits: ["Startup to Enterprise modes", "Horizontal scaling ready", "Performance optimized"],
  },
  {
    icon: Palette,
    title: "Modern UI/UX Patterns",
    description: "Elite design intelligence with behavioral psychology, accessibility compliance, and performance-aware component architecture.",
    benefits: ["WCAG AA compliant", "Mobile-first responsive", "Dark mode support"],
  },
  {
    icon: GitBranch,
    title: "Open Source & Extensible",
    description: "MIT licensed, fully open source with comprehensive documentation. Fork, customize, and extend to match your needs.",
    benefits: ["MIT License", "Active community", "Regular updates"],
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why Choose <span className="gradient-text">Kiro Powers</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Production-grade development tools that save time, reduce errors, and scale with your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted mb-6">
            Join developers building production-grade applications faster
          </p>
          <a
            href="#powers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <Rocket className="w-5 h-5" />
            Explore All Powers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
