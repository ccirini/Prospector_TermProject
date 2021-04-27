import "./Home-Student.css"
import StudentNavbar from "../../components/StudentNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const HomeStudent = () => {
	return (
		<div className="home-student">
			<StudentNavbar />
			<h1 className="home-student-h1">Matches</h1>
			<Container className="home-student-container">
				<h2 className="home-student-h2">Example Company Name</h2>
				<p className="home-student-p">Learn more about this Role</p>

				<Row className="home-student-row">
					<Col className="home-student-col">Role Position Title - Location</Col>
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="home-student-container">
				<h2 className="home-student-h2">Example Company Name</h2>
				<p className="home-student-p">Learn more about this Role</p>

				<Row className="home-student-row">
					<Col className="home-student-col">Role Position Title - Location</Col>
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="home-student-container">
				<h2 className="home-student-h2">Example Company Name</h2>
				<p className="home-student-p">Learn more about this Role</p>

				<Row className="home-student-row">
					<Col className="home-student-col">Role Position Title - Location</Col>
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>
		</div>
	);
}

export default HomeStudent;