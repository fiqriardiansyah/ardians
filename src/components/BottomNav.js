import React,{useContext,useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useHistory,useLocation } from 'react-router-dom';

import { RouteContext } from '../context/RouteContext';

import BottomNavResume from './resume/BottomNavResume';
import BottomNavAbout from './about/BottomNavAbout';
import BottomNavHome from './home/BottomNavHome';

import BottomNavHeadAbout from './about/BottomNavHeadAbout';
import BottomNavHeadHome from './home/BottomNavHeadHome';
import BottomNavHeadResume from './resume/BotomNavHeadResume';

import { cleanUpCursor,reRenderCursor} from '../utils/utils';

const transition = {duration: 2,ease: [0.43, 0.13, 0.23, 0.96],delay: .8};


const BottomNav = ({nextLink,fixedPosition}) => {

    const location = useLocation();
    const history = useHistory();
    const { isClickBottomNav,setIsClickBottomNav,link,setLink} = useContext(RouteContext);
    const [components,setComponents] = useState({
        head: null,
        bigNav: null,
        smallNav: null,
        title: null,
        cursor: null
    });

    const [hover,setHover] = useState(false);

    const clickHandler = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setIsClickBottomNav(true);
        }else {
            window.scrollTo(0,document.body.scrollHeight);
            setTimeout(()=> {
                setIsClickBottomNav(true);
            },1000);
        }
        
    }

    const animationCompleteHandler = () => {
        if(isClickBottomNav) {
            history.push(link);
            cleanUpCursor();
            setTimeout(()=> {
                setIsClickBottomNav(false);
            },700);
        }
    }

    useEffect(()=> {
        reRenderCursor();
        if(nextLink && !fixedPosition) setLink(nextLink);
    },[]);

    useEffect(()=> {
        if(!isClickBottomNav) {
            setTimeout(()=> {
                switch(location.pathname){
                    case "/":
                        setComponents({
                            head: <BottomNavHeadHome/> ,
                            bigNav: <BottomNavAbout />,
                            smallNav: <BottomNavResume />,
                            title: 'about',
                            cursor: 'cursor-about-bottom-nav'
                        });
                        break;
                    case "/about": 
                        setComponents({
                            head: <BottomNavHeadAbout/> ,
                            bigNav: <BottomNavResume />,
                            smallNav: <BottomNavHome />,
                            title: 'resume',
                            cursor: 'cursor-resume-bottom-nav'
                        });
                        break;
                    case "/resume":
                        setComponents({
                            head: <BottomNavHeadResume/> ,
                            bigNav: <BottomNavHome />,
                            smallNav: <BottomNavAbout />,
                            title: 'home',
                            cursor: 'cursor-home-bottom-nav'
                        });
                        break;
                    default:
                        break;
                }
            },500);
        }
    },[link,isClickBottomNav]);

    if(fixedPosition) {
        return  <motion.div animate={isClickBottomNav ? {opacity: 1} : {opacity: 0}} initial={{opacity: 0}} className={`+++++++++++ fixed inset-0 z-500 bg-primary pointer-events-none  h-screen flex items-end justify-center`}>
                    <div className="h-screen w-full flex relative items-end justify-center">

                        {components.head && components.head } 
                        
                        <motion.div 
                            onAnimationComplete={animationCompleteHandler}
                            animate={isClickBottomNav ? {width: '100%',height: '100%',background: '#1B1B1B'} : {width: '80%',height: '50%',background: '#000000'}}
                            transition={transition}
                            initial={{width: '80%',height: '50%',background: '#000000'}}
                            className="overflow-hidden CLICK-ELEMENT cursor-about cursor-pointer flex items-end justify-center relative">
                            
                            <motion.div animate={isClickBottomNav ? {scale: 1,opacity: 1,top: 0} : {scale: .7,opacity: .1,top: '-70%'}}
                                        transition={transition}
                                        initial={{scale: .7,opacity: .1,top: '-70%'}}
                                        className={`absolute flex justify-between container px-8 mx-auto`} >
                                        
                                        {components.bigNav && components.bigNav }

                            </motion.div> 

                            <motion.p animate={isClickBottomNav ? {opacity: 0} : {opacity: 1}}
                                    transition={isClickBottomNav ? {} : {delay: 1}}
                                    initial={{opacity: 1}} className="absolute top-6 font-roboto font-medium text-7xl text-white capitalize" >
                                    {components.title && components.title}
                            </motion.p>

                            <motion.div  animate={isClickBottomNav ? {opacity: 0} : {opacity: 1}}
                                    transition={isClickBottomNav ? {} : {delay: 1}}
                                    initial={{opacity: 1}} className="relative z-100 w-1/2 h-2/5 bg-white flex items-end justify-center">
                                    <motion.div initial={{scale: .5,y: '-35%'}}>
                                        {components.smallNav && components.smallNav }
                                    </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>
                </motion.div>
    }

    return (
        <motion.div className={`bg-black h-screen flex items-end justify-center`}>
            <div className="h-screen w-full flex relative items-end justify-center bg-primary">
                
                {components.head && components.head } 

                <motion.div 
                    onClick={clickHandler}
                    onHoverStart={()=> setHover(true)}
                    onHoverEnd={()=> setHover(false)}
                    initial={{width: '80%',height: '50%',background: '#000000'}}
                    className={`CLICK-ELEMENT ${components.cursor} overflow-hidden cursor-pointer flex items-end justify-center relative`}>
                    
                    <motion.div animate={hover ? {opacity: .2,transition: .3} : {opacity: .1,transition: .3}}
                                transition={transition} 
                                initial={{scale: .7,opacity: .1,top: '-70%'}}
                                className={`absolute flex justify-between container px-8 mx-auto`} >

                            {components.bigNav && components.bigNav }

                    </motion.div> 

                    <motion.p className="absolute top-6 font-roboto font-medium text-7xl text-white capitalize" >
                        {components.title && components.title}
                    </motion.p>

                    <motion.div className="relative z-100 w-1/2 h-2/5 bg-secondary flex items-start justify-center overflow-hidden">
                        <motion.div initial={{scale: .4,y: '-35%'}}>
                            {components.smallNav && components.smallNav }
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    );
}

export default BottomNav;