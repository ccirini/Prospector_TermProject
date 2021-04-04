import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Marquee from 'react-text-marquee'

const Navcontrol = () =>{
    return(
        <div>
        <Marquee 
            text="SFSU Software Engineering Project CSC 648-848, Spring 2021" 
            // hoverToStop={true}
            // loop={true}
            // leading={4}
            // trailing={0}
            className="marquee"
        />

        <Navbar className="navbar">
            <Navbar.Brand href="#home">ProSpector</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutme">About Us</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav>

            <div className="button-container">
                <Button className="btn-primary" href="./login">Login</Button>
            </div>

            <div className="button-container">
                <Button className="btn-outline-dark" href="./signup">Sign Up</Button>
            </div>
        </Navbar>
        </div>
        );
}

export default Navcontrol; 
