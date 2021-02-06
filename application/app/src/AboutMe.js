import {Link } from "react-router-dom";

import franklinPic from "./Franklin-pfp.jpg";
import cameronPic from "./Franklin-pfp.jpg";
import faisaPic from "./Franklin-pfp.jpg";
import tonyPic from "./Franklin-pfp.jpg";
import georgePic from "./Franklin-pfp.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = ({pages}) => {
    return(
        <div>
            <h2 align="center">Our Amazing Team</h2>

            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={ {width: "150px", height: "150px"}} src={cameronPic} roundedCircle />
                        <br></br>
                        <Link to ="/aboutme/cameron"><b>Cameron</b></Link>
                        <p>Team Lead</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={ {width: "150px", height: "150px"}} src={faisaPic} roundedCircle />
                        <br></br>
                        <Link to ="/aboutme/fasia"><b>Faisa</b></Link>
                        <p>Github Master</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={ {width: "150px", height: "150px"}} src={franklinPic} roundedCircle />
                        <br></br>
                        <Link to ="/aboutme/franklin"><b>Franklin</b></Link>
                        <p>Frontend Lead</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <Image style={ {width: "150px", height: "150px"}} src={tonyPic} roundedCircle />
                        <br></br>
                        <Link to ="/aboutme/tony"><b>Tony</b></Link>
                        <p>Backend Lead</p>
                    </Col>
                    <Col xs={6}>
                        <Image style={ {width: "150px", height: "150px"}} src={georgePic} roundedCircle />
                        <br></br>
                        <Link to ="/aboutme/george"><b>George He</b></Link>
                        <p>Backend Co-Lead</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;