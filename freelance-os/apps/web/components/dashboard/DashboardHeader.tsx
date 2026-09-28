"use client";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

interface DashboardHeaderProps {
  userName: string;
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {getGreeting()}, {userName}
        </h1>
        <p className="mt-1 text-[13px] text-muted-foreground sm:text-sm">
          Here&apos;s what&apos;s happening across your freelance projects.
        </p>
      </div>
    </div>
  );
}
