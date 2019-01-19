import React, { Component } from "react";
import { fetchProfiles } from './fetchData';
import { deleteParticipantFromApiAsync } from './fetchData';
import { Link } from 'react-router-dom';

class showOneParticipant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      participants: [],
    }
  }

  componentDidMount() {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    fetchProfiles('participants/' + lastURLSegment)
      .then(res => res.json())
      .then(
        (json) => {
          console.log(json);
          this.setState({
            isLoaded: true,
            participants: json,

          });

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleDelete() {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

    deleteParticipantFromApiAsync(lastURLSegment);
  }

  render() {

    const { participants } = this.state;
    var ids = participants.id;
    return (
      <div className="container">
        <div className="col-md-3 col-sm-4 filtr-item col-md-offset-1">
          <div className="card-header bg-dark text-light">
            <div className="row">
              <h5>{participants.name} </h5>
            </div>
            <img src={participants.photo} width="100%" height="100%"></img>
          </div>
          <div className="card-body">
            <h6>
              Course: {participants.course}
            </h6>
            <h6>
              Team: {participants.name_team}
            </h6>
          </div>
          <div className="card-footer">
            <div className="row">
              <a href={"/participant/update/" + ids}>Update me!</a>
            </div>
            <div className="row">
             <a href={"/participants"} onClick={this.handleDelete}>Delete!</a>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default showOneParticipant;