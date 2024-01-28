import React, { useEffect } from 'react'
useEffect

export default function Smriti24({setProgress}) {
  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div>Smriti</div>
  )
}