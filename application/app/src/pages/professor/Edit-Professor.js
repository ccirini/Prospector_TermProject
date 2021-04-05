import "../Design.css"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


const EditProfessor = () =>{
    return(
        <div className="edit">
            <h1 className="account-h1"><b>Edit Account</b></h1>
            <Form className="account-container">
                <Row  className="edit-row">
                    <Form.Control type="text" placeholder="John" className="edit-row"/>
                </Row>
                <Row  className="edit-row">
                    <Form.Control type="text" placeholder="Doe" className="edit-row"/>
                </Row>

                <Row className="edit-row">
                    <Form.Control type="uniName" placeholder="Professor" className="edit-row"/>
                </Row>
                
                <Row  className="edit-row">
                    <Form.Control type="text" placeholder="Example University" className="edit-row"/>
                </Row>

                <Row  className="edit-row">
                    <Form.Control type="text" placeholder="city" className="edit-row"/>
                </Row>
            
                <Row className="edit-row">
                    <Form.Control type="email" placeholder="johndoe@example.edu" className="edit-row"/>
                </Row>

                <Row className="edit-row">
                    <Form.Control type="password" placeholder="New Password" className="edit-row"/>
                </Row>

                <Button href="/account-recruiter" className="edit-professor-btn">Update</Button>
            </Form>
        </div>
    );
}

export default EditProfessor;