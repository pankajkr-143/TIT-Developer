import React from 'react'
import { Link } from 'react-router'

function Events() {
    return (
        <section>
            <div className='relative'>
                <img
                    className='w-full object-cover'
                    src="./src/publics/About/events.jpg" alt="" />
            </div>
            <div className='about absolute top-[30%] left-[30%] flex flex-col justify-center items-center p-4 '>
                <h1 className='text-[40px] font-inter font-bold text-[#edecf6] '>
                    TIT Developer <span className='text-[#fdfdff]'> Community </span>
                </h1>
                <h2 className='text-6xl mb-4 text-[white] font-bold font-inter capitalize text-center p-2 border-b-2 '>
                    Events
                </h2>
            </div>
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

        </section>
    )
}

export default Events
