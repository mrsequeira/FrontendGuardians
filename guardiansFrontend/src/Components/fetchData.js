
let token = localStorage.getItem('Authorization');

export function fetchProfiles(url) {
  console.log('este é o token   '+token)
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/'+url,{
      method: 'get',
      headers: {
        'Authorization': token,
      }
  });   
}


export function  getTeamFromApiAsync(data) {
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/teams', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      name: data.nameTeam,
      project: data.ProjectName,
      description: data.description,
      photo: data.photo
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

}

export function  updateTeamFromApiAsync(data) {
  var pageURL = window.location.href;
  var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  console.log(lastURLSegment)
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/teams/'+lastURLSegment, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      name: data.nameTeam,
      project: data.ProjectName,
      description: data.description,
      photo: data.photo
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

} 

export function  DeleteTeamFromApiAsync(id) {

  return fetch('https://guardianshackatum.herokuapp.com/api/v1/teams/'+id, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

}

export function  getParticipantFromApiAsync(data) {
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/participants', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      name: data.name,
      vegan: data.vegan,
      tshirt_size: data.tshirt_size,
      motor_difficulties: data.motor_difficulties,
      allergies: data.allergies,
      leader: data.leader,
      phone: data.phone,
      course: data.course,
      team_id: data.team_id
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function  updateParticipantFromApiAsync(data) {
  var pageURL = window.location.href;
  var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  console.log(lastURLSegment) 
  debugger;
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/participants/'+lastURLSegment, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      name: data.name,
      vegan: data.vegan,
      tshirt_size: data.tshirt_size,
      motor_difficulties: data.motor_difficulties,
      allergies: data.allergies,
      leader: data.leader,
      phone: data.phone,
      course: data.course,
      team_id: data.team_id
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

} 

export function  deleteParticipantFromApiAsync(id) {

  return fetch('https://guardianshackatum.herokuapp.com/api/v1/participants/'+id, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

}
