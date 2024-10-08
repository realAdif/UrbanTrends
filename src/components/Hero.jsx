import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[830px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className=' w-10 h-[2px] mr-2 bg-red-500'></div>New Trend
          </div>

          <h1 className=' md:text-[70px] text-[50px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLE <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='/' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
