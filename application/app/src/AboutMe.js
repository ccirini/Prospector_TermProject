import {Link } from "react-router-dom";

const AboutMe = ({pages}) => {
    return(
        <div>
            <h2>AboutMe</h2>
            <div className="links">
                <Link to ="/aboutme/cameron">Cameron </Link>
                <Link to ="/aboutme/fasia">Faisa </Link>
                <Link to ="/aboutme/franklin">Franklin </Link>
                <Link to ="/aboutme/george">George </Link>
                <Link to ="/aboutme/tony">Tony </Link>
            </div>
        </div>
    );
}

export default AboutMe;