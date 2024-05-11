import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const StayInTouch = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 px-28 justify-center mt-38'>
            <div className='flex flex-row gap-3 mt-20 col-span-1 '>
                <div className='bg-amber-300 h-10 w-1'></div>
                <h2 className='uppercase text-[30px] text-blue-900 w-full  font-semibold font-sans '>stay in touch</h2>
            </div>
            <div className='flex flex-col items-center justify-center gap-7 mt-20 col-span-2'>
                <div className='grid md:grid-cols-2 text-[22px] gap-10 grid-rows-2'>
                    <input type="text" name="" id="" placeholder='Full Name*' className=' outline-none  border-b border-gray-400 border-solid w-[400px]' />
                    <select className='border-b border-gray-400 border-solid  w-[400px] outline-none'>
                        <option value="0">I am looking for</option>
                        <option value="1">Career Oppertunities</option>
                        <option value="2">Getting a product developed</option>
                        <option value="3">Partnership and Alliance</option>
                        <option value="4">Other</option>
                    </select>
                    <input type="text" name="" id="" placeholder='Email Address*' className='outline-none  border-b border-gray-400 border-solid  w-[400px]' />
                    <textarea type="text" name="" id="" placeholder=' Message*' className='outline-none  border-b border-gray-400 border-solid  w-[400px]  ' />
                    <div className='grid md:grid-cols-1 text-[24px] gap-10 grid-rows-2  '>
                        <input type="text" name="" id="" placeholder='Mobile Number' className='outline-none  border-b border-gray-400 border-solid w-[400px]' />
                        <button class='flex items-center mr-70 transition-transform duration-500 hover:translate-y-10 ease-in-out '>
                            <span class='mr-2 text-blue-900 underline'>Submit</span>
                            <IoIosArrowRoundForward class='text-blue-900' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayInTouch
