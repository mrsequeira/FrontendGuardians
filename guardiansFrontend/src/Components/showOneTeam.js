import React, { Component } from 'react';
import './css/teamsComp.css';
import {fetchProfiles} from './fetchData';

class oneteam  extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  
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
    render(){
      const { isLoaded, items } = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      else{
          console.log(items) 
         var ids=items.id;
          console.log(ids)
        return (
          <div>
              <div className='oneTeamContainer'>
                  <h1>{items.name}</h1>
              <div className='photoContainer'>
                  <img  src={items.photo} max-width="900" height="600"></img>
              </div>
          </div>
              <div className='atributesContainer'>
                    <ul>
                      <li fontSize='20px'> 
                        Projeto: {items.project}
                      </li>
                      <li fontSize='20px'> 
                        Descrição: {items.description}     
                      </li>
                    </ul>
                <a href={"/update/team/"+ids}>Update</a>
                <br/>
                <button>Delete</button>
                </div>
                
          </div>

         
        );
      }
    }
  }
  export default oneteam;