import React from 'react'

function DocsShowcase() {
    return (
        <>
            <div id='' className='bg-gray-100 py-10'>
                <div>
                    <h1 className="underline decoration-primary mb-4 text-5xl font-extrabold tracking-tight leading-none text-dark px-20">
                        Documents
                    </h1>
                </div>
                <div className=' px-20 grid grid-cols-2'>
                <img srcset="alumniregcert.jpg 1x" class="w-full h-auto max-w-xl rounded-lg" alt="" />
                <img srcset="brochure.png 1x" class="w-full h-full max-w-xl rounded-lg" alt="" />
                </div>
            </div>
        </>
    )
}

export default DocsShowcase