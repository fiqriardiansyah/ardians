import React,{useState,useEffect,useContext,useRef} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import { timeDelay } from '../utils/utils';

// context
import {StateContext} from '../context/StateContext';

const texts = ['fiqri a.','wake up','take a bath','breakfast','ready !'];

const Progress = ({}) => {

    const [progress,setProgress] = useState(0);
    const {isLoadFinish,setIsLoadFinish} = useContext(StateContext);
     

    useEffect(()=> {
        (async()=>{
            for(let i = 1; i<= 100; i++){

                let multiply = i;
                if(multiply >= 98) multiply = 200;
                else if(multiply >= 86) multiply = 3;
                else if(multiply >= 66) multiply = 15;
                else if(multiply >= 47) multiply = 3;

                await timeDelay(multiply * 3);
                setProgress(prev => prev += 1);

                if(i === 100) {
                    setTimeout(()=> {
                        setIsLoadFinish(true);
                        document.querySelector('#observer-class').classList.add(Math.random().toString());
                    },1000);
                }
            }
        })();
    },[]);


    return (
        <>
            <p style={{opacity: isLoadFinish ? 0 : 1}} className="pointer-events-none duration-500 font-spartan text-grey-light text-xl text-center absolute left-1/2 top-3/4 transform -translate-x-1/2"> {`${progress}%`} </p>
            <div style={{width: `${progress}%`,opacity: isLoadFinish ? 0 : 1}} className="duration-500 h-1 duration-75 bg-grey-light absolute bottom-0 left-0"></div>
        </>
    )
}

const Load = props => {

    const [stepText,setStepText] = useState(0);
    const {isLoadFinish,setIsClickedLoadFinish} = useContext(StateContext);
    const [isClick,setIsClick] = useState(false);

    useEffect(()=> {
        (async()=> {
            for(let i = 1; i <= 4; i++) {
                await timeDelay(1500);
                setStepText(prev => prev += 1);
            }
        })();
    },[]);

    const clickHandler = ()=>{
        setIsClick(true);
        setTimeout(()=>{ 
            setIsClickedLoadFinish(true);
        },300);
    } 

    return (
        <motion.div animate={isClick ? {height: 0} : {}} transition={{duration: 1,delay: 1}} className="h-screen w-screen bg-grey-dark z-500 fixed inset-0 overflow-hidden  ">
            <motion.div animate={isClick ? {height: 0} : {}} transition={{duration: 1,delay: .3}} className="relative w-full h-full bg-black ">
                <div className={`${isLoadFinish ? 'pointer-events-auto ' : 'pointer-events-none'} ${isClick ? 'rotate-and-lift opacity-0 duration-500 pointer-events-none' : '' } duration-500 flex justify-center w-full items-center h-20 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 `}>
                    <p onClick={isLoadFinish ? clickHandler : ()=>{} } className={`${isLoadFinish && !isClick ? 'cursor-pointer CLICK-ELEMENT cursor-imready': 'cursor-auto'} text-4xl duration-500 text-right mr-2 font-spartan font-light text-grey-light capitalize`} >i am</p>
                    <div className=" h-20 flex items-center w-40 ">
                        {texts.map((el,i)=> <p onClick={isLoadFinish && i === (texts.length - 1) ? clickHandler : ()=>{} } key={i} style={stepText === i ? {transform: 'translateY(0)',opacity: 1} : stepText > i ? {transform: 'translateY(-30px)',opacity: 0} : {transform: 'translateY(30px)',opacity: 0} }  
                                                className={`${isLoadFinish && i === (texts.length - 1) && !isClick ? 'cursor-pointer CLICK-ELEMENT cursor-imready' : 'cursor-auto'} whitespace-nowrap duration-500 transform translate-y-9 opacity-0 text-left absolute mr-2 font-spartan font-light text-grey-light text-4xl capitalize`} >
                                                {el}
                                            </p> )}
                    </div>
                </div>
                <Progress />
            </motion.div>
        </motion.div>
    )
}

export default Load;