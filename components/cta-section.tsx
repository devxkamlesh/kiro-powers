"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { MagneticButton } from "./magnetic-button";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Level Up</span>
            <br />
            Your Development?
          </h2>

          {/* Description */}
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Get started with production-grade Kiro Powers. Open source, MIT licensed, and ready to use.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <MagneticButton>
              <a
                href="https://github.com/devxkamlesh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white overflow-hidden flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span className="relative z-10">View on GitHub</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </MagneticButton>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/devxkamlesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/devxkamlesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:contact@devxkamlesh.com"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
