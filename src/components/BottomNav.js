import React,{useContext,useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import { RouteContext } from '../context/RouteContext';
import { StateContext } from '../context/StateContext';

import Profile2 from '../assets/images/profile2.png';
import Sign from '../assets/svgs/sign.svg';

const anim = {scale: 1,opacity: 1};
const transition = {duration: 2,ease: [0.43, 0.13, 0.23, 0.96],delay: .8};


const BottomNav = ({link}) => {

    const history = useHistory();

    const { setHideNavbar } = useContext(StateContext);
    const { clickLink,setClickLink,setOpacityPage } = useContext(RouteContext);
    const [hover,setHover] = useState(false);
    const [animationComplete,setAnimationComplete] = useState(false);
    
    useEffect(()=> {
        if(animationComplete){
            setHideNavbar(false);
            document.body.style.overflowY = 'auto';
            window.scrollTo(0,0);
            history.push(link);
            setOpacityPage(false);
            setClickLink({click: false,link: ''});
        } 
    },[animationComplete]);

    return (
        <div className={`h-screen flex relative items-end justify-center`}>
            <p className="font-roboto text-grey-dark text-xl absolute top-1/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4">What's next?</p>
            
            <motion.div 
                onAnimationComplete={()=> setAnimationComplete(true)}
                onMouseOver={()=> setHover(true)}
                onMouseLeave={()=> setHover(false)}
                onClick={()=> setClickLink({click: true,link}) }
                animate={clickLink.click ? {width: '100%',height: '100%',background: '#1B1B1B'} : {}}
                transition={transition}
                style={{background: 'black'}}
                className="overflow-hidden CLICK-ELEMENT cursor-about cursor-pointer w-4/5 h-1/2 flex items-end justify-center relative">
                
                <motion.div animate={clickLink.link && anim} transition={transition} className={`${hover ? 'opacity-50' : 'opacity-10'} ${clickLink.link ? 'top-0' : '-top-full'} transform scale-50 absolute duration-1000 flex justify-between container px-8 mx-auto`} >
                    <div className="relative mt-72 mr-24">
                        <img src={Profile2} alt="" className="" />
                        <img src={Sign} alt="" className="absolute -left-4 -bottom-20" />
                    </div>
                    <div className="flex flex-col it ems-start w-full mt-40">
                        <p className="font-roboto font-medium text-grey-dark text-7xl capitalize"> fiqri ardiansyah </p>
                        <p className="font-spartan font-light text-lg text-grey-dark capitalize">  frontend web & android developer </p>
                        <p className="font-roboto text-4xl text-grey-light capitalize my-16">Hello , I'm Fiqri Ardiansyah, a software developer who specializes in frontend and android.</p>
                        <p className="font-roboto text-4xl text-grey-light capitalize">Currently working remotely with one of the startups in Indonesia and I am still a student at one of the universities in my city.</p>
                    </div>
                </motion.div> 

                <motion.div animate={clickLink.click ? {opacity: 0} : {}} className="absolute w-1/2 h-2/5 bg-white flex items-end justify-center">
                    <p className="font-roboto text-grey-dark text-2xl font-light ">Resume</p>
                </motion.div>

            </motion.div>
            
        </div>
    );
}

export default BottomNav;