import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignupStudent from "./components/Signup-Student";
import SignUpPro from "./components/SignupPro";
import ProHome from "./components/Prohome";
import ViewRecommends from "./components/ViewRecommend";
import ProAccount from "./components/Proaccount";
import NewRecommend from "./components/Newrecommend";
import Search from "./components/Search";
import Signup from "./components/Signup";
import AboutMe from "./pages/AboutMe";
import Cameron from "./pages/team/Cameron";
import Fasia from "./pages/team/Fasia";
import Franklin from "./pages/team/Franklin";
import George from "./pages/team/George";
import Tony from "./pages/team/Tony";

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
