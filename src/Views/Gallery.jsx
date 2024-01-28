import React, { useEffect } from 'react'

export default function Gallery({ setProgress }) {
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 500)
    }, [])
    return (
        <>
            <div>Gallery</div>
        </>

    )
}

