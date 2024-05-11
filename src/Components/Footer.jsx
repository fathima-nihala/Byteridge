import React, { useEffect, useState } from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";



const Footer = () => {

    const [isSticky, setIsSticky] = useState(false);

    //for scrolling & sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='grid md:grid-cols-4 grid-cols-1 bg-blue-900 mt-20'>
            <div className=' flex  p-10'>
                <img src="https://cdn.byteridge.com/2023/11/Byteridge-Logo-with-tagline.png" alt="" className=' h-[90px] object-fill' />
            </div>
            <div className='max-w-[280px] flex flex-col p-10 text-[19px] text-white font-sans '>
                <p>our offices</p>
                <h2 className='font-bold text-amber-200 mt-3 text-[30px]'>United States</h2>
                <p className='mt-3'>1013, Centre Road, Suite 403S, Wilmington, County of New Castle, Delaware, USA - 19805</p>
                <p className='mt-3 cursor-pointer'>+1 415 937 0731</p>
                <p className='mt-3 cursor-pointer'>info@byteridge.com</p>
                <p className='mt-6 '>Follow Us</p>
                <div className='flex flex-row gap-3 mt-3 cursor-pointer'>
                    <FaTwitter className='cursor-pointer'/>
                    <FaFacebookSquare className='cursor-pointer'/>
                    <IoLogoLinkedin className='cursor-pointer'/>
                </div>
            </div>
            <div className='max-w-[280px] flex flex-col p-10 text-[18px] text-white font-sans '>
                <h2 className='font-bold text-amber-200 mt-3  text-[30px]'>India</h2>
                <p className='mt-3 font-bold'>Byteridge Software Private Limited </p>
                <p className='mt-3'> WeWork Rajapushpa Summit, Financial District, Hyderabad, Telangana 500032</p>
                <p className='mt-3 cursor-pointer'>+91 40491 74522</p>
                <p className='mt-3 cursor-pointer'>info@byteridge.com</p>
                <p className='flex items-center mt-6 underline'><span>Subscriber for updates</span><IoIosArrowRoundForward /></p>
            </div>
            <div className='max-w-[280px] text-[18px] text-white font-sans flex flex-col p-10 '>
                <p className='mt-6 cursor-pointer'>Case Studies</p>
                <p className='mt-6 cursor-pointer'>Services</p>
                <p className='mt-6 cursor-pointer'>About Us</p>
                <p className='mt-6 cursor-pointer'>Knowledge Center</p>
                <p className='mt-6 cursor-pointer'>Events</p>
                <p className='mt-6 font-semibold '>ByteridgeTM | All right reserved.</p>
            </div>
            <div className={`w-full flex justify-end col-span-4 z-10 ${isSticky ? ' fixed bottom-3' : ''}`}>
                <div className='w-[70px]  rounded-l-full bg-amber-300 ml-0 mb-8 hover:w-80 h-12 flex items-center transition-opacity ease-in-out cursor-pointer gap-3'>
                    <img src="	https://cdn.byteridge.com/2023/11/Bell.webp" alt="" className='h-9 ml-4 cursor-pointer transition-opacity ease-in-out ' />
                    <p className='text-orange-900 inline-block gap-1 opacity-0 hover:opacity-90 text-[19px]  '>Get latest update from us!</p>
                </div>
            </div>
            <div className={`w-full flex justify-start col-span-4 z-10 ${isSticky ? ' fixed bottom-3' : ''}`}>
                <div className=' w-[64px] rounded-full bg-amber-300  ml-8  h-16 cursor-pointer flex items-center justify-center hover:transform hover:scale-105'>
                <FaMessage className='w-80 h-8 text-slate-600'/>
                </div>
            </div>
        </div>
    )
}

export default Footer

