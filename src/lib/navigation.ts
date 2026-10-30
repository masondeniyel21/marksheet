import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    Settings,
    BarChart3,
} from "lucide-react";

export const navigation = [
    {
        title: "Overview",
        items: [
            {
                title: "Dashboard",
                url: "/dashboard",
                icon: LayoutDashboard,
            },
            {
                title: "Users",
                url: "/users",
                icon: Users,
            },
            {
                title: "Orders",
                url: "/orders",
                icon: ShoppingCart,
            },
            {
                title: "Analytics",
                url: "/analytics",
                icon: BarChart3,
            },
        ],
    },
    {
        title: "Settings",
        items: [
            {
                title: "Settings",
                url: "/settings",
                icon: Settings,
            },
        ],
    },
];