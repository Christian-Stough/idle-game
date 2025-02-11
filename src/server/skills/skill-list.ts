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
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
