import { useState, useEffect } from "react";
import {HashLink} from "react-router-hash-link"
import React from 'react';
import logo from '../assets/img/tedxnitjLogoTwoLine.png';
import { Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export const Navbaar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  useEffect(()=> {
    document.title = activeLink ? `${activeLink} | TEDxNITJalandhar` : "TEDxNITJalandhar"
  },[activeLink])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handlingactive=()=>{
    // console.log("hello")
    // var navlinks=document.querySelectorAll(["nav-link"])
    // navlinks.array.forEach(element => {
    //   // if(element.classList.remove("active"));
    //   console.log("element")
    //   console.log(element)
    // });

 }


  return (
    <nav class={scrolled ? "navbar fixed-top scrolled" : "navbar fixed-top"}>
      <div class="container-fluid">
        <Link to="/"><a class="navbar-brand" onClick={() => onUpdateActiveLink('/home')}><img className="header_image" src={logo} alt="Logo" /></a></Link>
        <div className="nav-options">

          <Nav className="ms-auto">
            <NavLink to="home" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Home')}>Home</NavLink>
            <HashLink to="/home#speakers" className='nav-link navbar-link' onClick={() => {onUpdateActiveLink('Events');handlingactive();}}>Speakers</HashLink>
            <HashLink to="/home#about" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('About')}>About</HashLink>
            <NavLink to="sponsors" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Sponsors')}>Sponsors</NavLink>
            <NavLink to="gallery" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Gallery')}>Gallery</NavLink>
            <NavLink to="team" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Team')}>Our Team</NavLink>
            <NavLink to="getinvolve" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Get Involved')}>Get Involved</NavLink>
          </Nav>
        </div>
        <div className="nav-tog">
          <button class=" navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <h1>Hello</h1> */}
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <img className="header_image" src={logo} alt="Logo" />
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="home" className='navbar navbar-nav nav-link navbar-link active' onClick={() => onUpdateActiveLink('Home')}>Home</NavLink></button>
                </li>
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas">  <HashLink to="/home#speakers" className='nav-link navbar-link' onClick={() => {onUpdateActiveLink('Events'),handlingactive()}}>Speakers</HashLink></button>
                </li>
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas"><HashLink to="/home#about" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('About')}>About</HashLink></button>
                </li>
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="sponsors" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('Sponsors')}>Sponsors</NavLink></button>
                </li>
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="gallery" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('Gallery')}>Gallery</NavLink></button>
                </li>
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="team" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('Team')}>Our Team</NavLink></button>
                </li>
                <li class="nav-item">
                  <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="getinvolve" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('Get Involved')}>Get Involved</NavLink></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
