import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function ProductPosted() {
    return (

        <div className='relative w-full h-auto min-h-screen px-6 lg:px-14 py-6 lg:py-10 flex justify-start items-start gap-6 '>
            <div className='w-full border-2 border-gray-100 h-[80vh] p-6 lg:p-10 flex flex-col gap-5 justify-center items-center'>
                <IoCheckmarkCircleOutline className="text-[170px] text-orange-500"/>

                <span className="text-3xl font-bold text-black">
                    Product Posted
                </span>

                <span className="w-64 text-md font-semibold text-center text-[#959595]">
                Your product has been posted successfully!
                </span>
            </div>
        </div>
    )
}