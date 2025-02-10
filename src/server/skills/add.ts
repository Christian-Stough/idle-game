"use server";

import type { SkillTypes } from "types/skills";
import { db } from "../db";

export async function addXpToSkill(
  id: string,
  skill: SkillTypes,
  amount: number,
) {
  let key: string;

  switch (skill) {
    case "woodcutting":
      key = "woodcutting_xp";
  }

  await db.skills.update({
    where: {
      id,
    },
    data: {
      [key]: {
        increment: amount,
      },
    },
  });
}
