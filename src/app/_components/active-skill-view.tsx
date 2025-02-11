"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";

import { Progress } from "~/components/ui/progress";
import StopButton from "./stop-button";
import { useSkillsContext } from "../_store/_context";

export default function ActiveSkillView({ progress }: { progress: number }) {
  const active_skill = useSkillsContext((state) => state.active_skill);

  if (!active_skill)
    return <Card className="h-[104px] w-full rounded-sm"></Card>;

  const xp_per_hour = (active_skill.xp / (active_skill.interval / 1000)) * 3600;

  return (
    <Card>
      <CardContent className="relative flex items-center pt-6">
        <Progress
          value={progress}
          className="absolute left-0 h-full w-full rounded-none border border-green-300 bg-card dark:border-green-800"
          barClassName="bg-green-100 dark:bg-green-600/20"
        />
        <div className="item z-10 flex w-full items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-2xl capitalize">
              {active_skill.action_word} {active_skill.name}
            </CardTitle>
            <CardDescription>{xp_per_hour} xp/hour</CardDescription>
          </div>
          {active_skill && <StopButton />}
        </div>
      </CardContent>
    </Card>
  );
}
