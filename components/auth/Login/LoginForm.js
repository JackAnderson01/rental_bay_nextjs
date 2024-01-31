"use client"

import React, { useState } from 'react'
import AuthButton from "@/components/auth/AuthButton";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import AuthInput from '../AuthInput';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";
import SocialLogins from '../SocialLogins';


const LoginForm = () => {


    const router = useRouter();

    const [loading, setLoading] = useState(false)


    // Form Input States:
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = () => {
        // Other functionalities
        console.log("Loggedin");
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            router.push("/home")
        }, 2000)
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-start gap-3">

            <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
                    Welcome back!
                </h1>
                <span className="text-sm lg:text-lg text-[#959595] font-medium">
                    Enter the below details to log in
                </span>

            </div>

            <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
                <AuthInput text={"Email Address"} icon={<HiOutlineMail />} state={email} setState={setEmail} type={"email"}/>
                <AuthInput text={"Password"} icon={<MdOutlineLock />} state={password} setState={setPassword} type={"password"} />
                <div className='w-full h-auto mt-1 flex justify-end items-center'>
                    <Link href="/verify-email" className='text-xs font-semibold text-blue-500'>
                        Forgot Password?
                    </Link>

                </div>
                <AuthButton onClick={handleLogin} text={"Login"} loading={loading} />
            </div>

            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-auto flex justify-center items-center gap-1'>
                    <span className='text-[#959595] text-sm font-medium'>
                        Don't have an account?
                    </span>
                    <Link href="/register" className='text-sm text-orange-500 font-semibold'>
                        Create One
                    </Link>
                </div>
            </div>

            {/* Social Logins */}
            <SocialLogins />

        </div>
    )
}

export default LoginForm