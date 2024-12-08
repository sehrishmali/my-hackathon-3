
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection";
import Footer from "./components/Footer";
import FoodCart from "./components/FootCart";
import AboutUs from "../AboutUs/page";
import Faq from "../faq/page";

export default function Home() {
  return (
   
   <>
    <Navbar/>
    <HeroSection/>
    {/* <About /> */}
    <FoodCart/>
   <AboutUs/>
    <Footer/>
    <Faq />
    </>
   
  );
}