"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarHeader,
} from "@/components/ui/sidebar";

import { navigation } from "@/lib/navigation";

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="p-4">
                <h2 className="text-xl font-bold">
                    Admin Panel
                </h2>
            </SidebarHeader>

            <SidebarContent>
                {navigation.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel>
                            {group.title}
                        </SidebarGroupLabel>

                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => {
                                    const active =
                                        pathname === item.url ||
                                        pathname.startsWith(item.url + "/");

                                    return (
                                        // <SidebarMenuItem key={item.url}>
                                        //     <SidebarMenuButton
                                        //         asChild
                                        //         isActive={active}
                                        //     >
                                        //         <Link href={item.url}>
                                        //             <item.icon />
                                        //             <span>{item.title}</span>
                                        //         </Link>
                                        //     </SidebarMenuButton>
                                        // </SidebarMenuItem>
                                        <SidebarMenuItem key={item.url}>
                                            <Link href={item.url} className="w-full">
                                                <SidebarMenuButton
                                                    isActive={active}
                                                    tooltip={item.title}
                                                >
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </SidebarMenuButton>
                                            </Link>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
}