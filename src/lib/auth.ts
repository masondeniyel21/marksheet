
import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getMe(accessToken: string) {
  const API_URL = process.env.NESTJS_API_URL;
  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch authenticated user");
  }

  return response.json();
}

export async function requireAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) {
    console.log('Session Not Found!');
    redirect("/");
  }

  // Replace this with actual session validation.
  // const user = await validateSession(session);

  // if (!user) {
  //   redirect("/login");
  // }

  // return user;
  return true;
}

async function validateSession(token: string) {
  // Verify the token or look up the session in your database.
  // Return the authenticated user, or null if invalid.
  return null; // Placeholder: implement your validation.
}



export async function getCurrentUser() {
  // TODO:
  // 1. Read the secure session cookie.
  // 2. Validate the session on the server.
  // 3. Retrieve the authenticated user from your database.
  // 4. Return the user, or null when unauthenticated.

  return null;
}
