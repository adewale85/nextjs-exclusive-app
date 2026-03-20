"use client";
import Link from "next/link";
import Search from "./Search";
import { IoMdClose, IoMdHeartEmpty, IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";


function Navbar() {
  const isloggedIn = false;
  const [isOpen, setIsOpen] = useState(false);

  const Navlinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/Contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/auth/sign-up" },
   
  ];

  return (
    
  <nav className="sticky top-0 z-50 bg-white border-b border-black/10">
    <div className="Wrapper ">
      {/* Top Row: Menu, Logo, Icons */}
      <div className="flex justify-between items-center pt-4 pb-2">
        <div className="flex items-center gap-15">
          <div className="lg:hidden">
            <Sidebar />
          </div>
          <li className="list-none font-inter font-bold text-[1.5rem] text-black">
            <Link href="/">Exclusive</Link>
          </li>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden lg:flex gap-12">
          {Navlinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-gray-700 hover:text-red-500 font-poppins transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden lg:block">
            <Search />
          </div>
          
          <Link href="/wishlist">
            <IoMdHeartEmpty className="w-7 h-7" />
          </Link>
          <Link href="/cart" className="relative">
            <IoCartOutline className="w-7 h-7" />
           
          </Link>
          
          {isloggedIn && <Dropdown />}
          
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-3xl">
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Bottom Row: Mobile Search (Visible only on mobile) */}
      <div className=" lg:hidden">
        <Search />
      </div>
    </div>

    {/* Mobile Menu Drawer (Absolute Position) */}
    {isOpen && (
      <div className="lg:hidden absolute top-full left-0 bg-gray-500/95 w-full text-white z-50 shadow-lg">
        <ul className="flex flex-col p-6 gap-6">
          {Navlinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="text-xl font-medium block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>
);
}

export default Navbar;
