import { auth } from "~/server/auth";
import { getSkills } from "~/server/skills/get";
import SkillXpTracker from "./skill-xp-tracker";
import ActiveSkillView from "./active-skill-view";

export default async function SkillingInfo() {
  const session = await auth();

  if (!session) return null;

  const skills = await getSkills(session.user.id);

  return (
    <div className="flex w-full flex-col gap-4">
      <SkillXpTracker skills={skills!} />
      <ActiveSkillView />
    </div>
  );
}
