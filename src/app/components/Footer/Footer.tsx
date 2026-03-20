"use client";

import Image from "next/image";
import Link from "next/link";

// Define the footer data structure
const footerSections = [
  {
    title: "Support",
    items: ["111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.", "exclusive@gmail.com", "+88015-88888-9999"],
  },
  {
    title: "Account",
    items: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  },
  {
    title: "Quick Link",
    items: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
];

function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-[1170px] mx-auto flex lg:flex-row flex-col justify-between items-start lg:p-0 px-4 gap-10">

        {/* === EXCLUSIVE / SUBSCRIBE === */}
        <div className="space-y-5">
          <h1 className="font-inter font-bold text-2xl">
            <Link href="/">Exclusive</Link>
          </h1>
          <h3 className="font-poppins text-[20px] font-medium">Subscribe</h3>
          <p className="font-poppins text-[16px]">Get 10% off your first order</p>

          <div className="md:w-[220px] w-full h-12 relative flex items-center border border-white rounded-sm overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent py-3 pl-4 font-poppins text-sm outline-none w-full pr-10"
            />
            <span className="absolute right-3 cursor-pointer">
              <Image src="/images/icon-send.svg" alt="send" width={20} height={20} />
            </span>
          </div>
        </div>

        {/* === MAPPED SECTIONS === */}
        {footerSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="font-poppins font-medium text-[20px]">{section.title}</h2>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm max-w-[175px] block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* === DOWNLOAD APP SECTION === */}
        <div className="space-y-5">
          <h2 className="font-poppins text-[20px] font-medium">Download App</h2>
          <p className="text-gray-400 text-[12px] font-medium">
            Save $3 with App New User Only
          </p>

          <div className="flex gap-3">
            <div className="bg-white p-1 rounded-sm">
              <Image src="/images/Qr Code.svg" alt="QR Code" width={80} height={80} />
            </div>
            <div className="flex flex-col justify-between">
              <Image src="/images/GooglePlay.svg" alt="Google Play" width={110} height={40} />
              <Image src="/images/Appstore.svg" alt="App Store" width={110} height={40} />
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            <Link href="#"><Image src="/images/Icon-Facebook.svg" alt="FB" width={24} height={24} className="hover:opacity-80" /></Link>
            <Link href="#"><Image src="/images/Icon-Twitter.svg" alt="TW" width={24} height={24} className="hover:opacity-80" /></Link>
            <Link href="#"><Image src="/images/icon-instagram.svg" alt="IG" width={24} height={24} className="hover:opacity-80" /></Link>
            <Link href="#"><Image src="/images/Icon-Linkedin.svg" alt="IN" width={24} height={24} className="hover:opacity-80" /></Link>
          </div>
        </div>

      </div>
      
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © Copyright Rimel 2024. All right reserved
      </div>
    </footer>
  );
}

export default Footer;