import "./Home.css";
import Button from 'react-bootstrap/Button'

const Home = () =>{
    return(
        <div className="home">
            <h1>Text Header Title</h1>
            <p style={{
                width: "50%"
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <Button href="#" variant="dark">Start Applying</Button>
            <Button href="#" variant="outline-dark">Start Hiring</Button>
        </div>
    );
}

export default Home;