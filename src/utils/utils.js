export const timeDelay = async (time)=> {
    return new Promise((res,rej)=> setTimeout(()=> res() ,time) );
}

export const cleanUpCursor = () => {
    // clean up cursor from hover click element effect 
    document.querySelector('#observer-clean-up-cursor').classList.add(Math.random().toString());

}

export const reRenderCursor = ()=> {
    // who triger clik element 
    document.querySelector('#observer-class').classList.add(Math.random().toString());
}

export const interests = [
    {title: 'design',items: ['web design','android app design']},
    {title: 'music',items: ['music instrument']},
    {title: 'art',items: ['kaligrafi','surrealis']}
];

export const classes = [
    {title: 'dicoding indonesia',items: ['frontend web expert','android jetpack pro']}
];

export const skills = [
    {title: 'web',items: ['html','css','javascript','reactJs','nextJs']},
    {title: 'android',items: ['kotlin']},
    {title: 'tools',items: ['vs code','android studio']},
    {title: 'UI / UX design',items: ['figma','adobe xd','adobe illustrator']}
]

export const menuEffectAnimationClasses = [
    {id: 'MENU-TRANSFORM-Y-100',classAnimation: 'menu-transform-y-100'},
    {id: 'MENU-TRANSFORM-Y-200',classAnimation: 'menu-transform-y-200'},
    {id: 'MENU-TRANSFORM-Y-300',classAnimation: 'menu-transform-y-300'},
];

export const bottomNavEffectAnimationClasses = [
    {id: 'BOTTOM-NAV-TRANSFORM-Y-100',classAnimation: 'bottom-nav-transform-y-100'},
    {id: 'BOTTOM-NAV-TRANSFORM-Y-200',classAnimation: 'bottom-nav-transform-y-200'},
    {id: 'BOTTOM-NAV-TRANSFORM-Y-300',classAnimation: 'bottom-nav-transform-y-300'},
    {id: 'BOTTOM-NAV-TRANSFORM-Y-100-50',classAnimation: 'bottom-nav-transform-y-100-50'},
    {id: 'BOTTOM-NAV-TRANSFORM-Y-200-50',classAnimation: 'bottom-nav-transform-y-200-50'},
    {id: 'BOTTOM-NAV-TRANSFORM-Y-300-50',classAnimation: 'bottom-nav-transform-y-300-50'},
];

export const loadEffectAnimationClasses = [
    {id: 'LOAD-OPACITY-INITIAL-07',classAnimation: 'load-opacity-07'},
    {id: 'LOAD-OPACITY-INITIAL-1',classAnimation: 'load-opacity-1'},
];