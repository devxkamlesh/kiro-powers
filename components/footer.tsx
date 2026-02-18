"use client";

import { Footer as AnimatedFooter } from "./ui/modem-animated-footer";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/devxkamlesh",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/devxkamlesh",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/devxkamlesh",
      label: "Twitter",
    },
  ];

  const navLinks = [
    { label: "Web Intelligence", href: "https://github.com/devxkamlesh/kiro-power-web-intelligence" },
    { label: "Full Stack Architect", href: "https://github.com/devxkamlesh/kiro-power-fullstack-architect" },
    { label: "UI Designer", href: "https://github.com/devxkamlesh/kiro-power-ui-designer" },
    { label: "Get Kiro IDE", href: "https://kiro.ai" },
  ];

  return (
    <AnimatedFooter
      brandName="Kiro Powers"
      brandDescription="Production-grade Kiro Powers for Full Stack Development. 19,540+ lines of enterprise-grade intelligence for SaaS founders."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="devxkamlesh"
      creatorUrl="https://linkedin.com/in/devxkamlesh"
    />
  );
}
