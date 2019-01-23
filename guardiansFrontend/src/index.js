import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Components/css/teamsComp.css'
// team imports
import TeamsComponent from './Components/app/teams/TeamsComponent';
import createTeam from './Components/app/teams/createTeam';
import oneteam from './Components/app/teams/showOneTeam';
import upadteTeam from './Components/app/teams/updateTeam';
// participant imports
import ParticipantsComponent from './Components/app/participant/ParticipantsComponent';
import createParticipant  from "./Components/app/participant/createParticipant";
import showOneParticipant from './Components/app/participant/showOneParticipant';
import updateParticipant from './Components/app/participant/updateParticipant';
// Auth imports
import login from './Components/app/auth/login';
import register from './Components/app/auth/register';
import forgotpwd from './Components/app/auth/forgotpwd';
import newpwd from './Components/app/auth/newpwd';

//import {register, forgotpwd} from './Components/app/auth/' WE NEED SOMETHING LIKE THIS, NEED TO INVESTIGATE MORE!!!!
//otherwise we will have a bible just with imports xD

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
      <Route path="/update/participant/" component={updateParticipant}></Route>
      {/*  Authentication routes */}
      <Route path="/login/" component={login}></Route>
      <Route path="/register/" component={register}></Route>
      <Route path="/forgot_password/" component={forgotpwd}></Route>
      <Route path="/:token/reset/" component={newpwd}></Route>
      {/* /:token/reset/ */}
    </div>
  </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

