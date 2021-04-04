import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const ProfessorAccount = () =>{
    return(
        <div className="viewRecommends">
            <h1>Instructor Account</h1>
                <Container>
                    <Row>
                        <Col>Name: John Doe</Col>
                    </Row>

                    {/* is this stored int the db */}
                    <Row>
                        <Col>University Role: Professor</Col>
                    </Row>

                    <Row>
                        <Col>University Name: Example University</Col>
                    </Row>

                    <Row>
                        <Col>Location: city</Col>
                    </Row>

                    <Row>
                        <Col>Email: johndoe@example.edu</Col>
                    </Row>

                    <Row>
                        <Col>Password: ••••••••••••••</Col>
                    </Row>
                </Container>

                <Form>
                    <Button href="/edit-professor" variant="outline-dark">Edit</Button>
                    <Button href="/delete" variant="outline-dark">Delete</Button>
                    <Button href="/viewrecommend" variant="outline-dark">View Recommedations</Button>
            </Form>
        </div>
    );
}

export default ProfessorAccount;
