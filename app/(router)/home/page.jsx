import React from 'react'
import HomePageHeader from "@/app/(router)/home/_components/HomePageHeader";
import HomePageContent from "@/app/(router)/home/_components/HomePageContent";
import HeroSection from "@/app/(router)/home/_components/HeroSection";

export const metadata = {
  title: "BMS | Home - Boarding Management System",
  description: "Boarding Management System",
};
function Home() {
  return (
    <div >
      <HomePageHeader/>
        {/*<HeroSection/>*/}
      <HomePageContent/>
    </div>
  )
}

export default Home