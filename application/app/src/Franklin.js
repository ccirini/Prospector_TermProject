import bgimage from "./images/background-mountains.jpeg";
import profilePicture from "./images/Franklin-pfp.jpg";
import "./member-page.css";
import Footer from "./components/Footer";


import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const name = "Franklin Arevalo";
const city = "San Francisco, CA";
const title = "Frontend Lead";
const major = "Computer Science";

const Franklin = () => {
  return (
    <div>
      <Jumbotron
        className="background"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      ></Jumbotron>

      <Container className="page-container" fluid="xl">
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
            I am a fourth-year student, when I am not typing away behind a computer I enjoy hiking, playing soccer, 
            and investing. I consider myself someone that is open-minded, caring, and a food enthusiast. 
            <br></br><br></br>
            I initially got hooked into CS after taking a coding workshop, I always enjoyed problem solving and 
            knew this would be a great field for me. As a computer science major, I hope to eventually utilize my 
            ability to create sustainable solutions to help create a better future. Fun Fact I’m from El Salvador 
            the smallest country in Central America. 🇸🇻
        </p>
        <Footer footer="footer-member"/>
      </Container>
    </div>
  );
};

export default Franklin;
