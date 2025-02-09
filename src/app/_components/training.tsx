"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { addXpToSkill } from "~/server/skills/add";

export function Woodcutting({
  id,
  server_xp,
}: {
  id: string;
  server_xp: number;
}) {
  const [active, setActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (active) {
      const interval = setInterval(() => {
        addXpToSkill(id, "woodcutting", 100)
          .catch(console.error)
          .finally(() => router.refresh());
      }, 1000);

      signal.addEventListener("abort", () => {
        clearInterval(interval);
      });
    }

    return () => {
      controller.abort();
    };
  }, [active, id]);

  return (
    <div className="flex flex-col gap-4">
      <div>Woodcutting Xp: {server_xp}</div>
      <Button
        disabled={active}
        className="w-[350px]"
        onClick={() => setActive(true)}
      >
        {active ? "Woodingcutting..." : "Start Woodcutting"}
      </Button>
      {active && (
        <Button
          className="w-[350px]"
          variant="destructive"
          onClick={() => setActive(false)}
        >
          Stop Woodcutting
        </Button>
      )}
    </div>
  );
}
