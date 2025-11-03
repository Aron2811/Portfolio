import React from 'react'

const About = () => {
  return (
    <div className='mt-15 min-h-[45vh]  '>
        <div className='container mx-auto px-4 text-white'>
          <h2 className='flex justify-center text-4xl font-bold ml-4 xl:mb-15 2xl:mb-15'>ABOUT ME</h2>

          <div className='flex justify-center lg:justify-start text-wrap text-center lg:text-left '>
          <p className='flex justify-center lg:justify-start lg:max-w-[600px] leading-relaxed text-center lg:ml-50 xl:ml-83 2xl:ml-115'>Computer Science graduate with experience in web and app development, driven by curiosity and a strong interest in learning and exploring emerging technologies. Committed to continuous growth and development, with a particular focus on front-end development</p>

          
 </div>

 <div className='flex m-6 text-center justify-center  '>

  
          <a href="/John Aron D. Marasigan.pdf" download className="bg-[#1C1C1F] text-white px-6 py-2 text-md rounded border border-white hover:bg-white hover:text-[#1C1C1F] transition-colors duration-300 hover:cursor-pointer ml-[-5px] sm:ml-5 lg:ml-5 xl:ml-5 2xl:ml-5 xl:mt-15 2xl:mt-15">Download CV</a>
        </div>

    
 
        </div>
    </div>
  )
}

export default About
