import SkillXpTracker from "./skill-xp-tracker";
import ActiveSkillView from "./active-skill-view";

export default async function SkillingInfo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <SkillXpTracker />
      <ActiveSkillView />
    </div>
  );
}
