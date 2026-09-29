"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  currencySymbol?: string
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
}

interface PricingSectionProps {
  tiers: PricingTier[]
  className?: string
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const buttonStyles = {
    default: cn(
      "h-12 bg-white dark:bg-zinc-900",
      "hover:bg-zinc-50 dark:hover:bg-zinc-800",
      "text-zinc-900 dark:text-zinc-100",
      "border border-zinc-200 dark:border-zinc-800",
      "hover:border-zinc-300 dark:hover:border-zinc-700",
      "shadow-sm hover:shadow-md",
      "text-sm font-medium",
    ),
    highlight: cn(
      "h-12 bg-zinc-900 dark:bg-zinc-100",
      "hover:bg-zinc-800 dark:hover:bg-zinc-300",
      "text-white dark:text-zinc-900",
      "shadow-[0_1px_15px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_1px_20px_rgba(0,0,0,0.15)]",
      "font-semibold text-base",
    ),
  }

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-zinc-900 dark:bg-zinc-100",
    "text-white dark:text-zinc-900",
    "border-none shadow-lg",
  )

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className,
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl text-center">
            Simple, transparent plan
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center max-w-lg">
            Everything you need to analyze client briefs, detect risks, and generate winning proposals.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {tiers.map((tier) => {
            const currentPrice = tier.price.monthly;
            const symbol = tier.currencySymbol || "₹";

            return (
              <div
                key={tier.name}
                className={cn(
                  "relative group backdrop-blur-sm",
                  "rounded-3xl transition-all duration-300",
                  "flex flex-col",
                  tier.highlight
                    ? "bg-gradient-to-b from-blue-500/10 via-slate-50/50 to-transparent dark:from-blue-500/[0.12] dark:via-zinc-900/50"
                    : "bg-white dark:bg-zinc-800/50",
                  "border",
                  tier.highlight
                    ? "border-blue-500/30 dark:border-blue-500/20 shadow-xl"
                    : "border-zinc-200 dark:border-zinc-700 shadow-md",
                  "hover:translate-y-0 hover:shadow-lg",
                )}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-6">
                    <Badge className={badgeStyles}>{tier.badge}</Badge>
                  </div>
                )}

                <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={cn(
                        "p-3 rounded-xl",
                        tier.highlight
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                      )}
                    >
                      {tier.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {tier.name}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                        {currentPrice === 0
                          ? "Free"
                          : `${symbol}${currentPrice.toLocaleString()}`}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {tier.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {tier.features.map((feature) => (
                      <div key={feature.name} className="flex gap-4">
                        <div
                          className={cn(
                            "mt-1 p-0.5 rounded-full transition-colors duration-200 shrink-0",
                            feature.included
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-zinc-400 dark:text-zinc-600",
                          )}
                        >
                          <CheckIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            {feature.name}
                          </div>
                          <div className="text-sm text-zinc-500 dark:text-zinc-400">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <Link href="/login" className="w-full block">
                    <Button
                      className={cn(
                        "w-full relative transition-all duration-300",
                        tier.highlight
                          ? buttonStyles.highlight
                          : buttonStyles.default,
                      )}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>Get Started Free</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { PricingSection }
export type { Feature, PricingTier, PricingSectionProps }
