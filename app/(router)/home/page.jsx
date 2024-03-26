import React from 'react'
import HomePageHeader from "@/app/(router)/home/_components/HomePageHeader";
import HomePageContent from "@/app/(router)/home/_components/HomePageContent";
import Hero from "@/app/(router)/home/_components/Hero";
import Contact from "@/app/(router)/home/_components/Contact";
import Service from "@/app/(router)/home/_components/Service";
import Portfolio from "@/app/(router)/home/_components/Portfolio";

export const metadata = {
  title: "BMS | Home - Boarding Management System",
  description: "Boarding Management System",
};
function Home() {
  return (
    <div >
      <HomePageHeader/>
        <Hero></Hero>
        <Service></Service>
        {/*<Portfolio></Portfolio>*/}
        <Contact></Contact>
      {/*<HomePageContent/>*/}
    </div>
  )
}

export default Home