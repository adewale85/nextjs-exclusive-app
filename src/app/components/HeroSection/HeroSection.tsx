"use client";
import Link from 'next/link';
import Banner from '../Banner/Banner'
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="relative pt-3 pl-6">
     
      <div className="flex lg:flex-row flex-col lg:w-236 w-full min-h-85 bg-black justify-between items-center">
        
        {/* Left Side: Text Content */}
        <div className="lg:p-12 p-6 space-y-10">
          <div className="flex gap-8 items-center">
            <Image
              src="/images/Apple_logo.svg" 
              alt="Apple iPhone logo"
              width={40}
              height={49}
              className="w-10 h-auto"
            />
            <p className="font-poppins font-normal text-base leading-6 text-[#FAFAFA]">
              iPhone 14 Series
            </p>
          </div>

          <div>
            <h2 className="lg:w-75 font-poppins font-semibold leading-tight tracking-[0.04em] text-[#FAFAFA] text-[40px]">
              Up to 10% off Voucher
            </h2>
          </div>

          <div>
            <Link href="/allProducts">
              <div className="font-poppins font-medium text-base leading-6 text-[#FAFAFA] flex items-center gap-5 cursor-pointer">
                Shop Now
                <span>
                  <Image src="/images/Right_Arrow.svg" alt="" width={24} height={24} />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Banner */}
        <div className="flex items-center justify-center lg:pr-12 ">
          <Banner />
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection;