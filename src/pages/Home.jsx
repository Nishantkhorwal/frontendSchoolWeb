import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
          <div className={`${className} relative left-0 transform -translate-y-1/2`}>
            <button onClick={onClick} className="text-2xl text-black">&#8249;</button>
          </div>
        );
      };
    
      const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
          <div className={`${className} top-11 absolute transform -translate-y-1/2`}>
            <button onClick={onClick} className="text-5xl font text-black">&#8250;</button>
          </div>
        );
      };
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots custom-dots',
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
        lazyLoad: true,
        dots: true,

      };
    
      
    
      const slides = [
        {
          image: 'bgImage-1.jpg',
          alt: 'Slide 1',
          heading: 'Apply Now',
          buttonText: 'Apply Now',
          link: '/applyNow',
        },
        {
          image: 'bgImage-2.jpg',
          alt: 'Slide 2',
          heading: 'About',
          buttonText: 'About',
          link: '/about',
        },
        {
          image: 'bgImage-6.jpg',
          alt: 'Slide 3',
          heading: 'Admission Process',
          buttonText: 'Admission Process',
          link: '/admissionProcess',
        },
        {
          image: 'bgImage-4.jpg',
          alt: 'Slide 4',
          heading: 'Vision, Mission & Values',
          buttonText: 'Vision, Mission & Values',
          link: '/vision',
        },
        {
          image: 'bgImage-5.jpg',
          alt: 'Slide 5',
          heading: 'Leadership',
          buttonText: 'Leadership',
          link: '/leadership',
        },
        // Add more slides as needed
      ];
  return (
    <>
      <div className='overflow-hidden w-full'>
        <Navbar/>
        <div className='absolute top-0 w-full   overflow-hidden'>
        <div className=' w-full  '>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className='relative group' key={index}>
              <img src={slide.image} alt={slide.alt} className="w-full    h-screen brightness-75 transition group-hover:brightness-50" />
              <div className="absolute bottom-20 left-10 right-0 p-4 bg-transparent bg-opacity-50 ">
                <span className="text-2xl md:text-3xl lg:text-5xl font-bold w-fit lg:hover:text-6xl transition duration-75   hover:text-blue-600 link-hover text-white mb-10 flex justify-start items-center  lora"><Link to={slide.link}>{slide.heading}</Link><Link to={slide.link}><HiOutlineArrowNarrowRight className='mt-2 ms-4'/></Link></span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <div className='flex flex-col md:flex-row w-full px-20 py-20'>
          <div className='w-full md:w-[70%]'>
            <h1 className='font-bold text-5xl mb-6 lora'>About Us</h1>
            <p className='text-lg mb-8 text-gray-500 font-signika'>Kalika Keshari Inter College was established in 2005 with the vision of imparting quality education to the students in Tajopur, Mau. Our dedicated team, led by founder Mr. Raj and principal Mrs. Subhadra Mishra, ensures a nurturing learning environment. Over the course of years, the college has passed many milestones and established itself as a reputable institution through relentless efforts in all aspects of college life.</p>
            <Link to='/about'><button className='px-4 py-2 rounded-xl bg-blue-700 text-white hover:text-blue-900 '>Learn More</button></Link>
          </div>
          <div className='w-full md:w-[30%]'>
            <img src='bgImage-2.jpg' className='w-full relative rounded-xl'></img>
          </div>

        </div>
        <div className='flex flex-col md:flex-row-reverse w-full px-20 py-20'>
          <div className='w-full md:w-[70%] ms-14'>
            <h1 className='font-bold text-5xl mb-6 lora'>Admission Process</h1>
            <ul className='text-lg  list-disc mb-5 font-signika text-gray-500'>
          <li className='mb-4'>Admission will be granted till the availability of seats on a first come first serve basis.</li>

          <li className='mb-4'>The school academic session commences in April and extends up to March of the following year.</li>
          <li className='mb-4'> Students are admitted to the school throughout the year depending on the vacancies arising in any given class.</li></ul>
          <Link to='/admissionProcess'><button className='px-4 py-2 font-signika rounded-xl bg-blue-700 text-white hover:text-blue-900 '>Learn More</button></Link>
          </div>
          <div className='w-full md:w-[30%]'>
            <img src='bgImage-6.jpg' className='w-full relative rounded-xl'></img>
          </div>

        </div>
        <div className='flex flex-col md:flex-row w-full px-20 py-20'>
          <div className='w-full md:w-[70%]'>
            <h1 className='font-bold text-5xl mb-6 lora'>Gallery</h1>
            <p className='text-lg mb-8 text-gray-500 pe-6 font-signika'>In our school, we celebrate occasions vibrantly and with lots of activities. Celebrating various occasions is an eagerly anticipated tradition that brings the entire student body together. Each event, from cultural festivals to national holidays, is celebrated with so many different engaging activities. These activities not only entertain students but also foster a sense of community, encourage students to participate in different activities, and help them get out of their comfort zone to learn new skills and create long-lasting memories. Whether it's a dance performance, a drawing competition, sports events, or workshops, every occasion is an opportunity for students to bond with their peers and teachers and enjoy the dynamic school spirit.</p>
            <Link to='/gallery'><button className='px-4 py-2 rounded-xl bg-blue-700 text-white hover:text-blue-900 '>Learn More</button></Link>
          </div>
          <div className='w-full md:w-[30%]'>
            <img src='bgImage-8.jpg' className='w-full relative rounded-xl mt-4'></img>
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

export default Home
