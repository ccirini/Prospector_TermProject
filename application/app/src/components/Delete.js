import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Delete = () =>{
    return(
        <div className="delete">
            <h1>Are You Sure?</h1>
            <Form>
                <Button href="/" variant="outline-light">Yes</Button>
                <Button href="/prohome" variant="outline-light">No</Button>
            </Form>
        </div>
    );
}

export default Delete;