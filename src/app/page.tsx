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
      <main className="h-screen w-full bg-neutral-200">
        <SignInButton />
      </main>
    );

  const userExists = await doesUserExist(session.user.id);

  if (!userExists) await createUserTables(session.user.id);

  const skills = await getSkills(session.user.id);

  return (
    <main className="flex h-screen w-full flex-col gap-2 bg-neutral-200">
      {session.user.name}
      <SignOutButton />
      <Woodcutting
        id={session.user.id}
        server_xp={skills?.woodcutting_xp.toNumber() ?? -100}
      />
    </main>
  );
}
