import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';

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
    <div>About</div>
    </>
  )
}
