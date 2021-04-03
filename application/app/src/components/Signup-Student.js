import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

import React, {useState, useEffect} from 'react';
import Select from 'react-select';

const SignupStudent = () =>{

    const gender = [
        {
            value: "default",
            label: "--"
        },
        {
            value: "male",
            label: "male"
        },
        {
            value: "female",
            label: "female"
        },
        {
            value: "nonbinary",
            label: "nonbinary"
        },
        {
            value: "decline to state",
            label: "decline to state"
        },
        {
            value: "other",
            label: "other"
        }
    ];

    const lgbtq = [
        {
            value: "default",
            label: "--"
        },
        {
            value: "yes",
            label: "yes"
        },
        {
            value: "no",
            label: "no"
        },
        {
            value: "prefer not to say",
            label: "prefer not to say"
        }
    ];

    const [genderValue, setGenderValue] = useState('default');
    const [lgbtqValue, setLgbtqValue] = useState('default');

    const handleChangeGender = e => {
        setGenderValue(e.value);
    }

    const handleChangeLgbtq = e => {
        setLgbtqValue(e.value);
    }

    return(
        <div className="signup-student">
            <h1>Sign Up</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Enter student id" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                    
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Col>
                </Row>

                <h2>Equal Employment Opportunity (EEO)</h2>
                <p>This section is intended to help companies comply with federal law and
                    strengthen diversity recruiting efforts. Please select ‘prefer not to say’
                    in the (dropdown menu) if you do not wish to answer these questions. </p>

                <Row>
                    <Col>
                        <Form.Label>Gender</Form.Label>
                        <Select
                                placeholder="--"
                                options={gender} // set list of the data
                                onChange={handleChangeGender} // assign onChange function
                                value={gender.find(obj => obj.value === genderValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                    <Col>
                        <Form.Label>LGBTQ</Form.Label>
                        <Select
                                placeholder="--"
                                options={lgbtq} // set list of the data
                                onChange={handleChangeLgbtq} // assign onChange function
                                value={lgbtq.find(obj => obj.value === lgbtqValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                </Row>

                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignupStudent;