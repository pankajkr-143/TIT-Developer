import React from 'react'

function HallOfFame() {

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
    <section>
      <div className='relative'>
        <img
          className='w-full object-cover'
          src="./src/publics/About/halloffame.jpg" alt="" />
      </div>
      <div className='about absolute top-[30%] left-[30%] flex flex-col justify-center items-center p-4 '>
        <h1 className='text-[40px] font-inter font-bold text-[#edecf6] '>
          TIT Developer <span className='text-[#fdfdff]'> Community </span>
        </h1>
        <h2 className='text-6xl mb-4 text-[white] font-bold font-inter capitalize text-center p-2 border-b-2 '>
          Hall of Fame
        </h2>
      </div>
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

    </section>
  )
}

export default HallOfFame
