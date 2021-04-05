import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignupStudent from "./components/Signup-Student";
import SignUpProfessor from "./components/Signup-Professor";
import SignUpRecruiter from "./components/Signup-Recruiter";
import HomeStudent from "./components/Home-Student";
import HomeProfessor from "./components/Home-Professor";
import ViewRecommends from "./components/ViewRecommend";
import StudentAccount from "./components/Account-Student";
import ProfessorAccount from "./components/Account-Professor";
import RecruiterAccount from "./components/Account-Recruiter";
import Delete from "./components/Delete";
import EditStudent from "./components/Edit-Student";
import EditProfessor from "./components/Edit-Professor";
import EditRecruiter from "./components/Edit-Recruiter";
import NewRecommend from "./components/Newrecommend";
import HomeRecruiter from "./components/Home-Recruiter";
import Signup from "./components/Signup";
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
