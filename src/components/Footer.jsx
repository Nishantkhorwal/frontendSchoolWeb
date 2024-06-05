import React from 'react'
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function Footer() {
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-blue-800 w-full py-10 px-10'>
        <div className='flex flex-col mb-8 lg:mb-0 ' >
          <img src='footer-logo.webp' className='w-[300px] mb-8'></img>
          <div className='flex flex-row justify-start items-center mb-4'><SlLocationPin className='me-4 text-white text-xl'/><h1 className='text-white font-semibold text-xl font-signika'> Kalika Keshari Inter College, Tajopur, Mau</h1></div>
          <div className='flex flex-row justify-start items-center mb-4'><BsTelephone className='me-4 text-white text-xl'/><h1 className='text-white font-semibold text-xl font-signika'> 9415633473, 8115338115</h1></div>
          <div className='flex flex-row justify-start items-center mb-4'><FiMail  className='me-4 text-white text-xl'/><h1 className='text-white font-semibold text-xl font-signika'> info@gmail.com</h1></div>
          <div className='flex mt-6  '>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-pink-700 cursor-pointer'><Link href='/'><FaInstagram /></Link></div>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-blue-600 cursor-pointer'><Link href='/'><FaTwitter /></Link></div>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link href='/'><IoLogoWhatsapp /></Link></div>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-blue-700 cursor-pointer'><Link href='/'><FaFacebookF /></Link></div>
          </div>

        </div>
        <div className='flex flex-col lg:ms-28 mb-8 lg:mb-0'>
          <h1 className='font-semibold text-2xl mb-10 text-white lora'>About Us</h1>
          <ul className='flex flex-col font-signika'>
            <Link to='/about'><li className='mb-4 text-lg text-white hover:text-yellow-300'>Welcome to Kalika Kesari</li></Link>
            <Link to='/vision'><li className='mb-4 text-lg text-white hover:text-yellow-300'>Vision, Mission & Values</li></Link>
            <Link to='/leadership'><li className='mb-4 text-lg text-white hover:text-yellow-300'>Leadership</li></Link>
          </ul>
        </div>
        <div className='flex flex-col lg:ms-28 mb-8 lg:mb-0'>
          <h1 className='font-semibold text-2xl mb-10 text-white lora'>Admission</h1>
          <ul className='flex flex-col'>
          <Link to='/admissionProcess'>  <li className='mb-4 text-lg text-white hover:text-yellow-300 font-signika'>Admission Process</li></Link>
            <Link to='/applyNow'><li className='mb-4 text-lg text-white hover:text-yellow-300 font-signika'>Apply Now</li></Link>
            
          </ul>
        </div>
        <div className='flex flex-col lg:ms-28 mb-8 lg:mb-0'>
          <h1 className='font-semibold text-2xl mb-10 text-white lora'>Location</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.111462802534!2d83.52988699264037!3d25.908128757836483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918b39f350c805%3A0x3fb3a67a11ef17ab!2sTajopur%2C%20Uttar%20Pradesh%20275101!5e0!3m2!1sen!2sin!4v1717246161684!5m2!1sen!2sin" className='h-full rounded-xl   w-full'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </>
  )
}

export default Footer
