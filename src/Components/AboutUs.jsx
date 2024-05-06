import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div id='aboutus' className='bg-gray-100 py-10 sm:grid sm:grid-cols-2'>
                <div>
                    <h1 className="underline decoration-primary mb-4 lg:text-5xl text-4xl font-extrabold tracking-tight leading-none text-center sm:text-left text-dark px-20">
                        About Us
                    </h1>
                    <p className='mb-4 lg:text-xl font-normal text-gray-700 text-center sm:text-left max-w-4xl lg:px-20 px-16 '>
                        MAIT Alumni Association is run actively by the Alumni itself. The Alumni office is located within the MAIT Campus. The purpose of this association is to facilitate interaction and strengthen the bond between Alumni, Students, and Institution.
                    </p>
                    <p className='mb-8 lg:text-xl font-normal text-gray-700 text-center sm:text-left max-w-4xl lg:px-20 px-16 '>
                    Powered by the initiative of our dedicated alumni, the MAIT Alumni Association operates actively within the MAIT Campus. Our central purpose is to facilitate meaningful interaction, forging strong connections among alumni, current students, and the institution.
                    </p>
                </div>
                <div className='hidden sm:block xl:p-0 md:pt-12 pt-24 md:grid md:grid-cols-2'>
                    <img class="h-auto xl:max-w-sm lg:max-w-xs md:mb-0 mb-4 sm:max-w-64 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/mait.jpg" alt="" />
                    <img class="h-auto relative md:top-20 md:right-20 xl:max-w-sm lg:max-w-xs sm:max-w-64 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/mait.jpg" alt="" />
                </div>

            </div>
        </>
    )
}
