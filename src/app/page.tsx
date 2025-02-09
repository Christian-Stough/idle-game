import { auth } from "~/server/auth";
import { SignInButton, SignOutButton } from "./_components/auth-buttons";

export default async function HomePage() {
  const session = await auth();

  if (!session)
    return (
      <main className="h-screen w-full bg-neutral-200">
        <SignInButton />
      </main>
    );

  return (
    <main className="h-screen w-full bg-neutral-200">
      {session.user.name} <SignOutButton />
    </main>
  );
}
