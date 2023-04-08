import React,{useEffect, useState} from 'react'
import './Team.css'
import TeamCard from './TeamCard'

export const Sponsors = () => {
  const [sponsors, setSponsors] = useState([{}])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://tedx.cyclic.app/api/sponsors/get", requestOptions)
      .then(response => response.json())
      .then(result => setSponsors(result))
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className='sponsors_main'>
      <div className='sponsors'>
        <div className='sponsors__main'>
          <div className='sponsors__center'>
            <h1 className='makeitred'>Sponsors</h1>
            <p>Partner with us and join us on our journey to cultivate ideas and innovation and associate with a global name consistent with sparking meaningful conversations and providing a platform to ideas worth spreading. Be it brand visibility, lead generation or higher engagement among a world class speaker line-up and brilliant audience- we have you covered!</p>
          </div>

        </div>
        <a href="mailto:tedxnitj@nitj.ac.in" target="_blank">
          <button class="appBtn whiteFont">Sponsor Us</button>
        </a>

      </div>
      <div className='sponsors_carousel'>
        <div class="SpeakerCarousel__TableContainer-sc-tve874-0 jbNFLs">
          <div className='carousel__heading speakers__heading'>
            <h3>SPONSORS</h3>
          </div>
          <div class="SpeakerCarousel__Carousel-sc-tve874-2 fRhUJv">
          {sponsors && sponsors.map(sponsor => (
            <TeamCard
              name={sponsor.name}
              position={sponsor.label}
              source={sponsor.logoURL}
         
            />
          ))}

          </div>


        </div>
      </div></div>
      )
}
