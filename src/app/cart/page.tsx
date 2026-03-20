// "use client";

// import { useCart } from "@/Provider/CartContext";
// import Image from "next/image";
// import Link from "next/link";


// function Cart() {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   // If cart is empty
//   if (cart.length === 0) {
//     return (
//       <div className="Wrapper px-4 py-20 text-center">
//         <h2 className="text-2xl font-semibold">Your Cart is Empty 🛒</h2>
//         <Link href="/">
//           <button className="mt-6 px-6 py-3 bg-[#Db4444] text-white rounded-md">
//             Go Shopping
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="Wrapper lg:px-0 px-4 py-10">
      
//       {/* DESKTOP VERSION */}
//       <div className="hidden lg:flex flex-col bg-white shadow-sm rounded-md p-10 gap-6">
        
//         {/* Header */}
//         <div className="flex justify-between font-medium text-[18px] pb-4 border-b">
//           <span className="w-[300px]">Product</span>
//           <span className="w-[120px] text-center">Price</span>
//           <span className="w-[120px] text-center">Quantity</span>
//           <span className="w-[120px] text-right">Subtotal</span>
//           <span className="w-[120px] text-right">Delete</span>
//         </div>

//         {/* Cart Items */}
//         {cart.map((product) => (
//           <div
//             key={product.id}
//             className="flex justify-between items-center py-6 border-b"
//           >
//             {/* Product */}
//             <div className="flex items-center gap-3 w-[300px]">
//               <Image
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-12 h-10 object-contain"
//               />
//               <span className="text-[16px]">{product.title}</span>
//             </div>

//             {/* Price */}
//             <div className="w-[120px] text-center">
//               ${product.price}
//             </div>

//             {/* Quantity */}
//             <div className="w-[120px] text-center">
//               <select
//                 value={product.quantity}
//                 onChange={(e) =>
//                   updateQuantity(product.id, Number(e.target.value))
//                 }
//                 className="w-16 h-11 border border-gray-300 rounded-md text-center"
//               >
//                 <option value="1">01</option>
//                 <option value="2">02</option>
//                 <option value="3">03</option>
//                 <option value="4">04</option>
//               </select>
//             </div>

//             {/* Subtotal */}
//             <div className="w-[120px] text-right">
//               ${product.price * product.quantity}
//             </div>
//             <div className="w-[120px] text-right">
//               <button
//               onClick={() => removeFromCart(product.id)}
//               className="px-3 .py-2 rounded-md mt-3 bg-red-500 text-white py-2 "
//             >
//               Remove Item
//             </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MOBILE VERSION */}
//       <div className="lg:hidden flex flex-col gap-6">
//         {cart.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-6 shadow-sm rounded-md border border-gray-100 space-y-4"
//           >
//             <div className="flex justify-between items-center">
//               <span className="font-medium">Product</span>
//               <div className="flex items-center gap-3">
//                 <Image
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="w-10 h-10 object-contain"
//                 />
//                 <span className="text-sm font-medium">
//                   {product.title}
//                 </span>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <span>Price</span>
//               <span>${product.price}</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span>Quantity</span>
//               <select
//                 value={product.quantity}
//                 onChange={(e) =>
//                   updateQuantity(product.id, Number(e.target.value))
//                 }
//                 className="border rounded px-2 py-1"
//               >
//                 <option value="1">01</option>
//                 <option value="2">02</option>
//                 <option value="3">03</option>
//               </select>
//             </div>

//             <div className="flex justify-between border-t pt-3 font-semibold">
//               <span>Subtotal</span>
//               <span>${product.price * product.quantity}</span>
//             </div>

//             <button
//               onClick={() => removeFromCart(product.id)}
//               className="w-full mt-3 bg-red-500 text-white py-2 rounded"
//             >
//               Remove Item
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;
