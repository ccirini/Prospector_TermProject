import "./Login.css"
import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () =>{
    // Get login and check if it's in db
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="login">
            <Container className="login-container">
                <Row>
                    <Col className="left-side-login"></Col>
                    <Col className="right-side-login">
                    <h1 className="login-h1"><b>Sign In</b></h1>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email" 
                            onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" 
                            onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button href="#" variant="outline-dark">Login</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;