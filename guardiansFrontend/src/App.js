import React, { Component } from 'react';
import './assets/logo2.png'
import './App.css';
import './Components/css/navbar.css'
import './Components/css/page.css'
import { pushRotate as Menu } from 'react-burger-menu'
import SwipeableTemporaryDrawer from './Components/NewSideBarComp'
class App extends Component {
  render() {
    return (
      <div>
        <div className='pageHeader'>
        <SwipeableTemporaryDrawer/>
        <div>

        </div>
        </div>
      <div className='titleContainer'>
        <h1>Guardians of Hackaton</h1>
      </div>

      </div>
      
    );
  }
}

export default App;
