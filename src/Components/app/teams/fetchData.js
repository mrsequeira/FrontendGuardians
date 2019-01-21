export function getToken() {
  // Retrieves the user token from localStorage
  console.log(localStorage.getItem('Authorization'))
  return localStorage.getItem('Authorization')
}

export function fetchProfiles(url) {
    return fetch('https://guardianshackatum.herokuapp.com/api/v1/'+url ,{ 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' +  getToken()
      }
    })   
}

export function  getTeamFromApiAsync(data) {
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/teams', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' +  getToken()
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
      'Authorization' : 'Bearer ' +  getToken()
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
      'Authorization' : 'Bearer ' +  getToken()
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

}
