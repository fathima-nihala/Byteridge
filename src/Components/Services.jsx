import React from 'react'

const Services = () => {
    return (
        <div className=' bg-blue-900 flex flex-col w-full p-24'>
            <div className='flex flex-row gap-3 p-2'>
                <div className='bg-amber-300 h-10 w-1'></div>
                <h2 className='uppercase text-[30px] text-white w-full  font-semibold font-sans '>services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  mt-6 '>
                <div className='flex md:flex-row space-x-6 md:space-y-0 md:space-x-6 p-6'>
                    <div>
                        <img src="https://cdn.byteridge.com/2023/11/Product-Conceptualization.png" alt="" />
                    </div>
                    <div className='flex flex-col justify-center '>
                        <h2 className='text-white text-3xl w-1/2 md:text-4xl lg:text-5xl'>Product Conceptualization</h2>
                        <p className='text-gray-400 text-base  md:text-lg lg:text-[24px] w-2/3'>Idea Validation | MVP Definition | Real User Feedback</p>
                    </div>
                </div>
                <div className='flex  md:flex-row space-x-6 md:space-y-0 md:space-x-6 p-6'>
                    <div>
                        <img src="https://cdn.byteridge.com/2023/11/Software-Verification.png" alt="" className='w-40' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white text-3xl md:text-4xl lg:text-5xl'>Software Verification</h2>
                        <p className='text-gray-400 text-base md:text-lg lg:text-[24px] w-2/3'>
                            Functional Testing | Usability Testing | Security Testing | Performance Testing | Continuous Build Integration
                        </p>
                    </div>
                </div>

                <div className='flex flex-row space-x-6 p-6  md:space-y-0 md:space-x-6'>
                    <div>
                        <img src="	https://cdn.byteridge.com/2023/11/Experience-Definition.png" alt="" className='w-40' />
                    </div>
                    <div className='flex flex-col justify-center '>
                        <h2 className='text-white text-3xl md:text-4xl lg:text-5xl'>Experience Definition</h2>
                        <p className='text-gray-400 text-base md:text-lg lg:text-[24px] w-2/3'>Storyboarding | Requirement Definition | Wireframes | Low Fidelity Designs | High Fidelity Designs | Mockups and Prototypes</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-6  md:space-y-0 md:space-x-6 p-6'>
                    <div>
                        <img src="	https://cdn.byteridge.com/2023/11/Software-Development.png" alt="" className='w-40' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white text-3xl md:text-4xl lg:text-5xl'>Software Development</h2>
                        <p className='text-gray-400 text-base md:text-lg lg:text-[24px] w-2/3'>iOS, Android | React Native | MongoDB, Angular, Node | ReactJS, Strapi, SignalR | .NET, MVC | Machine Learningk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
