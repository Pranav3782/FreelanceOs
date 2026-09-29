"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "What is FreelanceOS and how does it help me?",
    answer:
      "FreelanceOS is an Opportunity Intelligence platform that analyzes client briefs, detects hidden project risks or scope creep, and helps you generate winning proposals quickly.",
  },
  {
    question: "How does the AI Brief Audit work?",
    answer:
      "Simply paste any client brief or project description. Our AI instantly scans the text for ambiguous requirements, unrealistic deadlines, and potential red flags before you apply.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! FreelanceOS is 100% free forever for core brief audits, scope risk detection, client safety signals, and proposal generation without requiring a credit card.",
  },
  {
    question: "Can I use FreelanceOS for any type of freelance project?",
    answer:
      "Yes! FreelanceOS supports all tech, design, writing, consulting, and development project briefs from Upwork, Fiverr, LinkedIn, or direct client contracts.",
  },
  {
    question: "Is my client and project data secure?",
    answer:
      "Yes, absolutely. We use enterprise-grade Firebase encryption and security rules. Your uploaded briefs, proposal drafts, and account data remain completely private to you.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-4 inline-flex rounded-full bg-blue-500/10 p-3"
            aria-hidden="true"
          >
            <HelpCircle
              className="h-8 w-8 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base md:text-lg">
            Everything you need to know about FreelanceOS in simple terms
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-blue-500"
                      whileHover={{ x: 4 }}
                      aria-expanded={openIndex === index}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <span className="text-base sm:text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                        className="shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                    </motion.button>
                  </CardHeader>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        <CardContent className="pt-0">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
