import type { SkillTypes } from "types/skills";

export const woodcutting_activities: TrainingActivity[] = [
  {
    id: 1,
    name: "Oak Trees",
    skill: "woodcutting",
    xp: 100,
    required_xp: 0,
    interval: 5000,
  },
  {
    id: 2,
    name: "Willow Trees",
    skill: "woodcutting",
    xp: 200,
    required_xp: 10000,
    interval: 5000,
  },
];

export type TrainingActivity = {
  id: number;
  name: string;
  skill: SkillTypes;
  xp: number;
  required_xp: number;
  interval: number;
};
