import { desc } from "drizzle-orm";

import { db } from "@/lib/db";
import { tasks } from "@/db/schema";
import { createTask, toggleTask } from "./actions";

export default function TaskPage() {
  const allTasks = db
    .select()
    .from(tasks)
    .orderBy(desc(tasks.id))
    .all();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight">
          My Tasks
        </h1>

        <p className="mt-2 text-gray-600">
          Next.js + Drizzle ORM + SQLite
        </p>

        <form
          action={createTask}
          className="mt-8 flex gap-2"
        >
          <input
            name="title"
            type="text"
            required
            maxLength={200}
            placeholder="Enter a new task..."
            className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-semibold">
            Your tasks ({allTasks.length})
          </h2>

          {allTasks.length === 0 ? (
            <p className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-gray-500">
              No tasks yet. Add your first task above.
            </p>
          ) : (
            allTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span
                  className={
                    task.completed
                      ? "break-words text-gray-400 line-through"
                      : "break-words font-medium"
                  }
                >
                  {task.title}
                </span>

                <form action={toggleTask}>
                  <input
                    type="hidden"
                    name="id"
                    value={task.id}
                  />

                  <button
                    type="submit"
                    className={
                      task.completed
                        ? "shrink-0 rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
                        : "shrink-0 rounded-md bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
                    }
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                </form>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}