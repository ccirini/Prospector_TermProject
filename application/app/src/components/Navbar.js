import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Navcontrol = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">648 Team 02</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutme">About Us</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav>

            <Form inline>
                <Button href="/login" variant="outline-success">Login</Button>
                <Button href="#" variant="success">Sign Up</Button>
            </Form>
        </Navbar>
    );
}

export default Navcontrol;