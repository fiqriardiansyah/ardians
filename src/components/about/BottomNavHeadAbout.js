import React from 'react';

const BottomNavHeadAbout = ()=> {
    return (
        <div className="flex items-start justify-between absolute w-full top-8 container px-8">
            <p className="BOTTOM-NAV-EFFECT-ELEMENT BOTTOM-NAV-TRANSFORM-Y-300 font-spartan font-light text-grey-dark text-3xl capitalize flex-1 mr-24">I’m currently available for <span className="font-medium text-grey-light"> freelance</span> projects. Let’s work together to create something worth sharing.</p>
            <div className="BOTTOM-NAV-EFFECT-ELEMENT BOTTOM-NAV-TRANSFORM-Y-100 flex flex-col items-start flex-1 w-full">
                <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">Don’t be shy, <br /> <span className="font-medium text-grey-light">make the first move</span>.</p>

                <a href="/#" className="font-spartan font-light text-white text-2xl capitalize">fiqriardian92@gmail.com</a>
                <a href="/#" className="font-spartan font-light text-white text-2xl capitalize">linkedin</a>
                <a href="/#" className="font-spartan font-light text-white text-2xl capitalize">instagram</a>
                <a href="/#" className="font-spartan font-light text-white text-2xl capitalize">whatsapp</a>    
            </div>
        </div>
    )
}

export default BottomNavHeadAbout;