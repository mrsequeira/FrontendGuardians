import React, { Component } from 'react';
import './assets/logo2.png'
import './App.css';
import Blog from './Components/app/home/Blog'
import Footer from './Components/ui/footer'
import NavBar from './Components/ui/navbar'
//<Footer />

class App extends Component {
  render() {
    return (
    	// style={{ justifyContent:'center', alignItems:'center',width: '1100px',margin: 'auto'}}
    	<div classname="Site">
				<div >
					<NavBar />
							
				</div>
			</div>

    );
  }
}

export default App;
