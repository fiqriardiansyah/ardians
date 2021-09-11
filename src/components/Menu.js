import React,{useContext, useState,useEffect} from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { useLocation,useHistory } from 'react-router-dom';
import IgIcon from './svgs/IgIcon';
import InIcon from './svgs/InIcon';
import WaIcon from './svgs/WaIcon';

import MenuOpenImage from '../assets/images/menu_open_image.jpg';
import MenuCloseImage from '../assets/images/menu_close_image.jpg';

// context
import {StateContext} from '../context/StateContext';
import {RouteContext} from '../context/RouteContext';

// components
import BottomNavAbout from '../components/about/BottomNavAbout';
import BottomNavHome from '../components/home/BottomNavHome';
import BottomNavResume from '../components/resume/BottomNavResume';

//utils
import { timeDelay,cleanUpCursor,reRenderCursor } from '../utils/utils';

const transition = {duration: 2,ease: [0.43, 0.13, 0.23, 0.96],delay: .8};
const menuAnimationFinishDefault = {
    animatePresence: false,
    animateChild: false
}
const routeDefault = {
    text: ['',''],
    link: ['',''],
    cursor: ['','']
}
const hoverDefault = {
    hover: false,
    link: null
}
const clickedDefault = {
    isClick: false,
    link: null
}
const linkAnimationCompleteDefault = false
const hoverHelperDefault = false

