import type { Skills } from "@prisma/client";
import { createContext } from "react";
import type { SkillTypes } from "types/skills";
import { createStore } from "zustand";
import type { TrainingActivity } from "~/server/skills/skill-list";

export interface ActivityProps {
  skills: Skills | null;
}

export interface ActivityState extends ActivityProps {
  active_skill: TrainingActivity | null;
  start: (activity: TrainingActivity) => void;
  stop: () => void;
  addToSkill: (skill: SkillTypes, xp: number) => void;
}

export type ActivityStore = ReturnType<typeof createActivityStore>;

export const createActivityStore = (initProps?: Partial<ActivityProps>) => {
  const DEFAULT_PROPS: ActivityProps = {
    skills: null,
  };

  return createStore<ActivityState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    active_skill: null,
    start: (activity) => set({ active_skill: activity }),
    stop: () => set({ active_skill: null }),
    addToSkill(skill: SkillTypes, xp: number) {
      set((state) => {
        if (!state.skills) return state;
        return {
          skills: {
            ...state.skills,
            [skill]: state.skills[skill] + xp,
          },
        };
      });
    },
  }));
};

export const ActivityContext = createContext<ActivityStore | null>(null);
