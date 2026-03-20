"use client";

import { useCart } from "@/Provider/CartContext";
import { useWishList } from "@/Provider/WishListContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// ✅ Define Product Interface clearly
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

// ✅ Product Response Type for "Just For You" section
interface ProductResponse {
  products: Product[];
}

function Wishlist() {
  // Use the types from your Contexts
  const { wishList, removeFromWishList } = useWishList();
  const { addToCart } = useCart();

  const [data, setData] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // ✅ Add to cart with toast notification
  const handleAddCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  // ✅ Fetch products for "Just For You" section
  useEffect(() => {
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

  // ✅ Render stars helper
  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) => {
      if (rating >= star) return <Image key={star} src="/images/star.svg" alt="star" />;
      if (rating >= star - 0.5) return <Image key={star} src="/images/star-half-filled.svg" alt="half star" />;
      return <Image key={star} src="/images/EmptyStar.svg" alt="empty star" />;
    });
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  if (!wishList || wishList.length === 0)
    return (
      <div className="Wrapper px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Your Wishlist is empty</h2>
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-[#Db4444] text-white rounded-md cursor-pointer">
            Add Favorite product
          </button>
        </Link>
      </div>
    );

  return (
    <main className="Wrapper lg:px-0 px-4">
      <div className="space-y-12 pb-12">
        {/* ✅ WISHLIST SECTION */}
        <section>
          <div className="flex items-center justify-between py-4">
            <h3 className="font-poppins font-normal lg:text-[20px] text-[15px] leading-6">
              Wishlist ({wishList.length})
            </h3>
            <button className="lg:w-[223px] w-40 h-14 border rounded-sm font-poppins lg:font-medium font-normal text-base leading-6 cursor-pointer hover:bg-gray-50">
              Move All To Bag
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ✅ Fix: Cast product as 'Product' to ensure 'rating' is recognized */}
            {(wishList as Product[]).map((product: Product) => (
              <div key={product.id}>
                <section className="relative lg:w-[270px] w-full mx-auto h-[250px] bg-[#f5f5f5] mb-3 group">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      className="absolute inset-0 m-auto w-[190px] h-[180px] object-contain"
                    />
                  </Link>

                  <div className="absolute top-3 right-3">
                    <button onClick={() => removeFromWishList(product.id)} className="cursor-pointer">
                      <Image src="/images/delete.svg" alt="remove" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleAddCart(product)}
                    className="absolute bottom-0 left-0 w-full h-10 flex items-center justify-center bg-black text-white rounded-bl-sm rounded-br-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add To Cart
                  </button>
                </section>

                <div className="space-y-2 lg:pl-2">
                  <div className="font-poppins font-medium text-base leading-6 truncate">
                    {product.title}
                  </div>

                  <div className="flex gap-2 items-center">
                    <p className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">
                      ${product.price}
                    </p>
                    <p className="line-through font-poppins font-medium text-[16px] leading-6 text-gray-400">
                      ${(product.price * 1.2).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex gap-1">{renderStars(product.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ JUST FOR YOU SECTION */}
        <section>
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-10 bg-red-500 rounded-sm"></span>
              <h3 className="font-poppins font-normal lg:text-[20px] text-[15px] leading-6">
                Just For You
              </h3>
            </div>
            <button className="lg:w-[223px] w-40 h-14 border rounded-sm font-poppins lg:font-medium font-normal text-base leading-6 cursor-pointer hover:bg-gray-50">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.products.slice(25, 29).map((product) => (
              <div key={product.id}>
                <section className="relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3 group">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px] object-contain"
                    />
                  </Link>

                  <button
                    onClick={() => handleAddCart(product)}
                    className="absolute bottom-0 left-0 w-full h-10 flex items-center justify-center bg-black text-white rounded-bl-sm rounded-br-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add To Cart
                  </button>
                </section>

                <div className="space-y-2 md:pl-2">
                  <div className="font-poppins font-medium text-base leading-6 truncate">
                    {product.title}
                  </div>

                  <div className="flex gap-2 items-center">
                    <p className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">
                      ${product.price}
                    </p>
                  </div>

                  <div className="flex gap-1">{renderStars(product.rating)}</div>
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