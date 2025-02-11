import type { SkillTypes } from "types/skills";

const woodcutting_activities: TrainingActivity[] = [
  {
    id: 1,
    name: "Normal Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 25,
    required_xp: 0,
    interval: 6000, // Based on average 15.6k xp/hr
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 3,
    name: "Oak Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 37.5,
    required_xp: 2411,
    interval: 3500,
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Willow Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 67.5,
    required_xp: 13363,
    interval: 7000,
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Teak Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 85,
    required_xp: 13363,
    interval: 22406, // Using middle of range (90k-220k)
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 7,
    name: "Maple Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 100,
    required_xp: 61512,
    interval: 7000,
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 9,
    name: "Mahogany Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 125,
    required_xp: 101333,
    interval: 10000,
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Yew Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 175,
    required_xp: 273620,
    interval: 9000,
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Magic Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 250,
    required_xp: 1210421,
    interval: 40000,
    image_url:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Redwood Tree",
    action_word: "Chopping",
    skill: "woodcutting",
    xp: 380,
    required_xp: 5346332,
    interval: 20000,
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

export const activities: Record<string, TrainingActivity[]> = {
  woodcutting: woodcutting_activities,
};
