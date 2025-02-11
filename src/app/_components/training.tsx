"use client";

import TrainingActivity from "./training-activity";
import { woodcutting_activities } from "~/server/skills/skill-list";
import StopButton from "./stop-button";
import { useSkillsContext } from "../_store/_context";
import { useEffect } from "react";

export function Woodcutting({ id }: { id: string }) {
  const skills = useSkillsContext((state) => state.skills);

  if (!skills) return null;

  return (
    <div className="flex flex-col gap-4">
      <div>Woodcutting Xp: {skills?.woodcutting}</div>
      <StopButton />
      <TrainingActivity
        xp={skills?.woodcutting}
        user_id={id}
        activity={woodcutting_activities[0]!}
      />
      <TrainingActivity
        xp={skills?.woodcutting}
        user_id={id}
        activity={woodcutting_activities[1]!}
      />
    </div>
  );
}
