"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Code2,
  Sparkles,
  ShieldCheck,
  Brain,
  Rocket,
  Award,
  Heart,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* =========================================================================
   Team Member Schema & Data Definition
   ========================================================================= */
interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  tagline: string;
  bio: string;
  contributions: string[];
  skills: string[];
  avatarGradient: string;
  initials: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "venkatesh",
    name: "Venkatesh",
    role: "Co-Founder & Lead Product Architect",
    badge: "Core System Design",
    tagline: "Architecting the intelligence core powering brief audits and scope analysis.",
    bio: "Venkatesh conceptualized and engineered the overarching system architecture of FreelanceOS. He designed the 5-stage opportunity intelligence pipeline, risk calculation algorithms, and multi-workspace backend that ensure freelancers get instant, accurate project insights.",
    contributions: [
      "Designed system architecture and data models",
      "Engineered 5-stage Brief Audit & Risk Scoring pipeline",
      "Built multi-tenant security & platform state engine",
      "Created truth-checked proposal generation framework",
    ],
    skills: ["System Design", "Node.js", "TypeScript", "Next.js", "System Architecture"],
    avatarGradient: "from-blue-600 to-indigo-700",
    initials: "VE",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "surya",
    name: "Surya",
    role: "Lead AI & Full-Stack Systems Engineer",
    badge: "AI Engineering",
    tagline: "Pioneering Gemini AI integrations and real-time state synchronizations.",
    bio: "Surya spearheaded the Google Gemini AI integration, real-time Firestore sync pipelines, prompt verification logic, and frontend performance optimizations. His work ensures lightning-fast project analysis with zero halluncinated claims.",
    contributions: [
      "Integrated Google Gemini BYOK AI engine",
      "Developed client intelligence & red-flag detector",
      "Implemented real-time data sync & state persistence",
      "Optimized Next.js App Router performance and Vercel edge deployment",
    ],
    skills: ["Google Gemini AI", "React", "Next.js", "Firebase", "Tailwind CSS"],
    avatarGradient: "from-violet-600 to-purple-700",
    initials: "SU",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "madhuri",
    name: "Madhuri",
    role: "Lead Product Designer & UX Strategist",
    badge: "UI/UX & Design Tokens",
    tagline: "Crafting visual aesthetics, glassmorphic interfaces, and mobile UX.",
    bio: "Madhuri defined the visual identity, typography system, and responsive component architecture of FreelanceOS. She focused on making complex data audits intuitive, visually engaging, and accessible across mobile and desktop devices.",
    contributions: [
      "Crafted cohesive design system and glassmorphism styling",
      "Designed mobile-first responsive layout paradigms",
      "Built kinetic typography components and smooth micro-animations",
      "Optimized dashboard workflows and freelancer user journeys",
    ],
    skills: ["Figma", "UI/UX Design", "Tailwind CSS", "Framer Motion", "Design Systems"],
    avatarGradient: "from-emerald-600 to-teal-700",
    initials: "MA",
    links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "srikanth",
    name: "Srikanth",
    role: "Quality Assurance & Product Operations Lead",
    badge: "QA & Reliability",
    tagline: "Ensuring continuous delivery, rock-solid security, and flawless user journeys.",
    bio: "Srikanth oversaw quality assurance testing, security compliance, cross-browser responsiveness, and release operations. He conducted exhaustive testing across diverse freelance briefs to guarantee consistent output quality.",
    contributions: [
      "Established automated testing and quality assurance benchmarks",
      "Validated end-to-end freelancer profile & portfolio workflows",
      "Managed Vercel deployment stability & build verification",
      "Spearheaded user experience optimization and edge-case handling",
    ],
    skills: ["QA Testing", "Security Auditing", "CI/CD", "Vercel Deployments", "Product Ops"],
    avatarGradient: "from-amber-600 to-orange-700",
    initials: "SR",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

/* =========================================================================
   Teams Page Component
   ========================================================================= */
export default function TeamPage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        
        {/* Top Floating Back Button to return to Landing Page */}
        <div className="flex items-center justify-start max-w-5xl mx-auto mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-full px-4.5 py-2.5 transition-all shadow-md group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Minds Behind FreelanceOS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Meet the Builders & Innovators
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            FreelanceOS was crafted by a passionate group of engineers, designers, and product strategists dedicated to leveling the playing field for independent freelancers worldwide.
          </p>
        </motion.div>

        {/* ── Statistics / Value Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto relative z-10"
        >
          {[
            { label: "Core Vision", val: "100% Free Forever", icon: Heart },
            { label: "Proposal Velocity", val: "10x Faster", icon: Zap },
            { label: "AI Verification", val: "Zero Hallucinations", icon: ShieldCheck },
            { label: "Uptime & Quality", val: "99.9% Reliable", icon: Cpu },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm flex flex-col items-center justify-center text-center space-y-1 hover:border-slate-700 transition-colors"
            >
              <stat.icon className="w-5 h-5 text-blue-400 mb-1" />
              <div className="text-base sm:text-lg font-bold text-white tracking-tight">{stat.val}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 2. Narrative / Mission Card ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Rocket className="h-6 w-6 text-blue-400" />
              Our Story & Collaboration
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Applying to freelance projects traditionally required hours of parsing vague briefs, guessing real scope requirements, and hoping clients were legitimate. 
              <strong className="text-white font-semibold ml-1">Venkatesh, Surya, Madhuri, and Srikanth</strong> joined forces to build an end-to-end Opportunity Intelligence platform that instantly analyzes briefs, identifies red flags, checks candidate profile fit, and writes verified proposals.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-3 py-1 text-xs">
                Built with Passion
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 px-3 py-1 text-xs">
                Enterprise Engineering
              </Badge>
              <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-500/30 px-3 py-1 text-xs">
                Freelancer First
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Team Member Cards Grid ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Core Team
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Meet the talented individuals who conceptualized, engineered, designed, and tested FreelanceOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-slate-900/90 border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              {/* Top Card Gradient Blur */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${member.avatarGradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className="space-y-6 relative z-10">
                {/* Header: Avatar, Name & Role */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shadow-lg ring-4 ring-slate-800 flex-shrink-0`}
                  >
                    {member.initials}
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white truncate">
                        {member.name}
                      </h3>
                      <Badge className="bg-slate-800 text-slate-300 border-slate-700 text-[11px] font-mono whitespace-nowrap">
                        {member.badge}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-400 leading-snug">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-400 italic pt-0.5">
                      &quot;{member.tagline}&quot;
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-blue-400" />
                    Key Contributions
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {member.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Skills Badges */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Code2 className="h-3.5 w-3.5 text-purple-400" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/80 relative z-10">
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-[11px] font-medium">GitHub</span>
                  </a>
                )}
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center gap-1.5"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-[11px] font-medium">LinkedIn</span>
                  </a>
                )}
                {member.links.twitter && (
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center gap-1.5"
                  >
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <span className="text-[11px] font-medium">Twitter</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. Get Started Call To Action ── */}
      <section className="border-t border-slate-800 bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to analyze your next project brief?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Experience the opportunity intelligence platform built by Venkatesh, Surya, Madhuri, and Srikanth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/signup">
              <Button size="lg" className="rounded-full px-8 py-6 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 gap-2">
                <span>Start Analyzing Free</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-sm font-semibold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
