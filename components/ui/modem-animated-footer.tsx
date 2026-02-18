"use client";

import React from "react";
import Link from "next/link";
import {
  NotepadTextDashed,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-background mt-20 relative">
        <div className="max-w-7xl mx-auto relative p-6 py-16">
          
          {/* Main Content - Compact Horizontal Layout */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
            
            {/* Left: Brand Info */}
            <div className="flex-1 max-w-xl">
              <h3 className="text-foreground text-xl font-bold mb-2">
                {brandName}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {brandDescription}
              </p>
            </div>

            {/* Right: Links Grid */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              {/* Nav Links */}
              {navLinks.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h4 className="text-foreground text-sm font-semibold mb-1">Quick Links</h4>
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h4 className="text-foreground text-sm font-semibold mb-1">Connect</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-5 h-5">
                          {link.icon}
                        </div>
                        <span className="sr-only">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-border relative z-10">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <Link
                href={creatorUrl}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Website built by {creatorName}
              </Link>
            )}
          </div>
        </div>

        {/* Large background text */}
        <div
          className="bg-gradient-to-b from-foreground/15 via-foreground/5 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-24 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4 whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 7rem)',
            maxWidth: '95vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 to-background/40 absolute bottom-0 w-full h-32 pointer-events-none"></div>
      </footer>
    </section>
  );
};
