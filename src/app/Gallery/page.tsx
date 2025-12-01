import Image from 'next/image';
import React from 'react';
import img1 from "../../../public/DSC00710.jpg";
import img2 from "../../../public/DSC00713.jpg";
import img3 from "../../../public/DSC00714.jpg";
import img4 from "../../../public/DSC00639.jpg";
import img5 from "../../../public/DSC00661.jpg";


const GalleryPage = () => {

    return (
        <div className='grid grid-cols-2 pt-20'>
            <Image alt='' src={img1} className='row-span-2 h-full w-fit'></Image>
            <Image alt='' src={img2}  ></Image>
            <Image alt='' src={img3} ></Image>
            <Image alt='' src={img4} ></Image>
            <Image alt='' src={img5} ></Image>
            
        </div>
    );
};

export default GalleryPage;