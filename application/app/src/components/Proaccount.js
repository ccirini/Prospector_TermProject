import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const ProAccount = () =>{
    return(
        <div className="viewRecommends">
            <h1>Instructor Account</h1>
                <Container>
                    <Row>
                        <Col>Name:</Col>
                    </Row>

                    {/* is this stored int the db */}
                    <Row>
                        <Col>University Role:</Col>
                    </Row>

                    <Row>
                        <Col>University Name:</Col>
                    </Row>

                    <Row>
                        <Col>Location:</Col>
                    </Row>

                    <Row>
                        <Col>Email:</Col>
                    </Row>

                    <Row>
                        <Col>Password:</Col>
                    </Row>
                </Container>

                <Form>
                    <Button href="#" variant="outline-dark">Edit</Button>
                    <Button href="/" variant="outline-dark">Delete</Button>
                    <Button href="/viewrecommend" variant="outline-dark">View Recommedations</Button>
            </Form>
        </div>
    );
}

export default ProAccount;
