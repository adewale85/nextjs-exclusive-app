import Image from "next/image";
import { browseByCategoryData } from "@/constants/category";

export default function CategoryList() {
  return (
    <div className="flex gap-4">
      {browseByCategoryData.map((category) => (
        <div key={category.id} className="border p-12 grid lg:grid-row-6 grid-cols-1 items-center">
          {/* Render the Image component here using the string from the data */}
          <Image 
            src={category.image} 
            alt={category.title} 
            width={56} 
            height={56} 
          />
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  );
}