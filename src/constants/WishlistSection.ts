
import Laptop from "../assets/Gaming-Laptop.svg"
import Monitor from "../assets/Monitor.svg"
import GamePad from "../assets/Gamepad.svg"
import Keyboard from "../assets/Keyboard.svg"

export interface WishlistSectionprops{
     id: number;
  title: string;
  subTitle:  string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number;
  reviews?: number;
  percent?: string;
  bgpercent?: boolean;
  title2?: string;
  buttonText?: string
}

export const WishlistSectionData: WishlistSectionprops [] =[
     {
    id: 1,
    title: "Gucci duffle bag",
    title2: "Wishlist (4)",
    buttonText: "Move All To Bag",
    subTitle: "Coat",
    price: "$960",
    oldPrice: "$1160",
    image: Laptop,
    rating: 5,
    percent: "-35%",    
    bgpercent: true
    
  },
  
   {
    id: 2,
    title: "RGB liquid CPU Cooler",
    subTitle: "",
    price: "$1960",
    oldPrice: "",
    image: Monitor,
    rating: 4,
   
   
  },

   {
    id: 3,
    title: "GP11 Shooter USB Gamepad",
    subTitle: "",
    price: "$560",
    oldPrice: "",
    image: GamePad,
    rating: 3,
    
  },

   {
    id: 4,
    title: "Quilted Satin Jacket",
    subTitle: "",
    price: "$200",
    oldPrice: "",
    image: Keyboard,
    rating: 2,
    
  },

];
