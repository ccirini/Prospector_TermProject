import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignupStudent from "./components/Signup-Student";
import SignUpProfessor from "./components/Signup-Professor";
import SignUpRecruiter from "./components/Signup-Recruiter";
import ProHome from "./components/Prohome";
import ViewRecommends from "./components/ViewRecommend";
import ProfessorAccount from "./components/Account-Professor";
import RecruiterAccount from "./components/Account-Recruiter";
import Delete from "./components/Delete";
import EditProfessor from "./components/Edit-Professor";
import NewRecommend from "./components/Newrecommend";
import Search from "./components/Search";
import Signup from "./components/Signup";
import AboutMe from "./AboutMe";
import Cameron from "./Cameron";
import Fasia from "./Fasia";
import Franklin from "./Franklin";
import George from "./George";
import Tony from "./Tony";

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
            <Route path="/prohome"><ProHome /></Route>
            <Route path="/viewrecommend"><ViewRecommends /></Route>
            <Route path="/account-professor"><ProfessorAccount /></Route>
            <Route path="/account-recruiter"><RecruiterAccount /></Route>
            <Route path="/newrecommend">< NewRecommend/></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/delete"><Delete /></Route>
            <Route path="/edit-professor"><EditProfessor /></Route>
            

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
