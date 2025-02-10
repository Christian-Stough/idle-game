"use client";

import TrainingActivity from "./training-activity";
import { woodcutting_activities } from "~/server/skills/skill-list";
import StopButton from "./stop-button";

export function Woodcutting({
  id,
  server_xp,
}: {
  id: string;
  server_xp: number;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>Woodcutting Xp: {server_xp}</div>
      <StopButton />
      <TrainingActivity
        xp={server_xp}
        user_id={id}
        activity={woodcutting_activities[0]!}
      />
      <TrainingActivity
        xp={server_xp}
        user_id={id}
        activity={woodcutting_activities[1]!}
      />
    </div>
  );
}
