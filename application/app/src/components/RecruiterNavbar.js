import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Marquee from 'react-text-marquee'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

const RecruiterNavbar = (props) => {

	return (
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
				<Navbar.Brand href="/">ProSpector</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="/home-recruiter">Home</Nav.Link>
					<Nav.Link href="/team">About Us</Nav.Link>
					<Nav.Link href="/matches-recruiter">Matches</Nav.Link>
				</Nav>

				<div className="nav-button-container">
					<Button className="btn-primary" href="/account-recruiter">Account</Button>
				</div>

				<div className="nav-button-container">
					<Button className="btn-primary" href="/">Sign Out</Button>
				</div>
			</Navbar>
		</div>
	);
}

export default RecruiterNavbar;
