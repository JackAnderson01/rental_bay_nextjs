import Link from 'next/link'
import React, { useState } from 'react'
import DeleteModal from './DeleteModal'

const ProductCrudModal = ({isOpen, setIsCrudOpen}) => {

    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    const toggleDeleteConfirmationModal = () => {
        setIsDeleteOpen((prev) => !prev)
    }

  return (
    <div   className={`${isOpen ? "flex" : "hidden"} absolute top-10 right-4 w-32 h-auto  flex-col justify-start items-start p-3 bg-white rounded-lg shadow-md shadow-black/[0.4] gap-1`}>
        <Link href={"/edit-product"} className='text-sm font-medium hover:font-semibold text-black'>
            Edit
        </Link>
        <button onClick={toggleDeleteConfirmationModal} className='text-sm font-medium hover:font-semibold text-black'>
            Delete
        </button>
        <DeleteModal isOpen={isDeleteOpen} onClose={toggleDeleteConfirmationModal}/>
        
    </div>
  )
}

export default ProductCrudModal