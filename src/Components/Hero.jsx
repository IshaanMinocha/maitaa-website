import React from 'react'

function Hero() {
    return (
        <section className="bg-center bg-no-repeat bg-[url('/mait.jpg')] bg-cover bg-gray-700 bg-blend-multiply py-5 h-[80vh]">
            <div className="px-4 mx-auto max-w-screen-xl text-center pt-28">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome To Alumni Cell</h1>
                {/* <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Alumni cell is..
                </p> */}
                <div className="flex flex-col space-y-4 sm:flex-row items-center sm:justify-center sm:space-y-0 pt-40 pb-10">
                    <a href="#aboutus" className="inline-flex  justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 sm:mr-10">
                        Learn more
                    </a>
                    <a href="/smriti25" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Smriti 2025
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero