import React from 'react'

function Footer() {
    return (
        <div className=' flex justify-center items-center flex-col p-8 bg-slate-200'>
          

            <div className='flex justify-center items-center gap-6'>
                <img src="./src/publics/images/titlogo.png" className='w-[100px] rounded-2xl' alt="" />
                <h1 className='text-3xl font-bold font-inter'>TIT Developer Community</h1>
            </div>

            <div>
                <h1 className='text-xl font-semibold font-inter text-[#292828d2] mt-[50px]'>Subscribe to get our Newsletter</h1>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <input type="text" placeholder='Your Email'
                    className='border-2 border-[#3a3636d2] p-3 w-[400px] rounded-4xl'
                />
                <button className='py-[12px] px-[22px] mt-[30px] text-[15px] border-none outline-none text-[white] bg-[#1cb8c3] rounded-[25px] cursor-pointer font-inter mb-[35px] font-medium'>Subscribe</button>
            </div>

            <nav>
                <div className='grid grid-flow-col gap-4 mb-4'>
                    <p className='text-lg font-inter text-[black] font-bold text-center'>Careers <span className='ml-2'>|</span></p>
                    <p className='text-lg font-inter text-[black] font-bold text-center'>Privacy Policy <span className='ml-2'>|</span></p>
                    <p className='text-lg font-inter text-[black] font-bold text-center'>Terms & Conditions</p>
                  </div>
            </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by TIT Team Technology Inc.</p>
                </aside>
        </div>
    )
}

export default Footer
