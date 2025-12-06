'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../public/DSC00714.jpg'

import img3 from '../../public/DSC00710.jpg'
import img4 from '../../public/DSC00661.jpg'
import img5 from '../../public/DSC00639.jpg'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const CoverflowSlider = () => {
    const slide = [
    img1,  img3, img4, img5
    ]
    return (
        <div className=' flex items-center justify-center'>
            <Swiper
                effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={800}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 600,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full max-w-6xl"
            >
            {
                slide.map((img,index)=>(
                    <SwiperSlide  className="w-45 h-80 md:w-full md:h-full bg-white rounded-xl overflow-hidden shadow-xl" key={index}>
                        <Image alt='' className="w-full h-full object-cover" src={img}></Image>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    );
};

export default CoverflowSlider;