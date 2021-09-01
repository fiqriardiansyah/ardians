import React,{useContext, useEffect,useState} from 'react';
import {motion} from 'framer-motion';

import { StateContext } from '../context/StateContext';


const Navbar = props => {

    const {setIsMenuOpen,hideNavbar,setHideNavbar} = useContext(StateContext);
    
    const numbers = ['01','02','03','04','05','06','07','08','09'];

    useEffect(()=>{

        let prevHeightPosition = window.scrollY;

        const scrollHandler = e => {
            const y = window.scrollY;

            if(y >= prevHeightPosition) setHideNavbar(true);
            else setHideNavbar(false);

            prevHeightPosition = y;
        }

        window.addEventListener("scroll",scrollHandler);
        // return window.removeEventListener("scroll",scrollHandler);
    },[]);

    return (
        <motion.div animate={hideNavbar ? {y: '-100%',x: '-50%'} : {y: '0%',x: '-50%'}} initial={{x: '-50%',y: '0%'}} transition={{duration: .4}} className="flex flex-col items-center container mx-auto px-8 py-4 z-400 fixed top-0 left-1/2 ">
            <div className="flex items-center justify-between w-full ">
                <a href="/#" className="CLICK-ELEMENT cursor-name cursor-pointer font-roboto font-sm font-medium text-white">FA-21</a> 
                <div className="flex flex-row">
                    <button className="CLICK-ELEMENT cursor-indonesia font-roboto font-sm font-medium text-white mr-2 cursor-pointer">INA</button> 
                    <button className="CLICK-ELEMENT cursor-english font-roboto font-sm font-medium text-white cursor-pointer">EN</button> 
                </div>
                <button onClick={()=> setIsMenuOpen(true) } className="CLICK-ELEMENT cursor-pointer font-roboto font-sm font-medium text-white">MENU</button> 
            </div>
            <div className="flex items-center justify-between px-4 w-full mt-4">
                {numbers.map((el,i)=> <p key={i} className="text-grey-dark">{el}</p> )}
            </div>
        </motion.div>
    )
}

export default Navbar;