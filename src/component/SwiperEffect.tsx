"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import Image from "next/image";

import img1 from "../../public/DSC00710.jpg";
import img2 from "../../public/DSC00713.jpg";
import img3 from "../../public/DSC00714.jpg";

import "swiper/css";
import "swiper/css/effect-creative";
import Link from "next/link";

const SwiperEffect = () => {
  return (
    <div className="relative w-full h-screen">

      {/* 🔥 Overlay Text Layer */}
      <div className="absolute z-20 top-1/3  text-white w-full flex flex-col justify-center  items-center">
        <h1 className="text-xl md:text-4xl font-bold leading-snug drop-shadow-lg">
          আরিয়ান সিটি — আপনার পরিবারের স্বপ্নের ঠিকানা
        </h1>

        <p className="mt-4 text-xs md:text-xl drop-shadow-md">
          সাভারের সবুজ পরিবেশে আধুনিক প্লট, এককালীন রেজিস্ট্রেশন ও সহজ কিস্তি সুবিধা — আজই বুক করুন।
        </p>

        <div className="mt-6 flex gap-4">
          <Link href={'/Gallery'}>
          <button className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            প্লট দেখুন
          </button>
          </Link>

          <Link href={'/Contact'}>
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            যোগাযোগ করুন
          </button>
          </Link>
        </div>
      </div>

      {/* 🌀 Swiper Slides */}
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        autoplay={{ delay: 2500 }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, -200],
            rotate: [0, 0, -20],
            scale: 0.6,
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className=" max-w-screen h-[60%] md:w-full md:h-screen"
      >
       
        <SwiperSlide>
          <Image src={img3} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={img2} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>


         <SwiperSlide>
          <Image src={img1} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperEffect;
