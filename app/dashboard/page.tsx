"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout, getCurrentUser, User } from "@/lib/auth";
import { createProject, getProjects, Project } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    title: "",
    audience: "",
    citation_style: "Harvard",
    total_words: 3000,
    brief: "",
  });
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    citation_style: "",
    ordering: "-created_at",
  });

  const fetchProjects = async (query = filters) => {
    const list = await getProjects(query);
    setProjects(Array.isArray(list) ? list : []);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const me = await getCurrentUser();
        setUser(me);
        await fetchProjects();
      } catch (err: any) {
        setError("Session expired. Please log in again.");
        router.push("/login?redirect=/dashboard");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [router]);

  useEffect(() => {
    // Refetch when filters change
    fetchProjects(filters).catch(() => setError("Failed to load projects"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.search, filters.status, filters.citation_style, filters.ordering]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      setLoggingOut(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    setError(null);
    try {
      const project = await createProject({
        title: form.title,
        audience: form.audience,
        citation_style: form.citation_style,
        total_words: form.total_words,
        brief: { text: form.brief },
      });
      // Refresh list to ensure it persists from DB
      await fetchProjects();
      setForm({ title: "", audience: "", citation_style: "Harvard", total_words: 3000, brief: "" });
    } catch (err: any) {
      setError(err?.message || "Failed to create project");
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center text-muted-foreground">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden w-64 border-r border-border bg-card/80 px-4 py-6 text-sm shadow-sm backdrop-blur md:block">
        <div className="mb-6 text-lg font-bold text-foreground">Thesiora Writer</div>
        <nav className="space-y-2 text-foreground">
          <Link className="block rounded-lg px-3 py-2 transition hover:bg-accent" href="/dashboard">Dashboard</Link>
          <Link className="block rounded-lg px-3 py-2 transition hover:bg-accent" href="/dashboard">Projects</Link>
        </nav>
      </aside>

      <div className="flex-1">
        {/* Headerold */}
        <header className="border-b border-border/80 bg-card/80 px-6 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Thesiora Writer
            </Link>
            <nav className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {user ? `Hi, ${user.full_name || user.username}` : ""}
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Account
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-xl">
                    <div className="px-4 py-2 text-xs text-muted-foreground">Session</div>
                    <button
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="w-full px-4 py-2 text-left text-sm text-foreground transition hover:bg-accent disabled:opacity-60"
                    >
                      {loggingOut ? "Logging out..." : "Logout"}
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Plan, write, and manage your research projects.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                Back Home
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById("create-project");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                + New Project
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Stats */}
          <section className="mb-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
              <div className="text-sm text-muted-foreground">Projects</div>
              <div className="mt-2 flex items-end justify-between">
                <div className="text-3xl font-bold text-foreground">{projects.length}</div>
                <div className="text-xs text-muted-foreground">Total created</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
              <div className="text-sm text-muted-foreground">Character quota</div>
              <div className="mt-2 flex items-end justify-between">
                <div className="text-3xl font-bold text-foreground">
                  {user?.characters_used_this_month ?? 0}/{user?.monthly_character_quota ?? 0}
                </div>
                <div className="text-xs text-muted-foreground">Used this month</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
              <div className="text-sm text-muted-foreground">Status</div>
              <div className="mt-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Connected
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="mb-6 rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
            <div className="grid gap-3 md:grid-cols-4">
              <input
                value={filters.search}
                onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
                placeholder="Search title or audience"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <select
                value={filters.status}
                onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="">All Statuses</option>
                <option value="draft">Draft</option>
                <option value="planning">Planning</option>
                <option value="writing">Writing</option>
                <option value="proofing">Proofing</option>
                <option value="ready">Ready</option>
              </select>
              <select
                value={filters.citation_style}
                onChange={(e) => setFilters((f) => ({ ...f, citation_style: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="">All Citation Styles</option>
                <option value="Harvard">Harvard</option>
                <option value="APA">APA</option>
                <option value="MLA">MLA</option>
                <option value="Chicago">Chicago</option>
              </select>
              <select
                value={filters.ordering}
                onChange={(e) => setFilters((f) => ({ ...f, ordering: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="-created_at">Newest first</option>
                <option value="created_at">Oldest first</option>
                <option value="title">Title A-Z</option>
                <option value="-title">Title Z-A</option>
              </select>
            </div>
          </section>

          {/* Project creation */}
          <section id="create-project" className="mb-10 rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Create a project</h2>
                <p className="text-sm text-muted-foreground">Start a new research paper plan.</p>
              </div>
            </div>
            <form onSubmit={handleCreateProject} className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="text-sm text-muted-foreground">Title</label>
                <input
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  placeholder="Strategic Human Resource Management..."
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Audience</label>
                <input
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.audience}
                  onChange={(e) => setForm({ ...form, audience: e.target.value })}
                  placeholder="e.g., MBA cohort"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Citation Style</label>
                <select
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.citation_style}
                  onChange={(e) => setForm({ ...form, citation_style: e.target.value })}
                >
                  <option>Harvard</option>
                  <option>APA</option>
                  <option>MLA</option>
                  <option>Chicago</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Total Words</label>
                <input
                  type="number"
                  min={500}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.total_words}
                  onChange={(e) => setForm({ ...form, total_words: Number(e.target.value) })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-muted-foreground">Brief (required)</label>
                <textarea
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.brief}
                  onChange={(e) => setForm({ ...form, brief: e.target.value })}
                  required
                  rows={4}
                  placeholder="Paste or write the assignment brief here"
                />
              </div>
              <div className="md:col-span-2 flex items-center justify-end gap-3">
                <button
                  type="submit"
                  disabled={creating}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
                >
                  {creating ? "Creating..." : "Create Project"}
                </button>
              </div>
            </form>
          </section>

          {/* Projects list */}
          <section className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Your Projects</h2>
                <p className="text-sm text-muted-foreground">Recent projects appear here.</p>
              </div>
            </div>
            {projects.length === 0 ? (
              <div className="mt-8 rounded-lg border border-dashed border-border bg-secondary p-8 text-center text-muted-foreground">
                No projects yet. Create your first one above.
              </div>
            ) : (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-semibold text-foreground">{project.title}</div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">{project.status}</div>
                      </div>
                      <Link
                        href={`/projects/${project.id}`}
                        className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
                      >
                        Open
                      </Link>
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">
                      Created {new Date(project.created_at).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
