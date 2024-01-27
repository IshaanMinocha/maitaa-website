import React, { useEffect } from 'react'

export default function Donations({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div>Donations</div>
  )
}