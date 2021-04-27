import "./Home.css";
import "../styles/Design.css";
import HomeNavbar from "../../components/HomeNavbar";

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Footer from "../../components/Footer";

const Home = () => {
	return (
		<div>
			<HomeNavbar />
			<div className="home">
				<div style={{ width: "50%" }}>
					<h2>Get Matched with Your Ideal Candidate!</h2>
					<p>ProSpector narrows down the time of looking for employers while giving exposure
                to those who dont.</p>
				</div>

				<Container>
					<Row>
						<div className="button-container">
							<Button href="/signup-student" className="btn-primary">Start Applying</Button>
						</div>
						<div className="button-container">
							<Button href="/signup-recruiter" className="btn-outline-light">Start Hiring</Button>
						</div>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Home;