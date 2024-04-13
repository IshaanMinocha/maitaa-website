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
        <>
            {/* {!shouldHideHeader && (
                <div className=""> */}
                    <nav className="w-full z-20 drop-shadow-lg bg-light">
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
                    <div className="sticky top-0 flex flex-wrap bg-secondary h-16 justify-center z-50">
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
                                    <NavLink to="/gallery" style={navLinkStyles} className="ml-16 block py-2 px-3 rounded md:p-0">Gallery</NavLink>
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
                {/* </div>
            )} */}
        </>
    );
}

export default Navbar;