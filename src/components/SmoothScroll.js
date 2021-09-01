import React,{useRef,useEffect} from 'react';

import useWindowSize from '../hooks/useWindowSize';

const SmoothScroll =({children,childRef})=> {

    //Hook to grab window size
    const size = useWindowSize();

    // Ref for parent div and scrolling div
    const app = useRef();
    const scrollContainer = useRef();

    // Configs
    const data = {
        ease: 0.06,
        current: 0,
        previous: 0,
        rounded: 0
    };

    // Run scrollrender once page is loaded.
    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    //set the height of the body.
    useEffect(() => {
        setBodyHeight();
        new ResizeObserver(()=> setBodyHeight()).observe(childRef.current);
    }, [size.height]);

    //Set the height of the body to the height of the scrolling div
    const setBodyHeight = () => {
        if(scrollContainer.current)
            document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
    };

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         new ResizeObserver(setBodyHeight).observe(app.current);
    //     },1000);
    // },[]);

    // Scrolling
    const skewScrolling = () => {

        //Set Current to the scroll position amount
        data.current = window.scrollY;
        // Set Previous to the scroll previous position
        data.previous += (data.current - data.previous) * data.ease;
        // Set rounded to
        data.rounded = Math.round(data.previous * 100) / 100;

        // Difference between
        const difference = data.current - data.rounded;
        const acceleration = difference / size.width;
        const velocity = +acceleration;
        const skew = velocity * 16;

        //Assign skew and smooth scrolling to the scroll container
        if(scrollContainer.current)
            scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

        //loop vai raf
        requestAnimationFrame(() => skewScrolling());
    };

    return (
        <div ref={app} className="fixed inset-0 overflow-hidden ">
            <div ref={scrollContainer} className="scroll">
                {children}
            </div>
        </div>
    )
}

export default SmoothScroll;