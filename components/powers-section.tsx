"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PowerCard } from "./power-card";
import { Search, Code2, Palette } from "lucide-react";
import { getAllPowersStats } from "@/lib/github";

const powers = [
  {
    icon: Search,
    title: "Web Intelligence",
    version: "v2.0.0",
    description: "Master web research, documentation fetching, error lookup, and package intelligence with multi-source verification.",
    features: [
      "Multi-source verification",
      "5-tier source trust hierarchy",
      "Professional research protocols",
      "Error intelligence workflow",
    ],
    stats: { files: 6, lines: "4,069", stars: 0 },
    gradient: "from-purple-500 to-pink-500",
    repo: "kiro-power-web-intelligence",
  },
  {
    icon: Code2,
    title: "Full Stack Architect",
    version: "v2.0.0 Enterprise",
    description: "CTO-level architecture intelligence with adaptive modes for Startup, Scale-Up, and Enterprise systems.",
    features: [
      "Adaptive architecture modes",
      "Risk detection system",
      "CTO-level decision framework",
      "Global response standards",
    ],
    stats: { files: 12, lines: "8,609", stars: 0 },
    gradient: "from-cyan-500 to-blue-500",
    repo: "kiro-power-fullstack-architect",
    highlight: true,
  },
  {
    icon: Palette,
    title: "UI Designer",
    version: "v1.0.0",
    description: "Elite UI/UX design intelligence for SaaS, AI products, dashboards, and design systems with behavioral psychology.",
    features: [
      "Behavioral UX psychology",
      "Performance-aware design",
      "Accessibility compliance",
      "Design system workflows",
    ],
    stats: { files: 12, lines: "6,862", stars: 0 },
    gradient: "from-blue-500 to-purple-500",
    repo: "kiro-power-ui-designer",
  },
];

export function PowersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [githubData, setGithubData] = useState<any>(null);

  useEffect(() => {
    getAllPowersStats().then(setGithubData);
  }, []);

  return (
    <section id="powers" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
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
            <span className="gradient-text">Production-Grade</span> Powers
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Three comprehensive intelligence suites for modern development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {powers.map((power, index) => {
            const repoStats = githubData?.repos.find((r: any) => r.name === power.repo);
            return (
              <motion.div
                key={power.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <PowerCard
                  {...power}
                  githubStats={
                    repoStats
                      ? {
                          stars: repoStats.stargazers_count,
                          forks: repoStats.forks_count,
                        }
                      : undefined
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
