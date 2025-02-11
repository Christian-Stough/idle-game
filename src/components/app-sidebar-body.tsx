"use client";

import { BriefcaseIcon, TreePineIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSkillsContext } from "~/app/_store/_context";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarSeparator,
} from "~/components/ui/sidebar";
import { getCurrentLevel } from "~/lib/utils";

export default function AppSidebarBody() {
  const skills = useSkillsContext((state) => state.skills);

  const woodcutting_level = getCurrentLevel(skills?.woodcutting ?? 0);

  return (
    <SidebarContent>
      <SidebarGroup>
        <Link href="/" legacyBehavior passHref>
          <SidebarMenuButton className="justify-between">
            <UserIcon />
            <span>Character</span>
          </SidebarMenuButton>
        </Link>
        <SidebarMenuButton className="justify-between">
          <BriefcaseIcon />
          <span>Inventory</span>
        </SidebarMenuButton>
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel className="text-lg text-primary">
          Skills
        </SidebarGroupLabel>
        <Link href="/skills/woodcutting" legacyBehavior passHref>
          <SidebarMenuButton className="justify-between">
            <div className="flex items-center gap-1">
              <TreePineIcon /> <span>lvl. {woodcutting_level}</span>
            </div>
            <span>Woodcutting</span>
          </SidebarMenuButton>
        </Link>
      </SidebarGroup>
    </SidebarContent>
  );
}
