import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";

import { db } from "@/lib/db";
import { products } from "@/db/schema";

// export const runtime = "nodejs";

// GET /api/products
export async function GET() {
  try {
    const allProducts = db
      .select()
      .from(products)
      .orderBy(desc(products.id))
      .all();

    return NextResponse.json(allProducts);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST /api/products
export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("name" in body) ||
      !("price" in body)
    ) {
      return NextResponse.json(
        { error: "Name and price are required" },
        { status: 400 }
      );
    }

    const { name, price } = body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.trim().length > 200
    ) {
      return NextResponse.json(
        { error: "Name must be between 1 and 200 characters" },
        { status: 400 }
      );
    }

    if (
      typeof price !== "number" ||
      !Number.isFinite(price) ||
      price < 0 ||
      price > 1_000_000_000
    ) {
      return NextResponse.json(
        { error: "Price must be a valid non-negative number" },
        { status: 400 }
      );
    }

    const [newProduct] = db
      .insert(products)
      .values({
        name: name.trim(),
        price: Math.round(price * 100),
      })
      .returning()
      .all();

    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request or database error" },
      { status: 400 }
    );
  }
}