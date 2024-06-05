import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Vission() {
  return (
    <>
      <div className='overflow-hidden w-full '>
        <Navbar/>
        <div className='w-full md:mt-16 lg:mt-20 '>
        <img src='bgImage-4.jpg' className='absolute w-full h-[400px] md:h-[800px] opacity-90 brightness-75'></img>
        <h1 className='text-xl md:text-4xl lg:text-7xl font-bold text-white absolute top-[200px] md:top-[450px] left-10 lora '>Vision, Mission & Values</h1>
        <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold text-white absolute top-[250px] md:top-[550px] left-10 lora'>Guiding Principles for a Brighter Future</h3>
      </div>
      <div className='w-full absolute top-[500px] md:top-[900px] lg:top-[1000px]  flex flex-row lg:px-10 '>
        <div className=' w-full lg:w-[70%] px-5 lg:px-10'>
        <ul className='text-lg  '>
          <li className='mb-4 '><h1 className='text-5xl font-bold lora '>Vision</h1></li>

          <li className='mb-10 text-gray-600 font-signika'>Our goal is to provide our students with the 21st century abilities and learner traits they need to stand out in a global environment.</li>

          <li className='mb-4 '><h1 className='text-5xl font-bold lora'>Mission</h1></li>

          <li className='mb-10 text-gray-600 font-signika'> Our mission is to provide students with the knowledge, skills and values needed to thrive in this dynamic world.</li>
          <li className='mb-10 '><h1 className='text-5xl font-bold lora'>Values</h1></li>
          <li><div className='flex justify-start flex-wrap font-signika'> 
              <div className='py-10 w-[30%] me-6 mb-8 bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl'>
                  <img src='Value1.jpg' className='w-[120px] h-[120px] mb-4'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Academic Excellence</h1>
              </div>
              <div className='py-10 w-[30%] me-6 mb-8 bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl'>
                  <img src='Value2.jpg' className='w-[120px] h-[120px] mb-4'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Integrity</h1>
              </div>
              <div className='py-10 w-[30%] me-6 mb-8 bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl'>
                  <img src='Value3.jpg' className='w-[120px] mb-4 h-[120px]' ></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Honesty</h1>
              </div>
              <div className='py-10 w-[30%] me-6  bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl'>
                  <img src='Value4.jpg' className='w-[120px] mb-4 h-[120px]'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Respect</h1>
              </div>
              <div className='py-10 w-[30%] me-6  bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl'>
                  <img src='Value5.jpg' className='w-[120px] mb-4 h-[120px]'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Student success</h1>
              </div>
              
          </div></li>
          </ul>
          

          
        
          
         </div> 
         <div className='w-[30%]  ms-10 hidden lg:block'>
           <img src='quote-4.jpg' className='w-full'></img>
           <div className=" flex flex-col justify-center relative -top-2 -left-2">
            <img src='quote-1.webp' className='self-start'></img>
            <h1 className='font-semibold text-xl font-signika'>The only person who is educated is the one who has learned how to learn and change. Carl Rogers</h1>
            <img src='quote-2.webp' className='self-end'></img>
              
            </div>

         </div>

      </div>
      <div className='w-full absolute top-[2550px] md:top-[2000px] '>
        <div className='flex px-6 lg:px-0 lg:ms-20 lg:flex-row flex-col'>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-5.jpg")] bg-cover rounded-lg overflow-hidden group'>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-semibold text-white text-2xl relative top-44 lora'>Leadership</h1>
            <Link to='/leadership'><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
        </div>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-2.jpg")] bg-cover rounded-lg overflow-hidden group'>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-semibold text-white text-xl relative top-44 lora'>Welcome To Kalika Keshari</h1>
            <Link to='/about'><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
        </div>
        


          

        </div>

      </div>
      <div className='w-full  absolute top-[3600px] md:top-[3000px] lg:top-[2400px]'>
        <Footer/>
      </div>

      </div>
    </>
  )
}

export default Vission
