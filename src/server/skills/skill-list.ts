import type { SkillTypes } from "types/skills";

export const woodcutting_activities: TrainingActivity[] = [
  {
    id: 1,
    name: "Oak Trees",
    skill: "woodcutting",
    action_word: "chopping",
    xp: 12,
    required_xp: 0,
    interval: 5000,
    image_url:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/aerial-1867093_960_720.jpg",
  },
  {
    id: 2,
    name: "Willow Trees",
    skill: "woodcutting",
    action_word: "chopping",
    xp: 20,
    required_xp: 10000,
    interval: 5000,
    image_url:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/aerial-1867093_960_720.jpg",
  },
];

export type TrainingActivity = {
  id: number;
  name: string;
  action_word: string;
  skill: SkillTypes;
  xp: number;
  required_xp: number;
  interval: number;
  image_url: string;
};
