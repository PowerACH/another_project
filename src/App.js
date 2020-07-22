import React from 'react';
import './App.css';
import QuestionOne from './Components/Question1'
import QuestionTwo from './Components/Question2'
import QuestionThree from './Components/Question3'
import QuestionFour from './Components/Question4'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Question1">Question1</Link>
            </li>
           <li>
             <Link to="/Question2">Question2</Link>
           </li>
           <li>
             <Link to="/Question3">Question3</Link>
           </li>
           <li>
             <Link to="/Question4">Question4</Link>
           </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Question1">
            <QuestionOne />
          </Route>
          <Route path="/Question2">
            <QuestionTwo />
          </Route>
          <Route path="/Question3">
            <QuestionThree />
          </Route>
          <Route path="/Question4">
            <QuestionFour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}