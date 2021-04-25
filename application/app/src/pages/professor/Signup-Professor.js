import "./Signup-Professor.css"
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

<<<<<<< HEAD

// const API_BASE = 'http://54.70.249.83:5000'
const API_BASE = 'http://localhost:5000'
=======
import API_BASE from "../config"
>>>>>>> 66e413fc9a1cd1c4637b875d448df3fe851c2bf2

const SignUpProfessor = () =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [university, setUniversity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Vpassword, setVPassword] = useState('');

    const handleClick = () => {
        // e.preventDefault();
        console.log('The button was clicked.');

        axios({
            method: 'post',
            url: `${API_BASE}/signup/professor`,
            data: {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                university: university
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function (response) {
            console.log(response);
        });
    }

    return(
        <div className="signup-professor">
            <Form className="signup-professor-form">
                <h1 className="signup-professor-h1"><b>Sign Up As An Instructor</b></h1>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="First Name" className="signup-professor-row"
                        onChange={e => setFirstName(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Last Name" className="signup-professor-row"
                        onChange={e => setLastName(e.target.value)}/>
                    </Col>
                </Row>

                <Row>
                    <Form.Control type="text" placeholder="University Name" className="signup-professor-row"
                    onChange={e => setUniversity(e.target.value)}/>
                </Row>
                
                <Row>
                  <Form.Control type="email" placeholder="Email" className="signup-professor-row"
                  onChange={e => setEmail(e.target.value)}/>
                </Row>

                <Row>
                    <Form.Control type="password" placeholder="Password" className="signup-professor-row"
                    onChange={e => setPassword(e.target.value)}/>
                </Row>
                
                <Row>
                    <Form.Control type="password" placeholder="Verify-Password" className="signup-professor-row"
                    onChange={e => setVPassword(e.target.value)}/>
                </Row>
<<<<<<< HEAD
                <Button href="/home-professor" className="signup-professor-btn" type="submit" onClick={handleClick}>Sign Up</Button>
=======
                <Button href="/signin" className="signup-professor-btn" type="submit" onClick={handleClick}>Sign Up</Button>
>>>>>>> 66e413fc9a1cd1c4637b875d448df3fe851c2bf2
            </Form>
        </div>
    );
}

export default SignUpProfessor;