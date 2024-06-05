import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CgMenuRound } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
    setCurrentSection(null);  // Close nested slider when the main slider is toggled
  };

  const openSection = (section) => {
    setCurrentSection(section);
  };

  const closeSection = () => {
    setCurrentSection(null);
  };
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (location.pathname === path) {
     
      window.location.reload(); // Reload the page
    } else {
    
      navigate(path);
    }
  };
  

  const getSectionContent = (section) => {
    switch (section) {
      case 'about':
        return (
          <ul className='flex flex-col  w-full '>
            <Link to='/about'  ><li className= ' text-lg lg:text-3xl font-semibold mb-8 hover:text-blue-500 hover:text-5xl duration-75'> <div className='flex flex-row text-sm md:text-xl lg:text-3xl ps-5 justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/about')}>
                    <h1 >Welcome To Kalika Kesari</h1> <HiOutlineArrowNarrowRight className='hidden md:block' />
                  </div></li></Link>
                  <Link><li className='text-sm lg:text-3xl font-semibold mb-8 hover:text-blue-500 hover:text-5xl duration-75'> <div className='flex flex-row text-sm md:text-xl lg:text-3xl ps-5 justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/vision')}>
                    <h1>Vision,Mission & Values</h1> <HiOutlineArrowNarrowRight className='hidden md:block' />
                  </div></li></Link>
                  <Link to='/leadership'><li className='text-sm lg:text-3xl font-semibold mb-8 hover:text-blue-500 hover:text-5xl duration-75'> <div className='flex flex-row text-sm md:text-xl lg:text-3xl ps-5 justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/leadership')}>
                    <h1>Leadership</h1> <HiOutlineArrowNarrowRight className='hidden md:block' />
                  </div></li></Link>
          </ul>
        );
      case 'admission':
        return (
          <ul className='flex flex-col  w-full '>
            <Link to='/admissionProcess'><li className='text-xl lg:text-3xl font-semibold mb-8 hover:text-blue-500 hover:text-5xl duration-75'> <div className='flex flex-row text-sm md:text-xl lg:text-3xl ps-5 justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/admissionProcess')}>
                    <h1>Admission Process</h1> <HiOutlineArrowNarrowRight className='hidden md:block' />
                  </div></li></Link>
                  <Link to='/applyNow'><li className='text-3xl font-semibold mb-8 hover:text-blue-500 hover:text-5xl duration-75'> <div className='flex flex-row text-sm md:text-xl lg:text-3xl ps-5 justify-between items-center cursor-pointer'>
                    <h1>Apply Now</h1> <HiOutlineArrowNarrowRight className='hidden md:block' />
                  </div></li></Link>
          </ul>
        );
      default:
        return null;
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email2: '',
    mobile: '',
    message2: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    email2: '',
    mobile: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));

    if (name === 'mobile' && !validatePhone(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'Enter a valid 10-digit phone number'
      }));
    }

    if (name === 'email2' && !validateEmail(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'Enter a valid email address'
      }));
    }
  };

  const validatePhone = (mobile) => {
    const isValidPhoneNumber = /^\d{10}$/;
    return isValidPhoneNumber.test(mobile);
  };

  const validateEmail = (email2) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidEmail.test(email2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('https://backendschoolweb.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setIsLoading(false);
      console.log(formData);
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000); // Reset success message after 3 seconds
        setFormData({
          name: '',
          email2: '',
          mobile: '',
          message2: ''
        }); // Clear form fields after successful submission
      } else {
        const responseData = await response.text(); // Read response body as text
        console.error('Failed to submit form:', responseData || 'Empty response');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error submitting form:', error);
    }
  };

  

  return (
    <nav className='fixed top-0 right-0 z-[999] w-full'>
    <div className='max-w-screen-2xl flex flex-wrap  items-center justify-start mx-auto p-4 bg-white border-b shadow-md'>
      <div className=''>
        <Link className='text-blue-700 lg:text-5xl md:text-3xl text-xl' onClick={toggleSlider}>
          <CgMenuRound />
        </Link>
      </div>
      <div className="hidden w-full lg:block md:w-[30%]">
        <ul className=" flex flex-row justify-evenly font-signika font-semibold">
        <li>
            <Link to='/' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
          </li>
          <li>
            <Link to='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
          </li>
          <li>
            <Link to='/applyNow' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Apply Now</Link>
          </li>
          <li>
            <Link to='/contact' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
          </li>
        </ul>
      </div>
      <img src='logo-blue.webp' loading='lazy' className='self-center w-[60%] md:ms-10 lg:ms-0 lg:w-[40%]' alt='Logo' />
      <div className='hidden lg:flex ms-20 '>
        <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-gray-300 hover:bg-pink-700 cursor-pointer'><Link href='/'><FaInstagram /></Link></div>
        <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-gray-300 hover:bg-blue-600 cursor-pointer'><Link href='/'><FaTwitter /></Link></div>
        <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-gray-300 hover:bg-green-400 cursor-pointer'><Link href='/'><IoLogoWhatsapp /></Link></div>
        <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-gray-300 hover:bg-blue-700 cursor-pointer'><Link href='/'><FaFacebookF /></Link></div>
      </div>
    </div>

    <AnimatePresence>
      {isSliderOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#a07be1] to-[#7C3AED]  w-full "
        >
          <div className="flex items-center  justify-start  p-4">
            <div className='p-2 lg:me-96 me-10 bg-[#7C3AED] rounded-full hover:bg-red-500'><AiOutlineClose className="text-white text-lg md:text-xl lg:text-3xl cursor-pointer" onClick={toggleSlider} /></div>
            <img src='logo-blue.webp' loading='lazy' className='self-center w-[60%] lg:w-[40%]' alt='Logo' />

          </div>
         

          <div className='flex lg:flex-row h-full'>
            <div className='bg-transparent w-1/2 lg:w-[50%] relative'>
              <ul className='flex flex-col w-full py-20 px-5 lg:px-20 h-screen font-signika'>
                <li className='mb-8' >
              <Link to='/'>
                  <div className='flex flex-row justify-between text-xl font-semibold  text-white mb-4 hover:text-blue-800 lg:hover:text-5xl duration-75 lg:text-3xl lg:ps-5 lg:justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/')}>
                    <h1>Home</h1> 
                  </div>
                  <hr className='border-t border-white'></hr>
                  </Link>
                </li>
                <li className='mb-8' onClick={() => openSection('about')}>
                  <div className='flex flex-row justify-between text-xl font-semibold  text-white mb-4 hover:text-blue-800 lg:hover:text-5xl duration-75 lg:text-3xl lg:ps-5 lg:justify-between items-center cursor-pointer'>
                    <h1>About</h1> <HiOutlineArrowNarrowRight />
                  </div>
                  <hr className='border-t border-white '></hr>
                </li>
                <li className='mb-8' onClick={() => openSection('admission')}>
                  <div className='flex flex-row justify-between text-xl font-semibold  text-white mb-4 hover:text-blue-800 lg:hover:text-5xl duration-75 lg:text-3xl lg:ps-5 lg:justify-between items-center cursor-pointer'>
                    <h1>Admission</h1> <HiOutlineArrowNarrowRight />
                  </div>
                  <hr className='border-t border-white '></hr>
                </li>
                <li className='mb-8' >
                <Link>
                  <div className='flex flex-row justify-between text-xl font-semibold  text-white mb-4 hover:text-blue-800 lg:hover:text-5xl duration-75 lg:text-3xl lg:ps-5 lg:justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/gallery')}>
                    <h1>Gallery</h1> 
                  </div>
                  <hr className='border-t border-white'></hr>
                  </Link>
                </li>
                <li className='mb-8'>
                  <Link to='/contact'>
                  <div className='flex flex-row justify-between text-xl font-semibold  text-white mb-4 hover:text-blue-800 lg:hover:text-5xl duration-75 lg:text-3xl lg:ps-5 lg:justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/contact')}>
                    <h1>Contact</h1> 
                  </div>
                  <hr className='border-t border-white '></hr>
                  </Link>
                </li>
                <li className='mb-8' >
                  <Link to='/career'>
                  <div className='flex flex-row justify-between text-xl font-semibold  text-white mb-4 hover:text-blue-800 lg:hover:text-5xl duration-75 lg:text-3xl lg:ps-5 lg:justify-between items-center cursor-pointer' onClick={(e) => handleLinkClick(e, '/career')}>
                    <h1>Career</h1> 
                  </div>
                  <hr className='border-t border-white '></hr>
                  </Link>
                </li>
              </ul>
              <AnimatePresence>
                {currentSection && (
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-full bottom-0 bg-gradient-to-l from-[#a07be1] to-[#7C3AED] rounded-tl-xl  w-full h-full z-90"
                  >
                    <div className="flex items-center justify-end p-4">
                      <button className="text-black text-2xl hover:text-blue-600 font-signika" onClick={closeSection}>
                        Back
                      </button>
                    </div>
                    <div className="p-10 text-black">
                      {getSectionContent(currentSection)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className='bg-transparent hidden md:flex flex-col justify-start pt-10  items-center text-center w-[50%]'>
  <h1 className='self-center text-5xl text-white mb-10 font-semibold lora'>Enquiry</h1>
  <div className='bg-transparent text-center  w-[50%] relative'>
      
  <div className='border py-4 rounded-xl shadow-xl border-t-4 border-b-none border-blue-300 border-t-blue-500 px-10 relative'>
  <form className="mt-6" method='POST' onSubmit={handleSubmit}>
      <div>
        <input
          id='name'
          type="text"
          name="name" // Added name attribute
          className="border-b-2 border-white bg-transparent w-full py-2 px-3 text-lg placeholder-white placeholder-opacity-75 focus:outline-none focus:border-blue-400"
          placeholder="Name"
          value={formData.name} onChange={handleChange}
          required
        />
      </div>
      <div className="mt-6">
        <input
          id='email2'
          type="email"
          name="email2" // Added name attribute
          className="border-b-2 border-white bg-transparent w-full py-2 px-3 text-lg placeholder-white placeholder-opacity-75 focus:outline-none focus:border-blue-400"
          placeholder="Email"
          value={formData.email2} onChange={handleChange}
          required
        />
      </div>
      {errors.email2 && <span className="text-white">{errors.email2}</span>}
      <div className="mt-6">
        <input
          id='mobile'
          type="tel"
          name="mobile" // Added name attribute
          className="border-b-2 border-white bg-transparent w-full py-2 px-3 text-lg placeholder-white placeholder-opacity-75 focus:outline-none focus:border-blue-400"
          placeholder="Phone Number"
          value={formData.mobile} onChange={handleChange}
          required
        />
      </div>
      {errors.mobile && <span className="text-white">{errors.mobile}</span>}
      <div className="mt-6">
        <textarea
          id='message2'
          name="message2" // Added name attribute
          className="border-b-2 border-white bg-transparent resize-none w-full py-2 px-3 text-lg placeholder-white placeholder-opacity-75 focus:outline-none focus:border-blue-400"
          rows="4"
          placeholder="Enquiry Purpose"
          required
          value={formData.message2} onChange={handleChange}
        ></textarea>
      </div>
      {isSuccess && <p className="text-green-800">Form submitted successfully!</p>}
      <div className="mt-6">
        <button
          type="submit"
          className="bg-white text-red-600 py-2 px-8 rounded-xl hover:text-white hover:bg-red-800 "
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

</div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
  );
};

export default Navbar;



