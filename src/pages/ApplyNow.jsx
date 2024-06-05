import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function ApplyNow() {
 
  return (
    <>
      <div className='w-full overflow-hidden'>
      <Navbar/>
      <div className='w-full  '>
        <img src='bgImage-1.jpg' className='absolute w-full h-screen brightness-75'></img>
        <h1 className='text-xl md:text-4xl lg:text-6xl font-bold text-gray-100 absolute top-[450px] left-10 lora'>Admissions closed</h1>
        <Link to='/admissionProcess'><div className='text-lg md:text-2xl lg:text-3xl font-semibold text-white absolute top-[530px] md:top-[530px] left-10 p-4 border-blue-800 border rounded-xl bg-blue-700  flex justify-center items-center hover:bg-blue-200 hover:text-blue-700'><h1 className='me-4 font-signika'>Admission process </h1> < HiOutlineArrowNarrowRight className='mt-1 font-signika' /></div></Link>
        <h3 className='text-lg md:text-2xl lg:text-3xl font-semibold text-gray-100 absolute top-[500px] md:top-[530px] left-10 hidden lora'>Become part of our community</h3>
      </div>
      <div className='w-full absolute top-[650px] md:top-[700px] lg:top-[750px]   flex-row lg:px-20 hidden'>
        <div className=' w-full lg:w-[80%] px-5 lg:px-10'>
        <h1 className='text-5xl text-black mb-10 font-bold'>
          Apply Now
        </h1>
        <ul className='text-lg  '>
          <li className='mb-4'>As you are getting into the boat of education, many waves of challenges will come your way. We look forward to sailing through these challenges with you. With a carefully designed curriculum of nature and nurture, we promise to make your learning personalized, interactive, and engaging. The milestones achieved will be cherished here because of the journey it entails.</li>

          <li className='mb-4'>We would like to welcome you on the journey with us to achieve great heights.</li>
          <li className='mb-4'> Fill out the following form and take the first step towards a beautiful and promising journey with us at Kalika Keshari Inter College.</li></ul>
         </div> 
         <div className='w-[20%]  ms-10 hidden lg:block'>
           <img src='image1.jpg' className='w-full'></img>
           <div className=" flex flex-col justify-center relative -top-2 -left-2">
            <img src='quote-1.webp' className='self-start'></img>
            <h1 className='font-semibold text-xl'>Get busy living or get busy dying. Stephen King</h1>
            <img src='quote-2.webp' className='self-end'></img>
              
            </div>

         </div>

      </div>
      <div className='w-full py-20 px-10  lg:ps-28 absolute top-[1300px] md:top-[1100px] lg:top-[1100px]   hidden'>
  <div className=' w-full lg:w-[50%] shadow-lg p-10 border rounded-xl border-t-4 border-t-blue-500 border-blue-300 border-b-0'>
    <h1 className='font-bold text-black text-3xl mb-8'>Student's Details:</h1>
    {/* <form>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between mb-8'>
          <div className='w-[48%]'>
            <label htmlFor='session' className='mb-4'>Apply htmlFor School Year:</label>
            <select className="border p-3 w-full rounded-lg mt-4" name="session" id='session'>
              <option value="" selected>Select Option</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
            </select>
          </div>
          <div className='w-[48%]'>
            <label htmlFor='name' className='mb-4'>Name:</label>
            <input id='name' name='name' className='border p-3 rounded-lg w-full mt-4' placeholder='Name'></input>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='w-[48%]'>
            <label className="block mb-4" htmlFor='gender'>Gender:</label>
            <select name="gender" className="border p-3 w-full rounded-lg mt-1" id='gender'>
              <option value="" selected>Select Option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='w-[48%]'>
            <label className="block mb-4">Class Applying</label>
            <select className="border p-3 w-full rounded-lg mt-1" id='className_applying' name="className_applying">
              <option value="" selected>Select Option</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Grade I">Grade I</option>
              <option value="Grade II">Grade II</option>
              <option value="Grade III">Grade III</option>
              <option value="Grade IV">Grade IV</option>
              <option value="Grade V">Grade V</option>
              <option value="Grade VI">Grade VI</option>
              <option value="Grade VII">Grade VII</option>
              <option value="Grade VIII">Grade VIII</option>
              <option value="Grade IX">Grade IX</option>
              <option value="Grade X">Grade X</option>
              <option value="Grade XI">Grade XI</option>
              <option value="Grade XII">Grade XII</option>
            </select>
                </div>
              </div>
              <div className='flex flex-row justify-between mt-8'>
              <div className='w-[48%]'>
                <label className="block ">Date of Birth</label>
                <input type="date" name="dob" value="" id="dob" placeholder="dd/mm/yy" className="border p-3 w-full rounded-lg mt-4"/>
                <span className="ageshow" id="exact_age"></span>
              </div>
              <div className='w-[48%]'>
                <label htmlFor='previousSchool' className='mb-4'>Student's Previous School</label>
                <input id='previousSchool' name='previousSchool' className='border p-3 rounded-lg w-full mt-4' placeholder="Student's Previous School"></input>
              </div>

              </div>
            </div>
          <h1 className='text-3xl font-bold mt-8 mb-8'>Parent's Details</h1>
          
          <div className='flex flex-col'>
           <div className='flex flex-row justify-between mb-8'>
              <div className='w-[48%]'>
                <label htmlFor='parentName' className='mb-4'>Parent/Guardian Name:</label>
                <input id='parentName' name='parentName' className='border p-3 rounded-lg w-full mt-4' placeholder='Parent/Guardian Name'></input>
              </div>
              <div className='w-[48%]'>
                <label htmlFor='mobile' className='mb-4'>Mobile Number</label>
                <input id='mobile' name='mobile' className='border p-3 rounded-lg w-full mt-4' placeholder='Mobile No.'></input>
              </div>
           </div>
           <div className='flex flex-row justify-between mb-8'>
              <div className='w-[48%]'>
                <label htmlFor='email' className='mb-4'>Email:</label>
                <input id='email' name='email' className='border p-3 rounded-lg w-full mt-4' placeholder='Email'></input>
              </div>
              <div className='w-[48%]'>
                <label htmlFor='occupation' className='mb-4'>Parent's Occupation</label>
                <input id='occupation' name='occupation' className='border p-3 rounded-lg w-full mt-4' placeholder="Parent's Occupation"></input>
              </div>
           </div>
           <div className='flex flex-row justify-between mb-8'>
              <div className='w-[48%]'>
                <label htmlFor='parentNumber' className='mb-4'>Parent's Number</label>
                <input id='parentNumber' name='parentNumber' className='border p-3 rounded-lg w-full mt-4' placeholder="Parent's Number"></input>
              </div>
              <div className='w-[48%]'>
                <label htmlFor='address' className='mb-4'>Address</label>
                <input id='address' name='address' className='border p-3 rounded-lg w-full mt-4' placeholder="Address"></input>
              </div>
           </div>
           <div className='flex flex-row justify-between mb-8'>
              <div className='w-[48%]'>
                <label htmlFor='city' className='mb-4'>City</label>
                <input id='city' name='city' className='border p-3 rounded-lg w-full mt-4' placeholder="City"></input>
              </div>
              <div className='w-[48%]'>
                <label htmlFor='state' className='mb-4'>State</label>
                <input id='state' name='address' className='border p-3 rounded-lg w-full mt-4' placeholder="State"></input>
              </div>
           </div>
           <div className='flex flex-row justify-between mb-8'>
              <div className='w-[48%]'>
                <label htmlFor='zipcode' className='mb-4'>Zip Code</label>
                <input id='zipcode' name='zipcode' className='border p-3 rounded-lg w-full mt-4' placeholder="Zip Code"></input>
              </div>
              <div className='w-[48%]'>
                <label htmlFor='country' className='mb-4'>Country</label>
                <input id='country' name='country' className='border p-3 rounded-lg w-full mt-4' placeholder="Country"></input>
              </div>
           </div>
          </div> 
          <div className="mt-6">
            <button type="submit" className="px-4 py-2 bg-yellow-400 hover:bg-yellow-600">Apply Now</button>
          </div>

          </form> */}

        </div>
      </div>
      <div className='w-full absolute top-[2800px] md:top-[2600px] hidden'>
        <div className='flex px-6 lg:px-0 lg:ms-28 lg:flex-row flex-col'>
        <div className='relative lg:me-10 mb-5 lg:mb-0 w-full lg:w-[23%] px-8 h-[300px] bg-[url("bgImage-6.jpg")] bg-cover rounded-lg overflow-hidden group inset-0' >
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <h1 className='font-bold text-white text-2xl relative top-44'>Admission Process</h1>
            <Link><button className='px-4 py-1 text-lg text-white bg-transparent border border-white hover:bg-blue-300 rounded-md relative top-48'>Learn More</button></Link>
        </div>
        </div>

      </div>
      <div className='w-full  absolute top-[3800px] md:top-[3750px] lg:top-[3000px] hidden'>
        <Footer/>
      </div>
      


     </div> 
    </>
  )
}

export default ApplyNow
