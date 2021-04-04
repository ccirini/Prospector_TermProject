import "./Home.css";
import Button from 'react-bootstrap/Button'
// import "./Design.css";


const Home = () =>{
    return(
        <div className="home">
            <div style={{ width: "50%" }}>
                <h2>Get Matched with Your Ideal Canindate!</h2>
                <p>ProSpector narrows down the time of looking for employers while giving exposure 
                to those who dont.</p>
            </div>

            <Button href="/signup-student" >Start Applying</Button>
            <Button href="/signup-recruiter" variant="outline-dark">Start Hiring</Button>

            
        </div>
    );
}

export default Home;