const Menu = props =>{

    const location = useLocation();
    const history = useHistory();
    const {isMenuOpen,setIsMenuOpen} = useContext(StateContext);
    const [menuAnimationFinish,setMenuAnimationFinish] = useState(menuAnimationFinishDefault);
    const [route,setRoute] = useState(routeDefault);
    const [hover,setHover] = useState(hoverDefault);
    const [clicked,setClicked] = useState(clickedDefault);
    const [linkAnimationComplete,setLinkAnimationComplete] = useState(linkAnimationCompleteDefault);
    let hoverHelper = hoverHelperDefault;

    useEffect(()=> {
        if(isMenuOpen) {
            setTimeout(async ()=> {
                setMenuAnimationFinish({...menuAnimationFinish,animatePresence: true});
                document.querySelector('#observer-class').classList.add(Math.random().toString());
                await timeDelay(200);
                setMenuAnimationFinish({...menuAnimationFinish,animateChild: true,animatePresence: true});
                reRenderCursor();
            },1500);
        }
    },[isMenuOpen]);

    useEffect(()=> {
        if(!isMenuOpen && !menuAnimationFinish.animatePresence){
            setTimeout(()=> setLinkAnimationComplete(false) , 2000);
        }
    },[isMenuOpen,menuAnimationFinish]);

    const closeMenuHandler = ()=> {
        
        setMenuAnimationFinish({...menuAnimationFinish,animateChild: false});
        setTimeout(()=> {
            setMenuAnimationFinish({...menuAnimationFinish,animatePresence: false});
        },500);

        cleanUpCursor();
        
        setTimeout(()=> {
            setIsMenuOpen(false);
        },1000);
    }

    useEffect(()=> {
        switch(location.pathname) {
            case "/": 
                setRoute({
                    text: ['about','resume'],
                    link: ['/about','/resume'],
                    cursor: ['cursor-about','cursor-resume']
                });
            break;
            case "/about":
                setRoute({
                    text: ['resume','home'],
                    link: ['/resume','/'],
                    cursor: ['cursor-resume','cursor-home']
                });
            break;
            case "/resume":
                setRoute({
                    text: ['home','about'],
                    link: ['/','/about'],
                    cursor: ['cursor-home','cursor-about']
                });
            break;
            default:
                break;
        }
    },[location,linkAnimationComplete]);

    const clickLinkHandler = (link) => {
        setMenuAnimationFinish({...menuAnimationFinish,animateChild: false});
        setTimeout(()=> {
            setHover({hover: true,link});
            setClicked({isClick: true,link});
        },500);
    }

    const hoverLinkHandler = (link) => {
        hoverHelper = true;
        setTimeout(()=> {
            if(hoverHelper) setHover({hover: true,link});
        },300);
    }

    const hoverLinkHandlerClose = ()=> {
        hoverHelper = false;
        setHover(hoverDefault);
    } 

    const animationCompleteHandler = () => {
        if(clicked.link) {
            history.push(clicked.link);
            setTimeout(()=> {
                setLinkAnimationComplete(true);
                setHover(hoverDefault);
                setClicked(clickedDefault);
                setMenuAnimationFinish(menuAnimationFinishDefault);
                setRoute(routeDefault);
            },500);
            setTimeout(()=> {
                setIsMenuOpen(false);
            },1000);
        }
    }

    return (
        <motion.div animate={isMenuOpen ? {height: '100vh'} : {height: '0'}} transition={isMenuOpen ? {duration: 1,ease: 'easeInOut'} : {duration: 1,delay: .4,ease: 'easeInOut'}} initial={{height: 0}} className={`${isMenuOpen ? 'bottom-0': 'top-0'} ${linkAnimationComplete ? 'opacity-0': 'opacity-100'} bg-gray-400 bottom-0 w-screen fixed left-0 z-500 overflow-hidden`}>
            <img src={isMenuOpen ? MenuOpenImage : MenuCloseImage} className={`${!isMenuOpen ? 'h-3/4 w-4/5 object-cover': 'opacity-50'} my-20 mx-auto `} alt="" />
            
            <motion.div animate={isMenuOpen ? {height: '100vh',padding: '1.5rem 4rem'} : {height: '0',padding: '0'}} transition={isMenuOpen ? {duration: 1,delay: .6,ease: 'easeInOut'} : {duration: 1,ease: 'easeInOut'}} initial={{height: 0,padding: 0}} className={`${isMenuOpen ? 'bottom-0' : 'top-0'} fixed left-0 w-screen bg-white`}>

                <motion.div className={`fixed flex items-center justify-center inset-0 h-screen w-screen pointer-events-none`}>
                    {/* click action */}
                    <motion.div onAnimationComplete={animationCompleteHandler} animate={clicked.isClick ? {width: '100vw',height: '100vh',background: '#1B1B1B'} : {width: '40vw',height: '50vh',background: 'transparent'}} transition={transition} initial={{width: '40vw',height: '50vh'}} className={`relative overflow-hidden`}>
                        {/* hover action */}
                        <motion.div animate={hover.hover ? {height: '100%',opacity: 1} : clicked.isClick ? {height: '100%',opacity: 1} : {height: 0,opacity: 0} } initial={{height: 0,opacity: 0}} className="container bg-primary px-8 mx-auto w-full relative">
                            <motion.div 
                                animate={clicked.isClick ? {scale: 1,y: '0',x: '0'}:{scale: .5,y: '-30%'} }
                                transition={transition}
                                initial={{scale: .5,y: '-30%'}} >
                                {hover.hover && hover.link === '/' ? <BottomNavHome /> : hover.hover && hover.link === '/about' ? <BottomNavAbout /> : hover.hover && hover.link === '/resume' && <BottomNavResume /> }
                            </motion.div> 
                        </motion.div>

                    </motion.div>
                </motion.div>

                {menuAnimationFinish.animatePresence &&
                <AnimatePresence>
                    {menuAnimationFinish.animatePresence && 
                        <>
                            <motion.div className="w-full flex justify-end">
                                <button onClick={closeMenuHandler} className={`${menuAnimationFinish.animateChild ? 'CLICK-ELEMENT' : 'pointer-events-none'}  font-roboto font-medium text-black uppercase cursor-pointer`}>close</button>
                            </motion.div> 
                            <motion.div className={`${menuAnimationFinish.animatePresence ? 'pointer-events-auto' : 'pointer-events-none' } w-full h-full flex flex-col items-start justify-between relative`}>

                                <motion.div className="flex flex-col">
                                    <div className="overflow-hidden">
                                        <motion.p animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} 
                                                transition={{duration: .6}} initial={{y: '100%'}} 
                                                // href={route.link[0]}
                                                onClick={()=> clickLinkHandler(route.link[0])}
                                                onHoverStart={()=> hoverLinkHandler(route.link[0])}
                                                onHoverEnd={hoverLinkHandlerClose}
                                                className={`block CLICK-ELEMENT ${route.cursor[0]} font-spartan font-thin text-black text-6xl uppercase leading-normal cursor-pointer`}>
                                            {route.text[0]}   
                                        </motion.p>
                                    </div>

                                    <div className="overflow-hidden">
                                        <motion.p animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} 
                                                    transition={{duration: .6,delay: .2}} initial={{y: '100%'}} 
                                                    // href={route.link[1]}
                                                    onClick={()=> clickLinkHandler(route.link[1])}
                                                    onHoverStart={()=> hoverLinkHandler(route.link[1])}
                                                    onHoverEnd={hoverLinkHandlerClose}
                                                    className={`block CLICK-ELEMENT ${route.cursor[1]} font-spartan font-thin text-black text-6xl uppercase leading-normal cursor-pointer`}>
                                            {route.text[1]}
                                        </motion.p>
                                    </div>
                                </motion.div>
                                <motion.div className="flex flex-col w-full py-8">
                                    <motion.div animate={menuAnimationFinish.animateChild ? {width: '100%'} : {width: '0'}} transition={{duration: .6}} initial={{width: '0'}} className="h-2 bg-primary" />
                                    <div className="overflow-hidden">
                                        <motion.p animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} transition={{duration: .6}} initial={{y: '100%'}} className="block font-roboto font-bold uppercase text-9xl">f.ardiansyah</motion.p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.div animate={menuAnimationFinish.animateChild ? {y: '0'} : {y: '100%'}} transition={{duration: .6,delay: .2}} initial={{y: '100%'}} className="h-26 p-4 bg-primary flex items-center w-1/3 justify-around">
                                            <InIcon fontSize="1.5rem" style={{cursor: 'pointer'}} className="CLICK-ELEMENT" />
                                            <IgIcon fontSize="1.5rem" style={{cursor: 'pointer'}} className="CLICK-ELEMENT" />
                                            <WaIcon fontSize="1.5rem" style={{cursor: 'pointer'}} className="CLICK-ELEMENT" />
                                            <p className="CLICK-ELEMENT cursor-pointer font-roboto font-medium text-xl text-white">fiqriardian92@gmail.com</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </> }
                </AnimatePresence> }
                
            </motion.div>
            
        </motion.div>
    )
}

export default Menu;