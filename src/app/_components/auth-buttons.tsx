import { Button } from "~/components/ui/button";
import { signIn, signOut } from "~/server/auth";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <Button type="submit" className="w-[300px]">
        Sign In With Discord
      </Button>
    </form>
  );
}

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" className="w-[300px]">
        Sign Out
      </Button>
    </form>
  );
}
