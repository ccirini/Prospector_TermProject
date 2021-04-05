import "./Signup-Student.css"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';

import gender from "./categories/gender.json";
import lgbtq from "./categories/lgbtq.json";
import ethnicity from "./categories/ethnicity.json";
import veteran from "./categories/veteran.json";
import disability from "./categories/disability.json";
import firstgen from "./categories/firstgen.json";
import fasfa from "./categories/fasfa.json";

// const API_BASE = 'http://54.70.249.83:5000'
const API_BASE = 'http://localhost:5000'

const SignupStudent = () =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [major, setMajor] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resume, setResume] = useState('');

    const [genderValue, setGenderValue] = useState('default');
    const [lgbtqValue, setLgbtqValue] = useState('default');
    const [ethnicityValue, setEthnicityValue] = useState('default');
    const [veteranValue, setVeteranValue] = useState('default');
    const [disabilityValue, setDisabilityValue] = useState('default');
    const [firstgenValue, setFirstgenValue] = useState('default');
    const [fasfaValue, setFasfaValue] = useState('default');

    const handleChangeGender = e => { setGenderValue(e.value); }
    const handleChangeLgbtq = e => { setLgbtqValue(e.value); }
    const handleChangeEthnicity = e => { setEthnicityValue(e.value); }
    const handleChangeVeteran = e => { setVeteranValue(e.value); }
    const handleChangeDisability= e => { setDisabilityValue(e.value); }
    const handleChangeFirstgen= e => { setFirstgenValue(e.value); }
    const handleChangeFasfa = e => { setFasfaValue(e.value); }

    function handleUpload(e) {
        setResume(e.value);

        axios.post(`${API_BASE}/upload`, {
            studentSFSUId: {studentId}, 
            data: {resume}
        })
        .then(function (response) {
            console.log(response);
        })
    }

    function handleClick(e) {
        // e.preventDefault();
        console.log('The button was clicked.');

        axios.post(`${API_BASE}/signup/student`, {
            email: {email}, 
            password: {password}, 
            studentSFSUId: {studentId}, 
            firstName: {firstName}, 
            lastName: {lastName}, 
            addressId: null,
            ethnicity: {ethnicity}, 
            major: {major}, 
            gender: {gender}, 
            veteranStatus: {veteranValue}, 
            lgbtqStatus: {lgbtqValue}, 
            financialAidStatus: {fasfaValue}, 
            disabilityStatus: {disabilityValue}, 
            firstGeneration: {firstgenValue} 
        })
        .then(function (response) {
            console.log(response);
        })
    }

    return(
        <div className="signup-student">
            <Form className="signup-student-form">
            <h1 className="signup-student-h1"><b>Sign Up</b></h1>
                <Row className="row">
                    <Col>
                        <Form.Control type="text" placeholder="Enter First Name" 
                        onChange={e => setFirstName(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Last Name" 
                        onChange={e => setLastName(e.target.value)}/>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <Form.Control type="number" placeholder="Enter student id" 
                        onChange={e => setStudentId(e.target.value)}/>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <Form.Control type="text" placeholder="Enter major" 
                        onChange={e => setMajor(e.target.value)}/>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" 
                            onChange={e => setEmail(e.target.value)}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                    
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <Form.Control type="password" placeholder="Enter password" 
                        onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </Row>

                <h2 className="eeo-h2"><p>Equal Employment Opportunity (EEO)</p></h2>
                <p className="eeo-paragraph">This section is intended to help companies comply with federal law and
                    strengthen diversity recruiting efforts. Please select ‘prefer not to say’
                    in the (dropdown menu) if you do not wish to answer these questions. </p>

                <Row className="row">
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

                <Row className="row">
                    <Col>
                        <Form.Label>Ethnicity (select best fit)</Form.Label>
                        <Select
                                placeholder="--"
                                options={ethnicity} // set list of the data
                                onChange={handleChangeEthnicity} // assign onChange function
                                value={ethnicity.find(obj => obj.value === ethnicityValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                    <Col>
                        <Form.Label>Veteran</Form.Label>
                        <Select
                                placeholder="--"
                                options={veteran} // set list of the data
                                onChange={handleChangeVeteran} // assign onChange function
                                value={veteran.find(obj => obj.value === veteranValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <Form.Label>Disability</Form.Label>
                        <Select
                                placeholder="--"
                                options={disability} // set list of the data
                                onChange={handleChangeDisability} // assign onChange function
                                value={disability.find(obj => obj.value === disabilityValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                    <Col>
                        <Form.Label>Are you a first generation college student?</Form.Label>
                        <Select
                                placeholder="--"
                                options={firstgen} // set list of the data
                                onChange={handleChangeFirstgen} // assign onChange function
                                value={firstgen.find(obj => obj.value === firstgenValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <Form.Label>Received Financial Aid?</Form.Label>
                        <Select
                                placeholder="--"
                                options={fasfa} // set list of the data
                                onChange={handleChangeFasfa} // assign onChange function
                                value={fasfa.find(obj => obj.value === fasfaValue)} // set selected value
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                id="input-group-dropdown1"
                                className="dropdown"
                            />
                    </Col>
                    <Col>
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Upload Resume</Form.File.Label>
                            <Form.File.Input onClick={handleUpload}/>
                        </Form.File>
                    </Col>
                </Row>

                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button href="home-recruiter" variant="primary" type="submit" onSubmit={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignupStudent;