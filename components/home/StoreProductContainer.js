"use client"


import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import StoreProductCard from './StoreProductCard'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StoreProductContainer = ({products, link, title}) => {

    const [windowWidth, setWindowWidth] = useState(9);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setWindowWidth(window.innerWidth);
        }, 1000);

        return () => {
            // Clear the timeout when the component is unmounted
            clearTimeout(timeoutId);
        };
    }, []); // Run this effect only once on mount

    // Rest of your component...

    // Determine slidesPerView based on windowWidth
    const slidesPerView = windowWidth > 1500 ? 5 : windowWidth > 720 ? 4 : windowWidth > 320 ? 2 : 1





    return (
        <div className='w-full h-auto my-4 flex flex-col px-4 lg:px-10 justify-start gap-4 items-start'>
            <div className='w-full h-10 flex justify-between items-center'>
                <span className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900'>
                    {title}
                </span>

                <Link href={link} className='text-sm font-bold text-orange-500 transition-all duration-100 hover:underline hover:underline-offset-2'>
                    View All
                </Link>
            </div>

            <div className='w-full h-auto flex flex-wrap items-center justify-center gap-4 '>
                <Swiper
                    // install Swiper modules
                    // modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    // navigation
                    className='relative'
                >
                    {
                        products?.map((product, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <StoreProductCard product={product}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </div>


    )
}

export default StoreProductContainer