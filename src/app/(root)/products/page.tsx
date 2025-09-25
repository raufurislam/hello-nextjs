import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description: "This is products page",
};

export default function ProductPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1>This is Product Page component</h1>
    </div>
  );
}
