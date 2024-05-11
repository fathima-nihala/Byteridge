import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

const FeaturedClients = () => {


    return (

        <div className='px-28'>
            <div className='flex flex-row gap-3 mt-20'>
                <div className='bg-amber-300 h-10 w-1'></div>
                <h2 className='uppercase text-[30px] text-blue-900 w-full  font-semibold font-sans '>FEATURED CLIENTS</h2>
            </div>
            <Swiper
              slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='container md:gap-7 gap-10 grid md:grid-cols-5 grid-cols-3  items-center mx-auto  my-3 pt-8'>
                        {Images.map((i) => (
                            <div ><img src={i.logoImg} alt="" /></div>
                        ))}

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container md:gap-7 gap-10 grid md:grid-cols-5 grid-cols-3  items-center mx-auto  my-3 pt-8'>
                        {Images.map((i) => (
                            <div ><img src={i.logoImg} alt="" /></div>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container md:gap-7 gap-4 grid md:grid-cols-5 grid-cols-3  items-center mx-auto  my-3 pt-8'>
                        {Images.map((i) => (
                            <div ><img src={i.logoImg} alt="" /></div>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
const Images = [{
    logoImg: 'https://cdn.byteridge.com/2024/01/Microsoft-1.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/ADP.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/TATA-1.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Hindware.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/PHILIPS.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Pine-Labs.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/IIFL.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/LandingKart.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/CASHe-1.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/RapiPay.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Chqbook.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/boAt.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Moglix.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Techstars.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Deltek.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/CCMR3.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Moonfrog-1.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/iBOT-1.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/Merylitics.webp'
},
{
    logoImg: 'https://cdn.byteridge.com/2024/01/VAS.webp'
}]
export default FeaturedClients