import React from 'react'
import './Team.css'
import TeamCard from './TeamCard'
export const Team = () => {
  return (
    <div className='team'>
    <div className='conferences'>
      <div className='conference__main'>
        <div className='team__main text-center'>
          <h1>OUR TEAM</h1>
          <h6>TECHNOLOGY ● ENTERTAINMENT ● DESIGN </h6>
        </div>
      </div>

    </div>
    <div class="SpeakerCarousel__TableContainer-sc-tve874-0 jbNFLs">
      <div className='carousel__heading'>
        <h3>CORE TEAM</h3>
      </div>
    <div class="SpeakerCarousel__Carousel-sc-tve874-2 fRhUJv">
    
    <TeamCard name="Sanchita Kapur" position="Founder, Licensee and Student Coordinator" source="https://media.licdn.com/dms/image/C4D03AQHCC4AXYhV6Jg/profile-displayphoto-shrink_800_800/0/1653556763108?e=1684368000&v=beta&t=qFKilql6GA31R9ZYH0q-eD1eGW1Q_xqGAMKcrYNo9x0" twitter="#" insta='https://instagram.com/sancheeetos?igshid=YmMyMTA2M2Y' linkedIn='https://www.linkedin.com/in/sanchitakapur/'/>
    <TeamCard name="Paras Khosla" position="Co-Founder, Senior Executive" source="https://media.licdn.com/dms/image/D4D03AQG6rtZ5XOUE4w/profile-displayphoto-shrink_800_800/0/1680032855846?e=1685577600&v=beta&t=b9MMAcjI50vII7wQI8jg0pCaSu3_RTanW21NJ5ekRCU" twitter="#" insta='https://instagram.com/parasaemic?igshid=YmMyMTA2M2Y' linkedIn='https://www.linkedin.com/in/paras-khosla/'/>
    <TeamCard name="Aditya Anand" position="Co-Founder, Senior Executive" source="https://media.licdn.com/dms/image/C4D03AQEsirXazFW_pQ/profile-displayphoto-shrink_800_800/0/1667964628492?e=1684368000&v=beta&t=b2pPy2NFbQGqsA31oaLgSJt3N8WII9sXpe-9lhSYqyg" twitter="#" insta='https://instagram.com/seeoutaditya?igshid=YmMyMTA2M2Y' linkedIn='https://www.linkedin.com/in/adi-19/'/>
    <TeamCard name="Vaibhav S Thatai" position="Co-Founder, Senior Executive" source="https://media.licdn.com/dms/image/C4D03AQEUgpzL1uH9GA/profile-displayphoto-shrink_800_800/0/1654277259996?e=1684368000&v=beta&t=p5E1NGDPfOGzieeaZ99cgq_SCdu4A5nP45LOz2F4gkg" twitter="#" insta = 'https://instagram.com/vaiibhav._?igshid=YmMyMTA2M2Y'  linkedIn='https://www.linkedin.com/in/vaiibhav-thatai'/>
    </div></div></div>
  )
}
