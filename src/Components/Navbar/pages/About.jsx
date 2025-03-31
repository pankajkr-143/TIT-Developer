import React from 'react'
import HomeSlider from './HomeSlider'
import { NavLink } from 'react-router'
import { Linkedin } from 'lucide-react'


function About() {
  return (

    <div>
      <div className='relative'>
        <img 
        className='w-full object-cover'
        src="./public/About/head.jpg" alt="" />
      </div>
      <div className='about absolute top-[30%] left-[30%] flex flex-col justify-center items-center p-4 '>
        <h1 className='text-[40px] font-inter font-bold text-[#edecf6] '>
          TIT Developer <span className='text-[#fdfdff]'> Community </span>
        </h1>
        <h2 className='text-6xl mb-4 text-[white] font-bold font-inter capitalize text-center p-2 border-b-2 '>
          About
        </h2>
      </div>



      <div className="hero w-[100%] h-[60vh] flex justify-center items-center bg-slate-200">

      <div className='w-[50%] h-[60vh] flex justify-center items-center'>
          <img src='./public/images/Slide2.jpg '
            className='object-contain rounded-2xl '
          />
        </div>
        <div className='w-[50%] h-[70vh] flex flex-col items-center justify-center p-4 '>
          <h1 className='text-3xl mb-4 text-[black] font-bold font-inter capitalize text-center p-2 shadow-md rounded'>Who we are? </h1>
          <li className='text-lg font-inter text-[black] ml-2 font-normal '>TIT Developer Community is a student-led initiative bridging the gap
            between juniors and seniors through free mentorship.</li>
          <li className='text-lg font-inter text-[black] ml-2 font-normal mt-2 mb-2'>Our mission: Empower students with real-world knowledge, industry
            insights, and hands-on learning.</li>
          <li className='text-lg font-inter text-[black] ml-2 font-normal '>We offer guidance through mentorship programs, hackathons, and
            workshops to help students succeed in the tech industry. </li>
        </div>
       



      </div>

      



      <section className='flex justify-center items-center bg-amber-50 '>
        <div className='w-[50%] h-[80vh] flex flex-col justify-center items-center p-4'>
          <div className=' mb-4'>
            <h1 className='text-3xl font-bold font-inter mb-2'>Vision</h1>
            <p className='text-[18px] font-medium font-inter'>Our vision is to build a self-sustaining tech ecosystem where students from all backgrounds can grow
              together. We aim to foster a culture of learning and innovation, where juniors
              receive guidance from experienced seniors, ensuring continuous knowledge-sharing and industry readiness.
            </p>
          </div>

          <div>
            <h1 className='text-3xl font-bold font-inter mb-2'>Mission</h1>
            <p className='text-[18px] font-medium font-inter'>At TIT Developer Community, our mission is to empower students by bridging the gap between
              academia and industry through mentorship, real-world projects, and skill-building opportunities.
              We strive to create an environment where students can learn, collaborate, and innovate, preparing them for successful careers in technology.
            </p>
          </div>

        </div>
        <div className='w-[40%] flex justify-center items-center'>
          <img src="./public/images/vision.jpg" className='shadow rounded-2xl' />
        </div>

      </section>


      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-6">
            <h1 className="text-5xl font-bold mb-4">AIM!</h1>
            <p className='text-[18px] font-medium font-inter mb-2'>
              Provide free mentorship to students in various technical domains like Web Development, App Development, AI/ML, and Cybersecurity.
            </p>
            <li className='text-medium font-inter text-gray-500 mb-1 '>
              Organize workshops, hackathons, and training sessions to offer hands-on experience.
            </li>
            <li className='text-medium font-inter text-gray-500 mb-1'>
              Help students build strong technical portfolios with real-world projects.
            </li>
            <li className='text-medium font-inter text-gray-500 mb-1 '>
              Connect students with internship and job opportunities to kickstart their careers.
            </li>
            <li className='text-medium font-inter text-gray-500 '>
              Create a collaborative tech community where students can network, learn, and succeed together.
             </li>
          </div>
          <div className="card bg-base-100 w-[400px] h-[500px] shrink-0 shadow-2xl">
            <div className="card-body ">
                <img src="./public/images/mision.jpg" 
                  className='w-full h-full object-cover object-right'
                 /> 
            </div>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[50vh] p-2'>
        <div>
          <h1 className='text-3xl mb-4 text-[black] font-bold font-inter capitalize text-center p-2 shadow-md rounded'>Why Jion Us?</h1>
        </div>
        <div className='flex justify-center items-center gap-6 '>
          <div className='w-[300px] h-[250px] flex flex-col justify-center items-center rounded-2xl shadow-2xl p-2'>
            <img src='./public/joinus/study.png' className='w-[100px] mb-4 border-4 rounded-full border-[#43e3d9] ' />
            <p className='text-lg font-inter text-[black] font-normal text-center'>Hands-on Learning with Real-World Projects </p>
          </div>
          <div className='w-[300px] h-[250px]  flex flex-col justify-center items-center rounded-2xl shadow-2xl p-2'>
            <img src='./public/joinus/workshop.png' className='w-[100px] mb-4 border-[#43e3d9] border-4 rounded-full shadow-2xl ' />
            <p className='text-lg font-inter text-[black] font-normal text-center'>Access to Exclusive Workshops and Hackathons  </p>
          </div>
          <div className='w-[300px] h-[250px]  flex flex-col justify-center items-center rounded-2xl shadow-2xl'>
            <img src='./public/joinus/leadership.png' className='w-[100px] mb-4 border-[#43e3d9] border-4 rounded-full shadow-2xl ' />
            <p className='text-lg font-inter text-[black] font-normal text-center'>Personalized Mentorship from Industry-Ready Seniors  </p>
          </div>
          <div className='w-[300px] h-[250px]  flex flex-col justify-center items-center rounded-2xl shadow-2xl p-2'>
            <img src='./public/joinus/transparent.png' className='w-[100px] mb-4 border-[#43e3d9] border-4 rounded-full shadow-2xl ' />
            <p className='text-lg font-inter text-[black] font-normal text-center'>Build a Robust Technical Portfolio for Placements  </p>
          </div>

        </div>
      </div>

      <section className='p-8' >
           <div className='flex flex-col items-center justify-center mt-4'>
                <h1 className='text-2xl font-inter font-bold capitalize mb-3'>Our Mentors</h1>
                <p className='text-sm font-inter mb-4 '>Learn from industry experts who are passionate about sharing their kwnledge and helping you succeed in your tech journey</p>
            </div>
        <div className='flex justify-center items-center '>
            <div className='upc border border-[#cccc] h-[400px] shadow-2xl rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
                <div className='gradiant'></div>
                <div className='profile-down'>
                    <img src='./public/mentors/Anand Soni.png'/>
                    <div className='profile-title'>Anand Soni</div>
                    <button className='ml-[160px] mt-2'><NavLink ><Linkedin /></NavLink></button>
                    <div className="profile-button text-[16px] bg-[#2b5dff] text-center text-white font-inter cursor-pointer ">contact me</div>
                </div>

            </div>
            <div className='upc border border-[#cccc] h-[400px] shadow-2xl rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
                <div className='gradiant'></div>
                <div className='profile-down'>
                    <img src='./public/mentors/ankit kumar.jpg'/>
                    <div className='profile-title'>Ankit Kumar</div>
                    <button className='ml-[160px] mt-2'><NavLink ><Linkedin /></NavLink></button>
                    <div className="profile-button text-[16px] bg-[#2b5dff] text-center text-white font-inter cursor-pointer  ">contact me</div>
                </div>

            </div>
            <div className='upc border border-[#cccc] h-[400px] shadow-2xl rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
                <div className='gradiant'></div>
                <div className='profile-down'>
                    <img src='./public/mentors/ankit patel .jpg'/>
                    <div className='profile-title'>Ankit Patel</div>
                    <button className='ml-[160px] mt-2'><NavLink ><Linkedin /></NavLink></button>
                    <div className="profile-button text-[16px] bg-[#2b5dff] text-center text-white font-inter cursor-pointer ">contact me</div>
                </div>

            </div>

    </div>
    </section>

    </div>

  )
}

export default About
