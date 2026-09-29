"use client";

import { ProfileNav } from "@/components/profile/profile-nav";
import { PersonalInfoForm } from "@/components/profile/personal-info-form";

export default function CoreSkillsPage() {
  return (
    <div className="w-full">
      <ProfileNav activeTab="skills" />
      <PersonalInfoForm initialStep={4} />
    </div>
  );
}
