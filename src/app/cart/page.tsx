"use client";

import { useCart } from "@/Provider/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const { cartTotal } = useCart();

  // ✅ Prevent Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // If cart is empty
  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-[1170px] mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold font-poppins">Your Cart is Empty 🛒</h2>
        <Link href="/">
          <button className="mt-6 px-10 py-4 bg-[#Db4444] text-white rounded-sm hover:bg-[#b03737] transition-all">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1170px] mx-auto lg:px-0 px-4 py-10">
      
      {/* DESKTOP VERSION */}
      <div className="hidden lg:flex flex-col bg-white shadow-sm rounded-md p-10 gap-6 border">
        
        {/* Header */}
        <div className="flex justify-between font-medium text-[18px] pb-4 border-b">
          <span className="w-[300px]">Product</span>
          <span className="w-[120px] text-center">Price</span>
          <span className="w-[120px] text-center">Quantity</span>
          <span className="w-[120px] text-right">Subtotal</span>
          <span className="w-[120px] text-right">Action</span>
        </div>

        {/* Cart Items */}
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center py-6 border-b"
          >
            {/* Product */}
            <div className="flex items-center gap-3 w-[300px]">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={50}
                height={40} 
                className="object-contain"
              />
              <span className="text-[16px] font-medium truncate">{product.title}</span>
            </div>

            {/* Price */}
            <div className="w-[120px] text-center font-poppins">
              ${product.price}
            </div>

            {/* Quantity */}
           <div className="w-[120px] text-center">
              <select
                value={product.quantity}
                onChange={(e) =>
                  updateQuantity(product.id, Number(e.target.value))
                }
                className="w-16 h-11 border border-gray-300 rounded-md text-center"
              >
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
              </select>
            </div>

            {/* Subtotal */}
            <div className="w-[120px] text-right font-semibold text-[#DB4444]">
              ${(product.price * product.quantity).toFixed(2)}
            </div>

            {/* Delete */}
            <div className="w-[120px] text-right">
              <button
                onClick={() => removeFromCart(product.id)}
                className=" white font-medium transition-colors px-3 .py-2 rounded-md mt-3 bg-red-500 text-white py-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        
        <div className="flex justify-between items-center mt-4">
           <Link href="/" className="px-10 py-4 border border-gray-400 rounded-sm font-medium hover:bg-gray-50">Return To Shop</Link>
           <button className="px-10 py-4 border border-gray-400 rounded-sm font-medium hover:bg-gray-50">Update Cart</button>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden flex flex-col gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 shadow-sm rounded-md border border-gray-100 space-y-4"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Product</span>
              <div className="flex items-center gap-3">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-sm font-medium max-w-[120px] truncate">
                  {product.title}
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <span>Price</span>
              <span>${product.price}</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Quantity</span>
              <select
                value={product.quantity}
                onChange={(e) =>
                  updateQuantity(product.id, Number(e.target.value))
                }
                className="border rounded px-2 py-1"
              >
                {[1, 2, 3, 4, 5].map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-between border-t pt-3 font-semibold text-[#DB4444]">
              <span>Subtotal</span>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded font-medium active:scale-95 transition-transform"
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>

     <div className="py-30 flex lg:flex-row flex-col justify-between lg:px-0 px-4">
         <div className=" flex lg:flex-row flex-col lg:gap-16 gap-8 ">
        <div className="lg:w-[300px] w-full h-[56px] rounded-sm border flex  items-center pl-4">
          <p className="font-poppins font-normal text-[16px] leading-6">Coupon Code</p>
        </div>
        <button className="lg:w-[211px] h-[56px] rounded-sm bg-[#DB4444] font-medium font-poppins text-[16px] leading-6 text-white">
        Apply Coupon
        </button>
      </div>

      <div className="lg:w-[470px] w-full h-[324px] border-[1.5px]  space-y-6 p-8 mt-12">
        <h3 className="font-poppins font-medium text-[20px] leading-7">Cart Total</h3>
        <div className="flex items-center justify-between border-b">
            <p className="font-poppins font-normal text-[16px] leading-6">Shipping:</p>
            <p className="font-poppins font-normal text-[16px] leading-6">Free</p>
        </div>
        <div className="flex items-center justify-between border-b">
            <p className="font-poppins font-normal text-[16px] leading-6">Subtotal:</p>
            <p className="font-poppins font-normal text-[16px] leading-6">${cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between border-b">
            <p className="font-poppins font-normal text-[16px] leading-6">Total:</p>
            <p className="font-poppins font-normal text-[16px] leading-6">${cartTotal.toFixed(2)}</p>
        </div>
        <Link href={'/checkout'}>
         <button className="lg:w-[260px] w-full h-[56px] rounded-sm bg-[#DB4444] font-medium font-poppins text-[16px] leading-6 text-white">
        Apply Coupon
        </button>
        </Link>

      </div>

     </div>

    </div>
  );
}

export default Cart;