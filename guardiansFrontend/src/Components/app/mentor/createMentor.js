import React,{Component} from 'react';
import { getMentorFromApiAsync } from "../../fetchData";

class createMentor extends Component {

  constructor(props){
    super(props);
    this.state = {
      name_mentor:"",
      vegan:"",
      tshirt_size:"",
      mentor_difficulties:"",
      mentor_allergies:"",
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
    getMentorFromApiAsync(this.state);
  }

  render() {
    return (
      <div className='formContainer'>
        <form onSubmit={this.handleSubmit}>
          <label for="exampleInputEmail1">Mentor name</label>
          <input name='name_mentor' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter Name of Participant" />
          <label for="exampleInputEmail1">Vegan</label>
          <input name='vegan' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Vegan" />
          <label for="exampleInputEmail1">tshirt_size</label>
          <input name='tshirt_size' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Tshirt size" />
          <label for="exampleInputEmail1">motor_difficulties</label>
          <input name='mentor_difficulties' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Mentor difficulties" />
          <label for="exampleInputEmail1">allergies</label>
          <input name='mentor_allergies' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Mentor allergies" />
          <label for="exampleInputEmail1">theme_id</label>
          <input name='theme_id' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="theme_id" />
          <label for="exampleInputEmail1">user_id</label>
          <input name='user_id' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="user id" />
          <br></br>
          <input type="Submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default createMentor;