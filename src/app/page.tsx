"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar/Sidebar";
import Banner from "./components/Banner/Banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col Wrapper ">
      
      <div className="flex">
      <Sidebar/>
      <Banner/>
      </div>
    </main>
  );
}