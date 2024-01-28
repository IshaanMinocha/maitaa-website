import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div id='aboutus' className='bg-gray-100 py-10 grid grid-cols-2'>
                <div>
                    <h1 className="underline decoration-primary mb-4 text-5xl font-extrabold tracking-tight leading-none text-dark px-20">
                        About Us
                    </h1>
                    <p className='mb-4 text-xl font-normal text-gray-700 max-w-4xl px-20 '>
                        MAIT Alumni Association is run actively by the Alumni itself. The Alumni office is located within the MAIT Campus. The purpose of this association is to facilitate interaction and strengthen the bond between Alumni, Students, and Institution.
                    </p>
                    <p className='mb-8 text-xl font-normal text-gray-700 max-w-4xl px-20 '>
                    Powered by the initiative of our dedicated alumni, the MAIT Alumni Association operates actively within the MAIT Campus. Our central purpose is to facilitate meaningful interaction, forging strong connections among alumni, current students, and the institution.
                    </p>
                </div>
                <div className='grid grid-cols-2'>
                    <img class="h-auto max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/mait.jpg" alt="" />
                    <img class="h-auto relative top-20 right-20 max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/mait.jpg" alt="" />
                </div>

            </div>
        </>
    )
}
