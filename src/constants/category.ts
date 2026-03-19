

interface BrowseByCategoryProps {
  id: number;
  title: string;
  image: string;
  active?: boolean;
}

export const browseByCategoryData: BrowseByCategoryProps[] = [
  { id: 1, title: "Phones", image: "/images/CellPhone.svg"  },
  { id: 2, title: "Laptops", image: "/images/Category-Computer.svg" },
  { id: 3, title: "Headphones", image: "/images/Category-SmartWatch.svg"},
  { id: 4, title: "Watches", image: "/images/Category-Camera.svg" },   
  { id: 5, title: "Watches", image: "/images/Category-Headphone.svg" },   
  { id: 6, title: "Watches", image: "/images/Category-Gamepad.svg" },   
    
];

