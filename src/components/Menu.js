import React,{useContext, useState,useEffect} from 'react';
import { motion,AnimatePresence } from 'framer-motion';

import IgIcon from './svgs/IgIcon';
import InIcon from './svgs/InIcon';
import WaIcon from './svgs/WaIcon';

import MenuOpenImage from '../assets/images/menu_open_image.jpg';
import MenuCloseImage from '../assets/images/menu_close_image.jpg';

// context
import {StateContext} from '../context/StateContext';

//utils
import { timeDelay } from '../utils/utils';

const Menu = props =>{

    const {isMenuOpen,setIsMenuOpen} = useContext(StateContext);
    const [menuAnimationFinish,setMenuAnimationFinish] = useState({
        animatePresence: false,
        animateChild: false
    });

    useEffect(()=> {
        if(isMenuOpen) {
            setTimeout(async ()=> {
                setMenuAnimationFinish({...menuAnimationFinish,animatePresence: true});
                document.querySelector('#observer-class').classList.add(Math.random().toString());
                await timeDelay(200);
                setMenuAnimationFinish({...menuAnimationFinish,animateChild: true,animatePresence: true});
            },1500);
        }
    },[isMenuOpen]);

    const closeMenuHandler = ()=> {
        
        setMenuAnimationFinish({...menuAnimationFinish,animateChild: false});
        setTimeout(()=> {
            setMenuAnimationFinish({...menuAnimationFinish,animatePresence: false});
        },500);

        // clean up cursor from hover click element effect 
        document.querySelector('#observer-clean-up-cursor').classList.add(Math.random().toString());

        setTimeout(()=> {
            setIsMenuOpen(false);
        },1000);
    }

    return (
        <motion.div animate={isMenuOpen ? {height: '100vh'} : {height: '0'}} transition={isMenuOpen ? {duration: 1,ease: 'easeInOut'} : {duration: 1,delay: .4,ease: 'easeInOut'}} initial={{height: 0}} className={`${isMenuOpen ? 'bottom-0': 'top-0'} bg-gray-400 bottom-0 w-screen fixed left-0 z-500 overflow-hidden`}>
            <img src={isMenuOpen ? MenuOpenImage : MenuCloseImage} className={`${!isMenuOpen ? 'h-3/4 w-4/5 object-cover': 'opacity-50'} my-20 mx-auto `} alt="" />
            
            <motion.div animate={isMenuOpen ? {height: '100vh',padding: '1.5rem 4rem'} : {height: '0'}} transition={isMenuOpen ? {duration: 1,delay: .6,ease: 'easeInOut'} : {duration: 1,ease: 'easeInOut'}} initial={{height: 0}} className={`${isMenuOpen ? 'bottom-0' : 'top-0'} fixed  left-0 w-screen bg-white`}>
                
                <AnimatePresence>
                    {menuAnimationFinish.animatePresence && 
                        <>
                            <motion.div className="w-full flex justify-end">
                                <button onClick={closeMenuHandler} className="CLICK-ELEMENT font-roboto font-medium text-black uppercase cursor-pointer">close</button>
                            </motion.div> 
                            <motion.div className="w-full h-full flex flex-col items-start justify-between">
                                <motion.div className="flex flex-col">
                                    <div className="overflow-hidden">
                                        <motion.a animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} transition={{duration: .6}} initial={{y: '100%'}} href="/about" className="block CLICK-ELEMENT cursor-about font-spartan font-thin text-black text-6xl uppercase leading-normal cursor-pointer ">
                                            about
                                        </motion.a>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.a animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} 
                                                    transition={{duration: .6,delay: .2}} initial={{y: '100%'}} href="/resume" className="block CLICK-ELEMENT cursor-resume font-spartan font-thin text-black text-6xl uppercase leading-normal cursor-pointer ">
                                            resume
                                        </motion.a>
                                    </div>
                                </motion.div>
                                <motion.div className="flex flex-col w-full py-8">
                                    <motion.div animate={menuAnimationFinish.animateChild ? {width: '100%'} : {width: '0'}} transition={{duration: .6}} initial={{width: '0'}} className="h-2 bg-black" />
                                    <div className="overflow-hidden">
                                        <motion.p animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} transition={{duration: .6}} initial={{y: '100%'}} className="block font-roboto font-bold uppercase text-9xl">f.ardiansyah</motion.p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.div animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} transition={{duration: .6,delay: .2}} initial={{y: '100%'}} className="h-26 p-4 bg-black flex items-center w-1/3 justify-around">
                                            <IgIcon fontSize="1.5rem" style={{cursor: 'pointer'}} className="CLICK-ELEMENT" />
                                            <InIcon fontSize="1.5rem" style={{cursor: 'pointer'}} className="CLICK-ELEMENT" />
                                            <WaIcon fontSize="1.5rem" style={{cursor: 'pointer'}} className="CLICK-ELEMENT" />
                                            <p className="CLICK-ELEMENT cursor-pointer font-roboto font-medium text-xl text-white">fiqriardian92@gmail.com</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </> }
                </AnimatePresence>
                
            </motion.div>
            
        </motion.div>
    )
}

export default Menu;