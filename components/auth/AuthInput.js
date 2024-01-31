import React from 'react'

const AuthInput = ({icon, state, setState, text, type}) => {
  return (
    <div className='w-full h-10 rounded-xl flex items-center justify-start bg-gray-100 mt-5'>
        <span className='w-[12%] md:w-[8%] text-gray-500 text-lg h-full flex items-center rounded-l-xl justify-center border border-gray-300'>
            {icon}
        </span>
        <input type={type} placeholder={text} className='w-[88%] md:w-[92%] outline-none border-r border-y  border-gray-300 rounded-r-xl bg-gray-100 h-full px-3 text-sm font-medium text-gray-800 focus:ring-1 focus:ring-gray-400/[0.8]' value={state} onChange={(e)=> setState(e.target.value)}/>
    </div>
  )
}

export default AuthInput