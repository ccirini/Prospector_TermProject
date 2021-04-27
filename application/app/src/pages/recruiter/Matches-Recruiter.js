import "./Matches-Recruiter.css"
import RecruiterNavbar from "../../components/RecruiterNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MatchesRecruiter = () => {
	return (
		<div className="home-student">
			<RecruiterNavbar />

			<h1 className="home-student-h1">Matches</h1>
			<Container className="home-student-container">
				<h2 className="home-student-h2">Student Name</h2>
				<p className="home-student-p">Learn more about this Student</p>

				<Row className="home-student-row">
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="home-student-container">
				<h2 className="home-student-h2">Student Name</h2>
				<p className="home-student-p">Learn more about this Student</p>

				<Row className="home-student-row">
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="home-student-container">
				<h2 className="home-student-h2">Student Name</h2>
				<p className="home-student-p">Learn more about this Student</p>

				<Row className="home-student-row">
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>


			<h1 className="viewRecommends-h1">Saved Searches</h1>
			<Container className="home-student-container">
				<Col className="viewRecommends-col">
					<h3 className="viewRecommends-col">Major: Null</h3>
					<h3 className="viewRecommends-col">Gender: Null </h3>
					<h3 className="viewRecommends-col">Ethnicity: Null</h3>
				</Col>

				<Row className="home-student-row">
					<Button href="#" variant="outline-dark" className="account-student-btn">Edit</Button>
					<Button href="#" variant="outline-dark" className="account-professor-btn">Remove</Button>
				</Row>
			</Container>
		</div>
	);
}

export default MatchesRecruiter;