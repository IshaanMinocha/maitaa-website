import React from 'react'
import { useEffect } from 'react'


function Contact({setProgress}) {
    useEffect(()=>{
        setProgress(40);
        setTimeout(()=>{
          setProgress(100);
        }, 500)
      }, [])
  return (
    <div>Contact</div>
  )
}

export default Contact