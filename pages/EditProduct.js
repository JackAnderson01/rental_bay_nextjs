"use client"

import React, { useState } from 'react'
import { IoImageOutline } from "react-icons/io5";
import { BsFillImageFill } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import PostInput from '@/components/PostProduct/PostInput';
import PriceInput from '@/components/PostProduct/PriceInput';
import PostDescriptionInput from '@/components/PostProduct/PostDescriptionInput';

const EditProduct = () => {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");


    return (
        <div className='relative w-full h-auto min-h-screen px-6 lg:px-14 py-6 lg:py-10 flex justify-start items-start gap-6 '>
            <div className='w-full border-2 border-gray-100 h-auto p-2 lg:p-6 flex flex-col gap-5 justify-start items-start'>
                <span className='text-xl font-bold text-gray-900'>
                    Post Product
                </span>

                <div className=' cursor-pointer w-full h-auto p-8 border border-orange-500 border-dashed flex flex-col gap-1 items-center justify-center rounded-md'>
                    <IoImageOutline className='text-5xl text-gray-300' />
                    <span className='text-xs font-medium text-orange-500'>
                        Upload Image
                    </span>
                    <input type='file' className='hidden' id='post-input-ref' />
                </div>

                <div className='w-full h-28 flex gap-2 px-3 justify-start items-center '>
                    {/* Show a place holder initially */}
                    {/* <BsFillImageFill className='w-20 h-20 rounded-sm text-gray-300'/> */}

                    {/* Image component */}
                    <div className='relative w-20 h-20'>
                        <img src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' className='w-full h-full rounded-md object-cover' />
                        <button className='w-5 h-5 rounded-full bg-white absolute top-1 right-1 flex items-center justify-center shadow-md'>
                            <MdClose className='text-xs text-gray-900' />
                        </button>
                    </div>
                    <div className='relative w-20 h-20'>
                        <img src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' className='w-full h-full rounded-md object-cover' />
                        <button className='w-5 h-5 rounded-full bg-white absolute top-1 right-1 flex items-center justify-center shadow-md'>
                            <MdClose className='text-xs text-gray-900' />
                        </button>
                    </div>

                </div>

                {/* input container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <PostInput text={"Name"} onChange={(e) => setName(e.target.value)} value={name} type={"text"} />
                    <PostInput text={"Pickup Location"} onChange={(e) => setLocation(e.target.value)} value={location} type={"text"} />

                </div>

                {/* Map container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <img src='/map.png' className='w-full' />
                </div>


                {/* Set avaialaility container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <span className='text-sm font-bold text-gray-900'>
                        Set Availability
                    </span>
                    <img src='/calender.png' className='w-auto' />
                </div>


                {/* Pricing input container */}
                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <div className='w-full h-auto flex  gap-2 justify-start items-start'>
                        <PriceInput text={"Price / 4hr"} onChange={(e) => setName(e.target.value)} value={name} type={"text"} />
                        <PriceInput text={"Price / 12hr"} onChange={(e) => setLocation(e.target.value)} value={location} type={"text"} />
                    </div>
                    <PostInput text={"Qty."} onChange={(e) => setName(e.target.value)} value={name} type={"text"} />
                </div>

                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <span className='text-sm font-bold text-gray-900'>
                        Select Category
                    </span>
                    <div className='relative w-full'>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full h-10 border border-gray-200 px-3 outline-none focus:border-orange-500 text-xs'>
                            <option value="" >
                                Select Category
                            </option>
                        </select>
                    </div>

                </div>


                <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                    <span className='text-sm font-bold text-gray-900'>
                        Select Sub Category
                    </span>
                    <div className='relative w-full'>
                        <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className='w-full h-10 border border-gray-200 px-3 outline-none focus:border-orange-500 text-xs'>
                            <option value="" >
                                Select Sub Category
                            </option>
                        </select>
                    </div>
                </div>


                <PostDescriptionInput value={name} onChange={(e) => setName(e.target.value)} text={"Description"} />

                {/* Buttons container */}
                <diV className="w-auto flex gap-2 justify-start items-center">

                    <button className='w-36 h-10 bg-orange-500 text-xs font-medium flex items-center justify-center text-white uppercase'>
                        Post Now
                    </button>

                    <button className='w-auto px-2 h-10 bg-white text-xs  flex items-center justify-center font-medium text-orange-500 hover:underline underline-offset-2 uppercase'>
                        Cancel
                    </button>

                </diV>
            </div>
        </div>
    )
}

export default EditProduct