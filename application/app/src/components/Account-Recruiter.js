import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const RecruiterAccount = () =>{
    return(
        <div className="viewRecommends">
            <h1>Recruiter Account</h1>
                <Container>
                    <Row>
                        <Col>Name: John Doe</Col>
                    </Row>

                    {/* is this stored int the db */}
                    <Row>
                        <Col>Company Role: Talent Specialist</Col>
                    </Row>

                    <Row>
                        <Col>Company Name: John Doe</Col>
                    </Row>

                    <Row>
                        <Col>Location: HQ location</Col>
                    </Row>

                    <Row>
                        <Col>Email: johndoe@example.edu</Col>
                    </Row>

                    <Row>
                        <Col>Password: ••••••••••••••</Col>
                    </Row>
                </Container>

                <Form>
                    <Button href="/edit" variant="outline-dark">Edit</Button>
                    <Button href="/delete" variant="outline-dark">Delete</Button>
                    <Button href="/search" variant="outline-dark">Create Post</Button>
                    <Button href="#" variant="outline-dark">Show Search</Button>
            </Form>
        </div>
    );
}

export default RecruiterAccount;