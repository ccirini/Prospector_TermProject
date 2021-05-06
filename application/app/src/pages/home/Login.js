import "./Login.css"
import React, { useState } from 'react'
import axios from 'axios'
import API_BASE from '../config/config'

import HomeNavbar from "../../components/HomeNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
	// Get login and check if it's in db
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [member, setMember] = useState('');
	const [url, setUrl] = useState('');
	const [user, setUser] = React.useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		console.log(email);
		console.log(password);

		axios.post(`${API_BASE}/signin`, {
			email: email,
			password: password,
		})
			.then(response => 
				console.log(response)
				// console.log("hello from then")
			)
			.catch(error => console.log(error))
	}

	return (
		<div className="login">
			<HomeNavbar />

			<Container className="login-container">
				<Row className="login-row">
					<Col className="left-side-login"></Col>
					<Col className="right-side-login">
						<h1 className="login-h1"><b>Sign In</b></h1>
						
						<Form className="login-form">
							<Form.Group controlId="formGroupEmail">
								<Form.Control type="email" placeholder="Email"
									onChange={e => setEmail(e.target.value)} />
							</Form.Group>

							<Form.Group controlId="formGroupPassword">
								<Form.Control type="password" placeholder="Password"
									onChange={e => setPassword(e.target.value)} />
							</Form.Group>

							<Button variant="outline-dark" onClick={handleClick}>Login</Button>
							
							<br />
							{email} <br />
							{password}
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;