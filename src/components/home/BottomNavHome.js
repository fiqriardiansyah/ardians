import React from 'react';

const BottomNavHome = ()=> {
    return (
            <div className="h-screen flex flex-col">
                <p className=" MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-200 LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-07 font-spartan text-6xl text-grey-dark font-light mt-52 text-center"> 
                        <span className="whitespace-nowrap">21 years old developer based in</span>
                        <span className="CLICK-ELEMENT cursor-full-image-indonesia  font-medium text-white"> indonesia::</span> 
                        <span className="whitespace-nowrap">build beautifull thing with </span>
                </p>
                <p className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-300 LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-1 font-roboto font-medium text-grey-dark text-7xl text-center">code</p>
                <div className="flex flex-row items-start justify-between mt-20">
                    <div className="MENU-EFFECT-ELEMENT MENU-TRANSFORM-Y-100 flex flex-col flex-1 mt-24">
                        <p className="LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-07 font-spartan text-grey-dark font-sm font-light m-0">FRONT END DEV</p>
                        <p className="LOAD-FINISH-EFFECT-ELEMENT LOAD-OPACITY-INITIAL-1 font-spartan text-grey-dark font-sm font-light m-0">ANROID DEV</p>
                    </div>
                </div>
            </div>
    )
}

export default BottomNavHome;
