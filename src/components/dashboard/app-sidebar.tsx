"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

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
    SidebarFooter,
} from "@/components/ui/sidebar";

import { navigation } from "@/lib/navigation";

export function AppSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        // Add your authentication logout logic here
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    // body: JSON.stringify(values),
                },
            );

            const result = await response.json();
            console.log(result)

            if (!response.ok) {
                console.error(
                    "Unable to logout from the server. Please try again.",
                );
                return;
            }

            router.replace("/");
            router.refresh();
        } catch {
            console.error(
                "Unable to logout from the server. Please try again.",
            );
        }


        // router.push("/login");
        // router.refresh();
    };

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
                                {group.items.map((item) => (

                                    // <SidebarMenuItem key={item.url}>
                                    //     <SidebarMenuButton
                                    //         asChild
                                    //         isActive={pathname === item.url}
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
                                                isActive={pathname === item.url}
                                                tooltip={item.title}
                                            >
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    </SidebarMenuItem>

                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            {/* Logout Section */}
            <SidebarFooter className="p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={handleLogout}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}