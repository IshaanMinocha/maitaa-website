import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import VisionMission from '../Components/VisionMission';
import AboutUs from '../Components/AboutUs';

export default function Home({setProgress}) {

  useEffect(()=>{
    setProgress(50);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])

  return (
    <>
    <Hero/>
    <AboutUs/>
    <VisionMission/>
    </>
  )
}