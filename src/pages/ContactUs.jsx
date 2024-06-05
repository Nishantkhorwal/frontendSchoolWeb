import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


function ContactUs() {
  return (
    <>
      <div className='overflow-hidden w-full'>
         <Navbar/>
         <div className='absolute top-0 w-full'>
         <div className='w-full md:mt-16 lg:mt-20 '>
            <img src='bgImage-7.jpg' className='relative w-full h-[400px] md:h-[800px] opacity-90 brightness-50 '></img>
            <h1 className='text-xl md:text-4xl lg:text-7xl font-bold text-white absolute top-[200px] md:top-[450px] left-10 lora'>Contact Us</h1>
            <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold text-white absolute top-[250px] md:top-[550px] left-10 lora'>We're here to help. Reach out to us anytime!</h3>
        </div>
        <div className='w-full py-20 lg:px-20 px-4 '>
            <div className='flex flex-col md:flex-row rounded-[50px] border border-blue-200 shadow-xl bg-slate-50'>
                 <div className=' w-full lg:w-1/2'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.111462802534!2d83.52988699264037!3d25.908128757836483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918b39f350c805%3A0x3fb3a67a11ef17ab!2sTajopur%2C%20Uttar%20Pradesh%20275101!5e0!3m2!1sen!2sin!4v1717246161684!5m2!1sen!2sin" className='h-[580px] rounded-[50px]   w-full'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                 </div>
                 <div className=' w-full lg:w-1/2'>
                 <div className=' rounded-[50px] rounded-tl-none rounded-bl-none lg:ms-20 ms-6 py-10'>
                    <h1 className='text-5xl font-bold mb-14 lora'>Contact Information:</h1>
                    <div className='flex flex-row items-center justify-start text-blue-700 mb-14'><SlLocationPin className='me-4 text-blue-700 text-xl lg:text-4xl font-signika'/><h1 className='text-blue-700 font-semibold text-xl font-signika lg:text-4xl'> Kalika Keshari Inter College, Tajopur, Mau</h1></div>
                    <div className='flex flex-row items-center justify-start text-blue-700 mb-14'><BsTelephone className='me-4 text-blue-700 text-xl lg:text-4xl font-signika'  /><h1 className='text-blue-700 font-semibold text-xl font-signika lg:text-4xl'>9415633473, 8115338115</h1></div>
                    <div className='flex flex-row items-center justify-start text-blue-700 mb-14'><FiMail  className='me-4 text-blue-700 text-xl lg:text-4xl font-signika'/><h1 className='text-blue-700 font-signika font-semibold text-xl lg:text-4xl'> info@gmail.com</h1></div>
                 </div>
                 </div>
            </div>
        </div>
        <div className='md:px-20 px-2 py-20 w-full '>
         <ContactForm/>
        </div>
        <div>
        <Footer/>
        </div>

         </div>
      </div>
    </>
  )
}

export default ContactUs
