import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Testimonial() {


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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='flex justify-center items-center w-[100%] h-[100vh] '>
                    <div className=' w-[80%] h-[200px] flex m-auto justify-center items-center gap-6 bg-slate-100 rounded-full p-8 border-2 border-blue-500'>
                        <div className='w-[200px] h-[200px]'>
                            <img src="./public/mentors/Anand Soni.png"
                                className='w-full h-full object-cover p-4 rounded-[200px]  '
                            />
                        </div>

                        <p className='text-medium font-inter text-gray-500 mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, explicabo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi sit
                            ab rem eos distinctio architecto. Ea blanditiis nihil itaque?
                        </p>
                       
                    </div>
            
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' w-[80%] h-[200px] flex m-auto justify-center items-center gap-6 bg-slate-100 rounded-full p-8 border-2 border-blue-500'>
                        <div className='w-[200px] h-[200px]'>
                            <img src="./public/Hall/Aman1.jpg"
                                className='w-full h-full object-cover p-4 rounded-[200px] '
                            />
                        </div>

                        <p className='text-medium font-inter text-gray-500 mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, explicabo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi sit
                            ab rem eos distinctio architecto. Ea blanditiis nihil itaque?
                        </p>
                       
                    </div>
            
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center  '>
                    <div className=' w-[80%] h-[200px] flex m-auto justify-center items-center gap-6 bg-slate-100 rounded-full p-8 border-2 border-blue-500'>
                        <div className='w-[200px] h-[200px]'>
                            <img src="./public/mentors/ankit patel .jpg"
                                className='w-full h-full object-cover p-4 rounded-[200px] '
                            />
                        </div>

                        <p className='text-medium font-inter text-gray-500 mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, explicabo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi sit
                            ab rem eos distinctio architecto. Ea blanditiis nihil itaque?
                        </p>
                       
                    </div>
            
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center  '>
                    <div className=' w-[80%] h-[200px] flex m-auto justify-center items-center gap-6 bg-slate-100 rounded-full p-8 border-2 border-blue-500'>
                        <div className='w-[200px] h-[200px]'>
                            <img src="./public/mentors/ankit kumar.jpg"
                                className='w-full h-full object-cover p-4 rounded-[200px] '
                            />
                        </div>

                        <p className='text-medium font-inter text-gray-500 mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, explicabo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nisi sit
                            ab rem eos distinctio architecto. Ea blanditiis nihil itaque?
                        </p>
                       
                    </div>
            
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial

