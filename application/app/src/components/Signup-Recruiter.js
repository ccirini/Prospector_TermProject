import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./Design.css";


const SignUpRecruiter = () =>{
    return(
        <div>
            <h1>Sign Up As A Recruiter</h1>
            <Form>
            <Form.Group controlId="formGroupFirstName">
                    <Form.Control type="fName" placeholder="First Name " />
                </Form.Group>

                <Form.Group controlId="formGroupLastName">
                    <Form.Control type="lName" placeholder="Last Name" />
                </Form.Group>  
                
                <Form.Group controlId="formGroupCompanyName">
                    <Form.Control type="uniName" placeholder="Company Name" />
                </Form.Group>
                
                <Form.Group controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                 {/* double check about verifying password */}
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="lname" placeholder="Verify-Password" />
                </Form.Group>
                <Button href="#" class="btn-primary">Sign Up</Button>
            </Form>
        </div>
    );
}

export default SignUpRecruiter;