import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Slide = () => {

    const imgeurl1 = "url('https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg')";

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className='w-full bg-no-repeat  bg-cover h-screen flex justify-center items-center' style={{ backgroundImage: imgeurl1 }}>
                    <div className='flex flex-col  justify-center items-start gap-7  w-9/12 text-left'>
                        <span className='text-amber-300 text-7xl font-sans'>Our Brand</span>
                        <span className='text-white text-5xl font-sans'>Learn more about our transformed identity and our vision, and what it took to become who we are today.</span>
                        <button class="bg-white  text-blue-900 w-52 h-10 text-2xl transition-transform duration-300 transition-background-position  ease-in-out hover:transform hover:translate-y-10 hover:bg-white ">Read More</button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>  
                <div className='w-full bg-no-repeat  bg-cover h-screen flex justify-center items-center' style={{ backgroundImage: imgeurl1 }}>
                    <div className='flex flex-col justify-center items-start gap-7  w-9/12 text-left'>
                        <span className='text-amber-300 text-7xl font-sans'>Building Excellence in Digital</span>
                        <span className='text-white text-5xl font-sans'>We partner with clients to build digital products, prioritising excellence at every stage.</span>
                        <button class="bg-white  text-blue-900 w-52 h-10 text-2xl transition-transform duration-300 transition-background-position  ease-in-out hover:transform hover:translate-y-10 hover:bg-white ">Read More</button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full bg-no-repeat  bg-cover h-screen flex justify-center items-center' style={{ backgroundImage: imgeurl1 }}>
                    <div className='flex flex-col  justify-center items-start gap-7  w-9/12 text-left'>
                        <span className='text-amber-300 text-7xl font-sans'>Application Modernisation for an Enterprise</span>
                        <span className='text-white text-5xl font-sans'>A case study on how we helped an enterprise in their Application modernisation journey.</span>
                        <button class="bg-white  text-blue-900 w-52 h-10 text-2xl transition-transform duration-300 transition-background-position  ease-in-out hover:transform hover:translate-y-10 hover:bg-white ">Read More</button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>  
                <div className='w-full bg-no-repeat  bg-cover h-screen flex justify-center items-center' style={{ backgroundImage: imgeurl1 }}>
                    <div className='flex flex-col  justify-center items-start gap-7  w-9/12 text-left'>
                        <span className='text-amber-300 text-7xl font-sans'>Our Impact for Fintech Clients</span>
                        <span className='text-white text-5xl font-sans'>A case study on how we developed an innovative product for a new age fintech organisation.</span>
                        <button class="bg-white w-52 h-10 text-2xl transition-transform duration-300 transition-background-position  ease-in-out hover:transform hover:translate-y-10 hover:bg-white ">Read More</button>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide