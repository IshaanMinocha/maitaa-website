import React from 'react'

export default function Card() {
    return (
        <div className="max-w-md bg-dark rounded overflow-hidden shadow-lg transition-transform transform hover:scale-125 duration-300">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src="/logo.png" 
                    alt="1"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                    <img
                        className="h-48"
                        src="/looped.gif" 
                        alt="1"
                    />
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-light text-center">Metaverse</div>
                <p className="text-primary text-base">
                    proposing the future of ed tech for increasing productivity
                </p>
            </div>
        </div>
    );
};
