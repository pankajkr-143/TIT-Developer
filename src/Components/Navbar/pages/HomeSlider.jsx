import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink , Link } from 'react-router-dom'; // Updated import to 'react-router-dom'
import { Linkedin } from 'lucide-react'

import About from './About';
import HallOfFame from '../../HallOfFame/HallOfFame';
import Events from '../../Events/Events';


function HomeSlider() {
  const students = [
    {
      course: 'Android Development',
      name: 'Dipu Kumar (2nd Year)',
      achievement: '5+ projects , 4+ certifications',
      image: './src/publics/Hall/Dipu1.jpg'

    },
    {
      course: 'Android Development',
      name: 'Aryan Sharma (3rd Year)',
      achievement: '10+ projects , 5+ hackathon , Play Store Deployments',
      image: './src/publics/Hall/Aryan1.jpg'

    },
    {
      course: 'Machine Learning',
      name: 'Aman Mishra (2nd Year)',
      achievement: '5+ major projects , SIH 2024 Finalist',
      image: './src/publics/Hall/Aman1.jpg'

    },
    {
      course: 'Machine Learning',
      name: 'Deepika Deshmukh (3rd Year)',
      achievement: '10+ projects , 5+ hackhathons',
      image: './src/publics/Hall/Deepika1.jpg'

    },
    {
      course: 'Web Development',
      name: 'Naman Kumar (3rd Year)',
      achievement: '5+ projects , secured internship',
      image: './src/publics/Hall/Naman1.jpg'

    },
    {
      course: 'Web Development',
      name: 'Prakhar (2nd Year)',
      achievement: '10+ projects , SIH 2024 Finalist',
      image: './src/publics/Hall/Prakhar1.jpg'

    },
    {
      course: 'Cybersecurity',
      name: 'Akash Kumar (2nd Year)',
      achievement: '3+ projects , ATS-optimized resume',
      image: './src/publics/Hall/Akash1.jpg'

    },
    {
      course: 'Cybersecurity',
      name: 'Mohd Meraaz (3rd Year)',
      achievement: 'Sucessfully completed cybersecurity training',
      image: './src/publics/Hall/Mohd1.jpg'

    }

  ]

  return (
    <div className=''>
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
        <SwiperSlide className='bgImage relative'>
          <img src='./src/publics/images/Slide1.jpg' />
        </SwiperSlide>
        <SwiperSlide className='bgImage relative'>
          <img src='./src/publics/images/Slide3.jpg' />
        </SwiperSlide>
        <SwiperSlide className='bgImage relative'>
          <img src='./src/publics/images/Slide2.jpg' />
        </SwiperSlide>
        <SwiperSlide className='bgImage relative'>
          <img src='./src/publics/images/Slide5.jpg' />
        </SwiperSlide>
        <SwiperSlide className='bgImage relative'>
          <img src='./src/publics/images/Slide4.jpg' />
        </SwiperSlide>
      </Swiper>

      <div className='absolute flex flex-col top-[40%] left-[10%] justify-center items-center mb-2 z-10'>
        <h1 className='text-[50px] font-inter font-bold text-[#f58e20]'>
          TIT Developer <span className='text-[#43e3d9]'> Community </span>
        </h1>
        <p className='text-[20px] text-white opacity-[0.8] mb-1 font-inter'>
          Empowering Juniors , Led by Seniors - Join the Revolution!
        </p>
        <p className='text-[20px] text-white opacity-[0.8] mb-1 font-inter'>
          TIT Developer Community is a student-led initiative bridging the gap between juniors and seniors through free mentorship.
        </p>
        <button className="py-[12px] px-[22px] mt-[30px] text-[22px] border-none outline-none text-[white] bg-[#f58e20] rounded-[25px] cursor-pointer font-inter">
          <NavLink to="/jionus">Join us now</NavLink>
        </button>
      </div>

      {/* Rendering all the pages below the slider */}

      {/* Abou section */}
      <div>
        <div className="hero w-[100%] h-[60vh] flex justify-center items-center bg-slate-200">
          <div className='w-[50%] h-[60vh]flex flex-col items-center justify-center p-4 '>
            <h1 className='text-3xl mb-4 text-[black] font-bold font-inter capitalize text-center p-2 shadow-md rounded'>Who we are? </h1>
            <li className='text-lg font-inter text-[black] ml-2 font-normal '>TIT Developer Community is a student-led initiative bridging the gap
              between juniors and seniors through free mentorship.</li>
            <li className='text-lg font-inter text-[black] ml-2 font-normal mt-2 mb-2'>Our mission: Empower students with real-world knowledge, industry
              insights, and hands-on learning.</li>
            <li className='text-lg font-inter text-[black] ml-2 font-normal '>We offer guidance through mentorship programs, hackathons, and
              workshops to help students succeed in the tech industry. </li>
          </div>
          <div className='w-[50%] h-[60vh] flex justify-center items-center'>
            <img src='./src/publics/images/Slide2.jpg '
              className='object-contain rounded-2xl '
            />
          </div>



        </div>

        <div className='w-[100%] h-[50vh] p-2'>
          <div>
            <h1 className='text-3xl mb-4 text-[black] font-bold font-inter capitalize text-center p-2 shadow-md rounded'>Why Jion Us?</h1>
          </div>
          <div className='flex justify-center items-center gap-6 '>
            <div className='w-[300px] h-[250px] flex flex-col justify-center items-center rounded-2xl shadow-2xl p-2'>
              <img src='./src/publics/joinus/study.png' className='w-[100px] mb-4 border-4 rounded-full border-[#43e3d9] ' />
              <p className='text-lg font-inter text-[black] font-normal text-center'>Hands-on Learning with Real-World Projects </p>
            </div>
            <div className='w-[300px] h-[250px]  flex flex-col justify-center items-center rounded-2xl shadow-2xl p-2'>
              <img src='./src/publics/joinus/workshop.png' className='w-[100px] mb-4 border-[#43e3d9] border-4 rounded-full shadow-2xl ' />
              <p className='text-lg font-inter text-[black] font-normal text-center'>Access to Exclusive Workshops and Hackathons  </p>
            </div>
            <div className='w-[300px] h-[250px]  flex flex-col justify-center items-center rounded-2xl shadow-2xl'>
              <img src='./src/publics/joinus/leadership.png' className='w-[100px] mb-4 border-[#43e3d9] border-4 rounded-full shadow-2xl ' />
              <p className='text-lg font-inter text-[black] font-normal text-center'>Personalized Mentorship from Industry-Ready Seniors  </p>
            </div>
            <div className='w-[300px] h-[250px]  flex flex-col justify-center items-center rounded-2xl shadow-2xl p-2'>
              <img src='./src/publics/joinus/transparent.png' className='w-[100px] mb-4 border-[#43e3d9] border-4 rounded-full shadow-2xl ' />
              <p className='text-lg font-inter text-[black] font-normal text-center'>Build a Robust Technical Portfolio for Placements  </p>
            </div>

          </div>
        </div>
      </div>

   

      

      {/* Event */}

      <div className='bg-blue-100 w-full h-full p-6 '>
        <div className='flex items-center justify-center mt-4'>
          <h1 className='text-2xl text-[#d72020] font-inter font-bold capitalize border-b-2 border-[black]'>Our Current Events</h1>
        </div>
        <div className='grid grid-cols-4 gap-2 ml-4 mt-8 '>
          <div className="card w-[300px] h-[400px] shadow-2xl cursor-pointer hover:translate-y-[-20px] transition-all duration-500">
            <figure className=''>
              <img className='object-cover w-[100%] h-[350px]'
                src="./src/publics/Events/android.webp"
                alt="Android" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Android Development Workshop</h2>
              <p>Android development is creating mobile apps using Java or Kotlin, Android tools, and platforms like Android Studio for smooth experiences.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/contact">Jion Now</Link></button>
              </div>
            </div>
          </div>
          <div className="card w-[300px] h-[400px] shadow-2xl cursor-pointer hover:translate-y-[-20px] transition-all duration-500">
            <figure>
              <img className='w-[100%] h-[350px] object-cover'
                src="./src/publics/Events/hackathon2.avif"
                alt="Android" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development Hackathon</h2>
              <p>It’s an opportunity to learn, experiment, and push the boundaries of web development in a fast-paced, creative environment.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/contact">Jion Now</Link></button>
              </div>
            </div>
          </div>
          <div className="card w-[300px] h-[400px] shadow-2xl cursor-pointer hover:translate-y-[-20px] transition-all duration-500">
            <figure>
              <img className='w-[100%] h-[350px] object-cover'
                src="./src/publics/Events/coding.jpg"
                alt="Android" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Coding Quest</h2>
              <p>A Coding Quest is a competitive event where participants solve programming challenges, complete tasks, and tackle real-world problems within a set time frame.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/contact">Jion Now</Link></button>
              </div>
            </div>
          </div>
          <div className="card w-[300px] h-[400px] shadow-2xl cursor-pointer hover:translate-y-[-20px] transition-all duration-500">
            <figure>
              <img className='w-[100%] h-[350px] object-cover'
                src="./src/publics/Events/class1.jpg"
                alt="Android" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Regular Classes</h2>
              <p>A regular coding class provides structured lessons to teach programming concepts, languages, and problem-solving skills. </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/contact">Jion Now</Link></button>
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* Hall of Fame */}

      <div className='bg-gray-200 w-full h-full p-4 '>
        <div className='flex flex-col items-center justify-center mt-4'>
          <h1 className='text-3xl text-[#204ae2] font-inter font-bold capitalize border-[#ccc] border-b-2'>Hall Of Fame</h1>
          <p className='text-center font-inter text-sm mt-3'>Recognize top-performing students across domains</p>
        </div>
        <div className='w-[80%] grid grid-cols-4 gap-8 gap-y-6 pt-5 px-3 m-auto '>
          {
            students.slice(0, 8).map((item, index) => (
              <div key={index} className='relative text-center border border-blue-200 rounded-xl shadow-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img
                  className='w-[400px] object-cover h-[200px]'
                  src={item.image} />
                <div>
                  <div className='bg-[#d72020] w-[260px] h-[30px] px-4 absolute top-[0px] left-0'>
                    <p className='text-white font-inter text-lg font-bold items-center'>{item.course}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium mb-1 mt-1'>{item.name}</p>
                  <p className='text-gray-600 text-sm font-inter pb-5'>{item.achievement}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>

      {/* Meet mentors */}

      <section className='p-8' >
        <div className='flex flex-col items-center justify-center mt-4'>
          <h1 className='text-2xl font-inter font-bold capitalize mb-3'>Our Mentors</h1>
          <p className='text-sm font-inter mb-4 '>Learn from industry experts who are passionate about sharing their kwnledge and helping you succeed in your tech journey</p>
        </div>
        <div className='flex justify-center items-center '>
          <div className='upc border border-[#cccc] h-[400px] shadow-2xl rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
            <div className='gradiant'></div>
            <div className='profile-down'>
              <img src='./src/publics/mentors/Anand Soni.png' />
              <div className='profile-title'>Anand Soni</div>
              <button className='ml-[160px] mt-2'><NavLink ><Linkedin /></NavLink></button>
              <div className="profile-button text-[16px] bg-[#2b5dff] text-center text-white font-inter cursor-pointer ">contact me</div>
            </div>

          </div>
          <div className='upc border border-[#cccc] h-[400px] shadow-2xl rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
            <div className='gradiant'></div>
            <div className='profile-down'>
              <img src='./src/publics/mentors/ankit kumar.jpg' />
              <div className='profile-title'>Ankit Kumar</div>
              <button className='ml-[160px] mt-2'><NavLink ><Linkedin /></NavLink></button>
              <div className="profile-button text-[16px] bg-[#2b5dff] text-center text-white font-inter cursor-pointer  ">contact me</div>
            </div>

          </div>
          <div className='upc border border-[#cccc] h-[400px] shadow-2xl rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
            <div className='gradiant'></div>
            <div className='profile-down'>
              <img src='./src/publics/mentors/ankit patel .jpg' />
              <div className='profile-title'>Ankit Patel</div>
              <button className='ml-[160px] mt-2'><NavLink ><Linkedin /></NavLink></button>
              <div className="profile-button text-[16px] bg-[#2b5dff] text-center text-white font-inter cursor-pointer ">contact me</div>
            </div>

          </div>

        </div>
      </section>


    </div>
  );
}

export default HomeSlider;
