import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zoom, Fade } from "react-awesome-reveal";
gsap.registerPlugin(ScrollTrigger)
export const About = () => {
    const aboutTed = useRef(null);

    // useEffect(() => {
    //     const el = aboutTed.current;

    //     gsap.fromTo(el, {opacity : 0}, {opacity : 1, duration: 4, scrollTrigger : {
    //         trigger: el,

    //     }})

    // },[])
    return (
        <div className="about__page">

            <div className="about">

                <div className='row about__blocks'>
                    <div className='col-lg-2 col-md-12 about__ted align-self-end'>
                        <h1 className='vertical-text'><span className="what">WHAT</span>IS</h1>
                    </div>
                    {/* <div className='col-lg-1'></div> */}
                    <div className='col-lg-3 col-md-6 about__ted'><Fade direction='left' triggerOnce delay={1000}>
                        <h1 className='about_heading'>TED</h1>
                        <p>TED is a nonpartisan nonprofit devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 110 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.</p></Fade>
                    </div>
                    <div className='col-lg-3 col-md-6 about__ted'><Zoom triggerOnce delay={1000}>
                        <h1 className='about_heading'>TEDx</h1>
                        <p>A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed independently, but all of them have features in common.</p></Zoom>
                    </div>
                    <div className='col-lg-3 col-md-12 about__ted'><Fade direction='right' triggerOnce delay={1000}>
                        <h1 className='about_heading'>TEDx<span className="clg-name">NITJalandhar</span></h1>
                        <p>We started off as a group of driven people to launch the TEDx community at our institute in October 2022. Today, we're a family of about 50 people working to provide a stage for ideas and stories from different fields to reach keen and curious minds. TEDxNITJalandhar is organised by a team of dynamic individuals who believe in the power of reverberation of ideas.</p></Fade>
                    </div>

                </div>


            </div>


        </div>
    )
}

