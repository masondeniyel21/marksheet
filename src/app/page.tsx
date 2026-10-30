
import {
  ArrowRight,
  BookOpen,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  LockKeyhole,
  Printer,
  ShieldCheck,
  Users,
} from "lucide-react";

import LoginForm from "@/components/auth/login-form";

const features = [
  {
    icon: Users,
    title: "Student Records",
    description:
      "Keep student profiles, roll numbers, classes, and academic records organized in one place.",
    number: "01",
  },
  {
    icon: ClipboardCheck,
    title: "Exam Management",
    description:
      "Manage examinations, subjects, marks, and class-wise assessment records with ease.",
    number: "02",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Academic Results",
    description:
      "Review student performance, calculate results, and track academic progress efficiently.",
    number: "03",
  },
  {
    icon: Printer,
    title: "Print-Ready Marksheets",
    description:
      "Generate professional marksheets in PDF format or print them whenever you need.",
    number: "04",
  },
];

const highlights = [
  "Organized class-wise student records",
  "Reliable examination and marks management",
  "Professional, print-ready marksheets",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Navigation */}
      <header className="relative z-10 border-b border-white/10 bg-[#101c35] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-400 text-[#101c35]">
              <GraduationCap size={27} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight">
                Edu<span className="text-emerald-400">Track</span>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Academic Management
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#about" className="transition hover:text-white">
              About the platform
            </a>
            <a
              href="#login"
              className="rounded-lg border border-white/20 px-4 py-2.5 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Staff login <ArrowRight className="ml-2 inline" size={15} />
            </a>
          </nav>

          <a
            href="#login"
            className="rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-bold text-[#101c35] transition hover:bg-emerald-300 md:hidden"
          >
            Sign in
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative bg-[#101c35] text-white"
      >
        <div className="pointer-events-none absolute -right-32 -top-40 size-[450px] rounded-full border border-white/[0.06]" />
        <div className="pointer-events-none absolute -right-12 -top-20 size-[290px] rounded-full border border-white/[0.08]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-24">
          {/* Introduction */}
          <div id="about" className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-2 text-xs font-semibold tracking-wide text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-400" />
              YOUR SCHOOL, ORGANIZED
            </div>

            <h1 className="text-4xl font-semibold leading-[1.13] tracking-tight sm:text-5xl lg:text-[60px]">
              Every mark
              <br />
              tells a story.
              <br />
              <span className="text-emerald-400">
                Manage it better.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              A smarter way to manage student records, examinations, and
              academic results. Everything your school needs to create
              accurate, professional marksheets in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#login"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-bold text-[#101c35] shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Access your account
                <ArrowRight className="ml-2" size={17} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Simple workflows
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Accurate records
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Print-ready results
              </span>
            </div>
          </div>

          {/* Login card */}
          <div id="login" className="w-full scroll-mt-8">
            <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl shadow-black/20 sm:p-9">
              <div className="mb-7">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <LockKeyhole size={23} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Staff portal
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  Welcome back
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Sign in to manage student records and examination results.
                </p>
              </div>

              <LoginForm />

              <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
                <ShieldCheck size={15} className="text-emerald-700" />
                Authorized school personnel only
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              Secure access to your school&apos;s academic records
            </p>
          </div>
        </div>
      </section>

      {/* Feature overview */}
      <section id="features" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Everything in one place
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for better school administration
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Spend less time managing paperwork and more time focusing on
              student achievement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-slate-300">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Designed for your workflow
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From classroom marks to finished marksheets.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Keep every stage of the examination process organized, from
              entering subject marks to preparing the final student report.
            </p>

            <ul className="mt-7 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#login"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 transition hover:text-emerald-600"
            >
              Get started <ArrowRight size={17} />
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Academic workflow
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  A simpler way to manage results
                </h3>
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#101c35] text-emerald-400">
                <BookOpen size={22} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  step: "01",
                  title: "Organize student records",
                  text: "Maintain class and student information.",
                },
                {
                  step: "02",
                  title: "Enter examination marks",
                  text: "Record subject-wise scores for each exam.",
                },
                {
                  step: "03",
                  title: "Generate marksheets",
                  text: "Prepare results for printing or PDF export.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-800">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101c35] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-400 text-[#101c35]">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-sm font-bold">
                Edu<span className="text-emerald-400">Track</span>
              </p>
              <p className="text-xs text-slate-400">
                Academic Management System
              </p>
            </div>
          </a>

          <p className="text-xs leading-5 text-slate-400">
            Organized records. Clear results. Better education.
          </p>

          <p className="text-xs text-slate-500">
            {/* © {new Date().getFullYear()} EduTrack. All rights reserved. */}
            ©2026 EduTrack. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
