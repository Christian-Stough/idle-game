import { db } from "../db";

export async function createUserTables(id: string) {
  await db.skills.create({
    data: {
      id,
    },
  });
}
