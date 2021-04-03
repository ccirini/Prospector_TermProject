import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import SignUpPro from "./components/SignupPro";
import ProHome from "./components/Prohome";
import ViewRecommends from "./components/ViewRecommend";
import ProAccount from "./components/Proaccount";
import NewRecommend from "./components/Newrecommend";
import Search from "./components/Search";
import AboutMe from "./AboutMe";
import Cameron from "./Cameron";
import Fasia from "./Fasia";
import Franklin from "./Franklin";
import George from "./George";
import Tony from "./Tony";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const options = [
  {key: 'jobTitle', text:'Select', value:'jobTitle'},
  {key: 'jobTitle', text:'Job Title', value:'jobTitle'},
  {key: 'salary', text:'Salary', value:'salary'},
];

function App() {

  const [jobs, setJobs] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [option_key, setSelected] = React.useState('jobTitle');
  // const [filteredJobs, setFilteredJobs] = React.useState('default');
  const [dropDownValue, setDropDownValue] = useState("Select an Item");

  useEffect(() => {
    axios.get(`http://localhost:5000/getJobPostings`)
      .then(res => {
          setJobs(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  })


  const getSalary = () => {
    setSelected('salary');
  }

  // const handleSelect=() => {
  //   setOptionsValue('description');
  // }

  const filteredJobs = jobs.filter( job => { 
    return job.jobTitle.toLowerCase().includes(search.toLowerCase());
  })

  // const filteredJobs = jobs.filter(job => {
  //   // return job.jobTitle.toLowerCase().includes(search.toLowerCase());
  //   return job.salary;
  // })

  // useEffect(() => {
  //   setFilteredJobs(jobs.filter(job => {
  //     return job.jobTitle.toLowerCase().includes(search.toLowerCase());
  //   }))
  // }, [search, jobs])

  const changeValue = (text) => {
    this.setDropDownValue({dropDownValue: text});
  }

  return (
    <Router >
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><SignUp /></Route>
            <Route path="/signupPro"><SignUpPro /></Route>
            <Route path="/prohome"><ProHome /></Route>
            <Route path="/viewrecommend"><ViewRecommends /></Route>
            <Route path="/proaccount"><ProAccount /></Route>
            <Route path="/newrecommend">< NewRecommend/></Route>
            <Route path="/search"><Search /></Route>
            <Route exact path="/aboutme"><AboutMe /></Route>
            <Route path="/aboutme/cameron"><Cameron /></Route>
            <Route path="/aboutme/fasia"><Fasia /></Route>
            <Route path="/aboutme/franklin"><Franklin /></Route>
            <Route path="/aboutme/george"><George /></Route>
            <Route path="/aboutme/tony"><Tony /></Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
