"use client";

import SkillXpTracker from "./skill-xp-tracker";
import ActiveSkillView from "./active-skill-view";
import { useEffect, useRef, useState } from "react";
import { useSkillsContext } from "../_store/_context";
import { addXpToServer } from "~/server/skills/add";

export default function SkillingInfo() {
  const active_skill = useSkillsContext((state) => state.active_skill);
  const addToSkill = useSkillsContext((state) => state.addToSkill);
  const skills = useSkillsContext((state) => state.skills);

  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!active_skill) {
      setProgress(0);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [active_skill]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (!skills) return;

    const startInterval = () => {
      if (intervalRef.current) return; // If interval is already running, do nothing

      const interval = active_skill!.interval - 300;
      const step = 100 / (interval / 100);

      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + step;
          return newProgress >= 100 ? 0 : newProgress;
        });
      }, 100);
    };

    if (active_skill) {
      startInterval();

      const skillInterval = setInterval(() => {
        addToSkill(active_skill.skill, active_skill.xp);
        addXpToServer(skills?.id, active_skill.skill, active_skill.xp).catch(
          console.error,
        );
        setProgress(0); // Reset progress when skillInterval hits
      }, active_skill.interval);

      signal.addEventListener("abort", () => {
        clearInterval(skillInterval);
      });
    }

    return () => {
      controller.abort();
    };
  }, [active_skill, skills, addToSkill]);

  return (
    <div className="flex w-full flex-col gap-4">
      <SkillXpTracker />
      <ActiveSkillView progress={progress} />
    </div>
  );
}
