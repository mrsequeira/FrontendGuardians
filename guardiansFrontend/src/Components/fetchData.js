
let token = localStorage.getItem('Authorization');

const AuthStr = 'Bearer '.concat(token);
export function fetchProfiles(url) {
  console.log(AuthStr)
  return fetch('http://localhost:3000/api/v1/'+url,{
      method: 'get',
      headers: {
        'Authorization': AuthStr,
      }
  });   
}


export function  getTeamFromApiAsync(data) {
  return fetch('http://localhost:3000/api/v1/teams', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
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
  return fetch('http://localhost:3000/api/v1/teams/'+lastURLSegment, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
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

  return fetch('http://localhost:3000/api/v1/teams/'+id, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
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
  return fetch('http://localhost:3000/api/v1/participants', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
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
      team_id: data.team_id,
      user_id: data.user_id,
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
  return fetch('http://localhost:3000/api/v1/participants/'+lastURLSegment, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
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
      team_id: data.team_id,
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

  return fetch('http://localhost:3000/api/v1/participants/'+id, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

}

//Mentors

export function  getMentorFromApiAsync(data) {
  return fetch('http://localhost:3000/api/v1/mentors', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
    },
    body: JSON.stringify({
      name_mentor: data.name_mentor,
      vegan: data.vegan,
      tshirt_size: data.tshirt_size,
      mentor_difficulties: data.mentor_difficulties,
      mentor_allergies: data.mentor_allergies,
      theme_id: data.theme_id,
      user_id: data.user_id,
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });
}



export function  deleteMentorFromApiAsync(id) {
  return fetch('http://localhost:3000/api/v1/mentors/'+id, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': AuthStr,
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });
}
