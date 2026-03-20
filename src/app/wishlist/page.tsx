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

  const handleAddCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

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

 

  // ✅ 1. Check mounted FIRST
  if (!mounted) return null; 
  // ✅ 2. Check loading/error SECOND
  if (loading) return <p className="text-center py-20 font-poppins">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-20">{error}</p>;

  if (!wishList || wishList.length === 0)
    return (
      <div className="max-w-[1170px] mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-inter">Your Wishlist is empty</h2>
        <Link href="/">
          <button className="mt-6 px-10 py-4 bg-[#Db4444] text-white rounded-sm cursor-pointer hover:bg-[#b03737] transition-all">
            Add Favorite product
          </button>
        </Link>
      </div>
    );

  return (
    <main className="max-w-[1170px] mx-auto lg:px-0 px-4 py-10">
      <div className="space-y-12 pb-12">
        {/* WISHLIST SECTION */}
        <section>
          <div className="flex items-center justify-between py-4">
            <h3 className="font-poppins text-xl">Wishlist ({wishList.length})</h3>
            <button className="px-10 py-4 border border-gray-300 rounded-sm hover:bg-black hover:text-white transition-all">
              Move All To Bag
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(wishList as Product[]).map((product: Product) => (
              <div key={product.id}>
                <section className="relative w-full h-[250px] bg-[#f5f5f5] mb-3 group flex items-center justify-center">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={190} // ✅ Added Width
                      height={180} // ✅ Added Height
                      className="object-contain"
                    />
                  </Link>
                  <div className="absolute top-3 right-3">
                    <button onClick={() => removeFromWishList(product.id)} className="bg-white p-2 rounded-full shadow-sm">
                      <Image src="/images/DeleteBtn.svg" alt="remove" width={30} height={30} />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleAddCart(product)}
                    className="absolute bottom-0 left-0 w-full h-10 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add To Cart
                  </button>
                </section>

                <div className="space-y-2">
                  <div className="font-poppins font-medium truncate">{product.title}</div>
                  <div className="flex gap-3">
                    <p className="text-[#DB4445] font-semibold">${product.price}</p>
                    <p className="line-through text-gray-400">${(product.price * 1.2).toFixed(2)}</p>
                  </div>
                   <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Image 
                                      key={star} 
                                      src={product.rating >= star ? "/images/Star.svg" : "/images/EmptyStar.svg"} 
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
        </section>

        {/* JUST FOR YOU SECTION */}
        <section>
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
              <h3 className="font-poppins text-xl">Just For You</h3>
            </div>
            <Link href="/shop" className="px-10 py-4 border border-gray-300 rounded-sm hover:bg-gray-50">
              See All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.products.slice(25, 29).map((product) => (
              <div key={product.id}>
                <section className="relative w-full h-[250px] bg-[#f5f5f5] mb-3 group flex items-center justify-center">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={190} // ✅ Added Width
                      height={180} // ✅ Added Height
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
                <div className="space-y-2">
                  <div className="font-poppins font-medium truncate">{product.title}</div>
                  <p className="text-[#DB4445] font-semibold">${product.price}</p>
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
        </section>
      </div>
    </main>
  );
}

export default Wishlist;