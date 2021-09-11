import React,{useRef,useEffect} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

// components
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import BottomNav from './components/BottomNav';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';

// context
import {StateProvider} from './context/StateContext';
import {RouteProvider} from './context/RouteContext';

import SmoothScroll from './components/SmoothScroll';


function App() {

    return (
    <StateProvider >
      <RouteProvider> 
          <Router>
            <Route
              render={({ location }) =>(
                <>
                <Navbar />
                <Menu />
                <AnimatePresence exitBeforeEnter >
                  <Switch location={location} key={location.pathname}>
                    <Route
                      exact
                      path='/'
                      render={() => <Home />}
                    />
                    <Route
                      exact
                      path='/about'
                      render={() => <About />}
                    />
                    <Route
                      exact
                      path='/resume'
                      render={() => <Resume />}
                    />
                  </Switch>
                </AnimatePresence>
                <BottomNav key="bottomNavFix" fixedPosition={true} />
                </>
              )}
            />
          </Router>
      </RouteProvider>
    </StateProvider>
  );
 
}


export default App;
