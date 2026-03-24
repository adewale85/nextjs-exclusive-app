"use client"

import React, { useState } from 'react'
import OrderSucessModal from './OrderModal'
import Image from 'next/image'

function Page() {

    const [sucessModal, setsucessModal] = useState (false)
    

  return (
    <main className="Wrapper lg:px-0 px-4">
            
            <div className=' flex lg:flex-row flex-col items-center justify-between'>


                <div className=' py-12'>
                    <div className='lg:w-[455px] w-full flex lg:flex-row flex-col items-center justify-between list-none lg:pb-0 lg:space-y-0 space-y-8 pb-12'>
                        <li className='font-poppins font-normal lg:text-sm text-[20px] leading-5'>Account  / </li>
                        <li className='font-poppins font-normal lg:text-sm text-[20px] leading-5'>My Account  / </li>
                        <li className='font-poppins font-normal lg:text-sm text-[20px] leading-5'>Product  / </li>
                        <li className='font-poppins font-normal lg:text-sm text-[20px] leading-5'>View Cart  / </li>
                        <li className='font-poppins font-normal lg:text-sm text-[20px] leading-5'>CheckOut  / </li>
                    </div>

                    <div className='lg:w-[455px] w-full py-6'>
                        <h1 className='font-inter font-medium lg:text-[36px] text-[28px] lg:leading-8 leading-2 tracking-[4%]'>Billing Details</h1>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a] '>First Name*</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='pb-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Company Name</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Street Address*</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Apartment, floor, etc. (optional)</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Town/City*</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Phone Number*</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Email Address*</p>
                            <input type="Name" name="" id="name" className='lg:w-[455px] w-full h-[50px] bg-[#F5F5f5]' />
                        </div>
                    </div>
                    <div className='flex lg:gap-2 gap-5 items-center'>
                        <input type="checkbox" name="" id="" className='bg-red-500 lg:size-4 size-12' />
                        <p className='font-poppins font-normal text-[16px] leading-6'>Save this information for faster check-out next time</p>
                    </div>

                </div>

                <div className='space-y-6 pb-12 '>
                    <div className='flex lg:flex-row flex-col lg:gap-5 gap-2'>
                        <Image src="/images/Monitor.svg" alt="Monitor" width={54} height={54} />
                        <div className='lg:w-[347px] w-full flex items-center justify-between'>
                            <p className='font-poppins font-normal text-[16px] leading-6'>LCD Monitor</p>
                            <p className='font-poppins font-normal leading-6 text-[16px]'>$650</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:gap-5 gap-2'>
                        <Image src="/images/Gamepad.svg" alt="" width={54} height={54}  />
                        <div className='lg:w-[347px] w-full flex items-center justify-between '>
                            <p className='font-poppins font-normal text-[16px] leading-6'>LCD Monitor</p>
                            <p className='font-poppins font-normal leading-6 text-[16px]'>$1100</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between border-b pb-5'>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Subtotal:</p>
                        <p className='font-poppins font-normal text-[16px] leading-6'>$1750</p>
                    </div>
                    <div className='flex items-center justify-between border-b pb-5'>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Shipping:</p>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Free</p>
                    </div>
                    <div className='flex items-center justify-between  pb-5'>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Total</p>
                        <p className='font-poppins font-normal text-[16px] leading-6'>$1750</p>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center lg:gap-22 gap-5'>
                        <div className='flex gap-5'>
                            <input type="Checkbox" name="" id="" className=' size-5' />
                            <p className='font-poppins font-normal text-[16px] leading-6'>Bank</p>
                        </div>
                        <div className='flex lg:gap-2 gap-5'>
                            <Image src="/images/Bkash.svg"  alt="" width={42} height={28}  />
                            <Image src="/images/Visa.svg" alt="" width={42} height={28} />
                            <Image src="/images/Mastercard.svg" alt="" width={42} height={28} />
                            <Image src="/images/Nagad.svg" alt="" width={42} height={28} />
                        </div>
                    <div className='flex gap-5'>
                        <input type="Checkbox" name="" id="" className=' size-5' />
                        <p className='font-poppins font-normal text-[16px] leading-6'>Cash on delivery</p>
                    </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-5'>
                        <div className='lg:w-[300px] w-full h-14 border rounded-md flex items-center p-4'>
                            <input type="text" placeholder='Coupon Code' className='w-full outline-none' />
                        </div>
                        <button className='lg:w-[218px] w-full h-14 rounded-sm text-white font-poppins font-medium text-[16px] leading-6 bg-[#Db4444]'>
                            Apply Coupon
                        </button>
                    </div>
                        <li className="list-none">
                            <button onClick={() => setsucessModal (true)}
                                className="lg:w-[190px] w-full h-14 rounded-sm text-white font-poppins font-medium text-[16px] leading-6 bg-[#DB4444]"
                            >
                                Place Order
                            </button>
                        </li>
                    
                </div>
            </div>
            <OrderSucessModal open={sucessModal} onChange={setsucessModal}/>
            
        </main>
  )
}

export default Page