import ProductCard from "@/components/Products/ProductCard";
import { IProduct } from "@/type";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Explore Our Products
      </h1>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
