"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GetStartedCTAProps {
  className?: string;
}

export function GetStartedCTA({ className }: GetStartedCTAProps) {
  return (
    <section className={cn("w-full px-4 py-16 sm:py-24 bg-background text-foreground overflow-hidden", className)}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/[0.06] via-slate-50/50 to-transparent dark:from-blue-500/[0.1] dark:via-zinc-900/50 p-8 sm:p-12 md:p-16 text-center shadow-lg"
        >
          {/* Subtle background glow */}
          <div aria-hidden="true" className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready to Elevate Your Freelance Business?</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
            Have questions or need assistance? <span className="text-blue-600 dark:text-blue-400">Get in touch with us</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our team is here to help you parse client briefs, structure risk audits, setup enterprise accounts, or answer any technical questions.
          </p>

          {/* CTA Buttons - Contact Us -> /contact, Start Free Audit -> /login */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link href="/contact" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                className="w-full h-12 px-8 rounded-2xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/login" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-12 px-8 rounded-2xl text-sm font-semibold border-border/80 hover:bg-accent text-foreground transition-all gap-2"
              >
                <span>Start Free Audit</span>
              </Button>
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-muted-foreground max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>&lt; 24h Response SLA</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
              <span>100% Private & Encrypted</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-purple-500 shrink-0" />
              <span>Direct Engineer Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
