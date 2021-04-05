import "./Design.css"
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const StudentAccount = () =>{
    return(
        <div className="account-student">
            <h1 className="account-h1">Student Account</h1>
            <Container className="account-container">
                <Row className="account-row">
                     <Col>Name: John Doe</Col>
                </Row>

                <Row className="account-row">
                    <Col>Student ID: 123456789</Col>
                </Row>

                <Row className="account-row">
                    <Col>Major: Computer Science</Col>
                </Row>

                <Row className="account-row"> 
                    <Col>Graduation Year: Spring 2021</Col>
                </Row>

                <Row className="account-row">
                    <Col>Email: johndoe@example.edu</Col>
                </Row>

                <Row className="account-row">
                    <Col>Password: ••••••••••••••</Col>
                </Row>

                <Button href="/edit" variant="outline-dark" className="account-edit-delete">Edit</Button>
                <Button href="/delete" variant="outline-dark" className="account-edit-delete">Delete</Button>

                <Button href="#" variant="outline-dark" className="account-student-btn">Upload Resume</Button>
                <Button href="#" variant="outline-dark" className="account-student-btn">Upload EEO</Button>

            </Container>
        </div>
    );
}

export default StudentAccount;