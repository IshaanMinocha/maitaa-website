import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import AboutUs from '../Components/AboutUs';
import VisionMission from '../Components/VisionMission';  
import DocsShowcase from '../Components/DocsShowcase';

export default function About({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <>
    <Navbar/>
    <AboutUs/>
    <VisionMission/>
    <DocsShowcase/>
    </>
  )
}
