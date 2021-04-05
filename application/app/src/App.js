import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SignupStudent from "./pages/student/Signup-Student";
import SignUpProfessor from "./pages/professor/Signup-Professor";
import SignUpRecruiter from "./pages/recruiter/Signup-Recruiter";

import HomeStudent from "./pages/student/Home-Student";
import HomeProfessor from "./pages/professor/Home-Professor";
import HomeRecruiter from "./pages/recruiter/Home-Recruiter";

import StudentAccount from "./pages/student/Account-Student";
import ProfessorAccount from "./pages/professor/Account-Professor";
import RecruiterAccount from "./pages/recruiter/Account-Recruiter";

import EditProfessor from "./pages/professor/Edit-Professor";
import EditStudent from "./pages/student/Edit-Student";
import EditRecruiter from "./pages/recruiter/Edit-Recruiter";

import ViewRecommends from "./pages/professor/ViewRecommend";
import NewRecommend from "./pages/professor/Newrecommend";
import Delete from "./components/Delete";

import AboutMe from "./pages/AboutMe";
import Cameron from "./pages/team/Cameron";
import Fasia from "./pages/team/Fasia";
import Franklin from "./pages/team/Franklin";
import George from "./pages/team/George";
import Tony from "./pages/team/Tony";
import Pdf from "./components/Pdf";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';

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
            <Route path="/signup-professor"><SignUpProfessor /></Route>
            <Route path="/signup-recruiter"><SignUpRecruiter /></Route>
            <Route path="/home-student"><HomeStudent /></Route>
            <Route path="/home-professor"><HomeProfessor /></Route>
            <Route path="/viewrecommend"><ViewRecommends /></Route>
            <Route path="/account-student"><StudentAccount/></Route>
            <Route path="/account-professor"><ProfessorAccount /></Route>
            <Route path="/account-recruiter"><RecruiterAccount /></Route>
            <Route path="/newrecommend">< NewRecommend/></Route>
            <Route path="/home-recruiter"><HomeRecruiter /></Route>
            <Route path="/delete"><Delete /></Route>
            <Route path="/edit-student"><EditStudent /></Route>
            <Route path="/edit-professor"><EditProfessor /></Route>
            <Route path="/edit-recruiter"><EditRecruiter /></Route>
            <Route path="/delete"><Delete /></Route>
            
            <Route exact path="/aboutme"><AboutMe /></Route>
            <Route path="/aboutme/cameron"><Cameron /></Route>
            <Route path="/aboutme/fasia"><Fasia /></Route>
            <Route path="/aboutme/franklin"><Franklin /></Route>
            <Route path="/aboutme/george"><George /></Route>
            <Route path="/aboutme/tony"><Tony /></Route>

            <Route exact path="/pdf" component={Pdf} />
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
