"use client"
import React, { useState } from 'react'
import VerifyOtpInputs from './VerifyOtpInputs'
import AuthButton from '../AuthButton'
import { useRouter } from 'next/navigation'




const VerifyOtpForm = () => {


    const router = useRouter();

    const [loading, setLoading] = useState(false)

    const handleSendAgain = () => {
        // Hit api
        console.log("Send again")
    }


    const handleOtpVerification = () => {
        // Other functionalities
        console.log("OtpVerified");
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            router.push("/change-password")
        }, 2000)
    }

    return (

        <div className="w-full h-full flex flex-col justify-start items-center gap-3">

            <div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
                <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
                    We just sent you an email!
                </h1>
                <span className="text-sm lg:text-lg text-center text-[#959595] font-medium">
                    Enter the verification code sent to oli*****@gmail.com
                </span>

            </div>

            <VerifyOtpInputs />


            <div className='w-[80%] mt-2 h-auto flex justify-center items-center'>
                <div className='w-auto flex justify-center items-center gap-1'>
                    <span className='text-[#959595] text-sm font-medium'>
                        Didn't recieved a code?
                    </span>
                    <button onClick={handleSendAgain} className='text-sm text-orange-500 font-semibold'>
                        Send Again
                    </button>
                </div>
            </div>

            
            <AuthButton onClick={handleOtpVerification} text={"Verify"} loading={loading} />


        </div>
    )
}

export default VerifyOtpForm