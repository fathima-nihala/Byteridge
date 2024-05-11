import React, { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

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
        <nav className={`z-50 ${isSticky ? 'fixed top-0 shadow-md transition duration-300 ease-in-out w-full' : ''}`}>
            <div className="h-10vh flex justify-between z-50 lg:py-7 px-20 py-4 flex-1 bg-white">
                <div className='flex flex-1 items-center'>
                    <img src="https://cdn.byteridge.com/2023/11/Byteridge-logo.png" alt="" className='h-7' />
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden '>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[16px]'>
                            <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Services</li>
                            <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>About Us</li>
                            <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Careers</li>
                            <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Knowledge Center</li>
                            <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Contact Us</li>
                        </ul>
                    </div>
                    <div className='absolute top-1/2 transform -translate-y-1/2 right-12 h-full '>
                        <img src="	https://cdn.byteridge.com/2023/11/Great-Place-to-work-badge.webp" alt="" className='w-20  h-39 object-fill box-border '/>
                    </div>
                </div>
                <div>
                    {click && (
                        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 transition z-10 bg-white'>
                            <ul className='text-center text-xl p-20'>
                                <li className=' border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Services</li>
                                <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>About Us</li>
                                <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Careers</li>
                                <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Knowledge Center</li>
                                <li className='border-b-4 border-transparent hover:border-yellow-200 cursor-pointer transition'>Contact Us</li>
                            </ul>
                        </div>
                    )}
                </div>
                <button className='block sm:hidden  transition' onClick={handleClick}>
                    {click ? <FaTimes /> : <MdMenu className='w-[40px] h-[40px]' />}
                </button>
            </div>
        </nav>
    );
}

export default Header;
