import "./Signup.css"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import img from "../images/banner-img.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Signup = () =>{
    return(
        <div className="signup">
            <Container className="container">
                <Col>
                    <Row className="row">
                        <Button href="/signup-student" variant="dark">Student</Button>
                    </Row>
                    <Row className="row"> 
                        <Button href="/signup-recruiter" variant="dark">Recruiter</Button>
                    </Row>
                    <Row className="row">
                        <Button href="/signup-professor" variant="dark">Professor</Button>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Signup;