import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Banner } from "./components/Banner";
import { FixedBack } from "./components/FixedBack";
import { Theme } from './components/Theme'
import { About } from './components/About'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'
import { Copyright } from './components/Copyright'
import { Test } from './components/Test';
import { Sponsors } from './components/Sponsors';
import { Team } from './components/Team';
import { MainTheme } from './components/MainTheme';
import { Conference } from './components/Conference';
import { Carousel } from './components/Carousel';
import { Speakers } from './components/Speakers';
import ParticleBackground from './components/ParticleBackground';
import { Navbaar } from './components/Navbaar';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import { Gallery } from './components/Gallery';
import { GetInvolved } from './components/GetInvolved';
import { Events } from './components/Events';
import { Timeline } from './components/Timeline';
// import {createBrowserHistory} from 'history';

// export const customHistory = createBrowserHistory(); 
function App() {
  const [backend, setBackend] = useState([{}])
  // useEffect(()=>{
  //   fetch("/api").then(response => response.json()).then(data => {
  //     setBackend(data)
  //   })
  // },[])

useEffect(()=>{
  let slug = window.location.href.match(/[^#]+/g)
  console.log(slug)
  if(slug[slug.length-1]==="timeline")
  {
    var element = document.getElementById("timeline");
    element.scrollIntoView();
  }
},[]);
  return (
    <div className="App">
      
      <Navbaar />
      <Switch>
        <Route exact path='/'>
             <FixedBack />
          <ParticleBackground />
          <Banner />
       
          <Theme />
      <Timeline />
          <About />
          {/* <Test/> */}
          <Connect />
          {/* <p>{backend}</p> */}
          
          <Footer />
          <Copyright /> 
          
        </Route>
       
        <Route path='/conferences'>
          {/* <MainTheme /> */}
          <Conference />
          <Speakers/>
          <Events/>

        </Route>
        <Route path='/sponsors'>
          <Sponsors/>

        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/gallery'>
       <Gallery/>
        </Route>
        <Route path='/getinvolve'>
       <GetInvolved/>
        </Route>



      </Switch>
     




      {/* <Skills />
      <Projects /> */}

    </div>
  );
}

export default App;
