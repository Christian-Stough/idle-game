import type { Skills } from "@prisma/client";
import { db } from "../db";

export async function getSkills(id: string): Promise<Skills | null> {
  return await db.skills.findFirst({
    where: {
      id,
    },
  });
}
