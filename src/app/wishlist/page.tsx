"use client";

import { useCart } from "@/Provider/CartContext";
import { useWishList } from "@/Provider/WishListContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

interface ProductResponse {
  products: Product[];
}

function Wishlist() {
  const { wishList, removeFromWishList } = useWishList();
  const { addToCart } = useCart();

  const [data, setData] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // ✅ Add to cart logic
  const handleAddCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  // ✅ Fetch "Just For You" products
  useEffect(() => {
    setMounted(true);
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const result: ProductResponse = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Hydration Fix: Check mounted first
  if (!mounted) return null; 
  
  // ✅ Loading and Error states
  if (loading) return <p className="text-center py-20 font-poppins text-lg">Loading items...</p>;
  if (error) return <p className="text-center text-red-500 py-20">{error}</p>;

  // ✅ Empty Wishlist State
  if (!wishList || wishList.length === 0)
    return (
      <div className="max-w-[1170px] mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-poppins">Your Wishlist is empty</h2>
        <Link href="/">
          <button className="mt-6 px-10 py-4 bg-[#Db4444] text-white rounded-sm cursor-pointer hover:bg-[#b03737] transition-all">
            Return To Shop
          </button>
        </Link>
      </div>
    );

  return (
    <main className="max-w-[1170px] mx-auto lg:px-0 px-4 py-10">
      <div className="space-y-12 pb-12">
        
        {/* === WISHLIST SECTION === */}
        <section>
          <div className="flex items-center justify-between py-4">
            <h3 className="font-poppins text-xl">Wishlist ({wishList.length})</h3>
            <button className="px-10 py-4 border border-gray-300 rounded-sm hover:bg-black hover:text-white transition-all font-medium">
              Move All To Bag
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(wishList as Product[]).map((product: Product) => (
              <div key={product.id} className="group">
                <section className="relative w-full h-[250px] bg-[#f5f5f5] mb-3 flex items-center justify-center rounded-sm overflow-hidden">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={190}
                      height={180}
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-3 right-3">
                    <button 
                      onClick={() => removeFromWishList(product.id)} 
                      className="bg-white p-2 rounded-full shadow-sm hover:bg-red-500 transition-colors"
                    >
                      <Image src="/images/DeleteBtn.svg" alt="remove" width={24} height={24} />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleAddCart(product)}
                    className="absolute bottom-0 left-0 w-full h-10 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
                  >
                    Add To Cart
                  </button>
                </section>

                <div className="space-y-2 px-1">
                  <div className="font-poppins font-medium truncate">{product.title}</div>
                  <div className="flex gap-3 items-center">
                    <p className="text-[#DB4445] font-semibold">${product.price}</p>
                    <p className="line-through text-gray-400 text-sm">${(product.price * 1.2).toFixed(2)}</p>
                  </div>
                  
                  {/* ⭐ Star Rating Logic Fixed */}
                  <div className="flex gap-1 items-center">
                  <div className="flex gap-1 items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Image 
                        key={s} 
                        src={Number(product.rating) >= s ? "/images/Star.svg" : "/images/EmptyStar.svg"} 
                        alt="star" 
                        width={16} 
                        height={16} 
                      />
                    ))}
                  </div>

                    <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === JUST FOR YOU SECTION === */}
        <section>
          <div className="flex items-center justify-between py-4 mt-10">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
              <h3 className="font-poppins text-xl font-medium">Just For You</h3>
            </div>
            <Link href="/shop" className="px-10 py-4 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
              See All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.products.slice(25, 29).map((product) => (
              <div key={product.id} className="group">
                <section className="relative w-full h-[250px] bg-[#f5f5f5] mb-3 flex items-center justify-center rounded-sm overflow-hidden">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={190}
                      height={180}
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => handleAddCart(product)}
                    className="absolute bottom-0 w-full h-10 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add To Cart
                  </button>
                </section>
                <div className="space-y-2 px-1">
                  <div className="font-poppins font-medium truncate">{product.title}</div>
                  <p className="text-[#DB4445] font-semibold">${product.price}</p>
                  
                  <div className="flex gap-1 items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Image 
                        key={s} 
                        src={Number(product.rating) >= s ? "/images/Star.svg" : "/images/EmptyStar.svg"} 
                        alt="star" 
                        width={16} 
                        height={16} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Wishlist;