"use client";

import { Exploreprops } from "@/constants/Explore";
import { useCart } from "@/Provider/CartContext";
import { useWishList } from "@/Provider/WishListContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Interface for the Product
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description?: string;
}

const ExploreOurProducts = () => {
  const { addToWishList } = useWishList();
  const { addToCart } = useCart();
  const [data, setData] = useState<Exploreprops | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // 1. Logic for Toast and Wishlist
  const handleToggleWishList = (product: Product) => {
    addToWishList(product);
    toast.success(`${product.title} added to wishlist!`);
  };

  // 2. Logic for Toast and Cart
  const handleAddCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  useEffect(() => {
    setMounted(true);
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/product");
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (!mounted) return null;
  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="max-w-[1170px] mx-auto px-4 py-16">
      <div className="flex gap-3 items-center mb-4">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold">Our Products</span>
      </div>
      <h2 className="text-3xl font-bold mb-10">Explore Our Products</h2>

      {/* Grid for all products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {data?.products.slice(10, 18).map((product: Product) => (
          <div key={product.id} className="group flex flex-col gap-3">
            
            {/* Gray Image Container */}
            <div className="relative w-full h-[250px] bg-[#f5f5f5] flex items-center justify-center rounded-sm overflow-hidden">
              
              {/* Top Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                <button 
                  onClick={() => handleToggleWishList(product)} 
                  className="bg-white p-2 rounded-full hover:bg-red-500 group/icon transition-colors"
                >
                  <Image 
                    src="/images/Heart.svg" 
                    alt="wishlist" 
                    width={20} 
                    height={20} 
                    className="group-hover/icon:invert" 
                  />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-red-500 group/icon transition-colors">
                  <Image 
                    src="/images/Eye.svg" 
                    alt="view" 
                    width={20} 
                    height={20} 
                    className="group-hover/icon:invert"
                  />
                </button>
              </div>

              {/* Product Thumbnail */}
              <Link href={`/product/${product.id}`}>
                <Image src={product.thumbnail} alt={product.title} width={150} height={150} className="object-contain" />
              </Link>

              {/* ADD TO CART BUTTON (Fixed) */}
              <button 
                onClick={() => handleAddCart(product)}
                className="absolute bottom-0 w-full h-10 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                Add To Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="space-y-1">
              <h3 className="font-medium truncate">{product.title}</h3>
              <p className="text-red-500 font-bold">${product.price}</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Image 
                    key={s} 
                    src={product.rating >= s ? "/images/Star.svg" : "/images/EmptyStar.svg"} 
                    alt="star" 
                    width={14} 
                    height={14} 
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-12">
        <Link href="/EveryProduct">
          <button className="bg-red-500 text-white px-10 py-4 rounded-sm hover:bg-red-600 transition-colors">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreOurProducts;