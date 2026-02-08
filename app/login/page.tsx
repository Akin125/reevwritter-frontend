"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      setSuccess(true);
      // Redirect after brief delay to show success message
      setTimeout(() => {
        router.push(redirect);
      }, 1000);
    } catch (err: any) {
      try {
        const errorData = JSON.parse(err.message);
        const errorMessage = Object.values(errorData)[0];
        setError(Array.isArray(errorMessage) ? errorMessage[0] : errorMessage);
      } catch {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="w-full max-w-md rounded-lg border border-green-200 bg-white p-8 dark:border-green-900 dark:bg-zinc-950">
          <div className="mb-4 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="mb-2 text-xl font-semibold text-green-700 dark:text-green-400">
              Login Successful!
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Redirecting to dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Thesiora Writer
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/register"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Login
            </h1>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              Welcome back to Thesiora Writer
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-600 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-600 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700" />
              <span className="text-xs text-zinc-500 dark:text-zinc-500">OR</span>
              <div className="flex-1 border-t border-zinc-300 dark:border-zinc-700" />
            </div>

            <div className="mt-6 space-y-3 text-center text-sm">
              <div>
                <Link
                  href="/forgot-password"
                  className="font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                  Forgot your password?
                </Link>
              </div>
              <div>
                <span className="text-zinc-600 dark:text-zinc-400">
                  Don't have an account?{" "}
                </span>
                <Link
                  href="/register"
                  className="font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>Thesiora Writer - AI-Powered Academic Research Paper Generator</p>
        </div>
      </footer>
    </div>
  );
}
