// API client for connecting to the FastAPI backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8002";

export interface Project {
  id: string;
  title: string;
  audience?: string;
  citation_style?: string;
  total_words?: number;
  brief?: Record<string, any> | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectCreate {
  title: string;
  audience?: string;
  citation_style?: string;
  total_words?: number;
  brief: Record<string, any>;
}

export interface ProjectUpdate extends Partial<ProjectCreate> {
  status?: string;
}

export interface SystemHealth {
  status: string;
  version: string;
  timestamp: string;
}

export interface ProjectQuery {
  search?: string;
  status?: string;
  citation_style?: string;
  ordering?: string; // e.g., -created_at, created_at, title, -title
}

/**
 * Fetch system health status
 */
export async function getSystemHealth(): Promise<SystemHealth> {
  const response = await fetch(`${API_BASE_URL}/api/system/health`);
  if (!response.ok) {
    throw new Error("Failed to fetch system health");
  }
  return response.json();
}

/**
 * Create a new project
 */
export async function createProject(data: ProjectCreate): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/api/projects/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const message = (error && error.detail) || "Failed to create project";
    throw new Error(message);
  }
  return response.json();
}

/**
 * Update a project
 */
export async function updateProject(id: string, data: ProjectUpdate): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/api/projects/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const message = (error && error.detail) || "Failed to update project";
    throw new Error(message);
  }
  return response.json();
}

/**
 * Get a specific project by ID
 */
export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/api/projects/${id}/`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  return response.json();
}

/**
 * Delete a project
 */
export async function deleteProject(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/projects/${id}/`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to delete project");
  }
}

function buildQuery(params?: ProjectQuery): string {
  if (!params) return "";
  const query = new URLSearchParams();
  if (params.search) query.set("search", params.search);
  if (params.status) query.set("status", params.status);
  if (params.citation_style) query.set("citation_style", params.citation_style);
  if (params.ordering) query.set("ordering", params.ordering);
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

export async function getProjects(params?: ProjectQuery): Promise<Project[]> {
  const query = buildQuery(params);
  const response = await fetch(`${API_BASE_URL}/api/projects/${query}`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  // DRF pagination support
  // If paginated, DRF returns { results: [...] }
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  return Array.isArray(data) ? data : [];
}

/**
 * Run the planner action on a project
 */
export async function runPlanner(id: string) {
  const r = await fetch(`${API_BASE_URL}/api/projects/${id}/run-planner/`, {
    method: "POST",
    credentials: "include",
  });
  if (!r.ok) throw new Error("Failed to start planner");
  return r.json();
}

/**
 * Run the writer action on a project
 */
export async function runWriter(id: string) {
  const r = await fetch(`${API_BASE_URL}/api/projects/${id}/run-writer/`, {
    method: "POST",
    credentials: "include",
  });
  if (!r.ok) throw new Error("Failed to start writer");
  return r.json();
}

/**
 * Run the proofreader action on a project
 */
export async function runProofreader(id: string) {
  const r = await fetch(`${API_BASE_URL}/api/projects/${id}/run-proofreader/`, {
    method: "POST",
    credentials: "include",
  });
  if (!r.ok) throw new Error("Failed to start proofreader");
  return r.json();
}

/**
 * Render a project document to DOCX format
 */
export async function renderDocx(id: string) {
  const r = await fetch(`${API_BASE_URL}/api/projects/${id}/render-docx/`, {
    method: "POST",
    credentials: "include",
  });
  if (!r.ok) throw new Error("Failed to render document");
  return r.json();
}