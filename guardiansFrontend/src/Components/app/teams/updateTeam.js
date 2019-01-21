import React from 'react';
import '../../css/teamsComp.css';
import {updateTeamFromApiAsync} from '../../fetchData';
import {fetchProfiles} from '../../fetchData';
class upadteTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          nameTeam: '',ProjectName: '',description:'',photo: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
      }
      
      componentDidMount() {
        var pageURL = window.location.href;
        var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
        fetchProfiles('teams/'+lastURLSegment)
        .then(res => res.json())
          .then(
            (json) => {
              console.log(json);
              this.setState({
                isLoaded: true,
                items: json,
              
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
        updateTeamFromApiAsync(this.state);
      }

    render(){
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
          return <div>Loading...</div>;
        }
        else{
        return(
            
            <div className='formContainer'>
                <form onSubmit={this.handleSubmit}>
                    <label for="exampleInputEmail1">Team Name</label>
                    <input name='nameTeam' type="text" placeholder={items.name} value={this.state.value} onChange={this.handleChange} className="form-control"/>
                    <label for="exampleInputEmail1">Project</label>
                    <input name='ProjectName' type="text" placeholder={items.project}value={this.state.value} onChange={this.handleChange} className="form-control"/>
                    <label for="exampleInputEmail1">Description of project</label>
                    <input name='description' placeholder={items.description} type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
                    <label for="exampleInputEmail1">Team Photo</label>
                    <input name='photo'type="text" placeholder={items.photo}value={this.state.value} onChange={this.handleChange} className="form-control"/>
                    <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
}export default upadteTeam