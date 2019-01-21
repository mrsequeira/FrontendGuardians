import React,{Component} from 'react';
import {fetchProfiles} from './fetchData';
import {updateParticipantFromApiAsync} from './fetchData';

class updateParticipant extends Component {

  constructor(props){
    super(props);
    this.state = {
      participants: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    fetchProfiles('participants/'+lastURLSegment)
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


  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    updateParticipantFromApiAsync(this.state);
  }

  render() {
    return (
      <div className='formContainer'>
        <form onSubmit={this.handleSubmit}>
          <label for="exampleInputEmail1">Participant name</label>
          <input name='name' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter Name of Participant" />
          <label for="exampleInputEmail1">Vegan</label>
          <input name='vegan' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Vegan" />
          <label for="exampleInputEmail1">tshirt_size</label>
          <input name='tshirt_size' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter Description of Project" />
          <label for="exampleInputEmail1">motor_difficulties</label>
          <input name='motor_difficulties' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo" />
          <label for="exampleInputEmail1">allergies</label>
          <input name='allergies' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo" />
          <label for="exampleInputEmail1">leader</label>
          <input name='leader' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo" />
          <label for="exampleInputEmail1">phone</label>
          <input name='phone' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo" />
          <label for="exampleInputEmail1">course</label>
          <input name='course' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo" />
          <label for="exampleInputEmail1">team_id</label>
          <input name='team_id' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo" />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default updateParticipant;