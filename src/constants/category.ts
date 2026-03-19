import CameraImg from "../assets/CategoryCamera.svg";
import PhoneImg from "../assets/CellPhone.svg";
import ComputerImg from "../assets/Category-Computer.svg";
import WatchImg from "../assets//Category-SmartWatch.svg";
import HeadphoneImg from "../assets/Category-Headphone.svg";
import GamepadImg from "../assets/Category-Gamepad.svg";

interface BrowseByCategoryProps {
  id: number;
  title: string;
  image: string;
  active?: boolean;
}

export const browseByCategoryData: BrowseByCategoryProps[] = [
  { id: 1, title: "Phones", image: PhoneImg, },
  { id: 2, title: "Computers", image: ComputerImg },
  { id: 3, title: "SmartWatch", image: WatchImg },
  { id: 4, title: "Camera", image: CameraImg, active: true },
  { id: 5, title: "HeadPhones", image: HeadphoneImg },
  { id: 6, title: "Gaming", image: GamepadImg },
];


// export interface CategoryResponse {
//   categories: CategoryData[];
//   total: number;
//   skip: number;
//   limit: number;
// }

// export interface CategoryData {
//   id: number;
//   title: string;
//   slug: string;
//   image: string;
//   isActive: boolean;
//   meta: CategoryMeta;
// }

// export interface CategoryMeta {
//   itemCount: number;
//   createdAt: string;
//   updatedAt: string;
// }