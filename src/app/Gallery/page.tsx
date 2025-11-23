import Image from 'next/image';
import React from 'react';
import img1 from "../../../public/DSC00710.jpg";
import img2 from "../../../public/DSC00713.jpg";
import img3 from "../../../public/DSC00714.jpg";

const GalleryPage = () => {

    return (
        <div className='grid grid-cols-2 pt-10'>
            <Image alt='' src={img1} ></Image>
            <Image alt='' src={img2} ></Image>
            <Image alt='' src={img3} ></Image>
        </div>
    );
};

export default GalleryPage;