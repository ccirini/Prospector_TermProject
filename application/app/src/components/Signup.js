import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SignUp = () =>{
    return(
        <div className="signup">
            <h1>Select Type of Account</h1>
            <Form>
                <Button href="/signup-student" variant="outline-light">Student</Button>
                <Button href="/signup-recruiter" variant="outline-light">Recruiter</Button>
                <Button href="/signuppro" variant="outline-light">Instructor</Button>
            </Form>
        </div>
    );
}

export default SignUp;