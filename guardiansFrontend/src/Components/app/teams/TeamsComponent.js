import React, { Component } from 'react';
import '../../css/teamsComp.css';
import {fetchProfiles} from '../../fetchData';


class TeamsComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
        error: null,
      };
    
    }
    componentDidMount() {
      fetchProfiles('teams')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw new Error('Erro');
        }
       })
        .then(
          (json) => {
            console.log(json);
            this.setState({
              isLoaded: true,
              items: json,
            
            });
            
          }
        )
        .catch(error => this.setState({ error }));
    }


  render(){
    const { error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
      else{
         return(
          <div>
              <div className='titleTeamsContainer'>
                 <h1>Teams</h1>
                 <a  href='/team/create'>create Team</a>
              </div>
              <div className='teamsContainer'>
                {this.state.items.map(item=>(
                  <div key={item.id}>
                    <div className='card' style={{width:300, height:"20%"}}>
                    <img src={item.photo} width="300" height="300"  ></img>
                      <div name='team' class="card-body"  const teamid={item.id} >
                      <h3>{item.name}</h3>
                      <p class="card-text">{item.description}</p>
                      <a href={'/oneteam/'+item.id} className="btn btn-primary">More...
                      </a>
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