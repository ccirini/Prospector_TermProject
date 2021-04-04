import bgimage from "../../images/background-mountains.jpeg";
import profilePicture from "../../images/Faisa-pfp.jpg";
import "./member-page.css";
import Footer from "../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const name = "Faisa Jama";
const city = "Oakland, California";
const title = "Github Master";
const major = "Computer Science";

const Fasia = () => {
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
          Entering SFSU, I planed on majoring in Mathematics, until I took a computer class. There is no other relief than when a 
          program is running successfully, but I am eager to find ways to make my program better. When I am free I enjoy being around my
          family, or playing basketball. Before COVID-19, I would travel to different beaches to relax my mind.  <br></br>
          <br></br>
          My motto in life is "go with the flow". Even though I try to live stress-free, I still have goals. After completing 
          my bachelor in computer science, I plan on continuing school until I achieve my doctoral degree. Coming from a first generation 
          family, I was taught that knowledge is key. Teaching the ones after me would be a blessing.
        </p>
        <Footer footer="footer-member"/>
      </Container>
    </div>
  );
};

export default Fasia;
