

import { NewArrivalData } from "@/constants/Arrival";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NewArrival() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-[1170px]  px-4 lg:px-0">
      {/* Header Section */}
      <div className="py-8">
        <div className="flex gap-3 items-center">
          <div className="w-5 h-10 bg-red-500 rounded-md"></div>
          <div className="font-poppins font-semibold text-base text-[#db4444]">
            Featured
          </div>
        </div>
        <div className="py-3 font-inter font-semibold text-3xl md:text-[36px] tracking-wider">
          New Arrival
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Big Card (PlayStation) */}
        <div className="relative bg-black rounded-sm overflow-hidden min-h-[400px] lg:h-[600px] flex items-end justify-center">
          <Image 
            src="/images/Playstation.svg" 
            alt="PS5" 
            width={511} // Add actual dimensions
            height={511}
            className="object-contain" 
          />
          <div className="absolute left-6 bottom-8 text-white z-10">
            <h2 className="text-xl md:text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-xs md:text-sm mt-2 max-w-[250px] text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/allProducts">
              <button className="mt-4 font-medium border-b border-gray-400 hover:text-white transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section Grid */}
        <div className="grid grid-rows-2 gap-6">
          
          {/* Top Wide Card (Women's Collection) */}
          <div className="relative bg-[#0D0D0D] rounded-sm overflow-hidden flex justify-end">
            <Image 
              src="/images/Woman_wearing.svg" 
              alt="Women's Collection" 
              width={432}
              height={286}
              className="object-contain" 
            />
            <div className="absolute left-6 bottom-8 text-white z-10">
              <h2 className="text-xl md:text-2xl font-semibold">Women’s Collections</h2>
              <p className="text-xs md:text-sm mt-2 max-w-[200px] text-gray-300">
                Featured woman collections that give you another vibe.
              </p>
              <Link href="/allProducts">
                <button className="mt-3 font-medium border-b border-gray-400 hover:text-white">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom Two Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Speakers */}
            <div className="relative bg-black rounded-sm overflow-hidden flex items-center justify-center p-8">
              <Image src="/images/Bt_Speaker.svg" alt="Speakers" width={190} height={221} className="object-contain shadow-2xl shadow-white/10" />
              <div className="absolute left-6 bottom-6 text-white z-10">
                <h2 className="text-lg md:text-xl font-semibold">Speakers</h2>
                <p className="text-xs mt-1 text-gray-300">Amazon wireless speakers</p>
                <Link href="/allProducts">
                  <button className="mt-2 text-sm border-b border-gray-400 hover:text-white">Shop Now</button>
                </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded-sm overflow-hidden flex items-center justify-center p-8">
              <Image src="/images/Perfume.svg" alt="Perfume" width={190} height={221} className="object-contain shadow-2xl shadow-white/10" />
              <div className="absolute left-6 bottom-6 text-white z-10">
                <h2 className="text-lg md:text-xl font-semibold">Perfume</h2>
                <p className="text-xs mt-1 text-gray-300">GUCCI INTENSE OUD EDP</p>
                <Link href="/allProducts">
                  <button className="mt-2 text-sm border-b border-gray-400 hover:text-white">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Features */}
      <div className="py-28 flex flex-wrap gap-10 lg:gap-20 items-center justify-center">
        {NewArrivalData.map(({ id, image, title, subTitle }) => (
          <div key={id} className="flex flex-col items-center text-center max-w-[350px]">
            <div className="bg-gray-300 p-2 rounded-full mb-4">
               <div className="bg-black p-3 rounded-full flex items-center justify-center">
                  <Image src={image} alt="icon" width={40} height={40} className="invert" />
               </div>
            </div>
            <h3 className="font-poppins font-semibold text-[20px] leading-7">{title}</h3>
            <p className="font-poppins font-normal text-sm leading-5">{subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;