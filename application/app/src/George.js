import bgimage from "./background-mountains.jpeg";
import profilePicture from "./logo.svg";
import "./member-page.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const name = "George";
const city = "City";
const title = "Title";
const major = "Major";

const George = () => {
  return (
    <div>
      <Jumbotron
        className="background"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      ></Jumbotron>

      <Container className="container" fluid="xl">
        <Row>
          <Col>
            <Image
              className="profile-picture"
              src={profilePicture}
              roundedCircle
            />
          </Col>
        </Row>
        <h1 className="name">{name}</h1>
        <h4 className="city">{city}</h4>
        <p className="title">
          {title} - Team 2 <br></br> {major}
        </p>

        <hr></hr>

        <p className="bio">
          bio part 1<br></br>
          <br></br>
          Bio part 2 (if needed)
        </p>
      </Container>

      <footer className="footer" fluid="xl">
        <p>CSC 648 - Software Engineering Spring 2021</p>
        <hr></hr>
        <p>Copyright © 2021 CSC 648.02 - Team 2</p>
      </footer>
    </div>
  );
};

export default George;
