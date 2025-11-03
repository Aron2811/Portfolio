import profileImage from '../assets/Profile.png'

const Home = () => {

 


  return (
    <div className=" flex flex-col lg:flex-row items-center justify-between mx-auto max-w-7xl mt-1 lg:mt-[-70px] px-8 py-8 text-center lg:text-left xl:text-left ">
      <div className='flex flex-col lg:flex-row xl:flex-row items-center justify-between w-full'>
        {/*Left Side*/}
        <div  className=" relative text-white text-3xl md:text-5xl lg:text-7xl  font-bold order-2 lg:order-none mt-45 md:translate-y-[150px] lg:mt-55 lg:ml-15 lg:translate-y-[-20px] xl:ml-27 2xl:ml-[-30px] 2xl:translate-x-[-30px] 2xl:translate-y-[50px] ">
        <p className='ml-5 '>Hello!,</p> <br /> <p className="font-light ml-5 md:ml-5 lg:ml-15 xl:ml-15 mt-[-30px]  whitespace-nowrap">I'm John Aron</p>
        
        </div>
        

        {/*Right Side*/}
         <div className="relative w-60 h-60 md:w-90 md:h-70 lg:w-65 xl:w-100 2xl:w-111 order-1 lg:mt-[53px] xl:mt-[-5px] 2xl:mt-[70px]">
            {/*Orange Glow*/}

            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-orange-700 via-orange-500 to-transparent blur-[70px] opacity-20 md:opacity-20 lg:opacity-50 scale-150 mt-35 ml-15 lg:ml-15 lg:mt-65 lg:rotate-90'>

            </div>
            <img src={profileImage} alt="" className='relative rounded-2xl z-10'/>
         </div>
         </div>
       
    </div>
    
  )
}

export default Home
