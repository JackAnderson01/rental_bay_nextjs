import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
    <div className="w-full h-auto lg:gap-4 flex md:flex-row flex-col p-4 justify-center items-center">
      <div
        className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 className="font-bold text-orange-500 text-8xl lg:text-9xl animate-pulse">404</h1>
        
          <span className="text-orange-500 text-5xl font-bold">Oops!</span>
          <p
          className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
            Page Not Found
        </p>
        <p className="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/home"
          className="px-6 py-2 text-sm font-semibold text-orange-500 bg-orange-200/[0.2] transition-all duration-150 hover:bg-orange-500 hover:text-white"
          >Go home</Link>
      </div>
      <div className="mt-4 w-full md:w-1/2 h-auto">
        <img
          src="/404.svg"
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
      </div>
      </div>
  
  )
}

export default NotFound