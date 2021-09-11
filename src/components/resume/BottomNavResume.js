import React from 'react';
import {motion} from 'framer-motion';

import {interests,classes,skills} from '../../utils/utils';
import MySet from './MySet';

const BottomNavResume = ()=> {
    return (
        <div className="flex flex-col w-full pt-44 min-w-50"> 
            <p className="font-roboto font-medium text-grey-dark text-7xl capitalize">resume</p>
            <div className="w-full grid grid-cols-3 gap-5 h-screen mt-16">
                <div className="w-full">
                    <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">interest</p>
                    <MySet datas={interests} />
                </div>
                <div className="w-full">
                    <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">class</p>
                    <MySet datas={classes} />
                </div>
                <div className="w-full">
                    <p className="mb-8 font-spartan font-light text-grey-dark text-3xl capitalize">skills</p>
                    <MySet datas={skills} />                    
                </div>
            </div>
        </div>
    )
}

export default BottomNavResume;