
import type { Product } from "@/types/product";
import { apiFetch } from "./clints";

export async function getProducts(
  category?: string,
): Promise<Product[]> {
  const query = category
    ? `?category=${encodeURIComponent(category)}`
    : "";

  return apiFetch<Product[]>(`/products${query}`);
}

export async function getProductById(
  id: number,
): Promise<Product> {
  return apiFetch<Product>(`/products/${id}`);
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.slug === slug);
}
