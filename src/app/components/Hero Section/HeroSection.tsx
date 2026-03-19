"use client"; 
import Link from 'next/link';
import Banner from '../Banner/Banner'
import Image from 'next/image';

function HeroSection() {
  return (
   <div className="relative">
          <div className="flex md:flex-row flex-col relative md:w-[892px] w-full h-[358px] bg-black justify-between">
            <div className="md:p-12 p-6 space-y-10 ">
              <div className="flex gap-8 items-center">
                <Image
                  src="IphoneIcon"
                  alt="Apple iPhone logo"
                  className="w-10 h-12.25"
                />
                <p className="font-poppins font-normal text-base leading-6 text-[#FAFAFA]">
                  iPhone 14 Series
                </p>
              </div>

              <div>
                <h2 className="w-73.5 font-poppins font-semibold leading-12 tracking-[0.04em] text-[#FAFAFA] text-[40px] ">
                  Up to 10% off Voucher
                </h2>
              </div>

              <div>
                <Link href="/EveryProduct">
                <p className="font-poppins font-medium text-base leading-6 text-[#FAFAFA] flex items-center gap-5">
                  Shop Now
                  <span>
                    <Image src="Right_Arrow" alt="" />
                  </span>
                </p>
                </Link>
              </div>
            </div>

           
            <div className="flex md:flex-row flex-col items-center absolute">
              <Banner/>
            </div>
           

          
          </div>
        
        </div>
  )
}

export default HeroSection