function normalizeBaseUrl(url) {
  const fallback = "http://127.0.0.1:8000";
  const raw = (url || fallback).trim().replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

const API_BASE = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

async function handleResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.detail || data.message || "Something went wrong");
  }
  return data;
}

function buildUrl(endpoint) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE}${cleanEndpoint}`;
}

export async function apiGet(endpoint) {
  const response = await fetch(buildUrl(endpoint), {
    cache: "no-store",
  });
  return handleResponse(response);
}

export async function apiPost(endpoint, body, isFormData = false) {
  const response = await fetch(buildUrl(endpoint), {
    method: "POST",
    headers: isFormData ? undefined : { "Content-Type": "application/json" },
    body: isFormData ? body : JSON.stringify(body),
  });
  return handleResponse(response);
}

export async function apiPut(endpoint, body, isFormData = false) {
  const response = await fetch(buildUrl(endpoint), {
    method: "PUT",
    headers: isFormData ? undefined : { "Content-Type": "application/json" },
    body: isFormData ? body : JSON.stringify(body),
  });
  return handleResponse(response);
}

export async function apiDelete(endpoint) {
  const response = await fetch(buildUrl(endpoint), {
    method: "DELETE",
  });
  return handleResponse(response);
}