"use client"
import React, { useEffect, useState, useRef } from 'react'


const VerifyOtpInputs = () => {

    const otpInputs = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]
    const [otp, setOtp] = useState("");


    useEffect(() => {
        otpInputs[0].current.focus();
    }, []);

    const handleInputChange = (index, e) => {
        const input = e.target;
        const newOtp =
            otp.substring(0, index) + input.value + otp.substring(index + 1);

        setOtp(newOtp);



        if (e.inputType === "deleteContentBackward" && index > 0) {
            otpInputs[index - 1].current.focus();
        } else if (index < otpInputs.length - 1 && input.value !== "") {
            otpInputs[index + 1].current.focus();
        }
    };

    

    return (
        <div className="w-full lg:w-[80%] h-auto flex flex-row items-start mt-4 lg:mt-8 justify-start gap-1 lg:gap-3">
            {otpInputs.map((inputRef, index) => (
                <input
                    key={index}
                    ref={inputRef}
                    type="number"
                    className={`otp-input w-1/6 h-16 bg-gray-100 flex items-center justify-center text-center border-2 text-xl font-bold outline-none border-gray-300  rounded-xl p-2 mx-1`}
                    maxLength="1"
                    onChange={(e) => handleInputChange(index, e)}
                />
            ))}
        </div>
    )
}

export default VerifyOtpInputs