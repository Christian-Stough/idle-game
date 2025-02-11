import { activities } from "~/server/skills/skill-list";
import TrainingActivity from "./_components/training-activity";
import { auth } from "~/server/auth";

export default async function Page({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const skill = (await params).skill;
  const session = await auth();

  if (!session) return null;

  const activities_to_use = activities[skill];

  return (
    <div className="flex h-fit w-full flex-wrap gap-4 py-4">
      {activities_to_use?.map((activity) => (
        <TrainingActivity
          key={activity.id}
          user_id={session?.user.id}
          activity={activity}
        />
      ))}
    </div>
  );
}
