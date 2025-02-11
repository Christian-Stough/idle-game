"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";

import { useSkillsContext } from "../_store/_context";
import { Progress } from "~/components/ui/progress";
import { useEffect, useState } from "react";
import StopButton from "./stop-button";

export default function ActiveSkillView() {
  const active_skill = useSkillsContext((state) => state.active_skill);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active_skill) {
      setProgress(0);
      return;
    }

    const interval = active_skill.interval - 400; // account for delay, probably a better solution to this TBH.
    let start = 0;
    const step = 100 / (interval / 100);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        start = 0;
      }
      setProgress(start);
    }, 100);

    return () => clearInterval(timer);
  }, [active_skill]);

  if (!active_skill) return <Card className="h-[104px] w-full"></Card>;

  const xp_per_hour = (active_skill.xp / (active_skill.interval / 1000)) * 3600;

  return (
    <Card>
      <CardContent className="relative flex items-center pt-6">
        <Progress
          value={progress}
          className="absolute left-0 h-full w-full rounded-none border border-green-200 bg-card"
          barClassName="bg-green-100"
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
