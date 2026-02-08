// Auth API client for connecting to the Django backend auth endpoints

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8002";

export interface User {
  id: number;
  email: string;
  username: string;
  full_name: string;
  avatar_url: string | null;
  email_verified: boolean;
  monthly_character_quota: number;
  characters_used_this_month: number;
  quota_reset_date: string;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
}

export interface LoginResponse {
  message: string;
  user: User;
  access: string;
}

export interface RegisterResponse {
  message: string;
  email: string;
}

export interface VerifyEmailResponse {
  message: string;
}

export interface PasswordResetRequestResponse {
  message: string;
}

export interface PasswordResetConfirmResponse {
  message: string;
}

export interface LogoutResponse {
  message: string;
}

/**
 * Register a new user
 */
export async function register(data: {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  full_name?: string;
}): Promise<RegisterResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

/**
 * Login user
 */
export async function login(data: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

/**
 * Verify email with token
 */
export async function verifyEmail(token: string): Promise<VerifyEmailResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/verify-email/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

/**
 * Request password reset email
 */
export async function requestPasswordReset(email: string): Promise<PasswordResetRequestResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/request-password-reset/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

/**
 * Reset password with uid and token
 */
export async function resetPassword(data: {
  uid: string;
  token: string;
  new_password: string;
  new_password_confirm: string;
}): Promise<PasswordResetConfirmResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/reset-password/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

/**
 * Logout user
 */
export async function logout(): Promise<LogoutResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

/**
 * Get current user profile (requires authentication)
 */
export async function getCurrentUser(): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/api/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch current user");
  }

  return response.json();
}