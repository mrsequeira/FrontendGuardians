import React, { Component } from 'react';
import './assets/logo2.png'
import './App.css';
import './Components/css/navbar.css'
import './Components/css/page.css'
import { pushRotate as Menu } from 'react-burger-menu'
class App extends Component {
  render() {
    return (
      <div>
        <div className='pageHeader'>
        <Menu>
            <a  className="menu-item" href="/">Home</a>
            <a  className="menu-item" href="/teams">Teams</a>
            <a  className="menu-item" href="/themes">Themes</a>
            <a  className="menu-item" href="/prices">Pricies</a>
            <a  className="menu-item" href="/participants">participants</a>
            <button class="btn btn-warning" >Login</button>
          </Menu>
        </div>
      <div className='titleContainer'>
        <h1>Guardians of Hackaton</h1>
      </div>
      </div>
      
    );
  }
}

export default App;
