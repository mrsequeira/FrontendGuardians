import React from 'react';
//import './src/Components/css/forms.css';
import {getTeamFromApiAsync} from './fetchData'
class createTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nameTeam: '',ProjectName: '',description:'',photo: null};
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
    getTeamFromApiAsync(this.state);
  }

    render(){
        return(
            <div className='formContainer'>
                <form onSubmit={this.handleSubmit}>
                    <label for="exampleInputEmail1">Team Name</label>
                    <input name='nameTeam' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter Name of team"   />
                    <label for="exampleInputEmail1">Project</label>
                    <input name='ProjectName' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter Project"/>
                    <label for="exampleInputEmail1">Description of project</label>
                    <input name='description' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter Description of Project"/>
                    <label for="exampleInputEmail1">Team Photo</label>
                    <input name='photo'type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter link Photo"/>
                    <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default createTeam;