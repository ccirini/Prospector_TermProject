import "./Home-Recruiter.css";
import "../styles/Design.css";
import data from "../../components/categories/dropdownData.json";
import RecruiterNavbar from "../../components/RecruiterNavbar";

import React, { useState } from 'react'
import Select from 'react-select'
import axios from 'axios'

import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import API_BASE from '../config/config'

const HomeRecruiter = () => {

	const [selectedValue, setSelectedValue] = useState('default');
	const [searchValue, setSearchValue] = useState('default');
	const [active, setActive] = useState(false);
	const [students, setStudents] = React.useState([]);
	const [stuId, setStuId] = useState(912345670);
	const [pdfLink, setPdfLink] = useState('./john-doe.pdf');

	// handle onChange event of the dropdown
	const handleChange = (e) => {
		setSelectedValue(e.value);
	}

	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		setActive(true); // results will now be visible

		if (selectedValue != "default" && searchValue == "default") {
			// if dropdown is selected and search is empty
			alert("Search bar is empty!");
		} else {
			axios.get(`${API_BASE}/search/${selectedValue}/text/${searchValue}`)
				.then(response => {
					setStudents(response.data)
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				});

			console.log(students);
		}
	}

	return (
		<div className="search">
			<RecruiterNavbar />
			<Container>
				<h1 className="page-title">Search</h1>
				<Row>
					<Col>
						<Select
							placeholder="Select Option"
							options={data} // set list of the data
							onChange={handleChange} // assign onChange function
							value={data.find(obj => obj.value === selectedValue)} // set selected value
							as={InputGroup.Prepend}
							variant="outline-secondary"
							id="input-group-dropdown1"
							className="dropdown"
						/>
					</Col>

					<Col>
						{/* Search bar */}
						<FormControl aria-describedby="basic-addon1" placeholder="Search..."
							className="search-bar" onChange={e => setSearchValue(e.target.value)} />
					</Col>

					<div className="button-container">
						<Button type="submit" onClick={console.log('save')}>Get Notified</Button>
					</div>

					<div className="button-container">
						<Button type="submit" className="btn-outline-light" onClick={handleClick}>Search</Button>
					</div>
				</Row>
			</Container>

			{/* 
				test values to show print
				<h1>{selectedValue}</h1>
				<h1>{searchValue}</h1> */}

			{active && <div style={{ marginTop: 20, lineHeight: '25px' }}>
				{students.map(student =>
					<Container key={student.userId} className="outter-result-container">
						<Container className="result-container">
							<div className="row-1">
								<p clasName="student-name"><b>{student.firstName} {student.lastName} </b></p>
								<p className="learn-text"><a href="/home-student">Learn more about this student</a></p>
							</div>
							<div className="row-2">
								<p className="student-major"><b>Major -</b> {student.major}</p>
								<Button href={`${API_BASE}/resume?userId=${student.userId}`}>Download Resume</Button>
							</div>
						</Container>
					</Container>)}
			</div>}
		</div>
	);
}

export default HomeRecruiter;
