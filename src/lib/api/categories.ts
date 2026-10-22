import { apiFetch } from "./clints";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  return apiFetch<Category[]>("/categories");
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category> {
  return apiFetch<Category>(
    `/categories/${encodeURIComponent(slug)}`,
  );
}
