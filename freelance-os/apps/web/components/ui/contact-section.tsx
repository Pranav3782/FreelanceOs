"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, ShieldCheck, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section className={cn("w-full px-4 py-16 sm:py-24 bg-background text-foreground", className)}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>We&apos;re Here to Help</span>
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            Have questions? <span className="text-blue-600 dark:text-blue-400">Get in touch</span>
          </h2>

          <p className="text-sm text-muted-foreground sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about opportunity audits, enterprise plans, or custom AI models? Send us a message and we&apos;ll reply within 24 hours.
          </p>
        </motion.div>

        {/* Responsive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <Card className="border border-border/60 bg-card shadow-xs rounded-2xl p-6">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Direct Email</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">support@freelanceos.dev</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Fast Response SLA</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">&lt; 24 hours guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Privacy Guaranteed</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Your data and briefs are 100% private</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-5 rounded-2xl border border-border/50 bg-slate-50/50 dark:bg-zinc-900/50 text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground block mb-1">Looking for immediate answers?</span>
              Explore our <a href="/help" className="text-blue-600 dark:text-blue-400 underline font-medium hover:text-blue-700">Help Center</a> for instant guides on parsing briefs, customizing proposals, and managing account settings.
            </div>
          </motion.div>

          {/* Right Column: Clean Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="border border-border/60 bg-card shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="py-10 flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Message Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
                      Thank you <span className="font-semibold text-foreground">{name}</span>. Our team will review your message and reply to <span className="font-semibold text-foreground">{email}</span> within 24 hours.
                    </p>
                    <Button onClick={handleReset} variant="outline" size="sm" className="mt-2 rounded-xl text-xs font-semibold">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs sm:text-sm text-foreground transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs sm:text-sm text-foreground transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        className="w-full rounded-xl border border-input bg-background p-3 text-xs sm:text-sm text-foreground transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all gap-2 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
