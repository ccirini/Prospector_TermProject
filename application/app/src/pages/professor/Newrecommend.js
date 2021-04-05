import "./Newrecommend.css";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import ReactRating from 'react-rate-thing'

const NewRecommend = () =>{
    const [rate, selectRate] = useState(0);

    return(
        <div className="newRecommend">
            <h1 className="newRecommend-h1"> Student Recommendation</h1>
            <Container  className="newRecommend-container">
                <Row>
                    <Col className="newRecommend-font">Student Name: John Doe</Col>
                </Row>
                <Row>
                    <Col className="newRecommend-font">Student ID: 123456789</Col>
                </Row>

            <Form.Group controlId="Form.Recommend" className="newRecommend-form">
                <Form.Label>Student Recommendation / Letter of Recommendation</Form.Label>
                <Form.Control as="textarea" rows={10} />
            </Form.Group> 

            <div className="newRecommend-rating" style={{ margin: '3em'}}>
                <div className="newRecommend-rating-font" style={{ marginTop: '1em' }}>
                        Student Overall Rating: {rate}
                </div>
                <ReactRating value={rate} onClick={selectRate}/>
            </div>

            <Form>
                <Button href="/viewrecommend" className="newRecommend-btn">Submit</Button>
            </Form>
            </Container>
        </div>

    );
}
    

export default NewRecommend;