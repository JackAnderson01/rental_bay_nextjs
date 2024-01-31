"use client"

import React, {useState} from 'react'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import SocialLogins from '../SocialLogins'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineLock } from 'react-icons/md'
import { FaRegUser } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    

    const router = useRouter();

    const [loading, setLoading] = useState(false)


    // Form Input States:
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSignup = () => {
        // Other functionalities
        console.log("Signedup");
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            router.push("/login")
        }, 2000)
    }


  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-3">

            <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
                Create an account!
                </h1>
                <span className="text-sm lg:text-lg text-[#959595] font-medium">
                    Enter the below details to create an account
                </span>

            </div>

            <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
                <AuthInput text={"Full Name"} icon={<FaRegUser />} state={name} setState={setName} type={"text"}/>
                <AuthInput text={"Email Address"} icon={<HiOutlineMail />} state={email} setState={setEmail} type={"email"}/>
                <AuthInput text={"Password"} icon={<MdOutlineLock />} state={password} setState={setPassword} type={"password"} />
                
                <AuthButton onClick={handleSignup} text={"Create an account"} loading={loading} />
            </div>

            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-auto flex justify-center items-center gap-1'>
                    <span className='text-[#959595] text-sm font-medium'>
                        Already have an account?
                    </span>
                    <Link href="/login" className='text-sm text-orange-500 font-semibold'>
                        Login
                    </Link>
                </div>
            </div>

            {/* Social Logins */}
            <SocialLogins />

        </div>
  )
}

export default RegisterForm