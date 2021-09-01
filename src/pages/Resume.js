import React from 'react';

const MySet = ({datas}) => {
    return datas.map((el,i)=> {
        return <div className="w-full mb-8 border-l-4 border-grey-light pl-4">
                    <p className="mb-2 font-roboto font-medium text-grey-dark text-2xl capitalize">{el.title}</p>
                    {el.items.map((el,i)=> {
                        return <p key={i} className="font-roboto font-light text-grey-light text-xl capitalize">{el}</p>
                    })}           
                </div>
    })
}

const interests = [
    {title: 'design',items: ['web design','android app design']},
    {title: 'music',items: ['music instrument']},
    {title: 'art',items: ['kaligrafi','surrealis']}
];

const classes = [
    {title: 'dicoding indonesia',items: ['frontend web expert','android jetpack pro']}
];

const skills = [
    {title: 'web',items: ['html','css','javascript','reactJs','nextJs']},
    {title: 'android',items: ['kotlin']},
    {title: 'tools',items: ['vs code','android studio']},
    {title: 'UI / UX design',items: ['figma','adobe xd','adobe illustrator']}
]

const Resume = props => {
    return (
        <>
            <div className="h-screen pt-44">
                <p className="font-roboto font-medium text-grey-dark text-7xl capitalize">resume</p>
                <div className="grid grid-cols-3 gap-5 h-screen mt-16">
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
            <div className="h-screen"></div>
            <div className="h-screen flex relative items-end justify-center">
                <p className="font-roboto text-grey-dark text-xl absolute top-1/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4">What's next?</p>

                <div className="w-4/5 h-2/5 bg-grey-dark flex items-end justify-center relative ">
                    <a href="/#" className="cursor-pointer absolute text-white font-roboto text-5xl font-medium top-1/4 ">Home</a>
                    <div className="w-1/2 h-2/5 bg-white flex items-end justify-center">
                        <a href="/#" className="font-roboto text-grey-dark text-2xl font-light ">About</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;        