import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Cameron from './Cameron';
import Fasia from './Fasia';
import Franklin from './Franklin';
import George from './George';
import Tony from './Tony';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className ="Content">
          <Switch>
          <Route exact path="/">
              <AboutMe/>
            </Route>
            <Route exact path="/aboutme">
              <AboutMe/>
            </Route>
            <Route path="/aboutme/cameron">
              <Cameron/>
            </Route>
            <Route path="/aboutme/fasia">
              <Fasia/>
            </Route>
            <Route path="/aboutme/franklin">
              <Franklin/>
            </Route>
            <Route path="/aboutme/george">
              <George/>
            </Route>
            <Route path="/aboutme/tony">
              <Tony/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
