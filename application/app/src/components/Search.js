import {Link} from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';

const Search= () =>{
    const data = [
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

    const [selectedValue, setSelectedValue] = useState("default");
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [jobs, setJobs] = React.useState([]);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedValue(e.value);
    }

    function handleClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
        setActive(true);
    }

    useEffect(() => {
        axios.get(`http://54.70.249.83/:5000/getJobPostings`)
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => {
            console.log(err);
            })
    },[])

    return(
        <div className="search">
            <h1>Matches</h1>
            <Select
                placeholder="Select Option"
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                value={data.find(obj => obj.value === selectedValue)} // set selected value
                className="dropdown"
            />
            
            <InputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1" placeholder="Search..."
                className="search" onChange={e => setSearch(e.target.value)}/>
                <Button type="submit" onClick={handleClick}>Search</Button>
            </InputGroup>

            
            
            <h1>{selectedValue}</h1>

            {active && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <ul>
                    {jobs.map(job => <div key={job.id}>{job.jobTitle}</div>)}
                </ul>
            </div>}
            </div>
    );
}

export default Search;