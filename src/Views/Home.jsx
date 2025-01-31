import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar';

export default function Home({setProgress}) {

  useEffect(()=>{
    setProgress(50);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])

  return (
    <>
    <Navbar />
    <Hero/>
    </>
  )
}