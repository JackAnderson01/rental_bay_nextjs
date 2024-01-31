import Link from 'next/link'
import React from 'react'

const Settings = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-6 justify-start items-start'>

            <span className='text-xl font-bold text-gray-900'>
                Settings
            </span>

            <Link href={"/add-card"} className='w-80 h-14 rounded-xl bg-gray-50 transition-all duration-150 hover:bg-gray-100 flex items-center justify-start px-4  text-sm font-medium text-black hover:text-orange-500'>
                + Add debit/credit card details
            </Link>

            <Link href={"/change-password"} className='w-80 h-14 rounded-xl bg-gray-50 transition-all duration-150 hover:bg-gray-100  flex items-center justify-start px-4  text-sm font-medium text-black hover:text-orange-500'>
                Change Password
            </Link>
        </div>
    )
}

export default Settings