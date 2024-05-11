import React, { useEffect, useState } from 'react'

const WorkWithUs = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count1 < 150) {
                setCount1(count1 + 1);
            }
        }, 10);

        return () => clearTimeout(timer);
    }, [count1]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count2 < 130) {
                setCount2(count2 + 1);
            }
        }, 13);

        return () => clearTimeout(timer);
    }, [count2]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count3 < 15) {
                setCount3(count3 + 1);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [count3]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count4 < 4.8) {
                setCount4(Math.min(count4 + 0.9, 4.8));
            }
        }, 290);

        return () => clearTimeout(timer);
    }, [count4]);

    return (
        <div className='grid grid-cols-12 gap-5 p-28'>
            <div className='flex flex-col justify-center items-center mt-6 col-span-12 lg:col-span-7  '>
                <div className='flex flex-col '>
                    <div className='flex flex-row gap-3'>
                        <div className='bg-amber-300 h-10 w-1'></div>
                        <h2 className='uppercase text-[25px] text-blue-900'>Why work with Byteridge?</h2>
                    </div>
                    <div>
                        <p className='text-2xl  mt-6  text-slate-700 font-[inter,sans-serif]'>We at Byteridge take pride in delivering true value to enterprises and start-ups alike since 2008. Our driven and dedicated team of engineers ensures that Byteridge consistently delivers high quality products and solutions to our customers.
                        </p>
                        <p className='text-2xl  mt-6  text-slate-700'>We are proud to be Great Place to Work®-Certified. This prestigious recognition showcases our commitment to cultivating a positive work environment.</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start items-center md:mt-6 '>
                        <div className='border-r border-gray-400 w-full  p-4 text-center'>
                            <h3 className='text-4xl md:text-6xl text-blue-900 font-semibold '>{count1}<span >+</span></h3>
                            <p className='text-base md:text-lg text-slate-700'>Happy Clients</p>
                        </div>
                        <div className='border-r border-gray-400 w-full  p-4 text-center'>
                            <h3 className='text-4xl md:text-6xl text-blue-900 font-semibold '>{count2}<span >+</span></h3>
                            <p className='text-base md:text-lg text-slate-700'>Products & Solutions</p>
                        </div>
                        <div className='border-r border-gray-400 w-full  p-4 text-center'>
                            <h3 className='text-4xl md:text-6xl text-blue-900 font-semibold '>{count3}<span>+</span></h3>
                            <p className='text-base md:text-lg text-slate-700'>Years of Proven Excellence</p>
                        </div>
                        <div className=' w-full p-2 text-center'>
                            <h3 className='text-4xl md:text-6xl text-blue-900 font-semibold '>{count4}<span>/5</span></h3>
                            <p className='text-base md:text-lg text-slate-700'>Net Promoter Score</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-span-12 md:col-span-5  flex flex-col'>
                <div className=''>
                    <img src=" https://cdn.byteridge.com/2023/11/GoodFirms-1.webp" alt="" className=''/>
                </div>
                <div className=''>
                    <img src="	https://cdn.byteridge.com/2023/11/Clutch.webp" alt="" className=''/>
                </div>
                <div className=''>
                    <img src="https://cdn.byteridge.com/2023/11/Glassdoor.webp" alt="" className=''/>
                </div>
                <div className=''>
                    <img src="	https://cdn.byteridge.com/2023/11/PubNub.webp" alt="" className=''/>
                </div>
            </div> 
        </div>
    )
}

export default WorkWithUs
