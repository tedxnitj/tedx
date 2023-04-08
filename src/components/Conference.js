import React from 'react'
import { Team } from './Team'
import './Conference.css'
import {Fade} from "react-awesome-reveal"
export const Conference = () => {
  return (
    <div>
        {/* <div className='speaker__header'>
            <h1>Speakers</h1>
            
        </div> */}
        <div className='conferences'>
          <div className='conference__main'>
            <div className='conference__mainHeading text-center'>
              <h6>TECHNOLOGY ● ENTERTAINMENT ● DESIGN </h6>
            </div>
            <div className='conference__maintext text-center'>
              <h1>WHAT NOW?</h1>
            </div>
            <div className='conference__image text-center'><Fade direction='up triggerOnce'>
              <h4>THEME: Reverbera<span className = "makeitred">TED</span></h4>
              <h5><span className="makeitred">Ideas</span> Worth Spreading</h5>
              <h5>DATE: 15th April 2023</h5></Fade>
            </div>
          </div>

        </div>
        {/* <Team/> */}
    </div>
  )
}
