import { auth } from "~/server/auth";
import { SignInButton, SignOutButton } from "./_components/auth-buttons";
import { doesUserExist } from "~/server/account/exist";
import { createUserTables } from "~/server/account/create";
import { getSkills } from "~/server/skills/get";
import { Woodcutting } from "./_components/training";

export default async function HomePage() {
  const session = await auth();

  if (!session)
    return (
      <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <SignInButton />
      </main>
    );

  const userExists = await doesUserExist(session.user.id);

  if (!userExists) await createUserTables(session.user.id);

  const skills = await getSkills(session.user.id);

  if (!skills) return null;

  return <main className="flex h-screen w-full flex-col gap-2"></main>;
}
