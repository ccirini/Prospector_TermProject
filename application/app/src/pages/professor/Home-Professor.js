import "./Home-Professor.css"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomeProfessor = () =>{
    return(
        <div className="home-professor">
            <h1 className="home-professor-h1">Recommend Students!</h1>
            <InputGroup className="home-professor-input">
                <FormControl aria-describedby="basic-addon1" placeholder="Search Student ID" className="home-professor-search"/>
                <Button type="submit" className="home-professor-btn1">Search</Button>
                <Button href="/viewrecommend" variant="outline-dark" className="home-professor-btn2">View Recommedations</Button>
            </InputGroup>

            <Container className="home-professor-container">
                <h2 className="home-professor-h2">Student Name</h2>
                <Link to="#" className="home-professor-link">View Student Portal</Link>
                    <Button href="/newrecommend" variant="outline-dark" className="home-professor-btn3">Recommend</Button>
            </Container>
        </div>
    );
}

export default HomeProfessor;
