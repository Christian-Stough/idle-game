"use server";

import type { SkillTypes } from "types/skills";
import { db } from "../db";

export async function addXpToServer(
  id: string,
  skill: SkillTypes,
  amount: number,
) {
  await db.skills.update({
    where: {
      id,
    },
    data: {
      [skill]: {
        increment: amount,
      },
    },
  });
}
