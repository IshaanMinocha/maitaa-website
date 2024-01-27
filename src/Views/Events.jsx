import React, { useEffect } from 'react'

export default function Events({setProgress}) {

  useEffect(()=>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100);
    }, 1000)
  }, [])     
  return (
    <div>Events</div>
  )
}