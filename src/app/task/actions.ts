"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { tasks } from "@/db/schema";

export async function createTask(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string") {
    return;
  }

  const trimmedTitle = title.trim();

  if (!trimmedTitle || trimmedTitle.length > 200) {
    return;
  }

  db.insert(tasks)
    .values({ title: trimmedTitle })
    .run();

  revalidatePath("/");
}

export async function toggleTask(formData: FormData) {
  const rawId = formData.get("id");

  if (typeof rawId !== "string") {
    return;
  }

  const id = Number(rawId);

  if (!Number.isSafeInteger(id) || id < 1) {
    return;
  }

  const task = db
    .select({ completed: tasks.completed })
    .from(tasks)
    .where(eq(tasks.id, id))
    .get();

  if (!task) {
    return;
  }

  db.update(tasks)
    .set({ completed: !task.completed })
    .where(eq(tasks.id, id))
    .run();

  revalidatePath("/");
}