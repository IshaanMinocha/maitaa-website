import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import { SocialIcon } from 'react-social-icons';
import Footer from '../Components/Footer';

function Contact({ setProgress }) {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500)
  }, [])

  return (
    <>
      <Navbar />
      <section className="bg-center bg-no-repeat bg-cover bg-light bg-blend-multiply min-h-screen">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-dark md:text-5xl lg:text-6xl">Contact Us</h1>

          {/* Contact Email Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Get in Touch</h2>
            <a href="mailto:alumni@mait.ac.in" className="text-xl text-dark hover:text-secondary transition-colors duration-300">
              alumni@mait.ac.in
            </a>
          </div>

          {/* Social Media Section */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark mb-6">Stay Connected With Us</h2>
            {/* <p className="mb-4 text-lg text-gray-700">We would love to hear from you! Connect with us on our social media platforms to stay updated with the latest news, events, and alumni activities. Your engagement helps us build a stronger community.</p> */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center mx-auto">
              <SocialIcon className="hover:scale-110 transition-transform duration-200" url="/" network="linkedin" bgColor="#EF574A" fgColor="#fff" title="Connect with us on LinkedIn" />
              <SocialIcon className="hover:scale-110 transition-transform duration-200" url="/" network="whatsapp" bgColor="#EF574A" fgColor="#fff" title="Chat with us on WhatsApp" />
              <SocialIcon className="hover:scale-110 transition-transform duration-200" url="/" network="instagram" bgColor="#EF574A" fgColor="#fff" title="Follow us on Instagram" />
              <SocialIcon className="hover:scale-110 transition-transform duration-200" url="/" network="facebook" bgColor="#EF574A" fgColor="#fff" title="Like our page on Facebook" />
              <SocialIcon className="hover:scale-110 transition-transform duration-200" url="/" network="x" bgColor="#EF574A" fgColor="#fff" title="Follow us on X" />
              <SocialIcon className="hover:scale-110 transition-transform duration-200" url="/" network="youtube" bgColor="#EF574A" fgColor="#fff" title="Watch our videos on YouTube" />
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Visit Us</h2>
            <div className="w-full max-w-3xl mx-auto h-[450px] px-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9944964732895!2d77.06351547495998!3d28.719710480117467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068dbf44ecd7%3A0xc4ce5551f8ac8360!2sMaharaja%20Agrasen%20Institute%20Of%20Technology(MAIT)!5e0!3m2!1sen!2sin!4v1738290924631!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact