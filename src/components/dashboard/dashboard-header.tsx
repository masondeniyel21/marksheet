"use client";

import { Menu, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardBreadcrumb } from "./dashboard-breadcrumb";

export function DashboardHeader() {
    return (
        <header className="flex h-16 items-center gap-3 border-b px-4">
            <SidebarTrigger />

            <Separator orientation="vertical" className="h-6" />

            <DashboardBreadcrumb />

            <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}