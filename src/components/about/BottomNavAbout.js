import React from 'react';

import Profile2 from '../../assets/images/profile2.png';
import Sign from '../../assets/svgs/sign.svg';


const BottomNavAbout = () => {
    return (
        <div className="flex justify-between">
            <div className="relative mt-72 mr-24 min-w-15">
                <img src={Profile2} alt="" className="" />
                <img src={Sign} alt="" className="absolute -left-4 -bottom-20" />
            </div>
            <div className="flex flex-col it ems-start w-full mt-40">
                <p className="font-roboto font-medium text-grey-dark text-7xl capitalize whitespace-nowrap"> fiqri ardiansyah </p>
                <p className="font-spartan font-light text-lg text-grey-dark capitalize whitespace-nowrap" >  frontend web & android developer </p>
                <p className="font-roboto text-4xl text-grey-light capitalize my-16">Hello , I'm Fiqri Ardiansyah, a software developer who specializes in frontend and android.</p>
                <p className="font-roboto text-4xl text-grey-light capitalize">Currently working remotely with one of the startups in Indonesia and I am still a student at one of the universities in my city.</p>
            </div>
        </div>
    )
}

export default BottomNavAbout;