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

	function handleClick(e) {
		// e.preventDefault();
		console.log('The button was clicked.');

		if (email == 'test@mail.com' && password == 'pass123'){
			setMember('professor');
		} else {
			alert("Incorrect username or password!");
		}

		// axios({
		// 	method: 'get',
		// 	url: `${API_BASE}/signin`,
		// 	data: {
		// 		email: email,
		// 		password: password,
		// 	}
		// })
		// 	.catch(function (error) {
		// 		// handle error
		// 		setUrl('/login');
		// 		console.log(error);
		// 		alert("Incorrect username or password!");
		// 	})
		// 	.then(function (response) {
		// 		console.log(response);
		// 	});

		switch (member) {
			case 'professor':
				setUrl('/home-professor');
				break;
			case 'student':
				setUrl('/home-student');
				break;
			case 'recruiter':
				setUrl('/home-recruiter');
				break;
		}
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
							<Button href={`${url}`} variant="outline-dark" onClick={handleClick}>Login</Button>
						</Form>
					</Col>
				</Row>

				{email}
				{password}
			</Container>
		</div>
	);
}

export default Login;