import "./Home.css";
import "./Design.css";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Home = () =>{
    return(
        <div className="home">
            <div style={{ width: "50%" }}>
                <h2>Get Matched with Your Ideal Canindate!</h2>
                <p>ProSpector narrows down the time of looking for employers while giving exposure 
                to those who dont.</p>
            </div>

            <Container>
                <Row>
                    <div className="button-container">
                        <Button href="/signup-student" className="btn-primary">Start Applying</Button>
                    </div>
                    <div className="button-container">
                        <Button href="#" className="btn-outline-light ">Start Hiring</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Home;