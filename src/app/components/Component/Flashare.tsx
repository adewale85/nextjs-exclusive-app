
import Image from 'next/image';
import { useCountdown } from '@/../src/app/utils/useCountdown';
import Products from '../Products/Products';
import Link from 'next/link';

function Flashare() {
  const { days, hours, minutes, seconds } = useCountdown("2026-12-01");

  const Dots = () => (
    <div className="flex flex-col gap-1 mt-4">
      <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
      <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
    </div>
  );

  return (
    <div className=" lg:px-0  lg:pt-20 pt-20">
      {/* Main Row */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:gap-20 gap-8 ">
        
        {/* 1. Title Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-semibold">Today's</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Flash Sales</h2>
        </div>

        {/* 2. Countdown Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Days */}
          <div>
            <p className="text-xs font-medium">Days</p>
            <h3 className="text-3xl font-bold">{String(days).padStart(2, '0')}</h3>
          </div>
          <Dots />
          
          {/* Hours */}
          <div>
            <p className="text-xs font-medium">Hours</p>
            <h3 className="text-3xl font-bold">{String(hours).padStart(2, '0')}</h3>
          </div>
          <Dots />

          {/* Minutes */}
          <div>
            <p className="text-xs font-medium">Minutes</p>
            <h3 className="text-3xl font-bold">{String(minutes).padStart(2, '0')}</h3>
          </div>
          <Dots />

          {/* Seconds */}
          <div>
            <p className="text-xs font-medium">Seconds</p>
            <h3 className="text-3xl font-bold text-red-500">{String(seconds).padStart(2, '0')}</h3>
          </div>
        </div>

        {/* 3. Arrow Section (Pushed to the right) */}
        <div className="hidden lg:flex gap-2 ml-auto">
          <button className="bg-secondary rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Image src="/images/LeftArrow.svg" alt="prev" width={46} height={46} />
          </button>
          <button className="bg-secondary rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Image src="/images/RightArrow.svg" alt="next" width={46} height={46} />
          </button>
        </div>

      </div>

      <Products />

      {/* View All */}
      <div className="flex items-center justify-center py-15 lg:py-20">
        <Link href="/allProducts">
          <button className="w-[234px]  h-14 bg-primary rounded-sm text-white text-[16px] font-medium">
            View All Products
          </button>
        </Link>
      </div>

      {/* Divider */}
      <div className="border-b-[0.5px] opacity-30  mb-12"></div>
    </div>
  );
}

export default Flashare;