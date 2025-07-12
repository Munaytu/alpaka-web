"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  GraduationCap,
  List,
  Mountain,
} from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const AlpakaLogo = () => (
    <div className="flex items-center gap-2 font-headline text-primary">
        <Mountain className="h-6 w-6" />
        <span className="text-xl font-bold tracking-tight">Alpaka Hub</span>
    </div>
);


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Monitor P2P", icon: LayoutDashboard },
    { href: "/dashboard/news", label: "Noticias", icon: Newspaper },
    { href: "/dashboard/education", label: "Alpaka Educa", icon: GraduationCap },
    { href: "/dashboard/services", label: "Directorio", icon: List },
  ];

  const currentNavItem = navItems.find(item => pathname.startsWith(item.href));

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
            <AlpakaLogo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger className="md:hidden"/>
            <div className="flex-1">
                <h1 className="font-headline text-xl font-semibold">
                    {currentNavItem?.label || "Dashboard"}
                </h1>
            </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
