import { xp_to_levels } from "~/lib/xp-to-level";
import { db } from "../db";
import { getCurrentLevel } from "~/lib/utils";

export async function getLevels(id: string) {
  const skills = await db.skills.findFirst({
    where: {
      id,
    },
  });

  if (!skills) return null;

  const woodcutting_level = getCurrentLevel(skills.woodcutting);
  return {
    woodcutting_level,
  };
}
