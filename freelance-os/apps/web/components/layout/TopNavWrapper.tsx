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

  const normalizedPath = pathname?.endsWith("/") && pathname.length > 1 
    ? pathname.slice(0, -1) 
    : pathname;

  // 1. ALWAYS hide navbar on Landing page (root route '/') on both desktop & mobile
  if (!normalizedPath || normalizedPath === "/") {
    return null;
  }

  // 2. ALWAYS hide navbar on Login and Signup pages on both desktop & mobile
  const isAuthRoute =
    normalizedPath === "/login" ||
    normalizedPath === "/signup" ||
    normalizedPath === "/register" ||
    normalizedPath === "/forgot-password" ||
    normalizedPath === "/verify-email" ||
    normalizedPath.startsWith("/auth/") ||
    normalizedPath.startsWith("/admin/login");

  if (isAuthRoute) {
    return null;
  }

  // 3. ALWAYS hide navbar on public portfolio showcase pages and Teams page
  if (
    normalizedPath.startsWith("/p/") ||
    normalizedPath.startsWith("/portfolio/") ||
    normalizedPath === "/team" ||
    normalizedPath.startsWith("/team") ||
    normalizedPath.startsWith("/about/team")
  ) {
    return null;
  }

  // 4. Hide navbar if user is not logged in
  if (!user) {
    return null;
  }

  // 5. Render top navigation bar for authenticated dashboard routes
  return <Header />;
}
