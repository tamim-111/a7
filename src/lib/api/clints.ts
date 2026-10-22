
const API_BASE_URLS = (
  process.env.NEXT_PUBLIC_API_BASE_URLS ?? ""
)
  .split(",")
  .map((url) => url.trim().replace(/\/+$/, ""))
  .filter(Boolean);

export async function apiFetch<T>(endpoint: string): Promise<T> {
  if (API_BASE_URLS.length === 0) {
    throw new Error("No API base URLs are configured.");
  }

  let lastError: unknown;

  for (const baseUrl of API_BASE_URLS) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText} from ${baseUrl}`,
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(
    `All BazarDor APIs failed. ${
      lastError instanceof Error ? lastError.message : "Unknown error."
    }`,
  );
}
