"use client"

import React, { useState } from 'react'
import AuthButton from '../AuthButton'
import AuthInput from '../AuthInput'
import { MdOutlineLock } from "react-icons/md";
import { useRouter } from 'next/navigation';


const ChangePassForm = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("");
    const [reEnterPass, setReEnterPass] = useState("");



    
  const handleChangePass = () => {
    // Other functionalities
    console.log("Change Pass");
    setLoading(true);
    setTimeout(() => {
        setLoading(false)
        router.push("/password-updated")
    }, 2000)
}

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-3">

    <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
      <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
      Set a new Password!
      </h1>
      <span className="text-sm lg:text-lg text-[#959595] font-medium">
        Fill both password fields to continue
      </span>

    </div>

    <div className="w-full h-auto mt-0 lg:mt-8 mb-4 flex flex-col  justify-start items-start">
    <AuthInput text={"Password"} icon={<MdOutlineLock />} state={password} setState={setPassword} type={"password"} />
    <AuthInput text={"Re-enter Password"} icon={<MdOutlineLock />} state={reEnterPass} setState={setReEnterPass} type={"password"} />
        
      <AuthButton onClick={handleChangePass} text={"Save"} loading={loading} />
    </div>

  </div>
  )
}

export default ChangePassForm