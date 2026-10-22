
import { getProducts } from "@/lib/api/products";
import { getCategories } from "@/lib/api/categories";

export default async function ApiTestPage() {
  type Products = Awaited<ReturnType<typeof getProducts>>;
  type Categories = Awaited<ReturnType<typeof getCategories>>;

  let result:
    | { products: Products; categories: Categories }
    | { error: string };

  try {
    const [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ]);

    result = { products, categories };
  } catch (error) {
    result = {
      error:
        error instanceof Error ? error.message : "An unknown error occurred.",
    };
  }

  if ("error" in result) {
    return (
      <main className="container-app section-spacing">
        <h1 className="text-2xl font-bold">API Test Failed</h1>
        <p className="mt-4 text-error">{result.error}</p>
      </main>
    );
  }

  const { products, categories } = result;

  return (
    <main className="container-app section-spacing space-y-6">
      <h1 className="text-2xl font-bold">API Test</h1>

      <p>Products found: {products.length}</p>
      <p>Categories found: {categories.length}</p>

      <section className="card border border-base-300 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            First product: {products[0]?.nameBn ?? "No products"}
          </h2>
          <p>Slug: {products[0]?.slug ?? "N/A"}</p>
          <p>Today: ৳{products[0]?.today ?? "N/A"}</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold">Categories</h2>
        <ul className="list-disc pl-6">
          {categories.map((category) => (
            <li key={category.id}>
              {category.icon} {category.nameBn}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
