import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login = () =>{
    // Get login and check if it's in db

    return(
        <div className="login">
            <h1>Sign In</h1>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button href="#" variant="outline-dark">Login</Button>
            </Form>
        </div>
    );
}

export default Login;