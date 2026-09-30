"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-linkedin-team01)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team01">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type TeamMember = {
  name: string;
  role: string;
  description?: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
};

const teamData: TeamMember[] = [
  {
    name: "Venkatesh",
    role: "Full-Stack Architect & Lead Engineer",
    description: "Architected FreelanceOS core engine, state management, and real-time project analysis pipelines.",
    image:
      "https://cdn.21st.dev/assets/localized/a15173e6535b3403cf75d3a251b152b66cb158540ae6fe0cef584477d25c296d.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Surya",
    role: "AI Systems Specialist & Engineer",
    description: "Engineered web scraping verification, Gemini LLM prompt calibration, and proposal generators.",
    image:
      "https://cdn.21st.dev/assets/localized/642c6a86e5fbd3b161614c1493159ed72ba9f28fd64bbd3dac1aaf902841acbb.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Madhuri",
    role: "Product Designer & UI Specialist",
    description: "Crafted intuitive user interfaces, portfolio builder previews, and responsive client dashboards.",
    image:
      "https://cdn.21st.dev/assets/localized/16f617e9aa4511f685dd437418d90bcb53817ed5031cd822d60db98848ad536f.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Srikanth",
    role: "Cloud Infrastructure & Systems Engineer",
    description: "Managed Firebase authentication, Vercel deployments, storage security, and CI/CD pipelines.",
    image:
      "https://cdn.21st.dev/assets/localized/90f8eb479a4a56a4da83ebf6be45a9ff73515b0af2cff481f665ea40189a8137.png",
 socials: {
      website: "#",
      linkedin: "#",
    },
  },
];

export function Team() {
  return (
    <section className="min-h-screen bg-[#FDFCFB] text-foreground relative">
      <div className="lg:py-20 sm:py-16 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center gap-8 md:gap-16">
          
          {/* Top Bar with Back Button */}
          <div className="w-full flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors shadow-2xs"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4"
          >
            <Badge variant={"outline"} className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Engineering Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Meet the creative minds behind FreelanceOS
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our core team of engineers, designers, and AI specialists who conceptualized, built, and continuous to innovate FreelanceOS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {teamData?.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group flex flex-col items-center justify-between gap-6 p-6 rounded-2xl border border-border/60 bg-white shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      src={value.image}
                      alt={value.name}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-3 items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600">
                        {value.role}
                      </p>
                      {value.description && (
                        <p className="text-[11.5px] text-muted-foreground mt-1 leading-relaxed">
                          {value.description}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <a
                        href={value.socials.website}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Website"
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-600 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
