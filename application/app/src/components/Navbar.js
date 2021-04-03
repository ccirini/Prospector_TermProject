import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./Design.css";

const Navcontrol = () =>{
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home" class="navbar-brand">ProSpector</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/" class="text-color">Home</Nav.Link>
                <Nav.Link href="/aboutme"class="text-color">About Us</Nav.Link>
                <Nav.Link href="/search"class="text-color">Search</Nav.Link>
            </Nav>

            <Form inline>
                <Button href="/login" class="btn-primary">Login</Button>
                <Button href="/signup"  variant="outline-dark">Sign Up</Button>
            </Form>
        </Navbar>
    );
}

export default Navcontrol;