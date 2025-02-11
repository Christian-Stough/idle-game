import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SkillTypes } from "types/skills";
import { xp_to_levels } from "./xp-to-level";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentLevel(xp: number) {
  return xp_to_levels
    .filter((level) => level.xp <= xp)
    .reduce((max, level) => (level.level > max ? level.level : max), 0);
}
