
"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(4, "Password must be at least 4 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: LoginFormValues) {
    setServerMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(values),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        setServerMessage(
          typeof result.message === "string"
            ? result.message
            : "Unable to sign in. Check your credentials.",
        );
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setServerMessage(
        "Unable to connect to the server. Please try again.",
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Email address
        </label>

        <div className="relative">
          <Mail
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="you@school.edu"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
            className={`${inputClass} ${errors.email
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-200"
              }`}
          />
        </div>

        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-2 text-xs font-medium text-red-600"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          {/* Add a real password-reset route when available. */}
          <span className="text-xs text-slate-400">
            Authorized staff
          </span>
        </div>

        <div className="relative">
          <LockKeyhole
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={
              errors.password ? "password-error" : undefined
            }
            {...register("password")}
            className={`${inputClass} pr-12 ${errors.password
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-200"
              }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <p
            id="password-error"
            role="alert"
            className="mt-2 text-xs font-medium text-red-600"
          >
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submission feedback */}
      {serverMessage && (
        <p
          role="status"
          className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-5 text-amber-800"
        >
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#101c35] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#1b2c4b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Sign in to your account
            <LockKeyhole size={17} />
          </>
        )}
      </button>
    </form>
  );
}
