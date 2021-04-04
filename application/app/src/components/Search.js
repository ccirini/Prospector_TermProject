import "./Search.css";
import React, {useState, useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Select from 'react-select';
import axios from 'axios';

const Search= () =>{
    const data = [
        {
            value: "default",
            label: "Select Option"
        },
        {
            value: "major",
            label: "major"
        },
        {
            value: "gender",
            label: "gender"
        },
        {
            value: "ethnicity",
            label: "ethnicity"
        },
        {
            value: "veteran",
            label: "veteran"
        },
        {
            value: "option5",
            label: "option5"
        },
        {
            value: "option6",
            label: "option6"
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
            axios.get(`http://54.70.249.83:5000/search/${selectedValue}/text/${searchValue}`)
            //axios.get(`http://localhost:5000/search/${selectedValue}/text/${searchValue}`)
            // axios.get(`http://localhost:5000/search/`)
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
                    <Col style={{ padding-left: 0, padding-right: 0 }}><Button type="submit" onClick={console.log('save')}>Get Notified</Button></Col>
                    <Col style={{ padding-left: 0, padding-right: 0 }}><Button type="submit" onClick={handleClick}>Search</Button></Col>
                </Row>
            </Container>

            <h1>{selectedValue}</h1>
            <h1>{searchValue}</h1>

            {active && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <ul>
                    {students.map(student => <div key={student.userId}>{student.firstName} {student.lastName} {student.major}</div>)}
                </ul>
            </div>}
            </div>
    );
}

export default Search;
