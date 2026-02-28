"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { resetPassword } from "@/lib/auth";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    if (!uid || !token) {
      setTokenValid(false);
      setError("Invalid or missing reset link");
    }
  }, [uid, token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      if (!uid || !token) {
        throw new Error("Invalid reset link");
      }

      await resetPassword({
        uid,
        token,
        new_password: password,
        new_password_confirm: passwordConfirm,
      });

      setSuccess(true);
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      try {
        const errorData = JSON.parse(err.message);
        setError(errorData.error || "An error occurred. Please try again.");
      } catch {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!tokenValid) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
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
            <div className="rounded-lg border border-red-200 bg-card p-8 dark:border-red-900 bg-input">
              <div className="mb-4 text-center">
                <div className="mb-4 text-5xl">✗</div>
                <h2 className="mb-2 text-xl font-semibold text-red-700 dark:text-red-400">
                  Invalid Reset Link
                </h2>
                <p className="mb-6 text-muted-foreground">
                  {error || "This password reset link is invalid or has expired."}
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/forgot-password"
                  className="block rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90 dark:bg-secondary text-foreground dark:hover:bg-accent"
                >
                  Request New Link
                </Link>
                <Link
                  href="/login"
                  className="block rounded-lg border border-input px-4 py-2 text-center font-medium text-foreground transition-colors hover:bg-secondary border-border dark:text-foreground dark:hover:bg-primary"
                >
                  Back to Login
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

  if (success) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
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
                  Password Reset Successful!
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Your password has been reset. Redirecting to login...
                </p>
              </div>

              <Link
                href="/login"
                className="block rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90 dark:bg-secondary text-foreground dark:hover:bg-accent"
              >
                Go to Login
              </Link>
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
    <div className="flex min-h-screen flex-col bg-background">
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
          <div className="rounded-lg border border-border bg-card p-8 dark:border-border bg-input">
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              Reset Password
            </h1>
            <p className="mb-6 text-muted-foreground">
              Enter your new password below
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-input px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-border dark:bg-primary dark:text-foreground dark:placeholder-muted-foreground focus:border-ring focus:ring-ring"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-muted-foreground text-muted-foreground">
                  Must be at least 8 characters long
                </p>
              </div>

              <div>
                <label htmlFor="password_confirm" className="block text-sm font-medium text-foreground">
                  Confirm Password
                </label>
                <input
                  id="password_confirm"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-input px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-border dark:bg-primary dark:text-foreground dark:placeholder-muted-foreground focus:border-ring focus:ring-ring"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 dark:bg-secondary text-foreground dark:hover:bg-accent"
              >
                {loading ? "Resetting..." : "Reset Password"}
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
                  Need help?{" "}
                </span>
                <Link
                  href="/forgot-password"
                  className="font-medium text-foreground transition-colors hover:text-foreground dark:text-foreground dark:hover:text-zinc-300"
                >
                  Request new link
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}

