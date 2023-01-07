import image from './images/golf-c.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';


import './nav.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
const Navitem = () => {

    return (
        <>
            <Navbar style={{ backgroundColor: '#3c4d2e', zIndex: '1' }} variant='dark' expand="lg">
                <Container style={{ display: 'flex', justifyContent: 's' }}>
                    <LinkContainer to='/golfclub/'>
                        <Navbar.Brand href="#home"><img width='60px' src={image} alt='' /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                                <Nav.Link href='/golfclub/'>Home</Nav.Link>
                                <Nav.Link id='droptr'style={{position:'relative'}} >About us
                                <div className='drop'>
                                    <ul>
                                        <li><Link to='#1'>our management team</Link></li>
                                        <li><Link to='#2'>Course History</Link></li>
                                        <li><Link to='#3'>Course Tour</Link></li>
                                        <li><Link to='#4'>Signature Design</Link></li>
                                        <li><Link to='5'>Awards of Events</Link></li>

                                    </ul>
                                </div>
                                </Nav.Link>
                                
                                <Nav.Link href='/golfclub/Events'>Events</Nav.Link>
                                <Nav.Link href='/golfclub/GolfTips'>Golf Tips</Nav.Link>
                                <Nav.Link href='/golfclub/Shop'>Shop</Nav.Link>
                                <Nav.Link href='/golfclub/ContactUs'>Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Navitem