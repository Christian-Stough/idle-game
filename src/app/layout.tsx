import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";
import SkillingInfo from "./_components/skilling-info";
import { ActivityProvider } from "./_store/_provider";
import { auth } from "~/server/auth";
import { getSkills } from "~/server/skills/get";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  let skills;

  if (session) {
    skills = await getSkills(session.user.id);
  }

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${GeistSans.variable}`}
    >
      <body className="flex h-screen w-full">
        <ActivityProvider skills={skills ?? null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <main className="flex h-screen flex-1 flex-col overflow-auto bg-background px-6 py-8">
                <SkillingInfo />
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </ActivityProvider>
      </body>
    </html>
  );
}
