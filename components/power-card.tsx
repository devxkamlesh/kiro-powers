"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Star, FileCode, Code } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface PowerCardProps {
  icon: LucideIcon;
  title: string;
  version: string;
  description: string;
  features: string[];
  stats: {
    files: number;
    lines: string;
    stars: number;
  };
  gradient: string;
  repo: string;
  highlight?: boolean;
  githubStats?: {
    stars: number;
    forks: number;
  };
}

export function PowerCard({
  icon: Icon,
  title,
  version,
  description,
  features,
  stats,
  gradient,
  repo,
  highlight,
  githubStats,
}: PowerCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-full"
    >
      {/* Card */}
      <div
        className={`relative h-full p-8 glass transition-all duration-200 ease-in ${
          highlight ? "border-primary/50 shadow-lg shadow-primary/20" : ""
        } hover:border-primary/70 hover:shadow-primary/30`}
        style={{ transform: "translateZ(75px)" }}
      >
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-6`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Title & Version */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <span className="text-sm text-muted">{version}</span>
        </div>

        {/* Description */}
        <p className="text-muted mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-1.5 flex-shrink-0`} />
              <span className="text-muted">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-white/5">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FileCode className="w-4 h-4 text-muted" />
            </div>
            <div className="text-lg font-bold">{stats.files}</div>
            <div className="text-xs text-muted">Files</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Code className="w-4 h-4 text-muted" />
            </div>
            <div className="text-lg font-bold">{stats.lines}</div>
            <div className="text-xs text-muted">Lines</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-4 h-4 text-muted" />
            </div>
            <div className="text-lg font-bold">{githubStats?.stars ?? stats.stars}</div>
            <div className="text-xs text-muted">Stars</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={`https://github.com/devxkamlesh/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-all duration-200 ease-in"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={`https://github.com/devxkamlesh/${repo}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 ease-in"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
