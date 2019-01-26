import React,{Component} from 'react';
import { getParticipantFromApiAsync } from "../../fetchData";

class createParticipant extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
      vegan:"",
      tshirt_size:"",
      motor_difficulties:"",
      allergies:"",
      leader:"",
      phone:"",
      course:"",
      team_id:"",
      user_id:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    getParticipantFromApiAsync(this.state);
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
          <input name='tshirt_size' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Tshirt size" />
          <label for="exampleInputEmail1">motor_difficulties</label>
          <input name='motor_difficulties' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Motor Dificulties" />
          <label for="exampleInputEmail1">allergies</label>
          <input name='allergies' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Allergies" />
          <label for="exampleInputEmail1">leader</label>
          <input name='leader' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Leader" />
          <label for="exampleInputEmail1">phone</label>
          <input name='phone' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Phone" />
          <label for="exampleInputEmail1">course</label>
          <input name='course' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="course" />
          <label for="exampleInputEmail1">team_id</label>
          <input name='team_id' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="team_id" />
          <label for="exampleInputEmail1">user_id</label>
          <input name='user_id' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="user_id" />
          <br></br>
          <input type="Submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default createParticipant;