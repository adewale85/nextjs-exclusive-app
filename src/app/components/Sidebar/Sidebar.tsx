"use client";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineFilterList, MdOutlineKeyboardArrowRight } from 'react-icons/md';


function Sidebar() { 

     const [isOpen, setIsOpen] = useState (false)

    const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "women-shoes",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
   
  ];

  return (
    <div className='lg:w-53.5 w-75 h-78.5 lg:relative absolute z-50 '>
       <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden block">
    {isOpen ? < IoMdClose className="size-8 bg-white "/> : <MdOutlineFilterList className="size-8 bg-white "/>}
  </button>

      <div className={`lg:border-r-[0.5px]  ${isOpen ? "block" : "hidden"} lg:block overflow-y-auto lg:bg-[#ffffff] bg-[#F5F5f5] z-50 lg:p-4 p-5 lg:gap-12 gap-2`}>
    <ul className="space-y-2.5 ">
      {categories.map((category, index) => (
        <li
          key={category}
          className="flex items-center pr-15 gap-5 justify-between font-normal font-poppins text-[1rem] leading-6 w-[197px]"
        >
          {category}
          {index <= 1 && (
            <MdOutlineKeyboardArrowRight className="w-6 h-6"/>
          )}
        </li>
      ))}
    </ul>
  </div>

    </div>
  )
}

export default Sidebar