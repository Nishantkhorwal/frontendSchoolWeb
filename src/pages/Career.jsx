import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Career() {
    const [formData, setFormData] = useState({
        client_name: '',
        client_email: '',
        client_number: '',
        address: '',
        resume: null
      });
      
      // State to manage form submission status
      const [isSuccess, setIsSuccess] = useState(false);
      
      // State to store error messages for each field
      const [errors, setErrors] = useState({
        client_email: '',
        client_number: ''
      });
      
      const [isLoading, setIsLoading] = useState(false);
    
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
        if (name === 'client_number' && !validatePhone(value)) {
          setErrors(prevErrors => ({
            ...prevErrors,
            [name]: 'Enter a valid 10-digit phone number'
          }));
        }
    
        // Validate email format
        if (name === 'client_email' && !validateEmail(value)) {
          setErrors(prevErrors => ({
            ...prevErrors,
            [name]: 'Enter a valid email address'
          }));
        }
      };
    
      // Function to validate phone number format
      const validatePhone = (phoneNumber) => {
        const isValidPhoneNumber = /^\d{10}$/;
        return isValidPhoneNumber.test(phoneNumber);
      };
    
      // Function to validate email format
      const validateEmail = (email) => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return isValidEmail.test(email);
      };
    
      // Function to handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setIsLoading(true);
          const formDataToSend = new FormData();
          formDataToSend.append('client_name', formData.client_name);
          formDataToSend.append('client_email', formData.client_email);
          formDataToSend.append('client_number', formData.client_number);
          formDataToSend.append('address', formData.address);
          formDataToSend.append('resume', formData.resume);
          
          const response = await fetch('https://backendschoolweb.onrender.com/api/career', {
            method: 'POST',
            body: formDataToSend
          });
          setIsLoading(false);
          
          if (response.ok) {
            setIsSuccess(true);
            setTimeout(() => {
              setIsSuccess(false);
            }, 3000); // Reset success message after 3 seconds
            setFormData({
              client_name: '',
              client_email: '',
              client_number: '',
              address: '',
              resume: null
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
            <div className='w-full overflow-hidden'>
                <Navbar />
                <div className='w-full absolute top-0 '>
                    <div className='w-full md:mt-16  '>
                        <img src='bgImage-9.jpg' className='relative lg:w-full h-[800px]'></img>

                    </div>

                    <div className='w-full px-6 md:px-20 py-20 flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-[70%] lg:px-6'>
                            <h1 className='text-5xl font-bold mb-8 lora'>Join Us</h1>
                            <p className='text-lg text-gray-500 mb-8 font-signika'>We welcome applications from dynamic and energetic candidates wishing to contribute to our team.</p>
                            <h1 className='text-3xl font-semibold mb-10'>Fill this form and attach your resume:</h1>
                            <div className='w-full  border rounded-xl shadow-xl duration-100 transition '>
                            <form className='flex flex-col py-20 md:px-20 px-8' onSubmit={handleSubmit}>
          <h1 className='text-5xl mb-14 text-blue-500 font-bold lora'>Apply for a Career</h1>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8 '>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='client_name' className='text-lg font-signika'>Full Name<span className='text-red-500'>*</span></label>
              <input id='client_name' name='client_name' value={formData.client_name} onChange={handleChange} className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300 focus:border-t-0 focus:border-l-0 focus:border-r-0' required />
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='client_email' className='text-lg font-signika'>Email<span className='text-red-500'>*</span></label>
              <input id='client_email' name='client_email' type='email' value={formData.client_email} onChange={handleChange} className='border-0 border-b focus:border-b-2 focus:border-b-blue-700 p-2 w-full focus:outline-none border-b-blue-300' required />
              {errors.client_email && <span className="text-red-500">{errors.client_email}</span>}
            </div>
          </div>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8'>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='client_number' className='text-lg font-signika'>Phone Number<span className='text-red-500'>*</span></label>
              <input id='client_number' name='client_number' type='tel' value={formData.client_number} onChange={handleChange} className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
              {errors.client_number && <span className="text-red-500">{errors.client_number}</span>}
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
            <label htmlFor='address' className='text-lg font-signika'>Address<span className='text-red-500'>*</span></label>
            <input id='address' name='address' value={formData.address} onChange={handleChange} className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
          </div>
        </div>
        <div className='flex flex-col  md:flex-row md:justify-between mb-8'>
          <div className='w-full mb-3 md:mb-0'>
            <label htmlFor='resume' className='text-lg mb-4 font-signika'>Please Upload Your Resume<span className='text-red-500'>*</span></label><br /><br />
            <input type='file' id='resume' name='resume' onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} className='border-0  p-2 w-full focus:outline-none' required />
          </div>
        </div>
        {isSuccess && <p className="text-green-500">Form submitted successfully!</p>}
        <div className='flex flex-row justify-center'>
          <button type='submit' className='px-4 py-2 bg-yellow-300 rounded-3xl w-32 relative overflow-hidden hover-effect hover:text-white font-signika'>Apply</button>
        </div>
      </form>

                            </div>
                        </div>
                        <div className='w-[30%]  ms-10 hidden lg:block'>
                            <img src='quote-6.jpg' className='w-full'></img>
                            <div className=" flex flex-col justify-center relative -top-2 -left-2">
                                <img src='quote-1.webp' className='self-start'></img>
                                <h1 className='font-semibold text-xl font-signika'>Teaching is not just a career, it's a calling. Each day, you have the power to inspire, to ignite curiosity, and to shape futures. Embrace the opportunity to make a difference in the lives of your students.</h1>
                                <img src='quote-2.webp' className='self-end'></img>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career
