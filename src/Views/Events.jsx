import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';

export default function Events({setProgress}) {

  useEffect(()=>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100);
    }, 1000)
  }, [])     
  return (
    <>
    <Navbar/>
    events
    </>
  )
}