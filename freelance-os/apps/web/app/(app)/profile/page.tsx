"use client";

import { useSearchParams } from "next/navigation";
import { ProfileNav } from "@/components/profile/profile-nav";
import { PersonalInfoForm } from "@/components/profile/personal-info-form";

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const step = searchParams.get("step");

  const isSkills = tab === "skills" || tab === "4" || step === "4";
  const initialStep = isSkills ? 4 : 1;
  const activeTab = isSkills ? "skills" : "personal";

  return (
    <div className="w-full">
      <ProfileNav activeTab={activeTab} />
      <PersonalInfoForm initialStep={initialStep} />
    </div>
  );
}
