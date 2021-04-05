import "./Home-Recruiter.css";
import React, {useState, useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Select from 'react-select';
import axios from 'axios';
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import { Document, Page } from 'react-pdf'

const MyDoc = () => (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
)


const HomeRecruiter = () =>{
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    const data = [
        {
            value: "default",
            label: "Select Option"
        },
        {
            value: "major",
            label: "Major"
        },
        {
            value: "gender",
            label: "Gender"
        },
        {
            value: "ethnicity",
            label: "Ethnicity"
        },
        {
            value: "veteranStatus",
            label: "Veteran"
        },
        {
            value: "disabilityStatus",
            label: "Disability"
        },
        {
            value: "financialAidStatus",
            label: "Financial Aid"
        },
        {
            value: "firstGeneration",
            label: "First Generation"
        }
    ];

    const [selectedValue, setSelectedValue] = useState('default');
    const [searchValue, setSearchValue] = useState('default');
    const [active, setActive] = useState(false);
    const [students, setStudents] = React.useState([]);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedValue(e.value);
    }

    function handleClick(e) {
        // if statement to check if dropdown is selcted but search is empty

        e.preventDefault();
        console.log('The button was clicked.');
        setActive(true);

        if (selectedValue != "default" && searchValue == "default"){
            alert("Search bar is empty!");
        } else {
            // axios.get(`http://54.70.249.83:5000/search/${selectedValue}/text/${searchValue}`)
            axios.get(`http://localhost:5000/search/${selectedValue}/text/${searchValue}`)
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }



    return (
        <div className="search">
            <h1>Matches</h1>
            <Container>
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
                        className="search-bar" onChange={e => setSearchValue(e.target.value)}/>
                    </Col>
                    <Col><Button type="submit" onClick={console.log('save')}>Get Notified</Button></Col>
                    <Col><Button type="submit" onClick={handleClick}>Search</Button></Col>
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
                        <Row className="row-1">
                            <p clasName="student-name"><b>{student.firstName} {student.lastName} </b></p>
                        </Row>
                        <Row className="row-1">
                            <p className="learn-text">Learn more about this student</p>
                        </Row>
                        <Row className="row-2">
                            <Col><p className="student-major"><b>Major -</b> {student.major}</p></Col>
                            <Col><Button href="./pdf">Download Resume</Button></Col>
                        </Row>
                    </Container>
                </Container>)}
            </div>}

            </div>
    );
}

export default HomeRecruiter;
