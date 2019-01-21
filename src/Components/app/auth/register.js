import React,{Component} from 'react';

class register extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '',password: ''};
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
  //getTeamFromApiAsync(this.state);

  return fetch('https://guardianshackatum.herokuapp.com/api/v1/register', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
      return(
          <div className='formContainer'>
              <form onSubmit={this.handleSubmit}>
                  <label for="exampleInputEmail1">Email</label>
                  <input name='email' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter your email address"   />
                  <label for="exampleInputEmail1">Password</label>
                  <input name='password' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter your SECRET password"/>
                  <br></br>
                  <input type="submit" value="Submit"/>
              </form>
          </div>
      )
  }
}

export default register;