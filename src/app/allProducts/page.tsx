"use client"; // REQUIRED for useEffect and Hooks

import { ProductResponse } from "@/constants/Flash";
import { useCart } from "@/Provider/CartContext";
import { useWishList } from "@/Provider/WishListContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

function Products() {
  const { addToWishList } = useWishList();
  const { addToCart } = useCart();

  const [data, setData] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Start as true
  const [error, setError] = useState<string>("");

  const handleToggleWishList = (product: Product) => {
    addToWishList({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    });
    toast.success(`${product.title} added to wishlist`);
  };

  const handleAddCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="max-w-[1170px] mx-auto"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20  lg:py-15 py-12">
        {data?.products.map((product) => (
          <div key={product.id} className="group flex flex-col gap-3">
            
            {/* Image Container */}
            <div className="relative w-full h-[250px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden rounded-sm">
              {/* Discount Tag */}
              <div className="absolute top-3 left-3 px-3 py-1 bg-[#DB4445] rounded-md text-white text-xs">
                -40%
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button 
                  onClick={() => handleToggleWishList(product)}
                  className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors"
                >
                  <Image src="/images/Heart.svg" alt="wishlist" width={25} height={25} />
                </button>
                <button onClick={()=> handleAddCart(product)} 
                className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors">
                  <Image src="/images/Eye.svg" alt="view" width={25} height={25} />
                </button>
              </div>

              {/* Product Image */}
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={190}
                  height={180}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </Link>

              {/* Add to Cart Button (Visible on Hover) */}
              <button 
                onClick={() => handleAddCart(product)}
                className="absolute bottom-0 w-full h-10 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
              >
                Add To Cart
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-base truncate">{product.title}</h3>
              <div className="flex gap-3 items-center">
                <span className="text-[#DB4445] font-medium">${product.price}</span>
                <span className="text-gray-400 line-through font-medium">
                  ${(product.price * 1.4).toFixed(2)}
                </span>
              </div>
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image 
                    key={star}
                    src={product.rating >= star ? "/images/Star.svg" : "/images/EmptyStar.svg"}
                    alt="star"
                    width={16}
                    height={16}
                  />
                ))}
                <span className="text-xs text-gray-500 font-semibold ml-1">
                  ({Math.floor(Math.random() * 100)})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;