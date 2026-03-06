import type { bookmarkType } from "../types/bookmark";

async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {

  const res = await fetch(`http://localhost:4000${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {})
    },
    credentials: "include",
    ...options
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}

export function getAllBookmarks(): Promise<bookmarkType[]> {
    return apiFetch<bookmarkType[]>("/bookmarks") 
}