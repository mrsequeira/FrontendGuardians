import React, { Component } from 'react';
//import './src/Components/css/participants.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import update from 'immutability-helper'
import Participant from './Participant';
import { fetchProfiles } from './fetchData';
import FooterComponent from '../../FooterComponent'; 

class ParticipantsComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      participants: [],
      error: null,
    }
  }
 
  componentDidMount() {
      fetchProfiles("participants")
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          else {
            throw new Error('Erro');
          }
      })
      .then(data => this.setState({ participants: data }))
      .catch(error => this.setState({ error }));
  }

  deleteParticipant = (id) => {
    axios.delete(`https://guardianshackatum.herokuapp.com/api/v1/participants/${id}`)
    .then(response => {
      const ideaIndex = this.state.participants.findIndex(x => x.id === id)
      console.log(ideaIndex);
      const participants = update(this.state.participants, { $splice: [[ideaIndex, 1]]})
      this.setState({participants: participants})
    })
    .catch(error => console.log(error))
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div>
      <div id="ContainerParticipants" className="container">
        <h1 style={{textAlign:"center"}}>
          All Participants!
        </h1>   

        <div>
          {/* <a href="/participant_/create">Create Participant</a> */}
          <Link to="/participant/create">Create Participant!</Link>
        </div>
        <div className="row small-up-2 medium-up-5">

          {this.state.participants.map(p => (
            <div className="col-md-3 col-sm-4 filtr-item col-md-offset-1" key={p.id} style={{marginBottom:'1%'}}>
              <div className="card-header bg-dark text-light">
              <Participant p={p} key={p.id} onDelete={this.deleteParticipant}></Participant>
                <div className="row">
                  <h5>{p.name} </h5>
                </div>
                <img src={p.photo} width="100%" height="100%"></img>
              </div>
              <div className="card-body">
                <h6>
                  Course: {p.course}
                </h6>
                <h6>
                  Team: {p.name_team}
                </h6>
              </div>
              <div className="card-footer">
                <a href={"/participant/"+p.id}>SHOW MORE
                  {/* <button className="btn btn-dark btn-sm" onClick={this.onClick} key={p.id}>
                  click for more!
                  </button> */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default ParticipantsComponent;