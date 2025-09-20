"use client";

import { IProduct } from "@/type";
import Image from "next/image";

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="relative w-full h-52">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.product_name}
          </h2>
          <span className="text-xs text-blue-700 bg-blue-100 uppercase font-bold px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          Brand: <span className="font-medium">{product.brand}</span>
        </p>
        <p className="text-blue-600 font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
}
