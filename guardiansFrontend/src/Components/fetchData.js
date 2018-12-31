
export function fetchProfiles(url) {
    return fetch('http://localhost:3000/'+url)   
}

export function  getTeamFromApiAsync(data) {
  return fetch('http://localhost:3000/teams', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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