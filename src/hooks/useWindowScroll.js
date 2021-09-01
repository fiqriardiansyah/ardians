import { useState, useEffect } from "react";

export default function useWindowSize(callback) {
  
    let scroll = 0;
    useEffect(() => {
        function handleResize() {
            
            scroll = window.scrollY;

            if(callback) callback(scroll);
        }

        window.addEventListener("scroll", handleResize);
        return () => window.removeEventListener("scroll", handleResize);
    }, []);

    return scroll;
}
