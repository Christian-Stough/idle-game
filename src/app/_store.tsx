import type { SkillTypes } from "types/skills";
import { create } from "zustand";
import type { TrainingActivity } from "~/server/skills/skill-list";

type StoreState = {
  active: boolean;
  active_skill: SkillTypes | null;
  active_id: number | null;
  start: (activity: TrainingActivity) => void;
  stop: () => void;
  setActive: (bool: boolean) => void;
  setActiveSkill: (skill: SkillTypes) => void;
  setActiveId: (id: number) => void;
};

export const useStore = create<StoreState>((set) => ({
  active: false,
  active_skill: null,
  active_id: null,
  start: (activity: TrainingActivity) => {
    set({ active: true, active_skill: activity.skill, active_id: activity.id });
  },
  stop: () => {
    set({ active: false, active_skill: null, active_id: null });
  },
  setActive: (bool: boolean) => set({ active: bool }),
  setActiveSkill: (skill: SkillTypes) => set({ active_skill: skill }),
  setActiveId: (id: number) => set({ active_id: id }),
}));
