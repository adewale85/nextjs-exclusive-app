import Iphone1 from "../assets/Iphone1.svg";
import Iphone2 from "../assets/iPhone 1.jpg";
import Iphone3 from "../assets/iPhone 2.jpg";
import Iphone4 from "../assets/iPhone 3.jpg";
import Iphone5 from "../assets/iPhone 4.jpg";

export interface HeroFrameProps {
  id: number;
  image: string;
}

export const HeroFrameData: HeroFrameProps[] = [
  {
    id: 1,
    image: Iphone1,
  },
  {
    id: 2,
    image: Iphone2,
  },
  {
    id: 3,
    image: Iphone3,
  },
  {
    id: 4,
    image: Iphone4,
  },
  {
    id: 5,
    image: Iphone5,
  },
];
