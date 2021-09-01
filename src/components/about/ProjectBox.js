import React from 'react';

const ProjectBox = ({data}) => {
    return  <div className="group h-44 w-full overflow-hidden relative flex items-center">
                <div className="group-hover:bg-blackTransparent group-hover:p-8 bg-black duration-200 z-10 cursor-pointer h-full w-full border-b-4 border-grey-light flex items-center justify-between ">
                    <p className="group-hover:text-white duration-200 font-spartan font-bold text-grey-light text-7xl uppercase">{data.title}</p>
                    <div className=" flex flex-col mr-20 align-start ">
                        <p className="font-roboto font-light text-lg text-white capitalize">{data.dev}</p>
                        <p className="font-roboto font-light text-lg text-white capitalize">{data.desc}</p>
                    </div>   
                </div>
                <img src={data.image} className="w-120 max-w-120 left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 group-hover:w-full duration-200 absolute z-0" alt="" />
            </div>
}

export default ProjectBox;