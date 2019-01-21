import React,{Component} from 'react';

class forgot extends Component {

  constructor(props) {
    super(props);
    this.state = {email: ''};
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

  return fetch('https://guardianshackatum.herokuapp.com/api/v1/forgot', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: this.state.email
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
                  <label for="exampleInputEmail1">Enter your email address and we will send you a link to reset your password.</label>
                  <input name='email' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter your email address"   />
                  <br></br>
                  <input type="submit" value="Send password reset email"/>
              </form>
          </div>
      )
  }
}

export default forgot;