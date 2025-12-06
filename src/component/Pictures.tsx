'use client'
import React from 'react';
import img1 from '../../public/DSC00714.jpg'
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
    return (
       
        <div className='relative'>
        <div className='absolute flex justify-center items-center w-full h-full'>
            <Link href={'/Gallery'}><button className='bg-white p-6 rounded-2xl cursor-pointer hover:text-white hover:bg-[#2E7D32] text-[#2E7D32]  font-bold text-2xl '>View Gallery</button></Link>
        </div>
            <Image alt=''  src={img1} className='h-100'></Image>
        </div>
       
    );
};

export default Gallery;