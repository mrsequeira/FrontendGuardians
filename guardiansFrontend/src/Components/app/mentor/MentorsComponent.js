import React, { Component } from 'react';
//import './src/Components/css/participants.css';
import axios from 'axios';
import update from 'immutability-helper'
import Mentor from './Mentor';
import { fetchProfiles } from '../../fetchData';
import FooterComponent from '../../FooterComponent'; 

class MentorComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mentors: [],
      error: null,
    }
  }
 
  componentDidMount() {
      fetchProfiles("mentors")
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          else {
            throw new Error('Erro');
          }
      })
      .then(data => this.setState({ mentors: data }))
      .catch(error => this.setState({ error }));
  }

  deleteParticipant = (id) => {
    let token = localStorage.getItem('Authorization');
    const AuthStr = 'Bearer '.concat(token);
    axios.delete(`http://localhost:3000/api/v1/mentors/${id}`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
      }
    })
    .then(response => {
      const ideaIndex = this.state.mentors.findIndex(x => x.id === id)
      console.log(ideaIndex);
      const mentors = update(this.state.mentors, { $splice: [[ideaIndex, 1]]})
      this.setState({mentors: mentors})
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
          All Mentors!
        </h1>   

        <div>
          <a href="/mentor_/create">Create Mentor</a>
          {/* <Link to="/participant/create">Create Participant!</Link> */}
        </div>
        <div className="row small-up-2 medium-up-5">

          {this.state.mentors.map(p => (
            <div className="col-md-3 col-sm-4 filtr-item col-md-offset-1" key={p.id} style={{marginBottom:'1%'}}>
              <div className="card-header bg-dark text-light">
              <Mentor p={p} key={p.id} onDelete={this.deleteParticipant}></Mentor>
                <div className="row">
                  <h5>{p.name_mentor} </h5>
                </div>
                <img src={p.photo} width="100%" height="100%"></img>
              </div>
              <div className="card-footer">
                <a href={"/mentor/"+p.id}>SHOW MORE
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

export default MentorComponent;