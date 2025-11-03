import React, { useState } from 'react'
import projectOne from '../assets/Todolist.jpg'
import Thesis from '../assets/Thesis.jpg'
import projectTwo from '../assets/Katseye.jpg'
import Portfolio from '../assets/Portfolio.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Projects = () => {

     useEffect(() => {
  AOS.init({
    duration: 1500,
    once: true,
  });
}, []);

  return (
    <div className='min-h-screen'>
        <p className='text-white flex justify-center text-4xl font-bold ml-4'>PROJECTS</p>
      
      <div className=' text-white grid grid-cols-1 mt-7  gap-15 lg:grid-cols-1 ml-15 lg:ml-40 xl:grid-cols-1 md:ml-35 xl:ml-50 2xl:grid-cols-2 2xl:gap-36 2xl:ml-73 2xl:mt-20 w-[70%]  '>
        
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='flex flex-col gap-5 '>
        <a href="https://todolistwithfirestore.vercel.app/" 
           target="_blank" 
          rel="noopener noreferrer">
        <img  src={projectOne} alt="" className='relative rounded-2xl hover:opacity-80 transition duration-300 cursor-pointer'  />
        </a>
        <h2 className='flex justify-center text-2xl tracking-wide font-bold '>Todolist</h2>
        <p className='leading-relaxed  text-justify '>A to-do list website designed for desktop (not for mobile) with added features to help users manage tasks. Users can mark tasks as Work or Personal, set due dates, and view upcoming tasks in the “Upcoming” tab. Tasks due within 5 days are shown with a priority tag, and each task shows how many days are left. The website is built using React.js and Tailwind CSS, uses Firestore as a NoSQL database to save tasks, and allows users to log in with Google.</p>
        </div>

        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000"  className='flex flex-col items-center gap-5'>
        <a href="https://payrestroomtracker.github.io/PayrestroomTracker/?fbclid=IwY2xjawN1ejpleHRuA2FlbQIxMABicmlkETFrdkdTc3hzbWpuWDVyRDFPAR6y7zFobFqhAsVxkaDcTN6A_NjMl1mJI9wgb7OFJqJJHwhcRf3oFhb8Rn2TyQ_aem_W22PaXAmaNB9Ns5AbSE1hA" 
           target="_blank" 
          rel="noopener noreferrer">
        <img src={Thesis} alt="" className='rounded-2xl w-35 xl:w-50 hover:opacity-80 transition duration-300 cursor-pointer' />
        </a>
        <h2 className='flex justify-center text-2xl tracking-wide font-bold '>Thesis</h2>
        <p className='leading-relaxed text-justify '>Our thesis, "A Mobile-Based Paid Restroom Tracker Using A* Pathfinding Algorithm," is an application that finds the nearest paid restroom. My responsibilities included setting up and managing the Firebase Firestore database for storing and retrieving app data, handling backend functionalities such as saving, updating, and fetching data, developing frontend UI components in Flutter connected to the database for real-time updates, applying security measures such as muting or banning accounts to prevent misuse, conducting testing and debugging to ensure reliability, and collaborating closely with groupmates to integrate features across the system.</p>
        </div>

        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='flex flex-col gap-5 '>
          <a href="https://katseye-inky.vercel.app/" 
           target="_blank" 
          rel="noopener noreferrer">
        <img src={projectTwo} alt="" className='relative rounded-2xl hover:opacity-80 transition duration-300 cursor-pointer' />
        </a>
        <h2 className='flex justify-center text-2xl tracking-wide font-bold '>KATSEYE PROFILE</h2>
        <p className='leading-relaxed  text-justify lg:justify-center xl:justify-center flex'>A Katseye profile website dedicated to Katseye, built using React.js and Tailwind CSS.</p>
        </div>

        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className='flex flex-col gap-5 '>
        <img src={Portfolio} alt="" className='relative rounded-2xl border border-white' />
        <h2 className='flex justify-center text-2xl tracking-wide font-bold '>My Portfolio</h2>
        <p className='leading-relaxed  text-justify lg:justify-center xl:justify-center md:justify-center flex '>My portfolio, built using React.js and Tailwind CSS.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Projects
