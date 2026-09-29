/**
 * @file apps/web/components/layout/Header.tsx
 * @description Universal Top Navigation Header Component for FreelanceOS
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut, User, Search, Bell, Settings, Plus } from "lucide-react";

// UI Components & Utilities
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/providers/AuthContext";

/* =========================================================================
   Navigation Schema & Hierarchy
   ========================================================================= */
const NAVIGATION = [
  {
    title: "Dashboard",
    href: "/dashboard",
    items: [
      { title: "Overview", href: "/dashboard" },
      { title: "Performance Insights", href: "/dashboard" },
    ],
  },
  {
    title: "Applications",
    href: "/applications",
    items: [
      { title: "All Applications", href: "/applications", separator: true },
      { title: "New / Analyzed", href: "/applications/new" },
      { title: "Applied", href: "/applications/applied" },
      { title: "Client Replied", href: "/applications/replied" },
      { title: "Hired", href: "/applications/hired" },
      { title: "Rejected", href: "/applications/rejected" },
    ],
  },
  {
    title: "History",
    href: "/history",
    items: [
      { title: "All Analyses", href: "/history", separator: true },
      { title: "Recent", href: "/history" },
    ],
  },
  {
    title: "Profile",
    href: "/profile/personal",
    items: [
      { title: "Personal Information", href: "/profile/personal" },
      { title: "Core Skills", href: "/profile/skills" },
      { title: "Portfolio", href: "/profile/portfolio" },
      { title: "Portfolio Builder", href: "/profile/portfolio/builder" },
    ],
  },
  {
    title: "Settings",
    href: "/settings/account",
    items: [
      { title: "Account", href: "/settings/account" },
      { title: "AI & Models", href: "/settings/ai" },
      { title: "Billing", href: "/settings/billing" },
    ],
  },
];

/* =========================================================================
   Header Component
   ========================================================================= */
export const Header = () => {
  /* ── 1. STATE & ROUTING HOOKS ─────────────────────────────────────────── */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  /* ── 2. USER DETAILS ────────────────────────────────────────────────── */
  const displayName = user?.displayName || "Freelancer";
  const displayEmail = user?.email || "user@freelanceos.dev";
  const initials = (
    user?.displayName
      ? user.displayName.slice(0, 2)
      : user?.email
      ? user.email.slice(0, 2)
      : "FL"
  ).toUpperCase();

  /* ── 3. ACTION HANDLERS ───────────────────────────────────────────────── */
  const handleSignOut = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      console.error("Signout error:", err);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/history?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  /* ── 4. RENDER ────────────────────────────────────────────────────────── */
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#FDFCFB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FDFCFB]/80 transition-all">
      <div className="flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 md:px-8 mx-auto">
        {/* ── Brand Logo ── */}
        <div className="flex items-center gap-2 mr-4 md:mr-8">
          <Link
            href="/"
            className="font-bold text-lg tracking-tight text-foreground hover:opacity-90 transition-opacity"
          >
            FreelanceOS
          </Link>
        </div>

        {/* ── Desktop Primary Navigation Bar ── */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center flex-1 space-x-1 justify-center"
        >
          {NAVIGATION.map((nav) => (
            <div key={nav.title} className="group relative">
              <Link
                href={nav.href}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition-all duration-200 hover:bg-black/[0.04]"
              >
                {nav.title}
              </Link>

              {/* Dropdown Hover Flyout */}
              {nav.items && nav.items.length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="w-56 rounded-xl border border-border/60 bg-white p-1.5 shadow-xl outline-none">
                    <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 mb-1 flex items-center justify-between">
                      {nav.title}
                    </div>

                    {nav.items.map((item) => (
                      <div key={item.title}>
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-black/[0.04]"
                        >
                          {item.title}
                        </Link>

                        {item.separator && (
                          <div className="my-1 h-px bg-border/40" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── Right Navbar Actions Theme-Matched ── */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* 1. Black New Analyze Button */}
          <Link href="/analyze">
            <Button
              size="sm"
              className="rounded-full bg-black text-white hover:bg-black/85 text-xs sm:text-[13px] font-medium px-3.5 sm:px-4 h-9 shadow-xs transition-colors gap-1.5 flex items-center"
            >
              <Plus className="h-4 w-4" />
              <span>New Analyze</span>
            </Button>
          </Link>

          {/* 2. Search Bar Icon Trigger */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project audits..."
                  className="h-9 w-36 sm:w-48 rounded-full border border-slate-300 bg-white px-3 text-xs text-foreground focus:border-blue-500 focus:outline-none shadow-xs"
                  onBlur={() => !searchQuery && setSearchOpen(false)}
                />
              </form>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"
                title="Search"
              >
                <Search className="h-4.5 w-4.5" />
              </Button>
            )}
          </div>

          {/* 3. Reminder Icon (Bell Notification) */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"
            title="Reminders & Notifications"
          >
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
          </Button>

          {/* 4. Profile Avatar */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center justify-center rounded-full outline-none ring-offset-background transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring"
                title="User Profile"
              >
                <Avatar className="h-9 w-9 border border-border/80 shadow-2xs">
                  <AvatarFallback className="bg-black/5 text-black dark:bg-zinc-800 dark:text-white font-bold text-xs">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <div className="flex flex-col p-2.5">
                <span className="text-sm font-semibold text-foreground">
                  {displayName}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {displayEmail}
                </span>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Profile Information
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Account Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
              >
                <LogOut className="h-4 w-4" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ── Mobile Hamburger Drawer Button ── */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden ml-1 h-9 w-9 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-border/50 bg-[#FDFCFB] px-5 py-5 absolute w-full max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {NAVIGATION.map((nav) => (
              <div key={nav.title} className="flex flex-col">
                <Link
                  href={nav.href}
                  className="font-semibold text-foreground py-2 text-sm hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {nav.title}
                </Link>

                {nav.items && (
                  <div className="flex flex-col pl-3 border-l-2 border-border/60 ml-1 mb-2 gap-1">
                    {nav.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="py-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
