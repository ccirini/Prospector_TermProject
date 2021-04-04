import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const HomeProfessor = () =>{
    return(
        <div className="home-professor">
            <h1>Recommend Students!</h1>
            <InputGroup className="home-professor-input">
                <FormControl aria-describedby="basic-addon1" placeholder="Search Student ID"
                className="search"/>
                <Button type="submit" className="home-professor-btn">Search</Button>
            </InputGroup>
            <Form>
                <Button href="/viewrecommend" variant="outline-dark" className="home-professor-btn">View Recommedations</Button>
            </Form>
        </div>
    );
}

export default HomeProfessor;