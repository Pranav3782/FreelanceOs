"use client"

import { Zap, ShieldCheck } from "lucide-react"
import { PricingSection, PricingTier } from "@/components/ui/pricing-section"

const defaultTiers: PricingTier[] = [
  {
    name: "Free Plan",
    price: {
      monthly: 0,
      yearly: 0,
    },
    currencySymbol: "₹",
    description: "Everything you need to audit client briefs, spot scope risks, and generate winning proposals",
    highlight: true,
    badge: "100% Free Forever",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-blue-600 dark:text-blue-400 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "5 Brief & Contract Audits / Month",
        description: "Analyze client briefs, RFPs, and job posts for hidden requirements",
        included: true,
      },
      {
        name: "Scope Creep & Risk Detection",
        description: "Spot vague deliverables, unrealistic deadlines, and potential red flags",
        included: true,
      },
      {
        name: "AI Proposal Generator",
        description: "Generate structured, professional proposal drafts tailored to the brief",
        included: true,
      },
      {
        name: "Client Intelligence & Safety Alerts",
        description: "Get risk scores and warning indicators before applying to client jobs",
        included: true,
      },
      {
        name: "Dynamic Rate & Pricing Calculator",
        description: "Receive scope-based rate recommendations to price your services confidently",
        included: true,
      },
      {
        name: "Portfolio & Skill Matcher",
        description: "Match your past projects & case studies directly to client requirements",
        included: true,
      },
    ],
  },
]

function PricingSectionDemo() {
  return <PricingSection tiers={defaultTiers} />
}

export { PricingSection, PricingSectionDemo, defaultTiers }
