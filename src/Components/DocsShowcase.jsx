import React from 'react'

function DocsShowcase() {
    return (
        <>
            <div id='' className='bg-gray-100 py-10'>
                <div>
                    <h1 className="underline decoration-primary mb-4 text-center text-5xl font-extrabold tracking-tight leading-none text-dark sm:px-20">
                        Documents
                    </h1>
                </div>
                <div className='px-6 sm:px-20 lg:grid lg:grid-cols-2 flex flex-col gap-2 items-center mr-auto'>
                <img srcset="alumniregcert.jpg 1x" class="w-full h-auto max-w-xl rounded-lg" alt="" />
                <img srcset="brochure.png 1x" class="w-full h-full max-w-xl rounded-lg" alt="" />
                </div>
            </div>
        </>
    )
}

export default DocsShowcase