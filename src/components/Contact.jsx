import React from 'react'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false); 

      useEffect(() => {
      AOS.init({
        duration: 1500,
        once: true,
      });
    }, []);

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "db9319c2-922a-45ce-a013-02bf72433327");
    
    try{
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Success!");
      setShowPopup(true);
      event.target.reset(); //clear form after sucess
    } else {
      setResult("Error");
      alert("Something went wrong. Please try it again.");
    }
  } catch (error) {
    console.error("Error:" , error);
    setResult("Error");
    alert("Error.");
  }
    };

  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className='min-h-screen flex flex-col items-center text-white'>
      <p className='text-white flex justify-center text-4xl font-bold ml-4 mt-36 mb-10 2xl:mb-16 2xl:mr-5'>CONTACT ME</p>

      <div className='w-full max-w-md rounded-md '>

        <form onSubmit={onSubmit} className='flex flex-col gap-3 '>
         {/* Full Name */}
          <div className='flex flex-col w-3/4 ml-10 sm:ml-15 lg:ml-15 2xl:ml-15 xl:ml-15 2xl:mt-5 '>
            <label className='mb-1 font-light self-start'>Full Name</label>
            <input 
              type="text" 
              name='name'
              className='border  rounded-md p-2 focus:outline-1 focus:ring-2 focus:ring-blue-400 w-70 md:w-full xl:w-full 2xl:w-full ' 
              placeholder='Enter Full Name' 
              required
            />
          </div>

           {/* Email Address */}
          <div className='flex flex-col w-3/4 ml-10  sm:ml-15 xl:ml-15 2xl:ml-15 2xl:mt-5  '>
            <label className='mb-1 font-light self-start'>Email Address</label>
            <input 
              type="email" 
              name='email'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-70 md:w-full xl:w-full 2xl:w-full' 
              placeholder='Enter Email Address' 
              required
            />
          </div>

           {/* Message */}
          <div className='flex flex-col w-3/4 ml-10  sm:ml-15 xl:ml-15 2xl:ml-15 2xl:mt-5'>
            <label className='mb-1 font-light self-start'>Message</label>
            <textarea 
            name='message'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-70 md:w-full xl:w-full 2xl:w-full resize-none' 
              placeholder='Enter your message to me' 
              rows={5} required
            ></textarea>
          </div>

           {/* Submit Button */}
          <button 
            type="submit" 
            className='bg-[#1C1C1F] text-white px-6 py-2 text-md rounded border border-white hover:bg-white hover:text-[#1C1C1F] transition-colors duration-300 hover:cursor-pointer ml-10  sm:ml-15 lg:ml-15 xl:ml-15 xl:ml-5 2xl:ml-15 2xl:mt-1 xl:mt-1 w-30  ' 
          >
            Submit
          </button>
        </form>

      </div>
       {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50 ml-5  xl:ml-[-80px] 2xl:ml-[-80px]">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-60 xl:w-[90%] 2xl:w-[90%] max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4">
              Your message has been sent!
            </h2>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#1C1C1F] text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
