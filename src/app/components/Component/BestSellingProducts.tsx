
import { type ProductDetails } from "@/constants/sellingProducts";
import { useCart } from "@/Provider/CartContext";
import { useWishList } from "@/Provider/WishListContext";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";





interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
  rating: number
  description?: string
}

const BestSellingProducts = () => {
  const { addToWishList } = useWishList()
  const { addToCart } = useCart()
  const [data, setData] = useState<ProductDetails | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [mounted, setMounted] = useState(false);

  const handleToggleWishList = (product: Product) => {
    addToWishList(product)
    toast.success(`${product.title} added to wishlist`)
  }

  const handleAddCart = (product: Product) => {
    if (product) {
      addToCart(product)
      toast.success(`${product.title} added to cart!`)
    }
  }

  useEffect(() => {
    setMounted(true);
    const sellingProduct = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await fetch("https://dummyjson.com/product")
        if (!response.ok) {
          throw new Error("Something went wrong")
        }
        const data = await response.json()
        setData(data)
        console.log(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Something went wrong")
        }
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    sellingProduct()
  }, [])

  if (!mounted) return null;
  if (loading) return <p className="text-center py-10">Loading products...</p>
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>

  return (
    <main className="lg:my-12 Wrapper lg:px-0 px-4">
     <div className="lg:pb-0 pb-10">
       <div className='flex gap-3 items-center lg:mb-5 mb-2'>
        <div className='lg:w-5 w-3 lg:h-10 h-8 bg-red-500 rounded-lg'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'>This Month</div>
      </div>

      <h2 className="font-inter font-semibold lg:text-4xl text-2xl leading-12 tracking-[4%] lg:mb-12 mb-2">
        Best Selling Products
      </h2>
     </div>

      <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-0 ">
        {data?.products.slice(5, 9).map((BestSellingProductData: Product) => (
          // Inside the .map() loop...
<div key={BestSellingProductData.id} className="group relative lg:w-[270px] w-full mb-20">
  <section className="relative w-full h-[250px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden rounded-sm">
    
    {/* Top Icons */}
    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
      <button onClick={() => handleToggleWishList(BestSellingProductData)}>
        <Image src="/images/Heart.svg" alt="Add to wishlist" width={40} height={40} 
        className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors"/>
      </button>

      <button>
        <Image onClick={()=> handleAddCart(BestSellingProductData)} src="/images/Eye.svg" alt="View product" width={40} height={40}
         className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors"/>
      </button>
    </div>

    {/* Main Product Image */}
    <Link href={`/product/${BestSellingProductData.id}`}>
      <Image
        src={BestSellingProductData.thumbnail}
        alt={BestSellingProductData.title}
        width={190} 
        height={180}
        className="object-contain" 
      />
    </Link>

    {/* Add To Cart Button - Now correctly positioned and using group-hover */}
    <button 
      onClick={() => handleAddCart(BestSellingProductData)}
      className="absolute bottom-0 w-full h-10 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      Add To Cart
    </button>
  </section>

  {/* Text Details below the gray box */}
  <div className="pt-4 space-y-2">
    <div className="font-poppins font-medium text-base">{BestSellingProductData.title}</div>
    <div className="flex gap-3">
      <span className="text-[#DB4445] font-medium">${BestSellingProductData.price}</span>
      <span className="line-through text-gray-500">${BestSellingProductData.price}</span>
    </div>
    
    <div className='flex gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Image 
          key={star} 
          src={BestSellingProductData.rating >= star ? "/images/Star.svg" : "/images//EmptyStar.svg"} 
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
    </main>
  );
};

export default BestSellingProducts;