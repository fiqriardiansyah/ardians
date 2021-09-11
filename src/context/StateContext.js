import React,{createContext,useState,useEffect} from 'react';

import {menuEffectAnimationClasses,loadEffectAnimationClasses} from '../utils/utils';

export const StateContext = createContext();

export const StateProvider = ({children}) => {

    const [isLoadFinish,setIsLoadFinish] = useState(false);
    const [isClickedLoadFinish,setIsClickedLoadFinish] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [hideNavbar,setHideNavbar] = useState(false);

    useEffect(()=> {
        const menuEffectElements = document.querySelectorAll('.MENU-EFFECT-ELEMENT');

        if(isMenuOpen) {
            [...menuEffectElements].forEach(el => {
                menuEffectAnimationClasses.forEach( animationClass => {
                    if(el.classList.contains(animationClass.id)){
                        el.classList.add(animationClass.classAnimation);
                    }
                });
            });
        }else {
            [...menuEffectElements].forEach(el => {
                menuEffectAnimationClasses.forEach( animationClass => {
                    el.classList.remove(animationClass.classAnimation);
                });
            });
        }

    },[isMenuOpen]);

    useEffect(()=> {
        const loadEffectElements = document.querySelectorAll('.LOAD-FINISH-EFFECT-ELEMENT');

        if(isClickedLoadFinish) {

            document.querySelector('body').style.overflowY = 'auto';

            setTimeout(()=>{
                [...loadEffectElements].forEach(el => {
                    loadEffectAnimationClasses.forEach( animationClass => {
                        if(el.classList.contains(animationClass.id)){
                            el.classList.add(animationClass.classAnimation);
                        }
                    });
                });
            },1500);

            setTimeout(()=> {
                [...loadEffectElements].forEach(el => {
                    loadEffectAnimationClasses.forEach( animationClass => {
                        el.classList.remove(animationClass.id,animationClass.classAnimation);
                    });
                });
            },3000);

        }else {

            // delete if development finish

            document.querySelector('body').style.overflowY = 'auto';
            [...loadEffectElements].forEach(el => {
                loadEffectAnimationClasses.forEach( animationClass => {
                    el.classList.remove(animationClass.id,animationClass.classAnimation);
                });
            });
        }

    },[isClickedLoadFinish]);

    return <StateContext.Provider value={{
            isLoadFinish,
            setIsLoadFinish,
            isMenuOpen,
            setIsMenuOpen,
            isClickedLoadFinish,
            setIsClickedLoadFinish,
            hideNavbar,
            setHideNavbar
        }}>
        {children}
    </StateContext.Provider>

}

