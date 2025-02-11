import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarSeparator,
} from "~/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { auth } from "~/server/auth";

import { BriefcaseIcon, TreePineIcon, UserIcon } from "lucide-react";
import { getLevels } from "~/server/account/levels";
import Link from "next/link";

export async function AppSidebar() {
  const session = await auth();

  if (!session) return null;

  const all_levels = await getLevels(session.user.id);

  if (!all_levels) return null;

  const total_level = all_levels.woodcutting_level;

  return (
    <Sidebar
      className="w-[300px] border-r border-neutral-300 bg-card dark:border-neutral-800"
      collapsible="none"
    >
      <SidebarHeader>
        <NavUser user={session?.user} total_level={total_level} />
      </SidebarHeader>
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
                <TreePineIcon />{" "}
                <span>lvl. {all_levels.woodcutting_level}</span>
              </div>
              <span>Woodcutting</span>
            </SidebarMenuButton>
          </Link>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
