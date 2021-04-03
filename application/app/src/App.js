import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignupStudent from "./components/Signup-Student";
import Search from "./components/Search";
import Signup from "./pages/Signup";
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


function App() {

  return (
    <Router >
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/signup-student"><SignupStudent /></Route>
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
