import image from './images/golf-c.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './nav.css';
import { LinkContainer } from 'react-router-bootstrap';
const Navitem = () => {

    return (
        <>
            <Navbar style={{ backgroundColor: '#3c4d2e', zIndex:'1' }} variant='dark' expand="lg">
                <Container style={{ display: 'flex', justifyContent: 's' }}>
                    <LinkContainer to='/golfclub/'>
                        <Navbar.Brand href="#home"><img width='60px' src={image} alt='' /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <LinkContainer to='/golfclub/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/golfclub/Events'>
                                <Nav.Link>Events</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/golfclub/GolfTips'>
                                <Nav.Link>Golf Tips</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/golfclub/Shop'>
                                <Nav.Link>Shop</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/golfclub/ContactUs'>
                                <Nav.Link>Contact us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/golfclub/AboutUs'>
                                <Nav.Link>About us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Navitem