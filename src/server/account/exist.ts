import { db } from "../db";

export async function doesUserExist(id: string) {
  const results = await db.skills.findFirst({
    where: {
      id,
    },
  });

  if (results) return true;
  else return false;
}
