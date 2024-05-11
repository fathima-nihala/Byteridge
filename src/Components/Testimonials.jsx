import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

 const settings={
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      image: `https://cdn.byteridge.com/2023/11/Kevin-Leneway.webp`,
      name: `Kevin Leneway`,
      profession: `Engineering Lead, Pioneer Square Labs Seattle, USA`,
      img: `	https://cdn.byteridge.com/2024/01/PSL.webp`,
      paragraph: `Byteridge team maintained an impressive level of expertise, required minimal oversight, and ultimately delivered high-caliber work. Team worked independently and we only got involved at a very high-level.`,
    },
    {
      image: `https://cdn.byteridge.com/2023/11/Juhee-Ahmed.webp`,
      name: `Juhee Ahmed`,
      profession: `Sr. Manager, Microsoft India`,
      img: `https://cdn.byteridge.com/2024/01/Microsoft.webp`,
      paragraph: `Thanks to Byteridge for the high quality and time bound work delivered on many projects over the past 10 years. The team has come up with great ideas and valuable inputs which have resulted in very useful solutions for us.`,
    },
    {
      image: `	https://cdn.byteridge.com/2023/11/Ramnath-Misra.webp`,
      name: `Ramnath Misra`,
      profession: `Head Marketing & Strategy, Hindware India`,
      img: `https://cdn.byteridge.com/2024/01/Hindware-1.webp`,
      paragraph: `They don’t hire just anyone. Byteridge is very quality-conscious and it’s what I appreciate about them. Byteridge pays good attention to detail on all projects. Team is very flexible and capable.`,
    },
    {
      image: `	https://cdn.byteridge.com/2023/12/Brad-Wilton.webp`,
      name: `Brad Wilton`,
      profession: `CIO, Valley Proteins, Inc. Virginia, US`,
      img: `https://cdn.byteridge.com/2024/01/Valley-Protiens.webp`,
      paragraph: `They don’t hire just anyone. Byteridge is very quality-conscious and it’s what I appreciate about them. Byteridge pays good attention to detail on all projects. Team is very flexible and capable.`,
    },
    {
      image: `https://cdn.byteridge.com/2023/12/Sachin-Somaiya.webp`,
      name: `Sachin Somaiya`,
      profession: `Manager, Tata Strategic Management Group Mumbai, India`,
      img: `	https://cdn.byteridge.com/2024/01/TATA.webp`,
      paragraph: `Understanding majority of our requirements, providing alternative routes/ methods, fairly good quality, deliver on timelines (10 on 10 for that!).`,
    },
    {
      image: `https://cdn.byteridge.com/2023/12/Shawn_Ovenden.webp`,
      name: `Shawn Ovenden`,
      profession: `Founder & CEO, Jeppedo Calgary, Canada`,
      img: `https://cdn.byteridge.com/2024/01/Jepeddo.webp`,
      paragraph: `They delivered the features and functionalities that we wanted. They were communicative and responsive, completing all of the expected work.`,
    }
  ]

  return (
    <div className='flex  flex-col'>
      <div className='flex flex-row gap-3 p-24'>
        <div className='bg-amber-300 h-10 w-1'></div>
        <h2 className='uppercase text-[30px] text-blue-900 w-full  font-semibold font-sans '>Testimonials</h2>
      </div>
      <div className='w-3/4 m-auto '>
        <div className='mt-20'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='h-auto items-center justify-center flex-col'>
                <div className='flex flex-col justify-center'>
                  <div className='flex justify-center'>
                    <img src={d.image} alt="" className='w-24 h-24 rounded-full ' />
                  </div>
                  <div className='flex flex-col justify-center items-center '>
                    <p className='text-[33px] text-slate-700 mt-6'>{d.name}</p>
                    <p className='text-[18px] font-semibold text-blue-900 font-sans text-center w-2/2'>{d.profession}</p>
                  </div>
                </div>
                <div className=''>
                <div className='flex flex-col justify-center items-center gap-4 p-2'>
                  <img src={d.img} alt="" className='w-21 h-24 object-fill' />
                </div>
                <div className=''>
                  <p className='text-[19px] text-slate-600 text-center font-sans '>{d.paragraph}</p>
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials


