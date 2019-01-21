
export function getToken() {
  // Retrieves the user token from localStorage
  console.log(localStorage.getItem('Authorization'))
  return localStorage.getItem('Authorization')
}

export function fetchProfiles(url) {
    return fetch('https://guardianshackatum.herokuapp.com/api/v1/'+url,{ 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' +  getToken()
      }
    })   
}

export function  getParticipantFromApiAsync(data) {
  return fetch('https://guardianshackatum.herokuapp.com/api/v1/participants', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' +  getToken()
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
      'Authorization' : 'Bearer ' +  getToken()
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
