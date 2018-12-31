import React, { Component } from 'react';
import './css/teamsComp.css'
import {fetchProfiles} from './fetchData'
class TeamsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          
        };
      }
      componentDidMount() {
        fetchProfiles('teams')
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
           return(
            <div>
                <div className='titleTeamsContainer'>
                   <h1>Teams</h1>
                   <a  href='/team/create'>create Team</a>
                </div>
               
                <div className='teamsContainer'>
                  {items.map(item=>(
                    <div key={item.id}>
                      <div className='card' style={{width:300, height:"20%"}}>
                      <img src={item.photo} width="300" height="300"  ></img>
                        <div class="card-body">
                        <h3>{item.name}</h3>
                        <p class="card-text">{item.description}</p>
                        <a href={'/teams/' + item.name} className="btn btn-primary">More...</a>
                        </div>                             
                      </div>
                    </div>
                  ))}
     
             </div>
            </div>

           );
        }
        
      }
}
export default TeamsComponent;