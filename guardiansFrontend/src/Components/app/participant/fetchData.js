
export function fetchProfiles(url) {
    return fetch('http://localhost:3000/'+url)   
}

export function  getParticipantFromApiAsync(data) {
  return fetch('http://localhost:3000/participants', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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
  return fetch('http://localhost:3000/participants/'+lastURLSegment, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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

  return fetch('http://localhost:3000/participants/'+id, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });

}
