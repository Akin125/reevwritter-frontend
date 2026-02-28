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
      <div className="flex min-h-screen flex-col bg-secondary dark:bg-black">
        {/* Headerold */}
        <header className="border-b border-border bg-card px-6 py-4 dark:border-border bg-input">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Thesiora Writer
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <div className="rounded-lg border border-green-200 bg-card p-8 dark:border-green-900 bg-input">
              <div className="mb-4 text-center">
                <div className="mb-4 text-5xl">✓</div>
                <h2 className="mb-2 text-2xl font-bold text-green-700 dark:text-green-400">
                  Check Your Email
                </h2>
                <p className="mb-6 text-muted-foreground">
                  We've sent a password reset link to:
                </p>
                <p className="mb-6 break-all rounded-lg bg-secondary p-3 font-mono text-sm dark:bg-primary">
                  {submittedEmail}
                </p>
                <p className="text-muted-foreground">
                  Click the link in the email to reset your password. The link will expire in 24 hours.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/login"
                  className="block rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90 dark:bg-secondary text-foreground dark:hover:bg-accent"
                >
                  Back to Login
                </Link>
                <Link
                  href="/"
                  className="block rounded-lg border border-input px-4 py-2 text-center font-medium text-foreground transition-colors hover:bg-secondary border-border dark:text-foreground dark:hover:bg-primary"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footerold */}
        <footer className="border-t border-border bg-card px-6 py-8 dark:border-border bg-input">
          <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
            <p>Thesiora Writer - AI-Powered Academic Research Paper Generator</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-secondary dark:bg-black">
      {/* Headerold */}
      <header className="border-b border-border bg-card px-6 py-4 dark:border-border bg-input">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Thesiora Writer
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-foreground text-muted-foreground dark:hover:text-foreground"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-border bg-card p-8 dark:border-border bg-input">
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              Forgot Password?
            </h1>
            <p className="mb-6 text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-input px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-border dark:bg-primary dark:text-foreground dark:placeholder-muted-foreground focus:border-ring focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 dark:bg-secondary text-foreground dark:hover:bg-accent"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-6 space-y-3 text-center text-sm">
              <div>
                <span className="text-muted-foreground">
                  Remember your password?{" "}
                </span>
                <Link
                  href="/login"
                  className="font-medium text-foreground transition-colors hover:text-foreground dark:text-foreground dark:hover:text-zinc-300"
                >
                  Login
                </Link>
              </div>
              <div>
                <span className="text-muted-foreground">
                  Don't have an account?{" "}
                </span>
                <Link
                  href="/register"
                  className="font-medium text-foreground transition-colors hover:text-foreground dark:text-foreground dark:hover:text-zinc-300"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footerold */}
      <footer className="border-t border-border bg-card px-6 py-8 dark:border-border bg-input">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>Thesiora Writer - AI-Powered Academic Research Paper Generator</p>
        </div>
      </footer>
    </div>
  );
}
