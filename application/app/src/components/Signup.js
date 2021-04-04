import "./Design.css"
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SignUp = () =>{
    return(
        <div className="signup">
            <h1 className="signup-h1">Select Type of Account</h1>
            <Container className="signup-container">
                <Form className="signup-form">
                <Button href="/signup-student" variant="outline-light" className="signup-btn">Student</Button>
                <Button href="/signup-recruiter" variant="outline-light" className="signup-btn">Recruiter</Button>
                <Button href="/signup-professor" variant="outline-light" className="signup-btn">Instructor</Button>
            </Form>
            </Container>
        </div>
    );
}

export default SignUp;