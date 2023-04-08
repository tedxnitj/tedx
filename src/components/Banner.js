import React,{useState} from 'react'
import logo from '../assets/img/tedxnitjLogoTwoLine.png';
import { Button, Modal } from 'react-bootstrap';
import TicketForm from './TicketForm'; 
export const Banner = () => {
  const [show,setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <div className='banner'>
      <div className='row'>

      <div className='col-md-6 banner__left'>
        <img src = {logo} alt = "LOGO"/>
        <p>TEDx NITJalandhar is an annual event that aims to bring together inquisitive minds and spark engaging conversations. With a confluence of thought provoking speakers, we hope to bring forward fresh perspectives and novel concepts, giving every participant something to take home.</p>

      </div>
      <div className='col-md-6 banner__right'>
        <button className="vvd" onClick={handleShow} data-toggle="modal"><span>BUY TICKETS</span></button>
      </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header style={{backgroundColor:'black'}} closeButton>
            <Modal.Title style={{color:'red', backgroundColor:'black'}}>Book Tickets</Modal.Title>
          </Modal.Header>
          
            <Modal.Body style={{backgroundColor:'black'}}>
                <TicketForm />
            </Modal.Body>
      </Modal>  
    </div>
  )
}


