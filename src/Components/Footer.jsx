import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { useLocation } from 'react-router-dom';

function CurrentYearComponent() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <span>
            {currentYear}
        </span>
    );
}

function Footer() {

    const location = useLocation();
    const hiddenFooterPaths = ['/smriti24'];
    const shouldHideFooter = hiddenFooterPaths.includes(location.pathname);

    return (
        <div>
            <>
                {!shouldHideFooter && (

                    <footer className="bg-white text-dark">
                        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                            <div className="md:flex md:justify-between">
                                Reach Us: <br />
                                Maharaja Agrasen
                                Institute of Technology <br />
                                Plot No 1 Rohini, Plot No 1,
                                CH Bhim Singh <br /> Nambardar Marg,
                                Sector 22, PSP Area,
                                Delhi, 110086 <br />
                                <br />
                                map api integration remains
                                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Sitemap:</h2>
                                        <ul className=" font-medium">
                                            <li className="mb-4">
                                                <a href="/" className="hover:underline">About</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="/" className="hover:underline">Donations</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="/" className="hover:underline">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-center">Socials:</h2>
                                        <ul className=" font-medium">
                                            <div className='grid grid-cols-2'>

                                                <li className="mb-4">
                                                    <a href="/" className="hover:underline ">Linkedin</a>
                                                </li>
                                                <li className="mb-4">
                                                    <a href="/" className="hover:underline ">Whatsapp</a>
                                                </li>
                                                <li className="mb-4">
                                                    <a href="/" className="hover:underline ">X</a>
                                                </li>
                                                <li className="mb-4">
                                                    <a href="/" className="hover:underline ">Facebook</a>
                                                </li>
                                                <li className="mb-4">
                                                    <a href="/" className="hover:underline ">Youtube</a>
                                                </li>
                                                <li className="mb-4">
                                                    <a href="/" className="hover:underline ">Instagram</a>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Latest Events:</h2>
                                        <ul className="font-medium">
                                            <li className="mb-4">
                                                <a href="#" className="hover:underline">Smriti 2024</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:underline">Alumni Meet</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-6 border-gray-700" />
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <span className="text-xl text-center">Maintained under
                                    <a href="https://github.com/IshaanMinocha/maitaa-website" className="hover:underline text-dark text-2xl mx-1">
                                        Alumni Cell
                                    </a>
                                    <br />
                                    &#169; <CurrentYearComponent /> MAIT
                                </span>
                                {/* <div className='grid grid-cols-2'>
                        <SocialIcon className='m-1 hover:opacity-90 duration-100' url="/" network='linkedin' bgColor="#EF574A" fgColor='#fff' />
                        <SocialIcon className='m-1 hover:opacity-90 duration-100' url="/" network='whatsapp' bgColor="#EF574A" fgColor='#fff' />
                        <SocialIcon className='m-1 hover:opacity-90 duration-100' url="/" network='instagram' bgColor="#EF574A" fgColor='#fff' />
                        <SocialIcon className='m-1 hover:opacity-90 duration-100' url="/" network='facebook' bgColor="#EF574A" fgColor='#fff' />
                        <SocialIcon className='m-1 hover:opacity-90 duration-100' url="/" network='x' bgColor="#EF574A" fgColor='#fff' />
                        <SocialIcon className='m-1 hover:opacity-90 duration-100' url="/" network='youtube' bgColor="#EF574A" fgColor='#fff' />
                    </div> */}
                                <div className="mb-6 md:mb-0">
                                    <a href="/" className="flex items-center">
                                        <img src="main-logo.png" className="h-32 me-3" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                )}
            </>
        </div>
    )
}

export default Footer
