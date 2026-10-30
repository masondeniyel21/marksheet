import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <main className="min-w-0 flex-1">
                <DashboardHeader />

                <div className="p-6">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}