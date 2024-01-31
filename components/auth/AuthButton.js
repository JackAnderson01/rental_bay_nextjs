"use client"

import React from 'react'
import BtnLoader from '../global/BtnLoader'

const AuthButton = ({onClick, text, loading}) => {
  return (
    <div onClick={onClick} className='bg-orange-500 text-white cursor-pointer font-bold mt-4 text-sm h-10 w-full flex items-center justify-center rounded-xl'>
        {
          loading ? <BtnLoader /> : text
        }
        
        
    </div>
  )
}

export default AuthButton