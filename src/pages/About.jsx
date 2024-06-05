import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <div className='overflow-hidden w-full '>
        <Navbar/>
        <div className='w-full md:mt-16 lg:mt-20 '>
        <img src='bgImage-2.jpg' className='absolute w-full h-[400px] md:h-[800px] opacity-90 brightness-75'></img>
        <h1 className='text-xl md:text-4xl lg:text-7xl font-bold text-white absolute top-[200px] md:top-[450px] left-10 lroa'>Welcome To Kalika Kesari</h1>
        <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold text-white absolute top-[250px] md:top-[550px] left-10 lora'>Why everyone should choose us above everyone</h3>
      </div>
      <div className='w-full absolute top-[500px] md:top-[900px] lg:top-[1000px]  flex flex-row lg:px-10 '>
        <div className=' w-full lg:w-[70%] px-5 lg:px-10'>
        <ul className='text-lg  font-signika'>
          <li className='mb-4 text-gray-600'>Kalika Keshari Inter College was established in 2005 with the vision of imparting quality education to the students in Tajopur, Mau. Our dedicated team, led by founder Mr. Raj and principal Mrs. Subhadra Mishra, ensures a nurturing learning environment. Over the course of years, the college has passed many milestones and established itself as a reputable institution through relentless efforts in all aspects of college life.</li>

          <li className='mb-4 text-gray-600'>We believe that every student has their own way of learning, and we provide them with personalised learning at their own pace. At Kalika Keshari, a teacher is a mentor, a coach, a facilitator, and a guide committed to ensuring students success.</li>
          <li className='mb-4 text-gray-600'>A beacon of academic excellence and symbol of love for learning is established in our community. Established with the mission to provide students with the values needed for their nurturing, knowledge and skills needed for the growth of their mindset, our college is dedicated to provide students a place where they can thrive and hone their skills. We offer a curriculum that offers the balance of rigorous academic standards and other activities, ensuring that every student receives a package of education that helps them face any challenge in the future.
          </li>
          <li className='mb-4 text-gray-600'>We believe in learning as the power to transform lives. Our dedicated and knowledgeable faculty are committed to inspiring students to achieve their highest potential. Our faculty put their heart into teaching students everything possible that can help them in real life. Topic plans are made with different real life examples to grab the attention of students and make them understand easily.
          </li>


          <li className='mb-4 text-gray-600'>Every topic is prepared as a lesson plan with hands-on activities, a graphic organiser, a work sheet, and question banks for assessing the cognitive skills of students. The main focus of our institute is to ensure that every student learns what they are taught in a way that they can remember for their whole life. The complete curriculum is drafted keeping in mind the pace of individual students. We welcome you to take a peek into the college through our website.</li>
          
          </ul>
         </div> 
         <div className='w-[30%]  ms-10 hidden lg:block'>
           <img src='quote-3.jpg' className='w-full'></img>
           <div className=" flex flex-col justify-center relative -top-2 -left-2">
            <img src='quote-1.webp' className='self-start'></img>
            <h1 className='font-semibold text-xl font-signika'>The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education. Martin Luther King Jr</h1>
            <img src='quote-2.webp' className='self-end'></img>
              
            </div>

         </div>

      </div>
      <div className='w-full absolute top-[2550px] md:top-[2000px] '>
        <div className='flex px-6 lg:px-0 lg:ms-20 lg:flex-row flex-col'>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-4.jpg")] bg-cover rounded-lg overflow-hidden group'>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-semibold text-white text-2xl relative top-44 lora'>Vision,Mission & Values</h1>
            <Link to='/vision'><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
        </div>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-5.jpg")] bg-cover rounded-lg overflow-hidden group'>
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-semibold text-white text-2xl relative top-44 lora'>Leadership</h1>
            <Link to='/leadership'><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
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

export default About
