import React from 'react'
import { NavLink } from 'react-router'
import { Linkedin } from 'lucide-react'

function MeetMentors() {

   
  return (
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
  )
}

export default MeetMentors

