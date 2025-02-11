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
      variant="outline"
      className="w-[200px] bg-transparent capitalize"
    >
      {!active_skill ? "Nothing Running" : `Stop Training`}
    </Button>
  );
}
