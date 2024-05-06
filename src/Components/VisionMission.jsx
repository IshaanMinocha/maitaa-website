import React from 'react'

export default function VisionMission() {
    return (
        <>
            <div className='bg-gray-600 py-10 sm:grid sm:grid-cols-2 p-6 sm:justify-items-center flex flex-col items-center'>
                <h1 className="underline decoration-primary sm:mb-4 mb-2 text-5xl font-extrabold tracking-tight leading-none text-white ">Our Vision</h1>
                <h1 className="underline sm:block hidden decoration-primary sm:mb-4 mb-2 text-5xl font-extrabold tracking-tight leading-none text-white ">Our Mission</h1>

                <div class="xl:max-w-lg lg:max-w-md md:max-w-xs max-w-72 bg-gray-600 border border-gray-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-200 z-0 mt-10">
                    <img class="rounded-t-lg" src="/mait.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="mb-5 text-3xl font-subhead font-bold tracking-tight text-dark text-center">Fostering Innovation Through Alumni Engagement</h5>
                        <p class=" text-md text-center font-semibold text-light my-3">Establishing a vibrant ecosystem, we strive to cultivate innovation, mutual growth, and lasting collaboration among alumni, institute, and students. Active participation fosters fruitful, long-term relationships, shaping a thriving community.</p>
                    </div>
                </div>

                <h1 className="underline sm:hidden block mt-12 sm:mt-0 decoration-primary sm:mb-4 mb-2 text-5xl font-extrabold tracking-tight leading-none text-white ">Our Mission</h1>

                <div class="xl:max-w-lg lg:max-w-md md:max-w-xs max-w-72 bg-gray-600 border border-gray-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-200 z-0 mt-10">
                    <img class="rounded-t-lg" src="/mait.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="mb-5 text-3xl font-subhead font-bold tracking-tight text-dark text-center">Empowering Growth Through Lifelong Engagement</h5>
                        <p class=" text-md text-center font-semibold text-light my-3">We drive effective communication, fostering a dynamic ecosystem of creativity, innovation, and commitment. Encouraging lifelong learning and active alumni participation, we contribute to the institute's growth and success.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

