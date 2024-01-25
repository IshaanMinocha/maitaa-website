import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Navbar() {
    return (
        <>
        <nav className="w-full z-20 ">
            <div className="flex flex-wrap items-center justify-between  ">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/main-logo.png" className="h-24" alt="MAITAA" />
                </a>
                <div className='grid grid-cols-2'>
                <FaPhoneAlt className='bg-[#EF574A] w-10 h-10 rounded-2xl p-2 text-light m-1' />frgth
                <IoMdMail className='bg-[#EF574A] w-10 h-10 rounded-2xl p-2 text-light m-1'/>tryu
                </div>
                
                <div className='grid grid-cols-3'>
                    <SocialIcon className='m-1' url="/" network='linkedin' bgColor="#EF574A" fgColor='#fff' />
                    <SocialIcon className='m-1' url="/" network='whatsapp' bgColor="#EF574A" fgColor='#fff' />
                    <SocialIcon className='m-1' url="/" network='instagram' bgColor="#EF574A" fgColor='#fff' />
                    <SocialIcon className='m-1' url="/" network='facebook' bgColor="#EF574A" fgColor='#fff' />
                    <SocialIcon className='m-1' url="/" network='x' bgColor="#EF574A" fgColor='#fff' />
                    <SocialIcon className='m-1' url="/" network='youtube' bgColor="#EF574A" fgColor='#fff' />
                </div>
            </div>
        </nav>
            <div className="sticky top-0 flex flex-wrap bg-secondary h-16">

                {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div> */}
                <div className="items-center justify-between hidden w-max md:flex " id="navbar-sticky">
                    <ul className="flex flex-col p-1 text-xl font-bold space-x-16 md:flex-row mt-0 ml-10  divide-x-2">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="ml-16 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="ml-16 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="ml-16 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar