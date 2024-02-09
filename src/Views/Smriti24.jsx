import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

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

  const COUNTDOWN_FROM = "3/16/2024";

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
    <>
      <div className="flex flex-col items-center h-screen bg-[url('/smriti-bg2.jpg')] bg-no-repeat bg-fixed bg-cover">
        <nav className="fixed top-10 w-full max-w-2xl rounded-3xl border-2 border-secondary bg-light shadow-lg z-50">
          <div className="mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <NavLink to="/smriti24" className="font-semibold font-subhead text-4xl">Smriti</NavLink>
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
              <NavLink onClick={() => scrollToSection('about')} className="text-dark hover:text-secondary text-lg font-semibold">About</NavLink>
              <NavLink onClick={() => scrollToSection('schedule')} className="text-dark hover:text-secondary text-lg font-semibold">Schedule</NavLink>
              <NavLink onClick={() => scrollToSection('sponsors')} className="text-dark hover:text-secondary text-lg font-semibold">Sponsors</NavLink>
            </div>
            <button className="hidden md:flex border-2 border-secondary bg-light hover:bg-secondary text-secondary duration-500 hover:text-white text-xl font-semibold py-2 px-4 rounded-2xl ">
              Register
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="flex flex-col md:hidden">
              <NavLink onClick={() => scrollToSection('about')} className="text-dark hover:text-secondary">About</NavLink>
              <NavLink onClick={() => scrollToSection('schedule')} className="text-dark hover:text-secondary">Schedule</NavLink>
              <NavLink onClick={() => scrollToSection('sponsors')} className="text-dark hover:text-secondary">Sponsors</NavLink>
              <button className="border-2 border-secondary bg-light hover:bg-secondary text-secondary duration-200 hover:text-white font-semibold py-2 px-4 rounded-2xl mt-4">
                Register
              </button>
            </div>
          )}
        </nav>
        <section class="mt-40">
          <div class="px-4 mx-auto max-w-screen-xl text-center ">
            <h1 class="mb-4 text-8xl font-extrabold tracking-widest font-normaltext text-dark">MAIT SMRITI 2k24</h1>
            <p class="mb-16 text-4xl font-semibold font-subhead tracking-widest text-secondary">RELIVE | REJOICE | RECONNECT</p>
          </div>
        </section>
        <div className="w-[99vw]">
        <h1 class="my-2 text-3xl text-dark text-center">SEE YOU IN</h1>
          <div className="w-full max-w-3xl mx-auto flex items-center bg-light rounded-3xl">
            <CountdownItem num={remaining.days} text="days" />
            <CountdownItem num={remaining.hours} text="hours" />
            <CountdownItem num={remaining.minutes} text="minutes" />
            <CountdownItem num={remaining.seconds} text="seconds" />
          </div>
        </div>
        <div className="container mx-auto text-center scroll-smooth">
          <NavLink onClick={() => scrollToSection('about')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto my-10 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
        </div>
      </div>
      <section id="about" className="text-black flex flex-col items-center justify-center mt-16">
        <h1>About</h1>
        <p>about section...</p>
      </section>
      <section id="schedule" className="text-black flex flex-col items-center justify-center mt-16">
        <h1>schedule</h1>
        <p>List of schedule...</p>
      </section>
      <section id="sponsors" className="text-black flex flex-col items-center justify-center mt-16">
        <h1>Sponsors</h1>
        <p>List of sponsors...</p>
      </section>
    </>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="font-heading w-1/4 h-28 flex flex-col gap-1 items-center justify-center shadow-2xl">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-6xl text-black font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-lg font-light text-secondary">
        {text}
      </span>
    </div>
  );
};

