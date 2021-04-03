import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import "./Design.css";


const Home = () =>{
    return(
        <div className="home" class="text-color">
            <h1>Get Matched with Your Ideal Canindate!</h1>
            <h3>ProSpector narrows down the time of looking for employers while giving exposure to those who dont.  </h3>
            <Button href="#" >Start Applying</Button>
            <Button href="#" variant="outline-dark">Start Hiring</Button>
            
        </div>
    );
}

export default Home;