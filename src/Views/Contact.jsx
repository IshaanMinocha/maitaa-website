import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Components/Navbar';


function Contact({setProgress}) {
    useEffect(()=>{
        setProgress(40);
        setTimeout(()=>{
          setProgress(100);
        }, 500)
      }, [])
  return (
    <>
    <Navbar/>
    <div>Contact</div>
    </>
  )
}

export default Contact