"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { login } from "@/lib/auth";

function LoginContent() {
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
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="w-full max-w-md rounded-lg border border-green-500/50 bg-card p-8">
          <div className="mb-4 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="mb-2 text-xl font-semibold text-green-600 dark:text-green-400">
              Login Successful!
            </h2>
            <p className="text-sm text-muted-foreground">
              Redirecting to dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Headerold */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Thesiora Writer
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/register"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-border bg-card p-8">
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              Login
            </h1>
            <p className="mb-6 text-muted-foreground">
              Welcome back to Thesiora Writer
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
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
                  className="mt-1 w-full rounded-lg border border-input px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-input px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 border-t border-border" />
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="flex-1 border-t border-border" />
            </div>

            <div className="mt-6 space-y-3 text-center text-sm">
              <div>
                <Link
                  href="/forgot-password"
                  className="font-medium text-foreground transition-colors hover:text-foreground/80"
                >
                  Forgot your password?
                </Link>
              </div>
              <div>
                <span className="text-muted-foreground">
                  Don't have an account?{" "}
                </span>
                <Link
                  href="/register"
                  className="font-medium text-foreground transition-colors hover:text-foreground/80"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footerold */}
      <footer className="border-t border-border bg-card px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>Thesiora Writer - AI-Powered Academic Research Paper Generator</p>
        </div>
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}

