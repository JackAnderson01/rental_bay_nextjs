import React from 'react'
import AllProductsCard from './AllProductsCard'

const ViewAllContainer = ({products}) => {
  return (
    <div className='flex items-start justify-start w-full h-auto flex-wrap'>
        {
            products?.map((product, key) => (
                <AllProductsCard product={product} key={key}/>
            ))
        }
    </div>
  )
}

export default ViewAllContainer