import Image from "next/image";
import { browseByCategoryData } from "@/constants/category";

export default function CategoryList() {
  return (
    <main className="lg:py-12 py-15 lg:px-0 px-4">
       <div className='flex gap-3 items-center md:mb-5 mb-2 '>
        <div className='lg:w-5 w-3 lg:h-10 h-8 bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'> Categories</div>  
        </div> 
      <h2 className="font-inter font-semibold md:text-4xl text-2xl mb-12 text-left">Browse By Category</h2>

    <div className=" grid lg:grid-cols-6 grid-cols-2 gap-4 items-center justify-between py-12 lg:py-6 lg:space-y-0 space-y-6">
      {browseByCategoryData.map((category) => (
        <div 
          key={category.id} 
         
          className="group w-40 h-40 flex flex-col items-center justify-center border border-slate-300 shadow-sm rounded-sm transition-all duration-300
          hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer mx-auto"
        >
          <div className="mb-2">
            <Image 
              src={category.image} 
              alt={category.title}
              width={56} 
              height={56} 
              
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
            />
          </div>
          <p className="font-poppins font-medium text-base">{category.title}</p>
        
        </div>
        
      ))}
         
    </div>
    <div className="border-b-[0.5px] lg:py-12 py-2"></div>
    </main>
  );
}