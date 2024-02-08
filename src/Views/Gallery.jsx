import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';

export default function Gallery({ setProgress }) {
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 500)
    }, [])
    return (
        <>
            <Navbar />
            <div>Gallery</div>
        </>

    )
}

