"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password_confirm: "",
    full_name: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate passwords match
    if (formData.password !== formData.password_confirm) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const result = await register(formData);
      setSuccess(true);
      setSuccessEmail(result.email);
    } catch (err: any) {
      try {
        const errorData = JSON.parse(err.message);
        const firstError = Object.values(errorData)[0];
        setError(Array.isArray(firstError) ? firstError[0] : firstError);
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
                  Registration Successful!
                </h2>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                  We've sent a verification email to:
                </p>
                <p className="mb-6 break-all rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
                  {successEmail}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Please check your email and click the verification link to activate your account.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => router.push("/")}
                  className="w-full rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Back to Home
                </button>
                <Link
                  href="/login"
                  className="block rounded-lg border border-zinc-300 px-4 py-2 text-center font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </main>
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
              Create Account
            </h1>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              Join Thesiora Writer today
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Full Name (Optional)
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={handleChange}
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-600 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-600 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-600 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                  placeholder="johndoe"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-600 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="password_confirm" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Confirm Password
                </label>
                <input
                  id="password_confirm"
                  name="password_confirm"
                  type="password"
                  value={formData.password_confirm}
                  onChange={handleChange}
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
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-zinc-600 dark:text-zinc-400">
                Already have an account?{" "}
              </span>
              <Link
                href="/login"
                className="font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                Login
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
