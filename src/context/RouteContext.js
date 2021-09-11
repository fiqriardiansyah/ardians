import React,{createContext,useState,useEffect,useContext} from 'react';
import { StateContext } from '../context/StateContext';

import { bottomNavEffectAnimationClasses } from '../utils/utils';

export const RouteContext = createContext();

export const RouteProvider = ({children}) => {

    const { setHideNavbar } = useContext(StateContext);
    const [isClickBottomNav,setIsClickBottomNav] = useState(false);
    const [link,setLink] = useState(null);

    useEffect(()=> {
        const bottomNavEffectElements = document.querySelectorAll('.BOTTOM-NAV-EFFECT-ELEMENT');

        if(isClickBottomNav) {
            [...bottomNavEffectElements].forEach(el => {
                bottomNavEffectAnimationClasses.forEach( animationClass => {
                    if(el.classList.contains(animationClass.id)){
                        el.classList.add(animationClass.classAnimation);
                    }
                });
            });
        }else {
            [...bottomNavEffectElements].forEach(el => {
                bottomNavEffectAnimationClasses.forEach( animationClass => {
                    el.classList.remove(animationClass.classAnimation);
                });
            });
        }

    },[isClickBottomNav]);
   
    return <RouteContext.Provider value={{isClickBottomNav,setIsClickBottomNav,link,setLink}}>
        {children}
    </RouteContext.Provider>

}

