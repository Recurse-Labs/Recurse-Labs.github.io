const key = (repo: string) => `recurse:stars:${repo}`;
const MAX_AGE = 1000 * 60 * 60 * 6;

export function readCachedStars(repo: string): number | null {
  try {
    const raw = localStorage.getItem(key(repo));
    if (!raw) return null;
    const { count, at } = JSON.parse(raw) as { count: unknown; at: unknown };
    if (typeof count !== "number" || typeof at !== "number") return null;
    if (Date.now() - at > MAX_AGE) return null;
    return count;
  } catch {
    return null;
  }
}

export function writeCachedStars(repo: string, count: number): void {
  try {
    localStorage.setItem(key(repo), JSON.stringify({ count, at: Date.now() }));
  } catch {
    /* private mode etc. */
  }
}

export async function fetchStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: unknown };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}
