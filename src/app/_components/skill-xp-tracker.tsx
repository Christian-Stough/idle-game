"use client";

import React from "react";

import { Progress } from "~/components/ui/progress";
import { xp_to_levels } from "~/lib/xp-to-level";
import { getCurrentLevel } from "~/lib/utils";
import { useSkillsContext } from "../_store/_context";

export default function SkillXpTracker() {
  const active_skill = useSkillsContext((state) => state.active_skill);
  const skills = useSkillsContext((state) => state.skills);

  if (!skills) return null;

  if (!active_skill)
    return (
      <div className="h-[32px] text-lg font-semibold">
        Select a Skill to Start Training
      </div>
    );

  const active_skill_xp = skills[
    active_skill?.skill as keyof typeof skills
  ] as number;

  const current_level = getCurrentLevel(active_skill_xp);

  const current_level_xp = xp_to_levels.find(
    (level) => level.level === current_level,
  )?.xp;

  const next_level_xp =
    xp_to_levels.find((level) => level.level === current_level + 1)?.xp ??
    999999999;

  const progress =
    ((active_skill_xp - (current_level_xp ?? 0)) /
      (next_level_xp - (current_level_xp ?? 0))) *
    100;

  return (
    <div className="group flex w-full items-center justify-center gap-4">
      <div className="w-fit text-nowrap text-2xl font-semibold capitalize">
        {active_skill.skill}
      </div>
      <div className="relative flex flex-1">
        <div
          className={`absolute left-1/2 z-10 ${progress > 60 ? "text-white" : "text-black"} invisible group-hover:visible`}
        >
          {active_skill_xp}/{next_level_xp}
        </div>
        <Progress className="h-6 rounded-sm" value={progress} />
      </div>
    </div>
  );
}
