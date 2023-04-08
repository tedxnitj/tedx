import React from 'react'
import ted1 from "../assets/img/6966949009_bc04b8574d_b.jpg"
import ted2 from "../assets/img/13960928938_2b61870e8f_b.jpg"
import ted3 from "../assets/img/31871755560_3011675803_b.jpg"
import ted4 from "../assets/img/getInvolved.jpg"
import ted5 from "../assets/img/network-human-silhouettes-artificial-intelligence-healthcare-1068x601.jpg"
import ted6 from "../assets/img/TEDSpeakeronstage.png"
import ted7 from "../assets/img/tedx-1200x800.jpg"
import ted8 from "../assets/img/sharing-ideas.png"
import ted9 from "../assets/img/TEDx-Lights.jpg"
import ted10 from "../assets/img/tedxliverpool.jpg"

import './Gallery.css'
export const Gallery = () => {
    return (
        <div className='gallery'>
            <div className="wrapper">
                <img src={ted1} alt="" />
                <img src={ted2} alt="" />
                <img src={ted3} alt="" />
                <img src={ted4} alt="" />
                <img src={ted7} alt="" />
                <img src={ted6} alt="" />
                <img src={ted5} alt="" />
                <img src={ted8} alt="" />
                <img src={ted9} alt="" />
                <img src={ted10} alt="" />
            </div>
        </div>
    )
}
