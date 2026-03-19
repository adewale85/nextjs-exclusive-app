"use client";


import HeroSection from "./components/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col Wrapper ">
      
      <div className="flex">
      <Sidebar/>
      <HeroSection/>
      </div>
    </main>
  );
}