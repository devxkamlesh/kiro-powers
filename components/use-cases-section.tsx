"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Rocket, Users, Briefcase, Code, Sparkles } from "lucide-react";

const useCases = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description: "Build your MVP faster with production-ready architecture patterns",
    features: [
      "Rapid prototyping with proven patterns",
      "Cost-effective managed services setup",
      "Scalable from day one",
      "Security best practices included",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Enterprise Teams",
    description: "Scale your applications with enterprise-grade architecture and compliance",
    features: [
      "SOC 2 and GDPR compliance patterns",
      "Microservices architecture guidance",
      "Multi-region deployment strategies",
      "Advanced security implementations",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Development Agencies",
    description: "Deliver client projects faster with consistent, high-quality code",
    features: [
      "Reusable project templates",
      "Client-ready documentation",
      "Professional UI/UX patterns",
      "Faster project delivery",
    ],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Briefcase,
    title: "SaaS Companies",
    description: "Build and scale multi-tenant SaaS applications with confidence",
    features: [
      "Multi-tenant architecture patterns",
      "Subscription and billing integration",
      "User management and RBAC",
      "Performance optimization",
    ],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Code,
    title: "Solo Developers",
    description: "Level up your development skills with production-grade patterns",
    features: [
      "Learn industry best practices",
      "Build portfolio projects faster",
      "Comprehensive documentation",
      "Community support",
    ],
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "AI Product Builders",
    description: "Integrate AI features with proven RAG and LLM implementation patterns",
    features: [
      "RAG system architecture",
      "Vector database integration",
      "Token cost optimization",
      "AI-specific UI patterns",
    ],
    gradient: "from-cyan-500 to-pink-500",
  },
];

export function UseCasesSection() {
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
            Built for <span className="gradient-text">Every Developer</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            From solo developers to enterprise teams, Kiro Powers adapts to your needs and scales with your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>

                {/* Description */}
                <p className="text-muted mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient} mt-1.5 flex-shrink-0`} />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl glass border border-white/10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">500+</div>
              <div className="text-sm text-muted">Developers Using</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-muted">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-sm text-muted">Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
              <div className="text-sm text-muted">Community Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
