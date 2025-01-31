import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import AboutSmriti from '../Components/AboutSmriti';
import ScheduleSmriti from '../Components/ScheduleSmriti';
import SponsorsSmriti from '../Components/SponsorsSmriti';
import Smriti25Timeline from '../Components/Smriti25Timeline';

export default function Smriti24({ setProgress }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 500)
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const COUNTDOWN_FROM = "2025-02-22";

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  useEffect(() => {
    const intervalRef = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    if (distance < 0) {
      setRemaining({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
      return;
    }

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div id='top' className='bg-light text-dark'>
      <div className="flex flex-col items-center bg-[url('/smriti-bg2.jpg')] bg-no-repeat bg-fixed bg-cover">
        <nav className="fixed top-10 w-[300px] sm:w-full sm:max-w-2xl rounded-3xl border-2 border-secondary bg-light shadow-lg z-50">
          <div className="mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <NavLink onClick={() => scrollToSection('top')} className="font-semibold font-subhead text-2xl sm:text-3xl md:text-4xl text-dark">Smriti</NavLink>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-dark hover:text-secondary">
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:flex space-x-6">
              <NavLink onClick={() => scrollToSection('about')} className="text-dark hover:text-secondary text-base sm:text-lg font-semibold">About</NavLink>
              <NavLink onClick={() => scrollToSection('schedule')} className="text-dark hover:text-secondary text-base sm:text-lg font-semibold">Schedule</NavLink>
              <NavLink onClick={() => scrollToSection('sponsors')} className="text-dark hover:text-secondary text-base sm:text-lg font-semibold">Sponsors</NavLink>
            </div>
            <button className="hidden md:flex border-2 border-secondary bg-light hover:bg-secondary text-secondary duration-500 hover:text-white text-lg sm:text-xl font-semibold py-2 px-4 rounded-2xl">
              Register
            </button>
          </div>
          {isMobileMenuOpen && (
            <AnimatePresence>
              <motion.div
                className="flex flex-col md:hidden space-y-4 p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <NavLink
                  onClick={() => {
                    scrollToSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-dark hover:text-secondary text-base sm:text-lg"
                >
                  About
                </NavLink>
                <NavLink
                  onClick={() => {
                    scrollToSection('schedule');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-dark hover:text-secondary text-base sm:text-lg"
                >
                  Schedule
                </NavLink>
                <NavLink
                  onClick={() => {
                    scrollToSection('sponsors');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-dark hover:text-secondary text-base sm:text-lg"
                >
                  Sponsors
                </NavLink>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-2 border-secondary bg-light hover:bg-secondary text-secondary duration-200 hover:text-white text-base sm:text-lg font-semibold py-2 px-4 rounded-2xl"
                >
                  Register
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </nav>
        <section className="mt-40">
          <div className="px-4 mx-auto max-w-screen-xl text-center">
            <h1 className="mb-4 text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-widest font-normaltext text-dark">MAIT SMRITI 2k25</h1>
            <p className="mb-16 text-xl sm:text-2xl md:text-4xl font-semibold font-subhead tracking-widest text-secondary">RELIVE | REJOICE | RECONNECT</p>
          </div>
          <div className="font-bold tracking-widest text-center my-10 font-heading text-3xl sm:text-4xl md:text-6xl text-dark">
            22<sup>nd</sup> February
          </div>
        </section>
        <div className="w-[99vw]">
          <h1 className="my-2 text-2xl sm:text-3xl text-dark text-center">SEE YOU IN</h1>
          <div className="w-full max-w-3xl mx-auto flex items-center bg-light rounded-3xl">
            <CountdownItem num={remaining.days} text="days" />
            <CountdownItem num={remaining.hours} text="hours" />
            <CountdownItem num={remaining.minutes} text="minutes" />
            <CountdownItem num={remaining.seconds} text="seconds" />
          </div>
        </div>
        <div className="container mx-auto text-center scroll-smooth">
          <NavLink onClick={() => scrollToSection('about')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-auto my-10 animate-bounce text-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
        </div>
      </div>
      <section id="about" className="text-light bg-dark flex flex-col items-center justify-center">
        <AboutSmriti />
      </section>
      <section id="schedule" className="text-dark bg-light flex flex-col items-center justify-center">
        {/* <ScheduleSmriti /> */}
        <Smriti25Timeline />
      </section>
      <section id="sponsors" className="text-light bg-dark flex flex-col items-center justify-center">
        <SponsorsSmriti />
      </section>
      <footer className="footer md:flex md:justify-between md:items-center p-4 bg-light text-dark shadow-xl">
        <aside className="md:flex items-center grid-flow-col ">
          <img src="alumni-logo.png" alt="logo" className="w-16 sm:w-20" />
          <p className='text-base sm:text-xl'>Maintained under <a className='hover:underline font-bold text-secondary' href='https://github.com/IshaanMinocha/maitaa-website'>Alumni Cell</a> | © 2025 <a className='hover:underline font-bold text-secondary' href='https://mait.ac.in/'>MAIT</a></p>
        </aside>
        <nav className="flex flex-wrap mx-auto md:mx-0 gap-2 mt-3">
          <a>
            <SocialIcon className="hover:opacity-90 duration-100" url="/" network="linkedin" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="hover:opacity-90 duration-100" url="/" network="whatsapp" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="hover:opacity-90 duration-100" url="/" network="instagram" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="hover:opacity-90 duration-100" url="/" network="facebook" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="hover:opacity-90 duration-100" url="/" network="x" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="hover:opacity-90 duration-100" url="/" network="youtube" bgColor="#01447C" fgColor="#fff" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="font-heading w-1/4 h-24 sm:h-28 flex flex-col gap-1 items-center justify-center shadow-2xl">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-4xl sm:text-5xl md:text-6xl text-black font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-base sm:text-lg font-light text-secondary">
        {text}
      </span>
    </div>
  );
};

