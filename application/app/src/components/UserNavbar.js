import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const UserNavbar = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home-professor">ProSpector</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/aboutme">About Us</Nav.Link>
            </Nav>

            <Form inline>
                <Button href="/proaccount" variant="outline-success">Account</Button>
                <Button href="/" variant="success">Sign Out</Button>
            </Form>
        </Navbar>
    );
}

export default UserNavbar;