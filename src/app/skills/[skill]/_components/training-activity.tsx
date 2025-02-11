"use client";

import React from "react";
import { Button } from "~/components/ui/button";

import type { TrainingActivity } from "~/server/skills/skill-list";

import { LockIcon } from "lucide-react";
import { useSkillsContext } from "../../../_store/_context";
import Image from "next/image";

export default function TrainingActivity({
  activity,
}: {
  user_id: string;
  activity: TrainingActivity;
}) {
  const active_skill = useSkillsContext((state) => state.active_skill);
  const skills = useSkillsContext((state) => state.skills);

  const xp = skills ? skills[activity.skill] : 0;

  const start = useSkillsContext((state) => state.start);

  function handleActive() {
    start(activity);
  }

  const unlocked = xp >= activity.required_xp;

  const xp_per_hour = (activity.xp / (activity.interval / 1000)) * 3600;

  return (
    <button
      disabled={!unlocked}
      data-active={
        active_skill &&
        activity.id === active_skill.id &&
        activity.skill === active_skill.skill
          ? 1
          : 0
      }
      className="disabled:hover-none flex h-fit w-1/3 min-w-[200px] cursor-pointer gap-2 rounded-sm border bg-card p-4 transition-colors duration-150 ease-in-out hover:border-green-300 disabled:cursor-default disabled:border-neutral-300 disabled:bg-card disabled:opacity-50 data-[active=1]:border-green-300 data-[active=1]:bg-green-100 dark:hover:border-green-800 dark:disabled:border-neutral-800 dark:disabled:bg-card dark:data-[active=1]:border-green-800 dark:data-[active=1]:bg-green-600/20"
      onClick={handleActive}
    >
      <div className="relative size-12 border">
        <Image src={activity.image_url} layout="fill" alt={activity.name} />
        {!unlocked && (
          <LockIcon className="absolute left-3 top-3 isolation-auto text-white opacity-100" />
        )}
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="text-xl">{activity.name}</div>
        <div className="text-xs text-neutral-400 dark:text-neutral-500">
          {unlocked ? `${xp_per_hour.toFixed(0)} xp/hour` : "???? xp/hour"}
        </div>
      </div>
    </button>
  );
}
