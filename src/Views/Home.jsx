import React, { useEffect } from 'react'
import Hero from '../Components/Hero'

export default function Home({setProgress}) {

  useEffect(()=>{
    setProgress(50);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])

  return (
    <Hero/>
  )
}