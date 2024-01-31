import React from 'react'
import MyProductsCard from './MyProductsCard'

const MyProductsContainer = ({products}) => {
    return (
        <div className='w-full h-auto flex flex-col gap-6 justify-start items-start'>

            <span className='text-lg font-bold text-gray-900'>
                My Products
            </span>

            <div className='flex items-start justify-start w-full h-auto flex-wrap'>
            {
            products?.map((product, key) => (
                <MyProductsCard product={product} key={key}/>
            ))
        }
            </div>
        </div>
    )
}

export default MyProductsContainer