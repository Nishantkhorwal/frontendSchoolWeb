import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Leadership() {
  return (
    <>
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <div className='w-full md:mt-16  '>
        <img src='bgImage-5.jpg' className='absolute lg:w-full h-[800px] brightness-75'></img>
        <h1 className='text-xl md:text-4xl lg:text-7xl font-bold text-gray-100 absolute top-[350px] left-10 lora'>Leadership</h1>
        <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold text-gray-100 absolute top-[400px] md:top-[450px] left-10 lora'>It's Been An Honor Being The Part<br className='block md:hidden ' /> Of This Inspirational School</h3>
      </div>
      <div className='w-full absolute top-[900px] md:top-[900px] lg:top-[900px] px-4 md:px-10   lg:px-44  lg:py-20'>
        <div className='rounded-3xl  border-t-8 border-t-blue-600 border-blue-400 border-2 py-24 shadow-xl'>
            <img src='Founder.webp' loading='lazy' className='mb-8 w-[300px] ms-8 md:ms-10 md:w-[600px] lg:w-fit lg:ms-32 rounded-t-3xl'></img>
            <h1 className=' text-3xl lg:text-5xl font-bold text-center mb-6 lora'>Founder's Message</h1>
            <p className='text-gray-600 text-sm md:text-lg lg:text-lg mb-10 px-4 lg:px-10 font-signika'>It gives me great pleasure to welcome you to the online home of our institute as the founder and leader of the dedicated team behind our institution. We at Kalika Keshari Inter College are dedicated to creating a learning environment that supports creativity, academic excellence and a passion for life long learning.

            Our mission is to provide students with the values, ability and knowledge necessary to thrive in this dynamic world. We provide comprehensive education that extends beyond the classroom by encouraging students to take part in extra curricular activities.

            We believe that every student has their own way of learning and has their own potential, and our goal is to help each one to achieve their goals and ambition. With a passionate team of educators and state-of-the-art facilities, we strive to create an inspiring place for students where they can thrive. We look forward to being a part of your educational journey and helping you achieve your dreams.</p>
            <h1 className='text-3xl font-bold text-center mb-6 lora'> Mr. Raj Mishra</h1>

        </div>

      </div>
      <div className='w-full absolute top-[2200px] md:top-[2200px] lg:top-[2200px] px-4 md:px-10   lg:px-44  lg:py-20'>
        <div className='rounded-3xl  border-t-8 border-t-blue-600 border-blue-400 border-2 py-24 shadow-xl'>
            <img src='Founder.webp' loading='lazy' className='mb-8 w-[300px] ms-8 md:ms-10 md:w-[600px] lg:w-fit lg:ms-32 rounded-t-3xl'></img>
            <h1 className=' text-3xl lg:text-5xl font-bold text-center mb-6 lora'>Principal's Message</h1>
            <p className='text-gray-600 text-sm md:text-lg lg:text-lg mb-10 px-4 lg:px-10 font-signika'>At Kalika Keshari Inter College, we believe that education is key to not just success but everything. In this dynamic world, we ensure that we adapt to situations and times to make learning easier for students.
            Our school is an ecosystem that creates in students a thirst for knowledge and success. We keep motivating our students to learn more and develop useful skills. Our educators have a mindset that looks beyond rote learning. Every student is unique and bright; it is our responsibility to encourage them to learn more and make them independent and capable of standing face first in the presence of a challenge.
            As the principal, I am proud to lead a team that emphasizes collaboration, respect, and a commitment to lifelong learning. Together, let's assist them as they begin their educational adventure.</p>
            <h1 className='text-3xl font-bold text-center mb-6 lora'>  Mrs. Subhadra Mishra</h1>

        </div>

      </div>
      <div className='w-full absolute top-[3600px] md:top-[3600px] '>
        <div className='flex px-6 lg:px-0 lg:ms-20 lg:flex-row flex-col'>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-4.jpg")] bg-cover rounded-lg overflow-hidden group'>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-semibold text-white text-2xl relative top-44 lora'>Vision,Mission & Values</h1>
            <Link to='/vision'><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
        </div>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-2.jpg")] bg-cover rounded-lg overflow-hidden group'>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-semibold text-white text-xl relative top-44 lora'>Welcome To Kalika Keshari</h1>
            <Link to='/about'><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
        </div>
        
        


          

        </div>

      </div>
      <div className='w-full  absolute top-[4500px] md:top-[4500px] lg:top-[4100px]'>
        <Footer/>
      </div>

    </div>
      
    </>
  )
}

export default Leadership
