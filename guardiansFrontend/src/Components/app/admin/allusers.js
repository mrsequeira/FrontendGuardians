import React, {Component} from 'react';

// ESTE MÓDULO VAI SER ELIMINADO! FOI ADICIONADO APENAS PARA TESTAR O FUNCTIONAMENTO DA JWT E NOVAS ANALOGIAS
const ENDPOINT = 'https://guardianshackatum.herokuapp.com/api/v1/participants';

export function getToken() {
  // Retrieves the user token from localStorage
  console.log(localStorage.getItem('Authorization'))
  return localStorage.getItem('Authorization')
}

class allusers extends Component {

  constructor() {
    super();
    this.state = {
      emails: [],
    };
   
  }
  
  componentDidMount(){
    fetch(ENDPOINT ,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' +  getToken()
      }
    })
    .then(res => {
      if (res.ok) {
        console.log(res.json())

      }
      else {
        console.log('Im getting nervous here')
      }
    })

    
  }

  render(){
    return (
      <div className="container2">
        <div className="container1">
          {this.state.emails}
        </div>
      </div>
    );
  }
}

export default allusers;