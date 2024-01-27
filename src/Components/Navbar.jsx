import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#EF574A' : 'white'
        };
    };

    const location = useLocation();
    const hiddenHeaderPaths = ['/smriti24'];
    const shouldHideHeader = hiddenHeaderPaths.includes(location.pathname);

    return (
        <div>
            {!shouldHideHeader && (
                <>
                    <nav className="w-full z-20">
                        <div className="flex flex-wrap items-center justify-between">
                            <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/main-logo.png" className="h-24 m-2" alt="MAITAA" />
                            </NavLink>

                            <div className="grid grid-cols-6">
                                <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="linkedin" bgColor="#EF574A" fgColor="#fff" />
                                <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="whatsapp" bgColor="#EF574A" fgColor="#fff" />
                                <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="instagram" bgColor="#EF574A" fgColor="#fff" />
                                <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="facebook" bgColor="#EF574A" fgColor="#fff" />
                                <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="x" bgColor="#EF574A" fgColor="#fff" />
                                <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="youtube" bgColor="#EF574A" fgColor="#fff" />
                            </div>
                        </div>
                    </nav>
                    <div className="sticky top-0 flex flex-wrap bg-secondary h-16 justify-center">
                        <div className="items-center justify-between hidden w-max md:flex" id="navbar-sticky">
                            <ul className="flex flex-col p-1 text-xl font-bold space-x-16 md:flex-row mt-0 ml-10 divide-x-2">
                                <li>
                                    <NavLink to="/" style={navLinkStyles} className="block py-2 px-3 rounded md:p-0" aria-current="page">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" style={navLinkStyles} className="ml-16 block py-2 px-3 rounded md:p-0">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/events" style={navLinkStyles} className="ml-16 block py-2 px-3 rounded md:p-0">Events</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/donations" style={navLinkStyles} className="ml-16 block py-2 px-3 rounded md:p-0">Donations</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" style={navLinkStyles} className="ml-16 block py-2 px-3 rounded md:p-0">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

export default Navbar;



// const [isDropdownOpen, setDropdownOpen] = useState(false);

// const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
// };

{/* <div className='grid grid-cols-2'>
                            <FaPhoneAlt className='bg-[#EF574A] w-10 h-10 rounded-2xl p-2 text-light m-1' />frgth
                            <IoMdMail className='bg-[#EF574A] w-10 h-10 rounded-2xl p-2 text-light m-1' />tryu
                        </div> */}

{/* <li className="relative">
                                <div
                                    className="flex items-center cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    <NavLink to="/events" style={navLinkStyles} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                                        Events
                                    </NavLink>
                                    <div className="ml-2">
                                        {isDropdownOpen ? (
                                            <FiChevronUp className="text-gray-900 transition-transform transform rotate-180 origin-center" />
                                        ) : (
                                            <FiChevronDown className="text-gray-900 transition-transform transform rotate-0 origin-center" />
                                        )}
                                    </div>
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute z-10 top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                        <NavLink to="/events/upcoming" style={navLinkStyles} className="block py-2 px-4 text-gray-900 hover:bg-gray-100">Upcoming</NavLink>
                                        <NavLink to="/events/past" style={navLinkStyles} className="block py-2 px-4 text-gray-900 hover:bg-gray-100">Past</NavLink>
                                        <NavLink to="/events/archive" style={navLinkStyles} className="block py-2 px-4 text-gray-900 hover:bg-gray-100">Archive</NavLink>
                                    </div>
                                )}
                            </li> */}