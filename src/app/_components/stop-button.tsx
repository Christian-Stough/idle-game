"use client";

import React from "react";
import { Button } from "~/components/ui/button";

import { useSkillsContext } from "../_store/_context";

export default function StopButton() {
  const active_skill = useSkillsContext((state) => state.active_skill);
  const stop = useSkillsContext((state) => state.stop);

  return (
    <Button
      onClick={stop}
      disabled={!active_skill}
      variant="destructive"
      className="w-[350px] capitalize"
    >
      {!active_skill ? "Nothing Running" : `Stop ${active_skill.name}`}
    </Button>
  );
}
