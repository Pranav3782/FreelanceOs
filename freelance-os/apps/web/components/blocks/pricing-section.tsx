"use client"

import { Zap, ShieldCheck } from "lucide-react"
import { PricingSection, PricingTier } from "@/components/ui/pricing-section"

const defaultTiers: PricingTier[] = [
  {
    name: "Starter",
    price: {
      monthly: 0,
      yearly: 0,
    },
    currencySymbol: "₹",
    description: "Perfect for freelancers getting started with AI brief audits & client intelligence",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-gray-500 dark:text-gray-400 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "5 Brief Audits / Month",
        description: "Analyze up to 5 client briefs or project descriptions each month",
        included: true,
      },
      {
        name: "Scope & Risk Detection",
        description: "Spot hidden scope creep, missing deliverables, and vague requirements",
        included: true,
      },
      {
        name: "Standard Proposal Generator",
        description: "Generate structured, professional proposal drafts in seconds",
        included: true,
      },
      {
        name: "Client Red Flag Alerts",
        description: "Get basic safety scores and warning indicators for new leads",
        included: true,
      },
      {
        name: "Advanced Pricing Calculator",
        description: "Dynamic rate recommendations based on scope complexity",
        included: false,
      },
      {
        name: "Unlimited Audits & Storage",
        description: "Unlimited analysis history and custom proposal templates",
        included: false,
      },
    ],
  },
  {
    name: "Pro",
    price: {
      monthly: 499,
      yearly: 4790,
    },
    currencySymbol: "₹",
    description: "Ideal for active freelancers & independent agencies closing high-ticket deals",
    highlight: true,
    badge: "Most Popular",
    icon: (
      <div className="relative">
        <ShieldCheck className="w-7 h-7 relative z-10 text-emerald-500 dark:text-emerald-400" />
      </div>
    ),
    features: [
      {
        name: "Unlimited Brief & Contract Audits",
        description: "Analyze unlimited client briefs, RFPs, and contract terms",
        included: true,
      },
      {
        name: "Deep Client Intelligence & Risk Scoring",
        description: "Comprehensive risk breakdown, client reputation signals & safety audit",
        included: true,
      },
      {
        name: "High-Converting AI Proposals",
        description: "Customized, win-optimized proposals tailored to your portfolio",
        included: true,
      },
      {
        name: "Dynamic Rate & Pricing Engine",
        description: "Scope-based pricing recommendations to maximize your project profit",
        included: true,
      },
      {
        name: "Portfolio & Skill Matcher",
        description: "Automatically match past projects & case studies to client briefs",
        included: true,
      },
      {
        name: "Priority 24/7 Support",
        description: "Fast-track email & chat support for urgent proposal deadlines",
        included: true,
      },
    ],
  },
]

function PricingSectionDemo() {
  return <PricingSection tiers={defaultTiers} />
}

export { PricingSection, PricingSectionDemo, defaultTiers }
