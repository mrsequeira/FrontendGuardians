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

  //passar a token da password
  var resetpwd_token = this.props.match.params.token
  return fetch(`https://guardianshackatum.herokuapp.com/api/v1/${resetpwd_token}/reset/`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
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
                  <label for="exampleInputEmail1">Enter your new password.</label>
                  <input name='password' type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Enter your new password"   />
                {/* ADD VALIDATIONS HERE + CONFIRM PASSWORD */}
                  <br></br>
                  <input type="submit" value="Reset password"/>
              </form>
          </div>
      )
  }
}

export default forgot;