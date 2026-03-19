import React, { useState } from 'react'
import Image from 'next/image';

interface DropdownItemProps {
  text: string;
}

function Dropdown() {
     const [open, setOpen] = useState(false);
  return (
    
    
    <div>
       <div className="Wrapper my-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <button onClick={() => setOpen(!open)}>
                <Image src="/user_profile.png" alt="User Profile" width={30} height={30} className="rounded-full" />
              </button>

              {open && ( 
                <div className="absolute text-white text-start w-56 bg-red-200 shadow-lg rounded-md z-50 ">
                  <div className="flex gap-5 text-start">
                    <Image src = "/images/user.png" alt="User" width={30} height={30} className="size-[6]" />
                    <a href="/Account">
                      <DropdownItem text="Manage My Account" />
                    </a>
                  </div>
                  <div className="flex gap-5 text-start">
                    <Image src = "/images/my_order.png" alt="My Orders" width={30} height={30} className="size-[6]" />
                    <DropdownItem text="My Orders" />
                  </div>
                  <div className="flex gap-5 ">
                    <Image src = "/images/cancellation.png" alt="My Cancellations" width={30} height={30} className="size-[6]" />
                    <DropdownItem text="My Cancellations" />
                  </div>
                  <div className="flex gap-5 ">
                    <Image src = "/images/review.png" alt="My Reviews" width={30} height={30} className="size-[6]" />
                    <DropdownItem text="My Reviews" />
                  </div>

                  <div className="flex gap-5 ">
                    <Image src = "/images/logout.png" alt="Logout" width={30} height={30} className="size-[6]" />
                    <hr />
                    <DropdownItem text="Logout" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DropdownItem({ text }:DropdownItemProps) {
  return <button className="  hover:bg-black text-sm">{text}</button>;
}


export default Dropdown