import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: ''
  });
  // State to manage form submission status
  const [isSuccess, setIsSuccess] = useState(false);
  // State to store error messages for each field
  const [errors, setErrors] = useState({
    email: '',
    phone_number: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form input changes
  // Function to handle form input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));

  // Clear error message when user starts typing
  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: ''
  }));

  // Validate phone number format
  if (name === 'phone_number' && !validatePhone(value)) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: 'Enter a valid 10-digit phone number'
    }));
  }

  // Validate email format
  if (name === 'email' && !validateEmail(value)) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: 'Enter a valid email address'
    }));
  }
};


  const validatePhone = (phoneNumber) => {
    const isValidPhoneNumber = /^\d{10}$/;
    return isValidPhoneNumber.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidEmail.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('https://backendschoolweb.onrender.com/api/contact', {
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
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          message: ''
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
    <>
      <div className='w-full border rounded-[50px] shadow-xl duration-100 transition ' id='Contact'>
        <form className='flex flex-col py-20 md:px-20 px-8' onSubmit={handleSubmit}>
          <h1 className='text-5xl mb-14 text-blue-500 font-bold lora'>Contact Us</h1>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8 '>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='first_name' className='text-lg font-signika'>Full Name<span className='text-red-500'>*</span></label>
              <input id='first_name' name='first_name' value={formData.first_name} onChange={handleChange} className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300 focus:border-t-0 focus:border-l-0 focus:border-r-0' required />
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='last_name' className='text-lg font-signika'>Last Name<span className='text-red-500'>*</span></label>
              <input id='last_name' name='last_name' value={formData.last_name} onChange={handleChange} className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
            </div>
          </div>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8'>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='email' className='text-lg font-signika'>Email<span className='text-red-500'>*</span></label>
              <input id='email' name='email' type='email' value={formData.email} onChange={handleChange} className='border-0 border-b focus:border-b-2 focus:border-b-blue-700 p-2 w-full focus:outline-none border-b-blue-300' required />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='phone_number' className='text-lg font-signika'>Phone Number<span className='text-red-500'>*</span></label>
              <input id='phone_number' name='phone_number' type='tel' value={formData.phone_number} onChange={handleChange} className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
              {errors.phone_number && <span className="text-red-500">{errors.phone_number}</span>}
            </div>
            </div>
          <div className='flex flex-col  md:flex-row md:justify-between mb-14'>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='message' className='text-lg font-signika'>Message<span className='text-red-500'>*</span></label>
              <textarea id='message' name='message' value={formData.message} onChange={handleChange} className='border-0 resize-none border-b p-2 w-full focus:border-b-blue-700 focus:outline-none border-b-blue-300 focus:border-b-2' required />
            </div>
          </div>
          {isSuccess && <p className="text-green-500">Form submitted successfully!</p>}
          <div className='flex flex-row justify-center'>
            <button type='submit' className='px-4 py-2 bg-yellow-300 rounded-3xl w-32 relative overflow-hidden hover-effect hover:text-white font-signika'>Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;


           

             




