"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import Image from "next/image";
import { useSkillsContext } from "../_store/_context";

export default function ActiveSkillView() {
  const active_skill = useSkillsContext((state) => state.active_skill);

  if (!active_skill) return null;

  const xp_per_hour = (active_skill.xp / (active_skill.interval / 1000)) * 3600;

  return (
    <Card>
      <CardContent>
        <div className="flex gap-2">
          <Image
            src={active_skill.image_url}
            width={32}
            height={32}
            alt={active_skill.name}
          />
        </div>
      </CardContent>
    </Card>
  );
}
