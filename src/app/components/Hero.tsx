import Image from "next/image";
import React from "react";
import hero from "../../../assests/hero.png";

function Hero() {
    return (
        <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
            {/* Heading */}
            <div className="text-white w-full md:w-[50%]">
                <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9FOD] Whitespace-nowrap text-center md:text-left">
                 Its Quick & Amusing!</h1>
                 <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold witespace-normal mt-3 text-center md:text-left">
                    <span className="text-[#FF9FOD]"> Th </span> e Art of Speed Food Quality </h1>
                    <p className="text-[2px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectur adipiscing elit. Varius sed pharetra dictum neque massacongue.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
                        <button className="bg-[#FF9FOD] text-white w-[100px] h-[30px] md:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
                             See More</button>
                    </div>
            </div>
            {/* image */}
            <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
                <image 
                src="hero"
                alt="Hero image"
                className="w-[90%]"
                media=";w-auto max-w-[300px] md:max-w-full"/>

            </div>
        </section>
    );
}
export default Hero;
