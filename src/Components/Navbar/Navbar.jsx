import React from 'react'
import { Check, Info , ChevronDown } from "lucide-react"
import { Link, NavLink } from "react-router"


function Navbar() {
  return (
    <div>
      {/* NAVBAR TOP */}

      <div className='navbar_top bg-[#272343] h-[45px] w-[100%] flex items-center justify-center '>
        <div className='lg:container flex justify-between items-center'>
          <p className='flex items-center gap-2 text-sm font-inter font-normal text-white capitalize'><Check />TECHNOCRATES INSTITUTION OF TECHNOLOGY</p>

          <div className="navbar_top_right flex items-center gap-6 ">
            <select defaultValue="Server location" className="bg-none h-[30px] w-[37px] text-sm font-inter font-normal capitalize text-white">
              <option>eng</option>
            </select>

            <button><Link className='text-sm text-white font-inter font-normal capitalize'>Faqs</Link></button>
            <button><Link className='text-sm text-white font-inter font-normal capitalize flex items-center justify-center gap-2'><Info />need help</Link></button>
          </div>

        </div>
      </div>


      {/* NAVBAR BOTTOM */}

      <div className='navbar_bottom flex items-center justify-center w-[100%] h-[75px] bg-white border-b-[1px] border-[#e1e3es] '>
        <div className="lg:container flex items-center justify-between">
          <div className="navbar_bottom flex items-center justify-between gap-8">
            <div >
              <img src="./public/images/titlogo.png" className='w-[100px] rounded-md' alt="" />
            </div>

            <nav className='navbar space-x-[45px] ml-[500px] '>
              <Link to="/" className=" nav text-sm  text-[#636270] font-inter font-medium capitalize">Home</Link>
              <Link to="/about" className=" nav text-sm text-[#636270] font-inter font-medium capitalize">About</Link>
            
              {/* <NavLink className="text-sm text-[#636270] font-inter font-medium capitalize">Pages</NavLink> */}
              <Link to="/events" className=" nav text-sm text-[#636270] font-inter font-medium capitalize">Events</Link>
              <Link to="/halloffame" className=" nav text-sm text-[#636270] font-inter font-medium capitalize">Hall of Fame</Link>
              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="flex justify-center items-center  text-[#636270] gap-2 cursor-pointer m-1 font-inter">Pages<ChevronDown/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a><Link to="/meetmentors">Meet The Mentors</Link></a></li>
                  <li><a><Link to="/testimonial">Testimonials of Alumni</Link></a></li>
                  <li><a> <Link to="/gallery">Gallery</Link></a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className='navbar_bottom_right'>
            <button className='text-sm text-white rounded-full font-inter font-normal capitalize px-4 py-2 bg-blue-500 cursor-pointer'><Link to="/contact">Contact us</Link></button>
          </div>

        </div>
      </div>

     
    
    </div>
    
      
    
  )
}

export default Navbar
