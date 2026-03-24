"use client";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineFilterList, MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Sidebar() { 
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "beauty", "fragrances", "furniture", "groceries",
    "home-decoration", "women-shoes", "laptops",
    "mens-shirts", "mens-shoes", "mens-watches",
  ];

  return (
    /* w-auto on mobile so it doesn't push the logo */
    <div className='lg:w-64 w-auto relative'> 
      
      {/* Trigger Button - Normal flow */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex items-center">
        {isOpen ? <IoMdClose className="size-8" /> : <MdOutlineFilterList className="size-8" />}
      </button>

      {/* The Menu - Floating on mobile */}
      <div className={`
        ${isOpen ? "block" : "hidden"} 
        lg:block 
        /* Mobile: Float over everything */
        absolute top-full left-0 w-[200px] bg-white shadow-2xl border-r z-[100] 
        /* Desktop: Back to normal flow */
        lg:relative lg:top-0 lg:w-full lg:shadow-none lg:border-r-[0.5px] lg:bg-transparent
        overflow-y-auto p-4
      `}>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li
              key={category}
              className="flex items-center justify-between font-poppins text-sm hover:text-red-500 cursor-pointer"
            >
              {category}
              {index <= 1 && <MdOutlineKeyboardArrowRight className="w-5 h-5"/>}
            </li>  
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;