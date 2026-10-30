import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const stats = [
    {
        title: "Total Revenue",
        value: "$45,231.89",
        description: "+20.1% from last month",
    },
    {
        title: "Total Users",
        value: "2,350",
        description: "+180 this month",
    },
    {
        title: "Total Orders",
        value: "1,245",
        description: "+12.5% from last month",
    },
    {
        title: "Active Users",
        value: "573",
        description: "+8.2% from last month",
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Dashboard
                </h1>

                <p className="text-muted-foreground">
                    Welcome back! Here's an overview of your business.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stat.value}
                            </div>

                            <p className="text-xs text-muted-foreground">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Your recent activity will appear here.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}