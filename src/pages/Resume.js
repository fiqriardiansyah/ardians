import React,{useRef,useEffect} from 'react';
import {motion} from 'framer-motion';

import SmoothScroll from '../components/SmoothScroll';

import MySet from '../components/resume/MySet';
import BottomNav from '../components/BottomNav';

import {interests,classes,skills} from '../utils/utils';

const Resume = props => {

    const childSmoothScrollRef = useRef(); 

    useEffect(()=> {
        window.scrollTo(0,0);
    },[]);

    return (
        <motion.div exit={{opacity: 0}} >
            <SmoothScroll childRef={childSmoothScrollRef}>
                <div ref={childSmoothScrollRef} className="container px-8 mx-auto bg-primary">
                    <div className="h-screen pt-44">
                        <p className="font-roboto font-medium text-grey-dark text-7xl capitalize">resume</p>
                        <div className="grid grid-cols-3 gap-5 h-screen mt-16">
                            <div className="w-full">
                                <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">interest</p>
                                <MySet datas={interests} />
                            </div>
                            <div className="w-full">
                                <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">class</p>
                                <MySet datas={classes} />
                            </div>
                            <div className="w-full">
                                <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">skills</p>
                                <MySet datas={skills} />                    
                            </div>
                        </div>
                    </div>
                    <div className="h-screen"></div>
                </div>
                <BottomNav key="bottomNavRegular" nextLink="/" />

            </SmoothScroll>
        </motion.div>
    )
}

export default Resume;        