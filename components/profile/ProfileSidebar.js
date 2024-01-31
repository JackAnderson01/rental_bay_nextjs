"use client"
import React, { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

const ProfileSidebar = () => {
    const { toggleFilter, filterRef } = useContext(GlobalContext)


    const [rating, setRating] = useState("1");
    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

    return (
        <div ref={filterRef} className="w-72 h-screen z-50 fixed top-14 left-0 -translate-x-full lg:translate-x-0 transition-all duration-200 lg:static lg:w-1/5 lg:min-h-[80vh] lg:h-auto flex flex-col justify-start items-start p-10 gap-12 bg-white lg:border-2 border-gray-200 overflow-y-auto">

            <button ref={filterRef} onClick={toggleFilter} className="w-8 h-8 lg:hidden rounded-full flex justify-center items-center bg-white shadow-md absolute top-2 right-2">
                <MdKeyboardArrowLeft />
            </button>

            <div className="w-full h-auto flex flex-col gap-6 items-start justify-start">

                <Link href={"/profile"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">Profile</Link>
                <Link href={"/my-products"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">My Products</Link>
                <Link href={"/profile"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">Profile</Link>
                <Link href={"/profile"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">Profile</Link>
                <Link href={"/settings"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">Settings</Link>
                <Link href={"/contact-support"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">contact support</Link>
                <Link href={"/terms-and-conditions"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">Terms & Conditions</Link>
                <Link href={"/privacy-policy"} className="text-[#959595] hover:text-orange-500 focus-within:text-orange-500 font-semibold text-sm uppercase ">Privacy Policy</Link>


            </div>
        </div>
    )
}

export default ProfileSidebar