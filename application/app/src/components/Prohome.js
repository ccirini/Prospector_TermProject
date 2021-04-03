import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const ProHome = () =>{
    return(
        <div className="prohome">
            <h1>Recommend Students!</h1>
            <InputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1" placeholder="Search Student ID"
                className="search"/>
                <Button type="submit">Search</Button>
            </InputGroup>
            <Form>
                <Button href="/viewrecommend" variant="outline-dark">View Recommedations</Button>
            </Form>
        </div>
    );
}

export default ProHome;