import { padding } from '@mui/system';
import React from 'react'
import { Button, Form } from "react-bootstrap";
import { Ticket } from 'react-bootstrap-icons';
import { TicketDetailedFill } from 'react-bootstrap-icons';
import { TicketPerforatedFill } from 'react-bootstrap-icons';
import ticket from "../assets/ticket.png"

function TicketForm() {
  return (
    <Form style={{background:'#151515'}} className='buyTicketForm'>
            <Form.Group style={{padding:'10px', display:'flex', flexFlow:'column'}}>
                <Form.Label style={{ fontSize:'25px' }}>Ticket Fare</Form.Label>
                <Form.Label style={{margin:' 0 10px'}}><TicketDetailedFill/> NITJ: Rs 549</Form.Label>
                <Form.Label style={{margin:' 0 10px'}}><TicketDetailedFill/> NON - NITJ: Rs 799 + GST</Form.Label>
            </Form.Group> 
            <Form.Group className='formGroup' style={{padding:'10px', display:'flex'}}>
                <div className="ticket-left" style={{width:'35%'}} ><img src={ticket} alt="" /></div>
                <div className="ticket-right" style={{width:'65%', padding:'10px', display:'flex',justifyContent:'center', alignItems:'center', textAlign:'justify'}}><p>Get a chance to meet and interact with world-class speakers. Take our <span style={{colour:'red', color:'gray'}} >exclusive merchandise and goodie bags home. And hey, food's on us ;)</span></p>
                </div>
                {/* <Form.Label style={{ fontSize:'25px' }}>Perks Included</Form.Label>
                <ul>
                    <li>Meet & greet with world-class speakers</li> 
                    <li>Exclusive merchandise </li> 
                    <li>Goodie bags</li> 
                </ul>
                    <h3 style={{alignItems:'center',display:'flex', justifyContent:'center'}} >hey, food's on us ;)</h3>
                    <p style={{alignItems:'center',padding:'10px',display:'flex', justifyContent:'center', border:'1px solid red', borderRadius:'5px'}}>Early bird discout of 10% until 3rd April on both tickets</p> */}
            </Form.Group>
            
            {/* <a href='https://www.nitj.ac.in/events_registration/tedxnitj/login' target='_blank' className='bookTicketBtn'><Button block style={{padding:'10px', alignItems:'center', margin:'6px auto', width:'100%',justifyContent:'center', backgroundColor: 'red'}} >BOOK AS SINGLE ATTENDEE<br/><h6 style={{fontFamily: 'Plus Jakarta Sans', textAlign: 'center', borderColor: 'red', border: '2px solid red', fontSize:'12px'}}>10% early bird discount till 10th April</h6></Button></a> */}
            <div style={{display: 'flex'}}>
            <h4 id="book" className="bookButton"><a href='https://www.nitj.ac.in/events_registration/tedxnitj/login' target='_blank'><b>BOOK AS SINGLE ATTENDEE</b><br/><h6 style={{fontFamily: 'Plus Jakarta Sans', textAlign: 'center', fontSize:'12px'}}>10% early bird discount till 10th April</h6></a></h4>
            <h4 id="book5"className="bookButton"><a href='https://bit.ly/tedx-group-5' target='_blank'><b>BOOK IN A GROUP (5-9):</b><br/>15% discount</a></h4>
            <h4 id="book10" className="bookButton"><a href='https://bit.ly/tedx-group-10' target='_blank'><b>BOOK IN A GROUP (10 or more):</b><br/>20% discount</a></h4>
            </div>
        </Form>
  )
}

export default TicketForm