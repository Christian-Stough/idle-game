import { Sidebar, SidebarHeader } from "~/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { auth } from "~/server/auth";

import AppSidebarBody from "./app-sidebar-body";

export async function AppSidebar() {
  const session = await auth();

  if (!session) return null;

  return (
    <Sidebar
      className="w-[300px] border-r border-neutral-300 bg-card dark:border-neutral-800"
      collapsible="none"
    >
      <SidebarHeader>
        <NavUser user={session?.user} />
      </SidebarHeader>
      <AppSidebarBody />
    </Sidebar>
  );
}
