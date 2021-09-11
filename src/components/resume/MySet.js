import React from 'react';

const MySet = ({datas}) => { 
    return datas.map((el,i)=> {
        return <div key={i} className="w-full mb-8 border-l-4 border-grey-light pl-4">
                    <p className="mb-2 font-roboto font-medium text-grey-dark text-2xl capitalize whitespace-nowrap">{el.title}</p>
                    {el.items.map((el,i)=> {
                        return <p key={i} className="font-roboto font-light text-grey-light text-xl capitalize whitespace-nowrap">{el}</p>
                    })}           
                </div>
    })
}

export default MySet;