import React, { Component } from "react";
import { fetchProfiles } from '../../fetchData';
import { deleteMentorFromApiAsync } from '../../fetchData';


class showOneMentor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
    }
  }

  componentDidMount() {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    fetchProfiles('mentors/' + lastURLSegment)
      .then(res => res.json())
      .then(
        (json) => {
          console.log(json);
          this.setState({
            isLoaded: true,
            mentors: json,

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

    deleteMentorFromApiAsync(lastURLSegment);
  }

  render() {

    const { mentors } = this.state;
    var ids = mentors.id;
    return (
      <div className="container">
        <div className="col-md-3 col-sm-4 filtr-item col-md-offset-1">
          <div className="card-header bg-dark text-light">
            <div className="row">
              <h5>{mentors.name_mentor} </h5>
            </div>
            <img src={mentors.photo} width="100%" height="100%"></img>
          </div>
          <div className="card-footer">
            <div className="row">
              <a href={"/update/participant/" + ids}>Update me!</a>
            </div>
            <div className="row">
             <a href={"/mentors"} onClick={this.handleDelete}>Delete!</a>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default showOneMentor;