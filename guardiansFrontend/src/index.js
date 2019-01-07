import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Components/css/teamsComp.css';
import TeamsComponent from './Components/TeamsComponent';
import ParticipantsComponent from './Components/ParticipantsComponent';
import Profile from './Components/Profile';


const routing = (
    <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/teams" component={TeamsComponent} />
      <Route path="/themes"/>
      <Route path="/participants" component={ParticipantsComponent}/>
    </div>
  </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

