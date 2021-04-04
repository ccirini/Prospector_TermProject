import "./Design.css"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const SignUpProfessor = () =>{
    return(
        <div className="signup-professor">
            <Form className="signup-professor-form">
                <h1 className="signup-professor-h1"><b>Sign Up As An Instructor</b></h1>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="First Name" className="signup-professor-row"/>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Last Name" className="signup-professor-row"/>
                    </Col>
                </Row>

                <Row>
                    <Form.Control type="uniName" placeholder="University Name" className="signup-professor-row"/>
                </Row>
                
                <Row>
                  <Form.Control type="email" placeholder="Email" className="signup-professor-row"/>
                </Row>

                <Row>
                    <Form.Control type="password" placeholder="Password" className="signup-professor-row"/>
                </Row>
                
                <Row>
                    <Form.Control type="lname" placeholder="Verify-Password" className="signup-professor-row"/>
                </Row>
                <Button href="/home-professor" className="signup-professor-btn">Sign Up</Button>
            </Form>
        </div>
    );
}

export default SignUpProfessor;