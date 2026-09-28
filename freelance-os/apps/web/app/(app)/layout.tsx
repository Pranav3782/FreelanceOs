/**
 * @file apps/web/app/(app)/layout.tsx
 * @description Application Workspace Shell Layout for Authenticated Routes
 */

"use client";

import React from "react";
// Workspace Components
import { ProtectedRoute } from "@/components/providers/ProtectedRoute";
import { CountrySelectModal } from "@/components/onboarding/CountrySelectModal";
import { AppFooter } from "@/components/layout/AppFooter";
import { ActivityHeartbeat } from "@/components/layout/ActivityHeartbeat";

/* =========================================================================
   AppLayout Component
   ========================================================================= */
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <ActivityHeartbeat />
      <div className="min-h-screen bg-background flex flex-col text-foreground antialiased w-full">
        {/* ── First-Time User Country & Currency Modal ── */}
        <CountrySelectModal />

        {/* ── Main Content Area ── */}
        <div className="flex-1 w-full transition-all flex flex-col">
          {/* ── Page Content Container ── */}
          <main className="flex flex-col min-h-screen w-full overflow-x-hidden p-4 sm:p-6 lg:p-8">
            {/* Dynamic Child Page (e.g. /dashboard, /analyze, /history) */}
            <div className="mx-auto w-full max-w-screen-xl flex-1 pb-12">
              {children}
            </div>

            {/* Workspace Minimal Footer */}
            <div className="mx-auto w-full max-w-screen-xl pt-4">
              <AppFooter />
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
