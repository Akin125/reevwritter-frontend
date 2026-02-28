"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  getProject,
  updateProject,
  runPlanner,
  runWriter,
  runProofreader,
  renderDocx,
  Project,
} from "@/lib/api";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    audience: "",
    citation_style: "Harvard",
    total_words: 3000,
    brief: "",
  });

  const load = async () => {
    if (!id) return;
    const data = await getProject(id as string);
    setProject(data);
    setForm({
      title: data.title || "",
      audience: data.audience || "",
      citation_style: data.citation_style || "Harvard",
      total_words: data.total_words || 3000,
      brief: typeof data.brief === "object" && data.brief?.text ? String(data.brief.text) : "",
    });
  };

  useEffect(() => {
    load()
      .catch(() => setError("Could not load project. Please check your session or try again."))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSave = async () => {
    if (!project) return;
    setSaving(true);
    setError(null);
    try {
      const updated = await updateProject(project.id, {
        title: form.title,
        audience: form.audience,
        citation_style: form.citation_style,
        total_words: form.total_words,
        brief: { text: form.brief },
      });
      setProject(updated);
    } catch (err: any) {
      setError(err?.message || "Failed to save project");
    } finally {
      setSaving(false);
    }
  };

  const handleAdvance = async () => {
    if (!project) return;
    setActionLoading(true);
    setError(null);
    try {
      if (project.status === "draft") await runPlanner(project.id);
      else if (project.status === "planning") await runWriter(project.id);
      else if (project.status === "writing") await runProofreader(project.id);
      else if (project.status === "proofing") await renderDocx(project.id);
      else return;
      await load();
    } catch (err: any) {
      setError(err?.message || "Failed to advance project");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading project...</div>
      </div>
    );
  }

  if (error && !project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      </div>
    );
  }

  if (!project) return null;

  const stages = [
    { key: "draft", label: "Draft", icon: "📝" },
    { key: "planning", label: "Planning", icon: "🗺️" },
    { key: "writing", label: "Writing", icon: "✍️" },
    { key: "proofing", label: "Proofing", icon: "✅" },
    { key: "ready", label: "Ready", icon: "🎉" },
  ];

  const currentStageIndex = stages.findIndex((s) => s.key === project.status);

  const getActionButton = (fromStatus: string, toStatus: string) => {
    if (project.status !== fromStatus) return null;
    
    const labels: Record<string, string> = {
      "draft-planning": "Generate Plan",
      "planning-writing": "Start Writing",
      "writing-proofing": "Proofread",
      "proofing-ready": "Finalize & Render",
    };

    const key = `${fromStatus}-${toStatus}`;
    return (
      <button
        onClick={handleAdvance}
        disabled={actionLoading}
        className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-md transition hover:bg-primary/90 disabled:opacity-60"
      >
        {actionLoading ? "Processing..." : labels[key] || "Next"}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
            <p className="text-sm text-muted-foreground">Current Status: {project.status}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/dashboard"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Workflow Pipeline */}
        <section className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-card-foreground">Project Workflow</h2>
          <div className="flex items-center justify-between gap-3">
            {stages.map((stage, index) => (
              <div key={stage.key} className="flex flex-1 items-center gap-3">
                {/* Stage Box */}
                <div
                  className={`flex flex-1 flex-col items-center rounded-xl border-2 p-4 transition ${
                    index <= currentStageIndex
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary text-muted-foreground"
                  }`}
                >
                  <div className="text-2xl">{stage.icon}</div>
                  <div className="mt-2 text-center text-sm font-semibold">{stage.label}</div>
                  {index === currentStageIndex && (
                    <div className="mt-1 rounded-full bg-background px-2 py-0.5 text-xs text-foreground">
                      Current
                    </div>
                  )}
                </div>

                {/* Action Button Between Stages */}
                {index < stages.length - 1 && (
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`h-0.5 w-8 ${
                        index < currentStageIndex ? "bg-primary" : "bg-border"
                      }`}
                    />
                    {getActionButton(stages[index].key, stages[index + 1].key)}
                    <div
                      className={`h-0.5 w-8 ${
                        index < currentStageIndex ? "bg-primary" : "bg-border"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground">Details</h2>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground">
              <label className="block">
                <span className="text-xs text-muted-foreground">Title</span>
                <input
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Audience</span>
                <input
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.audience}
                  onChange={(e) => setForm({ ...form, audience: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Citation Style</span>
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
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Total Words</span>
                <input
                  type="number"
                  min={500}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  value={form.total_words}
                  onChange={(e) => setForm({ ...form, total_words: Number(e.target.value) })}
                />
              </label>
              <button
                onClick={handleSave}
                disabled={saving}
                className="mt-2 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground">Brief</h2>
            <textarea
              className="mt-3 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              rows={8}
              value={form.brief}
              onChange={(e) => setForm({ ...form, brief: e.target.value })}
              placeholder="Paste or edit the brief for this project"
            />
          </div>
        </div>
      </div>
    </div>
  );
}