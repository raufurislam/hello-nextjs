"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ParallelPage() {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-semibold">This is ParallelPage component</h1>
      <Link href="/products">View Products</Link>
      <br />
      <button onClick={() => router.push("/products")}>
        View Product with hooks
      </button>
    </div>
  );
}
