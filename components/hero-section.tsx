"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { TypewriterText } from "./typewriter-text";
import { ParticlesBackground } from "./particles-background";
import { MagneticButton } from "./magnetic-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Purple Glow Effects - Enhanced */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Particles */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <div className="mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              <TypewriterText
                text="CTO-in-a-box"
                className="gradient-text block"
              />
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90"
            >
              for <span className="text-primary">SaaS Founders</span>
            </motion.h2>
          </div>

          {/* Outcome Line - NEW */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-4"
          >
            Make production-grade decisions without hiring a CTO
          </motion.p>

          {/* Subheadline - Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12 space-y-2"
          >
            <p className="text-base md:text-lg text-muted-foreground">
              Architecture, Migration & Intelligence Systems — Built for Real Production
            </p>
            <p className="text-sm text-muted-foreground/80">
              19,540+ Lines of Enterprise-Grade Intelligence
            </p>
          </motion.div>

          {/* CTA Buttons - Enhanced Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <MagneticButton>
              <a
                href="https://github.com/devxkamlesh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-primary rounded-full font-bold text-white transition-all duration-200 ease-in hover:shadow-xl hover:shadow-primary/50 hover:bg-primary/90 flex items-center gap-2 text-base"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://kiro.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-4 glass glass-hover font-semibold transition-all duration-200 ease-in text-base"
              >
                <span>Get Kiro IDE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Author Card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="inline-flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-3 px-6 py-3 glass transition-all duration-200 ease-in hover:border-primary/30">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                K
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-white">Kamlesh Choudhary</p>
                <a
                  href="https://linkedin.com/in/devxkamlesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  @devxkamlesh
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Full Stack Engineer & AI Systems Architect
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
