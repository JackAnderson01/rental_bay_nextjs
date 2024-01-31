"use client"

import React, { useState } from 'react'
import AuthButton from "@/components/auth/AuthButton";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import AuthInput from '../AuthInput';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";

const VerifyEmailForm = () => {


  
  const router = useRouter();

  const [loading, setLoading] = useState(false)


  // Form Input States:
  const [email, setEmail] = useState("");



  const handleEmailVerification = () => {
      // Other functionalities
      console.log("EmailVerified");
      setLoading(true);
      setTimeout(() => {
          setLoading(false)
          router.push("/verify-otp")
      }, 2000)
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-3">

      <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
        <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
        Forgot Password!
        </h1>
        <span className="text-sm lg:text-lg text-[#959595] font-medium">
          Enter your registered email
        </span>

      </div>

      <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
        <AuthInput text={"Email Address"} icon={<HiOutlineMail />} state={email} setState={setEmail} type={"email"} />
        <AuthButton onClick={handleEmailVerification} text={"Next"} loading={loading} />
      </div>

    </div>
  )
}

export default VerifyEmailForm