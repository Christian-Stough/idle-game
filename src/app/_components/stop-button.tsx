"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { useStore } from "../_store";

export default function StopButton() {
  const active = useStore((state) => state.active);
  const active_skill = useStore((state) => state.active_skill);
  const stop = useStore((state) => state.stop);

  return (
    <Button
      onClick={stop}
      disabled={!active}
      variant="destructive"
      className="w-[350px] capitalize"
    >
      {!active ? "Nothing Running" : `Stop ${active_skill}`}
    </Button>
  );
}
