import { db } from "../db";

export async function getSkills(id: string) {
  return await db.skills.findFirst({
    where: {
      id,
    },
  });
}
