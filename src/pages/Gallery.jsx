import React from 'react'
import Navbar from '../components/Navbar'
import FadeColors from '../components/FadeColors';
import Footer from '../components/Footer';
function Gallery() {
    const quotes = [
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Learning is an adventure.",
        "Education is the key.",
        "Knowledge is power.",
        "Education breeds confidence.",
        "In learning, you will teach.",
        "The mind is not a vessel to be filled.",
        "The beautiful thing about learning.",
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        "The only way to do great work is to love what you do.",
        "Education is not the filling of a pail, but the lighting of a fire." ,
        "The beautiful thing about learning is that no one can take it away from you.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You miss 100% of the shots you don't take.",


    ];

    const imageUrls = [
        "gallery1.jpg",
        "gallery2.jpg",
        "gallery3.jpg",
        "gallery4.jpg",
        "gallery5.jpg",
        "gallery6.jpg",
        "gallery7.jpg",
        "gallery9.jpg",
        "gallery10.jpg",
        "gallery11.jpg",
        "gallery12.jpg",
        "gallery13.jpg",
        "gallery14.jpg",
        "gallery15.jpg",
        "gallery16.jpg",

    ];

    const fadeColors = [
        "rgba(255, 0, 0, 0.7)",  // Red
        "rgba(0, 255, 0, 0.7)",  // Green
        "rgba(0, 0, 255, 0.7)",  // Blue
        "rgba(255, 0, 0, 0.7)",  // Red
        "rgba(255, 0, 255, 0.7)", // Magenta
        "rgba(0, 0, 255, 0.7)",  // Blue
        "rgba(128, 0, 0, 0.7)",   // Maroon
        "rgba(0, 128, 0, 0.7)",   // Dark Green
        "rgba(0, 0, 128, 0.7)",   // Navy
        "rgba(128, 128, 0, 0.7)", // Olive
        "rgba(128, 0, 128, 0.7)",  // Purple
        "rgba(255, 0, 0, 0.7)",  // Red
        "rgba(255, 0, 255, 0.7)", // Magenta
        "rgba(0, 0, 255, 0.7)",  // Blue
        "rgba(128, 0, 0, 0.7)",   // Maroon
    ];

    return (
        <>
            <div className='w-full overflow-hidden'>
                <Navbar />
                <div className='w-full absolute top-0 '>
                    <div className='w-full md:mt-16  '>
                        <img src='bgImage-8.jpg' className='relative lg:w-full h-[800px] brightness-50'></img>
                        <h1 className='text-xl md:text-4xl lg:text-7xl font-bold text-gray-100 absolute top-[350px] left-10 lora'>Gallery</h1>
                        <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold text-gray-100 absolute top-[400px] md:top-[450px] left-10 lora'>A look into our student's life.</h3>
                    </div>
                    <div className='w-full flex flex-row lg:px-10 py-20'>
                        <div className=' w-full lg:w-[70%] px-5 lg:px-10'>
                            <ul className='text-lg  font-signika'>
                                <li className='mb-4 text-gray-600'>In our school, we celebrate occasions vibrantly and with lots of activities. Celebrating various occasions is an eagerly anticipated tradition that brings the entire student body together. Each event, from cultural festivals to national holidays, is celebrated with so many different engaging activities. These activities not only entertain students but also foster a sense of community, encourage students to participate in different activities, and help them get out of their comfort zone to learn new skills and create long-lasting memories. Whether it's a dance performance, a drawing competition, sports events, or workshops, every occasion is an opportunity for students to bond with their peers and teachers and enjoy the dynamic school spirit.</li>

                                <li className='mb-4 text-gray-600'>Our school celebrates annual day with a lot of joy and enthusiasm. A variety of events are featured that highlight the talent and achievement of our students. The annual day starts with a motivational speech from our principal, and then the prize distribution ceremony is held, honoring students for their excellence in academics and extracurricular activities. All this is followed by a dance competition where students from every class participate and showcase their creativity and talent through impressive dance performances. The day also includes a talent show, allowing students to showcase their unique skills in music, drama, mimicry, and other areas. While all these activities take place, different food stalls for students are placed on the school premises, where students enjoy food items with their friends. The celebration is further elevated with an encouraging speech from the founder, Mr. Raj Mishra, making the day a memorable occasion for the entire school community.</li>
                                <li className='mb-4 text-gray-600'>Independence Day is celebrated with patriotism and pride. The day begins with an assembly where students and teachers gather to honor the significance of a nation's freedom. The event starts with the hosting of the national flag, along with the singing of the national anthem. This is followed by different cultural performances, including dances, patriotic skits showcasing the rich heritage of our country, and patriotic songs. Then speeches are given by students and teachers, highlighting the values of liberty and the importance of independence. Various activities and competitions take place, engaging students in learning more about the country's history and the struggle of its freedom fighters. The celebration educates the students about the history of the country and also inspires everyone to contribute positively to the nation's future, making Independence Day a meaningful and memorable occasion.
                                </li>
                                <li className='mb-4 text-gray-600'>Our school celebrates Teacher's Day with a lot of joy; it is a cherished celebration that shows the profound love we hold for our teachers. The day begins with beautiful and thankful speeches from our students. Students passionately deliver speeches about their favorite teacher and thank them for all their efforts in teaching them. These speeches are filled with love and gratitude, acknowledging the efforts put by teachers in educating students and inspiring them. It is followed up by students taking up the role of teachers for the day; this helps them get a deeper understanding of the dedication it requires to educate and inspire. Higher-standard students teach standard students with all their dedication, and students express their appreciation not only through this but also by presenting teachers with gifts such as flowers, pens, and greeting cards, symbolizing their gratitude and acknowledgement for hard work. This day is filled with joy and a beautiful blend of role reversal, reminding students of the unimaginable efforts teachers put into our lives.
                                </li>


                                <li className='mb-4 text-gray-600'>Every topic is prepared as a lesson plan with hands-on activities, a graphic organiser, a work sheet, and question banks for assessing the cognitive skills of students. The main focus of our institute is to ensure that every student learns what they are taught in a way that they can remember for their whole life. The complete curriculum is drafted keeping in mind the pace of individual students. We welcome you to take a peek into the school through our website.</li>

                            </ul>
                        </div>
                        <div className='w-[30%]  ms-10 hidden lg:block'>
                            <img src='quote-6.jpg' className='w-full'></img>
                            <div className=" flex flex-col justify-center relative -top-2 -left-2">
                                <img src='quote-1.webp' className='self-start'></img>
                                <h1 className='font-semibold text-xl font-signika'>School is the stage where you script the first chapters of your life's adventure. Every lesson, every friendship, every challenge is a thread in the vibrant tapestry of your journey. Embrace it all, for these are the days you'll cherish forever.</h1>
                                <img src='quote-2.webp' className='self-end'></img>
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-20'>
                        <h1 className='text-6xl font-bold mb-5 text-center text-blue-600 lora'>This Is What We Offer To Our Students!</h1>
                        <h3 className='text-3xl font-semibold mb-10 text-center text-blue-800 lora' >Our Gallery</h3>
                        <FadeColors fadeColors={fadeColors} quotes={quotes} imageUrls={imageUrls} />
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery; 