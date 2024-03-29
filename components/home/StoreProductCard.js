import Link from 'next/link'
import React from 'react'
import { FaCheck } from "react-icons/fa6";

const StoreProductCard = ({ product }) => {

    return (
        <div className='group w-48  h-56 lg:w-72 lg:h-80 cursor-pointer transition-all duration-150  hover:bg-gray-100 p-2'>
            <Link href="/product/12" className='w-full h-full flex flex-col'>
                <img src={product?.image} className='w-full h-[60%] ' />

                <div className='w-auto h-[40%]  flex flex-col gap-1 mt-2 justify-start items-start relative'>
                    {/* Verified Icon */}
                    <div className='group absolute top-0 right-2 flex items-center justify-start  w-auto h-8 p-[2px] rounded-full bg-orange-500 '>
                        <span className='w-7 h-7 rounded-full bg-orange-500 text-white group-hover:bg-white group-hover:text-orange-500 flex items-center justify-center '>
                            <FaCheck className='text-xl ' />
                        </span>
                        <span className='hidden group-hover:flex items-center justify-center text-sm font-semibold h-8 px-2 rounded-r-full bg-orange-500 text-white'>
                            Verified
                        </span>
                    </div>


                    {/* Others */}
                    <h1 className='text-sm lg:text-xl font-semibold text-gray-900'>
                        {product?.name}
                    </h1>
                    <div className='flex justify-start items-center gap-1'>
                        <span className='text-md lg:text-2xl font-bold text-gray-900'>
                            $100
                        </span>
                        <span className='text-md lg:text-2xl font-medium text-[#959595]'>
                            /4hr
                        </span>
                    </div>
                    <div className='flex mt-1 justify-start items-center text-yellow-500 gap-1'>
                        <svg
                            class="w-4 h-4 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>

                        <span className='text-md font-medium text-[#959595]'>
                            4.8
                        </span>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default StoreProductCard