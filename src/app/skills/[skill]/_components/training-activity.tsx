"use client";

import React from "react";
import { Button } from "~/components/ui/button";

import type { TrainingActivity } from "~/server/skills/skill-list";

import { LockIcon } from "lucide-react";
import { useSkillsContext } from "../../../_store/_context";

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

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Button
          disabled={active_skill || !unlocked ? true : false}
          className="relative w-[350px] capitalize"
          onClick={handleActive}
        >
          {!unlocked && (
            <LockIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
          )}
          {active_skill && active_skill === activity
            ? `Working on ${activity.name}...`
            : `Start ${activity.name}`}
        </Button>
      </div>
    </div>
  );
}
