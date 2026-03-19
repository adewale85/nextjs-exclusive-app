import Image from "next/image";
import { browseByCategoryData } from "@/constants/category";

export default function CategoryList() {
  return (
    <main className="py-12">
    <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 items-center justify-between py-10 lg:py-20 lg:space-y-0 space-y-6">
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
    <div className="border-b-[0.5px] "></div>
    </main>
  );
}