import React, { Component } from 'react';
import './css/teamsComp.css'
class TeamsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          
        };
      }
      componentDidMount() {
        fetch("http://localhost:3000/teams")
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
                </div>
              
                <div className='teamsContainer'>
                  {items.map(item=>(
                    <div key={item.id}>
                      <div className='card' style={{width:"70%", height:"20%"}}>
                      <img src={item.photo} width="100%" height="100%"  ></img>
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