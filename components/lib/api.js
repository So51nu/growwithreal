const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

async function handleResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.detail || "Something went wrong");
  }
  return data;
}

export async function apiGet(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    cache: "no-store",
  });
  return handleResponse(response);
}

export async function apiPost(endpoint, body, isFormData = false) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: isFormData ? {} : { "Content-Type": "application/json" },
    body: isFormData ? body : JSON.stringify(body),
  });
  return handleResponse(response);
}

export async function apiPut(endpoint, body, isFormData = false) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "PUT",
    headers: isFormData ? {} : { "Content-Type": "application/json" },
    body: isFormData ? body : JSON.stringify(body),
  });
  return handleResponse(response);
}

export async function apiDelete(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "DELETE",
  });
  return handleResponse(response);
}