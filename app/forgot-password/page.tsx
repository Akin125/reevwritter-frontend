"use client";

import { useState } from "react";
import Link from "next/link";
import { requestPasswordReset } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await requestPasswordReset(email);
      setSuccess(true);
      setSubmittedEmail(email);
    } catch (err: any) {
      try {
        const errorData = JSON.parse(err.message);
        setError(errorData.email || "An error occurred. Please try again.");
      } catch {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
        {/* Header */}
        <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Thesiora Writer
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <div className="rounded-lg border border-green-200 bg-white p-8 dark:border-green-900 dark:bg-zinc-950">
              <div className="mb-4 text-center">
                <div className="mb-4 text-5xl">✓</div>
                <h2 className="mb-2 text-2xl font-bold text-green-700 dark:text-green-400">
                  Check Your Email
                </h2>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                  We've sent a password reset link to:
                </p>
                <p className="mb-6 break-all rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
                  {submittedEmail}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Click the link in the email to reset your password. The link will expire in 24 hours.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/login"
                  className="block rounded-lg bg-zinc-900 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Back to Login
                </Link>
                <Link
                  href="/"
                  className="block rounded-lg border border-zinc-300 px-4 py-2 text-center font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
                >
                  Back to Home
                </Link>
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
              href="/login"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Forgot Password?
            </h1>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              Enter your email address and we'll send you a link to reset your password.
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

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-6 space-y-3 text-center text-sm">
              <div>
                <span className="text-zinc-600 dark:text-zinc-400">
                  Remember your password?{" "}
                </span>
                <Link
                  href="/login"
                  className="font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                  Login
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
