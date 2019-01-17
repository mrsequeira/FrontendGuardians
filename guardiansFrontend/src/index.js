import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Components/css/teamsComp.css'
import TeamsComponent from './Components/TeamsComponent';
import createTeam from './Components/createTeam';
import oneteam from './Components/showOneTeam';
import upadteTeam from './Components/updateTeam';
import ParticipantsComponent from './Components/ParticipantsComponent';
import createParticipant  from "./Components/createParticipant";
import showOneParticipant from './Components/showOneParticipant';
import updateParticipant from './Components/updateParticipant';

const routing = (
    <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/teams" component={TeamsComponent} />
      <Route path="/themes"/>
      <Route path="/team/create/" component={createTeam}/>
      <Route path="/team/" component={oneteam}/>
      <Route path='/update/team/' component={upadteTeam} />
      <Route path="/participants" component={ParticipantsComponent}/>
      <Route path="/participant_/create/" component={createParticipant}></Route>
      <Route path="/participant/" component={showOneParticipant}></Route>
      <Route path="/participant__/update/" component={updateParticipant}></Route>
    </div>
  </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

