import React,{createContext,useState,useEffect,useContext} from 'react';
import { StateContext } from '../context/StateContext';


export const RouteContext = createContext();

export const RouteProvider = ({children}) => {

    const { setHideNavbar } = useContext(StateContext);

    // dummy ,nanti ubah atau perbaiki lagi logic nya 
    const [clickLink,setClickLink] = useState({click: false,link: ''});
    const [opacityPage,setOpacityPage] = useState(false);

    useEffect(()=> {
        if(clickLink.click){
            window.scrollTo(0,document.body.scrollHeight);

            if (document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
                setOpacityPage(true);
                document.body.style.overflowY = 'hidden';
            }

            setHideNavbar(true);
        }
    },[clickLink]);

    return <RouteContext.Provider value={{ clickLink, setClickLink,opacityPage,setOpacityPage}}>
        {children}
    </RouteContext.Provider>

}

