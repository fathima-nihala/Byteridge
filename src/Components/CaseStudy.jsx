import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const CaseStudy = () => {
    const[showIcon,setShowIcon]=useState();
    const[showIcon2,setShowIcon2]=useState();
    const[showIcon3,setShowIcon3]=useState();



    return (
        <div className='flex flex-col w-full p-24'>
            <div className='flex flex-row gap-3 p-2'>
                <div className='bg-amber-300 h-10 w-1'></div>
                <h2 className='uppercase text-[30px] text-blue-900 w-full  font-semibold font-sans '>case studies</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-10 '>
                <div className='hover:shadow-2xl  max-w-[400px] cursor-pointer p-10 '>
                    <div className='flex flex-col item-center h-auto mt-2 'onMouseEnter={() => setShowIcon3(true)} onMouseLeave={() => setShowIcon3(false)} >
                        <div className=' w-full h-auto max-w-[350px] flex item-center '>
                            <img src="https://cdn.byteridge.com/2023/11/Microsoft-case-study.webp" alt="" className='w-300 h-60' />
                        </div>
                        <div className="mt-10 flex justify-start items-start">
                            <h2 className='text-4xl text-slate-700 flex items-center'>
                                Microsoft
                                {showIcon3 && <IoIosArrowRoundForward className="ml-2 w-10 h-10 text-amber-300" />}
                            </h2>
                        </div>
                        <div>
                            <p className='text-[18px] text-blue-900 font-semibold'>Ruuh - AI Chatbot | Mobile, Cloud, AI/Ml/Bots</p>
                        </div>
                        <div className='mt-6'>
                            <p className='text-[19px] text-slate-500 w-7/8'>We helped bring Ruuh – AI based desi chatbot experience to web and mobile. Be it a small talk about cricket or sharing intimate emotions, Ruuh loves it all.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:shadow-2xl  max-w-[400px] cursor-pointer p-10'>
                    <div className='flex flex-col item-center h-auto mt-2' onMouseEnter={() => setShowIcon2(true)} onMouseLeave={() => setShowIcon2(false)}>
                        <div className='w-full h-auto max-w-[350px] flex item-center'>
                            <img src="https://cdn.byteridge.com/2023/12/Case-13-1024x731.webp" alt="" className='w-300' />
                        </div>
                        <div className='mt-10 flex justify-start items-start'>
                            <h2 className='text-4xl text-slate-700 flex items-center'>
                                CASHe
                                {showIcon2 && <IoIosArrowRoundForward className="ml-2 w-10 h-10  text-amber-300" />}
                            </h2>
                        </div>
                        <div>
                            <p className='text-[18px] text-blue-900 font-semibold '>Aeries Technologies | iOS, Android</p>
                        </div>
                        <div className='mt-6'>
                            <p className='text-[19px] text-slate-500 w-7/8'>India’s first product, providing instant credit to young professionals. Credits worth $60 million extended till date. Solid performance improvement led to better adoption.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:shadow-2xl  max-w-[400px] cursor-pointer p-10'>
                    <div className='flex flex-col item-center h-auto mt-2 ' onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
                        <div className='w-full h-auto max-w-[350px] flex item-center'>
                            <img src="https://cdn.byteridge.com/2023/12/Case-2.webp" alt="" className='w-300' />
                        </div>
                        <div className='mt-10 flex justify-start items-start'>
                            <h2 className='text-4xl text-slate-700 flex items-center '>
                                India Infoline
                                {showIcon && <IoIosArrowRoundForward className="ml-2 w-10 h-10  text-amber-300" />}
                                </h2>
                        </div>
                        <div>
                            <p className='text-[18px] text-blue-900 font-semibold'>IIFL Markets | iOS – iPhone & iPad Apps</p>
                        </div>
                        <div className='mt-6'>
                            <p className='text-[19px] text-slate-500'>IIFL Markets app we built allows 170k+ user to trade through their phone, get in-depth analysis, expert opinions, track watch lists across NSE, BSE, MCX and NCDEX.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-10'>
                <p className='flex items-center text-xl  text-blue-900 underline font-semibold transition-transform duration-300 ease-in-out hover:transform hover:translate-y-5 '>View All Case Studies <IoIosArrowRoundForward className="ml-2 w-10 h-10 " /></p>
            </div>
        </div>
    )
}

export default CaseStudy
