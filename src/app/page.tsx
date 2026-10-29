
import Link from "next/link";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/login-form";
import { getCurrentUser } from "@/lib/auth";


const modules = [
  {
    symbol: "↗",
    title: "Finance",
    description: "Financial clarity, simplified.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    symbol: "▦",
    title: "Inventory",
    description: "Every item in its place.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    symbol: "♧",
    title: "People",
    description: "Your team, working as one.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    symbol: "⌘",
    title: "Operations",
    description: "From tasks to workflows.",
    color: "bg-amber-50 text-amber-600",
  },
];

export default async function HomePage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f9fd] text-[#191a35]">
      {/* CSS-only background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-32 size-[450px] rounded-full bg-violet-200/30 blur-[120px]" />
        <div className="absolute right-[-150px] top-40 size-[500px] rounded-full bg-indigo-200/30 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7774a008_1px,transparent_1px),linear-gradient(to_bottom,#7774a008_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#7463ed] to-[#4e3bc8] text-xl font-bold text-white shadow-lg shadow-violet-200">
            e
          </span>
          <span>
            <span className="block text-xl font-bold tracking-tight">
              erp4u
            </span>
            <span className="block text-[9px] font-semibold tracking-[.22em] text-slate-500">
              BUSINESS, IN SYNC.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 backdrop-blur sm:flex">
          <span className="size-2 rounded-full bg-emerald-500" />
          Everything in one workspace
        </div>

        <a
          href="#login"
          className="rounded-xl bg-[#5b4bdb] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4939c4]"
        >
          Sign in <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:px-10 lg:py-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-violet-700 shadow-sm">
            <span aria-hidden="true">✳</span>
            ONE WORKSPACE. EVERY WORKFLOW.
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[4.5rem]">
            Your business,
            <span className="mt-2 block bg-gradient-to-r from-[#6251db] via-[#8061e5] to-[#a16be8] bg-clip-text pb-2 text-transparent">
              beautifully connected.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Finance, inventory, people, and operations — bring
            your entire business together in one intelligent
            workspace built to move you forward.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#login"
              className="inline-flex items-center gap-3 rounded-xl bg-[#5b4bdb] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-200/70 transition hover:-translate-y-0.5 hover:bg-[#4939c4]"
            >
              Enter your workspace
              <span aria-hidden="true">→</span>
            </a>
            <span className="text-sm text-slate-500">
              One platform. Your entire business.
            </span>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3">
            {modules.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/90 bg-white/75 p-4 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 sm:p-5"
              >
                <span
                  className={`mb-4 grid size-10 place-items-center rounded-xl text-xl ${item.color}`}
                  aria-hidden="true"
                >
                  {item.symbol}
                </span>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <span className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-violet-600">
              ✓
            </span>
            Designed for clarity. Built for growth.
          </div>
        </div>

        <section
          id="login"
          aria-labelledby="login-heading"
          className="relative mx-auto w-full max-w-md scroll-mt-8"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-200/70 via-indigo-100/30 to-purple-200/70 blur-2xl"
          />

          <div className="rounded-[1.75rem] border border-white bg-white/95 p-7 shadow-[0_24px_80px_-28px_rgba(58,48,120,0.24)] backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7463ed] to-[#5140c6] text-xl text-white shadow-lg shadow-violet-200">
                ✳
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-violet-600">
                YOUR WORKSPACE AWAITS
              </p>

              <h2
                id="login-heading"
                className="text-3xl font-semibold tracking-tight"
              >
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sign in to your account to pick up where you left off.
              </p>
            </div>

            <LoginForm />

            <div className="mt-7 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
              <span
                aria-hidden="true"
                className="mt-0.5 text-lg text-violet-600"
              >
                ◇
              </span>
              <p className="text-xs leading-5 text-slate-500">
                Your business workspace, thoughtfully organized.
                Sign-in integration will be connected to your secure
                backend.
              </p>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Secure workspace access · erp4u
          </p>
        </section>
      </section>

      <footer className="relative z-10 border-t border-slate-200/80 bg-white/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          {/* <p>© {new Date().getFullYear()} erp4u. All rights reserved.</p> */}
          <p>©2026 erp4u. All rights reserved.</p>
          <p>One platform. Your entire business.</p>
        </div>
      </footer>
    </main>
  );
}
