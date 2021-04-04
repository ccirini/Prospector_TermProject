import {Link} from "react-router-dom";
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Design.css";

const NewRecommend = () =>{
    return(
        <div className="newRecommend">
            <h1 > Student Recommendation</h1>
            <Container class="text-color">
                <Row>
                    <Col>Student Name:</Col>
                </Row>

                <Row>
                    <Col>Student ID:</Col>
                </Row>
            </Container>

            <Form.Group controlId="Form.Recommend">
                <Form.Label>Student Recommendation / Letter of Recommendation</Form.Label>
                <Form.Control as="textarea" rows={10} />
            </Form.Group> 
    
            <Form>
                <Button href="/viewrecommend">Submit</Button>
            </Form>
        </div>

    );
}
    

export default NewRecommend;