import type { Skills } from "@prisma/client";
import { createContext } from "react";
import { createStore } from "zustand";
import type { TrainingActivity } from "~/server/skills/skill-list";

export interface ActivityProps {
  skills: Skills | null;
}

export interface ActivityState extends ActivityProps {
  active_skill: TrainingActivity | null;
  start: (activity: TrainingActivity) => void;
  stop: () => void;
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
  }));
};

export const ActivityContext = createContext<ActivityStore | null>(null);
