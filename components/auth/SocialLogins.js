import React from 'react'

const SocialLogins = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-start items-center gap-4 mt-4 lg:mt-10'>
    {/* Google Button */}
    <button className='w-full h-10 rounded-xl bg-gray-100 transition-all duration-150 hover:bg-gray-200 px-6 flex justify-start gap-4 items-center'>
        <img src='/google-icon.png' className='h-4 lg:h-6' />
        <span className='text-sm mx-auto font-semibold text-gray-800'>
            Continue with google
        </span>
    </button>

    {/* Apple Button */}
    <button className='w-full h-10 rounded-xl bg-gray-100 transition-all duration-150 hover:bg-gray-200 px-6 flex justify-start gap-4 items-center'>
        <img src='/apple-icon.png' className='h-4 lg:h-6' />
        <span className='text-sm mx-auto font-semibold text-gray-800'>
            Continue with apple
        </span>
    </button>


    {/* Facebook Button */}
    <button className='w-full h-10 rounded-xl bg-gray-100 transition-all duration-150 hover:bg-gray-200 px-6 flex justify-start gap-4 items-center'>
        <img src='/facebook-icon.png' className='h-4 lg:h-6' />
        <span className='text-sm mx-auto font-semibold text-gray-800'>
            Continue with facebook
        </span>
    </button>
</div>
  )
}

export default SocialLogins