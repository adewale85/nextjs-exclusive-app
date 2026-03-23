"use client";



import BestSellingProducts from "./components/Component/BestSellingProducts";
import BrowseByCategory from "./components/Component/BrowseByCategory";
import EhanceYourMusicExperience from "./components/Component/EhanceYourMusicExperience";
import ExploreOurProducts from "./components/Component/ExploreOurProducts";
import Flashare from "./components/Component/Flashare";
import NewArrival from "./components/Component/NewArrival";
import HeroSection from "./components/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      
      <div className="flex">
      <Sidebar/>
      <HeroSection/>
      </div>
      <Flashare/>
      <BrowseByCategory/> 
      <BestSellingProducts/>
      <EhanceYourMusicExperience/>
      <ExploreOurProducts/>
      <NewArrival/>
    </main>
  );
}