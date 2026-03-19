// import GamePad from "../assets/Gamepad.svg";
// import Keyboard from "../assets/Keyboard.svg";
// import Monitor from "../assets/Monitor.svg";
// import Chair from "../assets/Chair.svg";




// export interface Flashprops{
//   id: number;
//   title: string;
//   subTitle?:  string;
//   price: string;
//   oldPrice?: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   bg?: boolean;

// }

// export const FlashShareData: Flashprops [] = [
// {
//     id: 1,
//     title: "Breed Dry Dog Food",
//     subTitle: "-40%",
//     price: "$120",
//     oldPrice:"$160",
//     rating: 5,
//     reviews: (88),
//     image: GamePad,
    

    
    
//   },
  
//   {
//     id: 2,
//     title: "AK-900 Wired Keyboard", 
//     subTitle: "-35%",
//     price: "$370",
//     oldPrice:"$1160",
//     rating: 4.5,
//     reviews: (75),
//     image: Keyboard,
//     bg: true
//   },

//   {
//     id: 3,
//     title: "IPS LCD Gaming Monitor",
//     subTitle: "-30%",
//     price: "$700",
//     rating: 5,
//     reviews: (99),
//     image: Monitor,            
//   },

//   {
//    id: 4,
//     title: "S-Series Comfort Chair ",
//     subTitle: "-25%",
//     price: "$375",
//     oldPrice:"$400",
//     rating: 4.5,
//     reviews: (99),
//     image: Chair,
    
//   },

// ]



export interface ProductResponse {
  products: FlashShareData[]
  total: number
  skip: number
  limit: number
}

export interface FlashShareData {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}


     
   

       


