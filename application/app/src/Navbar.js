import {Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1> 648 Team 02</h1>
            <div className="links">
                <Link to ="/aboutme">AboutMe</Link>
            </div>
        </nav>
    );
}

export default Navbar;