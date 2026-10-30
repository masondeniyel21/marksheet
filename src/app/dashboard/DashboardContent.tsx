import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardContent() {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("school_access")?.value;

    if (!accessToken) {
        console.log('no accessToken Found!.............');
        redirect("/");
    }

    //   const response = await fetch(
    //     // `${process.env.NESTJS_API_URL}/auth/me`,
    //     `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //       cache: "no-store",
    //     }
    //   );

    const response = await fetch(
        // "http://localhost:3001/auth/me",
        `${process.env.NESTJS_API_URL}/auth/me`,
        {
            headers: {
                Cookie: `school_access=${accessToken}`,
            },
            cache: "no-store",
        }
    );

    if (response.status === 401) {
        console.log('11111111111111no accessToken Found!.............', response);
        redirect("/");
    }

    if (!response.ok) {
        console.log('22222222222222222no accessToken Found!.............');
        throw new Error("Unable to load dashboard user");
    }

    const { user } = await response.json();

    return (
        <main>
            <h1>Welcome, {user.firstName}!</h1>
            <p>Email: {user.email}</p>

            <pre>{JSON.stringify(user, null, 2)}</pre>
        </main>
    );
}