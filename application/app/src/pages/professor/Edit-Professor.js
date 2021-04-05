import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "../Design.css";


const EditProfessor = () =>{
    return(
        <div className="editprofessor">
            <h1>Edit Account</h1>
            <Form>
            {/* double check about controlid */}
            <Form.Group controlId="formGroupFirstName">
                    <Form.Control type="fName" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="formGroupLastName">
                    <Form.Control type="lName" placeholder="Last Name" />
                </Form.Group>  
                
                <Form.Group controlId="formGroupUniName">
                    <Form.Control type="uniName" placeholder="University Name" />
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
                <Button href="/account-professor" class="btn-primary">Update</Button>
            </Form>
        </div>
    );
}

export default EditProfessor;