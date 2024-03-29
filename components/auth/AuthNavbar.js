import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const AuthNavbar = () => {
    return (
        <div className="w-full h-14 bg-white px-6 lg:px-14 flex justify-between lg:justify-center items-center gap-4  sticky top-0 left-0">
            <Link href="/">
                <img src="/logo.svg" className="w-40" />
            </Link>

            <div className="hidden w-[42rem] mx-auto h-10 lg:flex justify-start border-collapse items-start rounded-full ">
                <input className="h-full rounded-l-full bg-[#F9F9F9] w-[70%] border-2 border-gray-300 px-3 text-md font-medium text-gray-800 outline-none  transition-all duration-150 focus:border-none  focus:ring-2 focus:ring-gray-300" placeholder="Search" />



                <div className="h-full bg-[#F9F9F9] cursor-pointer w-[23%] border-2 border-gray-300 flex items-center justify-center gap-3">
                    <span className="text-sm font-medium text-[#959595]">
                        All Categories
                    </span>
                    <MdKeyboardArrowDown className="text-[#959595] text-lg" />
                </div>


                <button className="w-[7%] h-full rounded-r-full bg-[#F85E00] text-white font-bold text-xl transition-all duration-150 hover:bg-orange-600 flex items-center justify-center">
                    <IoSearchOutline />
                </button>
            </div>


            <div className="w-auto h-auto flex gap-3 justify-start items-center">
                <Link href='/'>
                    <img src="/profile-icon.svg" className="h-4 lg:h-6" />
                </Link>
                {/* <img src="/chat-icon.svg" className="h-4 lg:h-6"/> */}
                <button className='relative flex items-center justify-center'>
                    <span className='w-4 h-4 text-xs font-medium rounded-full bg-orange-500 text-white flex items-center justify-center absolute -top-1 -right-2'>2</span>
                    <img src="/cart-icon.svg" className="h-4 lg:h-6" />
                </button>


            </div>
        </div>
    )
}

export default AuthNavbar