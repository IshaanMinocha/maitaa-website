import { motion } from 'framer-motion';
import React from 'react';

function AboutSmriti() {
    return (
        <>
            <h1 className="my-8 md:my-12 text-3xl md:text-4xl lg:text-5xl underline decoration-secondary font-extrabold tracking-widest font-heading text-center">About</h1>
            <div className='mb-6 md:mb-10 text-xl md:text-2xl lg:text-3xl font-subhead max-w-5xl text-center mx-auto xl:px-24 px-4 md:px-6'>
                <p className="mb-6 md:mb-8">
                    MAIT SMRITI is our annual alumni meet that unites alumni, fostering lasting memories. It organizes reunion activities, enabling alumni to engage in academic and cultural discussions while building strong relationships. This year, we expect over 500 attendees, reflecting a consistent ten percent growth from previous years.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-400">
                    Join us in celebrating the spirit of togetherness and knowledge sharing at MAIT SMRITI.
                </p>
            </div>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 absolute hidden xl:block right-10 md:right-20 lg:right-40"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",

                }}
            >
                <svg fill="#F9F3DC" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-19.8 -19.8 237.60 237.60" xml:space="preserve" stroke="#121212" stroke-width="5.9399999999999995" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#01447C" stroke-width="15.84"> <g> <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path> <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path> <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path> </g> </g></svg>
            </motion.svg>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 absolute hidden xl:block left-10 md:left-20 lg:left-40"
                initial={{ rotate: 180 }}
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg fill="#F9F3DC" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-19.8 -19.8 237.60 237.60" xml:space="preserve" stroke="#121212" stroke-width="5.9399999999999995" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#01447C" stroke-width="15.84"> <g> <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path> <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path> <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path> </g> </g></svg>
            </motion.svg>

        </>
    );
}

export default AboutSmriti;
