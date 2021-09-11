import React,{useRef,useEffect} from 'react';
import {motion} from 'framer-motion';

import Profile2 from '../assets/images/profile2.png';
import Sign from '../assets/svgs/sign.svg';
import RoundLogo from '../assets/images/round_text.png';
import GoodHabits from '../assets/images/good_habits.png';
import GhibahRoom from '../assets/images/ghibah_room.png';

//components
import ProjectBox from '../components/about/ProjectBox';
import BottomNav from '../components/BottomNav';

import SmoothScroll from '../components/SmoothScroll';

const projects = [
    {title: 'good habits',dev: 'front end',desc: 'tracker activity website',image: GoodHabits},
    {title: 'ghibah room',dev: 'front end',desc: 'chat web app',image: GhibahRoom},
    {title: 'movieku',dev: 'android',desc: 'movies app',image: GoodHabits},
]

const About = props => {

    const childSmoothScrollRef = useRef(); 

    useEffect(()=> {
        window.scrollTo(0,0);
    },[]);

    return (
        <motion.div exit={{opacity: 0}} >
            <SmoothScroll childRef={childSmoothScrollRef}>

                <div ref={childSmoothScrollRef} className="container px-8 mx-auto bg-primary">
                    <div className="h-screen w-full">
                        <div className="flex justify-between">
                            <div className="relative mt-72 mr-24">
                                <img src={Profile2} alt="" className="" />
                                <img src={Sign} alt="" className="absolute -left-4 -bottom-20" />
                            </div>
                            <div className="flex flex-col items-start w-full mt-40">
                                <p className="font-roboto font-medium text-grey-dark text-7xl capitalize"> fiqri ardiansyah </p>
                                <p className="font-spartan font-light text-lg text-grey-dark capitalize">  frontend web & android developer </p>
                                <p className="font-roboto text-4xl text-grey-light capitalize my-16">Hello , I'm Fiqri Ardiansyah, a software developer who specializes in frontend and android.</p>
                                <p className="font-roboto text-4xl text-grey-light capitalize">Currently working remotely with one of the startups in Indonesia and I am still a student at one of the universities in my city.</p>
                            </div>
                        </div> 
                    </div>
                    <div className="h-screen"></div>
                    <div className="h-screen flex items-center justify-end">
                        <img src={RoundLogo} alt="" className="w-56 opacity-50" />
                        <p className="whitespace-nowrap absolute text-white text-9xl capitalize font-spartan font-bold">developer based in indonesia</p>
                    </div>
                    <div className="h-screen-150">
                        {projects.map((el,i)=> {
                            return <ProjectBox data={el} key={i} />
                        })}
                    </div>
                </div>

                <BottomNav key="bottomNavRegular" nextLink="/resume" />
            
            </SmoothScroll>
        </motion.div>
    )
}

export default About;