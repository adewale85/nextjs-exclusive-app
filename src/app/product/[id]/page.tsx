"use client";

import Products from "@/app/components/Products/Products";
import { useCart } from "@/Provider/CartContext";
import { useWishList } from "@/Provider/WishListContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"; // Removed 'use' as it was unused
import toast from "react-hot-toast";


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  review?: string;
  thumbnail: string;
  images: string[];
}

function AllProductDetails() {
  const { addToWishList } = useWishList();
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  // --- ADDED FIX START ---
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // --- ADDED FIX END ---

  const handleToggleWishList = (product: Product) => {
    addToWishList(product);
    toast.success(`${product.title} added to wishlist`);
  };

  const handleAddCart = (product: Product) => {
    addToCart({ ...product, quantity });
    toast.success(`${product.title} added to cart!`);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Something went wrong");
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  // --- PREVENT RENDER UNTIL MOUNTED ---
  if (!mounted) return null;

  if (loading) return <div className="text-center py-20">Loading product...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!product) return null;

  return (
    <div className="Wrapper lg:px-0 px-4 lg:py-12 lg:pb-0 pb-22">
      {/* Breadcrumb */}
      <div className="flex lg:gap-12 gap-5 py-22">
        {["Account /", "Gaming /", product.title].map((item, index) => (
          <p
            key={index}
            className={`font-poppins font-normal lg:text-[14px] text-[12px] leading-5 ${
              index < 2 ? "opacity-50" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Product Images and Details */}
      <div className="flex lg:flex-row flex-col gap-12">
        {/* Thumbnails */}
        <div className="space-y-4">
          {product.images?.slice(0, 4).map((img, index) => (
            <div
              key={index}
              className="lg:w-[170px] w-40 lg:h-[138px] h-40 bg-[#f5F5F5] rounded-sm flex items-center justify-center"
            >
              <Image 
                src={img} 
                alt={`thumbnail-${index}`} 
                width={190}
                height={180} 
                className="object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

        {/* Main Thumbnail */}
        <div className="lg:w-[500px] w-full lg:h-[600px] h-auto bg-[#f5F5F5] rounded-sm flex items-center justify-center">
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            width={800}
            height={800} 
            className="object-contain" 
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-[399px] w-full">
          <section className="space-y-4">
            <h2 className="font-inter font-semibold text-2xl leading-6 tracking-[3]">{product.title}</h2>
            <p className="font-poppins font-normal text-[14px] leading-5 border-b pb-5 lg:w-[373px] w-full">
              {product.description}
            </p>

            {/* Rating and Stock */}
            <div className="flex gap-3 items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  if (product.rating >= star) return <Image key={star} src="/images/Star.svg" alt="star" width={20} height={20} />;
                  if (product.rating >= star - 0.5) return <Image key={star} src="/images/star-half-filled.svg" alt="half star" width={20} height={20} />;
                  return <Image key={star} src="/images/EmptyStar.svg" alt="empty star" width={20} height={20} className="opacity-20" />;
                })}
              </div>
              {product.review && <p className="font-poppins font-normal text-[14px]">{product.review}</p>}
              <div className="flex items-center justify-center gap-5">
                <span className="text-black">|</span>
                <p className="font-poppins font-normal text-[14px] text-[#00FF66]">{product.stock}</p>
                <span>In stock</span>
              </div>
            </div>

            <p className="font-inter font-normal text-[24px] leading-6 tracking-[3%]">${product.price}</p>
          </section>

          {/* Color and Size */}
          <div className="space-y-6 py-5">
            <div className="flex gap-7">
              <p className="font-inter font-normal text-[20px]">Colours:</p>
              <div className="flex gap-2">
                <Image src="/images/ElipseBlackBlue.svg" alt="black-blue" width={20} height={20} />
                <Image src="/images/ElipseRed.svg" alt="red" width={20} height={20} />
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <h3 className="font-inter font-normal text-[20px]">Size:</h3>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className={`size-8 border rounded-sm font-medium font-poppins text-sm leading-5 flex items-center justify-center cursor-pointer ${
                    size === "M" ? "bg-[#Db4444] text-white" : ""
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>

            {/* Quantity and Cart */}
            <div className="flex gap-5">
              <div className="flex">
                <button
                  onClick={handleDecrease}
                  className="w-10 h-11 border flex items-center justify-center font-poppins font-medium text-[20px] rounded-l-sm"
                >
                  -
                </button>
                <div className="w-20 h-11 border flex items-center justify-center font-poppins font-medium text-[20px]">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrease}
                  className="w-10 h-11 flex items-center justify-center font-poppins font-medium text-[20px] text-white bg-[#Db4444] rounded-r-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddCart(product)}
                className="lg:w-[165px] w-[120px] h-11 bg-[#Db4444] text-white rounded-sm"
              >
                Add To Cart
              </button>

              <div className="size-10 rounded-sm border flex items-center justify-center">
                <button onClick={() => handleToggleWishList(product)}>
                  <Image src="/images/Love_Vector.svg" alt="wishlist" width={20} height={20} />
                </button>
              </div>
            </div>

            {/* Delivery & Return */}
            <div className="lg:w-[401px] w-full lg:h-[180px] h-full rounded-sm border flex flex-col items-center justify-center space-y-5">
              <div className="flex gap-5 p-4">
                <Image src="/images/Delivery_Icon.svg" alt="delivery" width={32} height={32} />
                <div className="lg:w-[332px] w-[252px]">
                  <h2 className="font-poppins font-medium text-sm leading-6">Free Delivery</h2>
                  <p className="font-medium font-poppins text-[12px] leading-4">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="border w-full"></div>
              <div className="flex gap-5 p-6">
                <Image src="/images/Return_Delivery.svg" alt="return delivery" width={32} height={32} />
                <div className="lg:w-[332px] w-[252px]">
                  <h2 className="font-poppins font-medium text-sm leading-6">Return Delivery</h2>
                  <p className="font-medium font-poppins text-[12px] leading-4">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="lg:py-22 py-0">
        <div className="flex gap-3 items-center lg:py-12 lg:pt-0 pt-12">
          <div className="lg:w-5 w-3 lg:h-10 h-6 bg-red-500 rounded-md"></div>
          <p className="font-poppins font-semibold text-base leading-5">Related Item</p>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default AllProductDetails;