"use client"

import Image from "next/image"
import Link from "next/link"


function page() {
  return (
    <div>
        <section className='Wrapper py-12'>
        <div className='lg:px-0 px-12 flex gap-3'>
            <Link href={"/"}>
            <p className='font-poppins font-normal text-sm leading-5 text-[#818181]'>Home / </p>
            </Link>
            <Link href={"/about"}>
             <p className='font-poppins font-normal text-sm leading-5'>Contact </p>
            </Link>
        </div>

    <div className='flex lg:flex-row flex-col gap-8 items-center justify-center'>
       <div className=' w-full h-[457px] bg-white shadow flex items-center justify-center my-12'>
       <div>
         <div className='border-b py-6'>
        <div className='flex item gap-6 items-center py-4'>
            <Image src="/images/phoneIcon.svg" alt="" 
            width={40} height={40}/>
            <p className='font-poppins text-[16px] leading-6 font-medium'>Call To Us</p>
        </div>
            <p className='w-[262px]'>We are available 24/7, 7 days a week. Phone: +8801611112222</p>

        </div>
            <div className='py-6 flex item gap-6 items-center'>
                <Image src="/images/Mail-icon.svg" alt="" width={40} height={40}/>
                 <p className='font-poppins text-[16px] leading-6 font-medium'>Write To US</p> 
            </div>
            <div className='w-[250px] h-[116px]'>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
            </div>
        </div>
        </div>

       
        <div className='lg:w-[998px] w-full lg:h-[457px] h-[657px]  p-12 bg-white shadow-lg space-y-12'>
        
        <div className='flex lg:flex-row flex-col gap-5 item-center justify-center'>
            <div className='lg:w-[235px] w-full h-[50px] bg-[#F5F5f5] flex items-center p-4'>
                <input type="text" placeholder='Your Name *' className='w-full h-[30px]'/>
            </div>
            <div className='lg:w-[235px] w-full h-[50px] bg-[#F5F5f5] flex items-center p-4'>
                <input type="text" placeholder='Your Email *' className='w-full h-[30px]'/>
            </div>
            <div className='lg:w-[235px] w-full h-[50px] bg-[#F5F5f5] flex items-center p-4'>
                <input type="text" placeholder='Your Phone *' className='w-full h-[30px]'/>
            </div>
        </div>

        <div className='h-[207px] bg-[#f5F5F5] '>
           <input type="text" placeholder='Your Message' className='p-4 w-[637px] h-[207px] '/> 
        </div>

           <div className='flex lg:items-end items-center lg:justify-end justify-center'>
             <Link href="/Error"> <button className='w-[215px] h-11 bg-red-500 text-white font-medium font-poppins text-[16px] leading-6'
              >
                Send Message
              </button></Link>
           </div>
           
        </div>
        </div>

        </section>
    </div>
  )
}

export default page