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
            {loading && (
              <div className="text-center">
                <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-input border-t-zinc-900 border-border dark:border-t-zinc-50"></div>
                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  Verifying Email
                </h2>
                <p className="text-muted-foreground">
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
                <p className="mb-6 text-muted-foreground">
                  Your email has been successfully verified. Redirecting to login...
                </p>
                <Link
                  href="/login"
                  className="inline-block rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 dark:bg-secondary text-foreground dark:hover:bg-accent"
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
                <p className="mb-6 text-muted-foreground">{error}</p>
                <div className="space-y-3">
                  <Link
                    href="/register"
                    className="block rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 dark:bg-secondary text-foreground dark:hover:bg-accent"
                  >
                    Register Again
                  </Link>
                  <Link
                    href="/"
                    className="block rounded-lg border border-input px-6 py-2 font-medium text-foreground transition-colors hover:bg-secondary border-border dark:text-foreground dark:hover:bg-primary"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
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

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}

