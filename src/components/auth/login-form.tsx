
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormValues,
} from "@/lib/validations/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setServerMessage("");

    // TODO: Send credentials to your authentication API.
    // Do not authenticate users or create sessions in the browser.
    // `remember` will be used when session persistence is implemented.
    void remember;
    void values;

    setServerMessage(
      "Sign-in service is not connected yet. Please try again later."
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email or username
        </label>

        <input
          id="username"
          type="text"
          autoComplete="username"
          placeholder="you@company.com"
          aria-invalid={!!errors.username}
          aria-describedby={
            errors.username ? "username-error" : undefined
          }
          className={`${inputClass} ${
            errors.username ? "border-red-400 focus:ring-red-100" : ""
          }`}
          {...register("username")}
        />

        {errors.username && (
          <p id="username-error" role="alert" className="mt-2 text-xs text-red-600">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>

          <button
            type="button"
            onClick={() => {
              setServerMessage(
                "Password reset will be available after authentication is connected."
              );
            }}
            className="text-xs font-semibold text-violet-600 hover:text-violet-800"
          >
            Forgot password?
          </button>
        </div>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            aria-invalid={!!errors.password}
            aria-describedby={
              errors.password ? "password-error" : undefined
            }
            className={`${inputClass} pr-16 ${
              errors.password ? "border-red-400 focus:ring-red-100" : ""
            }`}
            {...register("password")}
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-4 text-xs font-semibold text-slate-500 hover:text-violet-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.password && (
          <p id="password-error" role="alert" className="mt-2 text-xs text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>

      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
          className="size-4 rounded border-slate-300 accent-violet-600"
        />
        Remember me
      </label>

      {serverMessage && (
        <p
          role="status"
          className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800"
        >
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5b4bdb] to-[#7963e9] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200/70 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Signing in..." : "Sign in to erp4u"}
        {!isSubmitting && (
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </button>

      <p className="text-center text-xs leading-5 text-slate-400">
        Your business workspace, thoughtfully organized.
      </p>
    </form>
  );
}
