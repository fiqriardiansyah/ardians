import React,{useContext,useEffect,useRef} from 'react';
import {motion} from 'framer-motion';
import hoverEffect from 'hover-effect'

import Load from '../components/Load';

import Profile1 from '../assets/images/profile1.png';
import Profile2 from '../assets/images/profile2.png';
import DisplacementImage from '../assets/images/displacement_image.png';

// distortion
import Displacement1 from '../assets/images/distortion/1.jpg';
import Displacement2 from '../assets/images/distortion/2.png';
import Displacement3 from '../assets/images/distortion/3.jpg';
import Displacement4 from '../assets/images/distortion/4.jpg';
import Displacement5 from '../assets/images/distortion/5.jpg';
import Displacement6 from '../assets/images/distortion/6.jpg';
import Displacement7 from '../assets/images/distortion/7.jpg';

import { StateContext } from '../context/StateContext';
import { RouteContext } from '../context/RouteContext';

import SmoothScroll from '../components/SmoothScroll';

import useWindowScroll from '../hooks/useWindowScroll';
import useElementDistanceTop from '../hooks/useElementDistanceTop';


import BottomNav from '../components/BottomNav';

const Home = ({data}) => {

    const { opacityPage } = useContext(RouteContext);

    const childSmoothScrollRef = useRef();
    const imageContainerRef = useRef();
    const imageRef = useRef();
    const functionalityText = useRef();
    const freelanceText = useRef();

    const animateFunctionalityText = useElementDistanceTop({refElement: functionalityText,substraction: 2});
    const animateFreelanceText = useElementDistanceTop({refElement: freelanceText,substraction: 1.5});

    useEffect(()=> {
        new hoverEffect({
            parent: imageRef.current,
            intensity1: 0.3,
            intensity2: 0.3,
            angle2: Math.PI / 2,
            speedIn: 1.9,
            speedOut: 1.5,
            image1: Profile1,
            image2: Profile2,
            displacementImage: Displacement7,
            imagesRatio: 1.5
          });
    },[imageRef]);
    
    useWindowScroll( (scrollY) => {
        if(imageContainerRef.current) imageContainerRef.current.style.transform = `translateY(-${scrollY / 6}px)`;
        if(imageRef.current) imageRef.current.style.transform = `translateY(-${scrollY / 8}px)`;
    });

    return (
            <motion.div exit={{opacity: 0}}  >
                {/* <Load /> */}
                <SmoothScroll childRef={childSmoothScrollRef}>
                    <div ref={childSmoothScrollRef} className={`container px-8 mx-auto bg-black `} >

                        <div className="h-screen flex flex-col">
                            <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-200 LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-07 font-spartan text-6xl text-grey-dark font-light mt-52 text-center"> 
                                21 years old developer based in  
                                <span className="CLICK-ELEMENT cursor-full-image-indonesia  font-medium text-white"> indonesia::</span> 
                                build beautifull thing with 
                            </p>
                            <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-300 LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-1 font-roboto font-medium text-grey-dark text-7xl text-center">code</p>
                            <div className="flex flex-row items-start justify-between mt-20">
                                <div className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-100 flex flex-col flex-1 mt-24">
                                    <p className="LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-07 font-spartan text-grey-dark font-sm font-light m-0">FRONT END DEV</p>
                                    <p className="LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-1 font-spartan text-grey-dark font-sm font-light m-0">ANROID DEV</p>
                                </div>
                                <div ref={imageContainerRef} className="relative overflow-hidden duration-100 LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-07 MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-300 w-1/3 h-96 ">
                                    <div ref={imageRef} style={{height: '30rem'}} className="duration-100 w-full absolute top-0"></div>
                                </div>
                            </div>
                        </div>

                        <div className="h-screen flex items-center justify-center">     
                            <motion.p   animate={animateFunctionalityText ? {y: 0,rotateX: 0,opacity: 1} : {}}
                                        initial={{y: 100,rotateX: 40,opacity: 0}}
                                        transition={{duration: 1}}
                                        ref={functionalityText} 
                                        className={`MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-200 CLICK-ELEMENT cursor-full-image-satisfaction font-spartan text-grey-dark font-light text-7xl `}>
                                Functionality + Aesthetics = Satisfaction
                            </motion.p>
                        </div>

                        <div className=" h-screen flex items-start justify-center flex-col relative">
                            <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-100 font-spartan font-light text-white text-5xl">Front End Dev</p>
                            <div className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-300 w-7/12">
                                <p className="font-roboto text-grey-dark font-regular text-2xl">as a front end developer i love coding and design at the same time. solve problems with effective methods and pay attention to the things that are very crucial for me, namely
                                <span className="font-medium text-white capitalize"> functionality </span> and <span className="capitalize font-medium text-white">responsiveness</span></p>
                            </div>
                            <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-100 pointer-events-none font-roboto font-medium text-9xl opacity-10 absolute bottom-0 right-0 text-grey-dark capitalize">
                                a true maker
                            </p>
                        </div>

                        <div className="h-screen flex flex-row items-center">
                            <div className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-100 w-full h-full flex-1 flex justify-end items-center">
                                <motion.p  
                                        animate={animateFreelanceText ? {y: 0,rotateX: 0,opacity: 1} : {}}
                                        initial={{y: 100,rotateX: 40,opacity: 0}}
                                        transition={{duration: 1}}
                                        ref={freelanceText} className="CLICK-ELEMENT cursor-full-image-freelance font-spartan text-grey-dark font-light text-7xl mr-8">
                                            Freelance
                                </motion.p>
                            </div>
                            <motion.p   animate={animateFreelanceText ? {y: 0,rotateX: 0,opacity: 1} : {}}
                                        initial={{y: 100,rotateX: 40,opacity: 0}}
                                        transition={{duration: 1}}
                                        ref={freelanceText} className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-200 font-spartan text-grey-dark font-light text-7xl"> | </motion.p>
                            <div className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-300 w-full h-full flex-1 flex  items-center">
                                <motion.p  
                                        animate={animateFreelanceText ? {y: 0,rotateX: 0,opacity: 1} : {}}
                                        initial={{y: 100,rotateX: 40,opacity: 0}}
                                        transition={{duration: 1}}
                                        ref={freelanceText} className="CLICK-ELEMENT cursor-full-image-fulltime font-spartan text-grey-dark font-light text-7xl ml-8">
                                            Fulltime
                                </motion.p>
                            </div>
                        </div>

                        <div className="h-screen flex items-end justify-center flex-col relative">
                            <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-200 font-spartan font-light text-white text-5xl">Android Dev</p>
                            <div className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-100 w-7/12">
                                <p className="font-roboto text-grey-dark font-regular text-2xl text-right">an enthusiastic native android development using kotlin and currently aspires to become a google associate
                                <span className="font-medium text-white capitalize"> android developer </span></p>
                            </div>
                            <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-300 pointer-events-none font-roboto font-medium text-9xl opacity-10 absolute bottom-0 left-0 text-grey-dark capitalize">
                                artisans
                            </p>
                        </div>

                    </div>

                    <BottomNav link="/about" />

                </SmoothScroll>
                
            </motion.div>
    )
}

export default Home;