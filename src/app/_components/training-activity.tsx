"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { addXpToSkill } from "~/server/skills/add";
import type { TrainingActivity } from "~/server/skills/skill-list";
import { useStore } from "../_store";
import { LockIcon } from "lucide-react";

export default function TrainingActivity({
  xp,
  user_id,
  activity,
}: {
  xp: number;
  user_id: string;
  activity: TrainingActivity;
}) {
  const active = useStore((state) => state.active);
  const active_skill = useStore((state) => state.active_skill);
  const active_id = useStore((state) => state.active_id);

  const start = useStore((state) => state.start);

  function handleActive() {
    start(activity);
  }

  const router = useRouter();

  const unlocked = xp >= activity.required_xp;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (active) {
      const skillInterval = setInterval(() => {
        addXpToSkill(user_id, activity.skill, activity.xp)
          .catch(console.error)
          .finally(() => router.refresh());
      }, activity.interval);

      signal.addEventListener("abort", () => {
        clearInterval(skillInterval);
      });
    }

    return () => {
      controller.abort();
    };
  }, [active, activity, router, user_id]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Button
          disabled={active || !unlocked}
          className="relative w-[350px] capitalize"
          onClick={handleActive}
        >
          {!unlocked && (
            <LockIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
          )}
          {active &&
          active_skill === activity.skill &&
          active_id === activity.id
            ? `Working on ${activity.name}...`
            : `Start ${activity.name}`}
        </Button>
      </div>
    </div>
  );
}
