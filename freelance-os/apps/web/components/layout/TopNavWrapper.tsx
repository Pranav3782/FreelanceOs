/**
 * @file apps/web/components/layout/TopNavWrapper.tsx
 * @description Intelligent Navigation Header Wrapper with Route & Auth-Based Visibility Filtering
 */

"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "@/components/providers/AuthContext";
import { Header } from "./Header";

/* =========================================================================
   TopNavWrapper Component
   ========================================================================= */
export function TopNavWrapper() {
  const pathname = usePathname();
  const { user } = useAuth();

  // 1. Hide global navigation on public portfolio showcases
  if (pathname?.startsWith("/p/") || pathname?.startsWith("/portfolio/")) {
    return null;
  }

  // 2. Hide navbar on landing page (/), login (/login), signup (/signup), forgot-password (/forgot-password) when user is not logged in
  if (!user) {
    return null;
  }

  // 3. Hide navbar on /login and /signup pages even if user session exists (auth form pages)
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  // 4. Render the top navigation bar once the user logs into their account
  return <Header />;
}
