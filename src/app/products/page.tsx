"use client";

import { useCallback, useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number; // Stored in cents
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadProducts = useCallback(async () => {
    try {
      setError("");

      const response = await fetch("/api/products");

      if (!response.ok) {
        throw new Error("Failed to load products");
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch {
      setError("Could not load products. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProducts();
  }, [loadProducts]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");

    const numericPrice = Number(price);

    if (
      !name.trim() ||
      name.trim().length > 200 ||
      price.trim() === "" ||
      !Number.isFinite(numericPrice) ||
      numericPrice < 0 ||
      numericPrice > 1_000_000_000
    ) {
      setError("Enter a valid product name and price.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          price: numericPrice,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to add product");
      }

      setProducts((current) => [data, ...current]);
      setName("");
      setPrice("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="mt-2 text-gray-600">
          Next.js API Routes + Drizzle ORM + SQLite
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium"
            >
              Product name
            </label>

            <input
              id="name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              maxLength={200}
              required
              placeholder="e.g. Keyboard"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="mb-1 block text-sm font-medium"
            >
              Price
            </label>

            <input
              id="price"
              type="number"
              min="0"
              max="1000000000"
              step="0.01"
              value={price}
              onChange={(event) =>
                setPrice(event.target.value)
              }
              required
              placeholder="e.g. 49.99"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving..." : "Add Product"}
          </button>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
        </form>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Product List
          </h2>

          {loading ? (
            <p className="mt-4 text-gray-500">
              Loading products...
            </p>
          ) : products.length === 0 ? (
            <p className="mt-4 rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-500">
              No products yet. Add your first product.
            </p>
          ) : (
            <div className="mt-4 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-4 p-4"
                >
                  <div>
                    <p className="font-medium">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Product #{product.id}
                    </p>
                  </div>

                  <p className="font-semibold">
                    {(product.price / 100).toLocaleString(
                      "en-IN",
                      {
                        style: "currency",
                        currency: "INR",
                      }
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}