"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { verifyEmail } from "@/lib/auth";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setError("No verification token provided");
        setLoading(false);
        return;
      }

      try {
        await verifyEmail(token);
        setSuccess(true);
        // Redirect after 3 seconds
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } catch (err: any) {
        try {
          const errorData = JSON.parse(err.message);
          setError(errorData.error || "Verification failed");
        } catch {
          setError("An error occurred during verification");
        }
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token, router]);

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
          <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            {loading && (
              <div className="text-center">
                <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50"></div>
                <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Verifying Email
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Please wait while we verify your email address...
                </p>
              </div>
            )}

            {success && !loading && (
              <div className="text-center">
                <div className="mb-4 text-5xl">✓</div>
                <h2 className="mb-2 text-xl font-semibold text-green-700 dark:text-green-400">
                  Email Verified!
                </h2>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                  Your email has been successfully verified. Redirecting to login...
                </p>
                <Link
                  href="/login"
                  className="inline-block rounded-lg bg-zinc-900 px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Go to Login
                </Link>
              </div>
            )}

            {error && !loading && (
              <div className="text-center">
                <div className="mb-4 text-5xl">✗</div>
                <h2 className="mb-2 text-xl font-semibold text-red-700 dark:text-red-400">
                  Verification Failed
                </h2>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">{error}</p>
                <div className="space-y-3">
                  <Link
                    href="/register"
                    className="block rounded-lg bg-zinc-900 px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Register Again
                  </Link>
                  <Link
                    href="/"
                    className="block rounded-lg border border-zinc-300 px-6 py-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
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

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}

