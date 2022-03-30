/*
fetch('https://api.fantasynerds.com/v1/nfl/adp?apikey=TEST', {
    mode: 'no-cors'
})
.then((data) => {
    return data.json();
    
})
function successFunction(response) {
    console.log(response);
    console.log(response.data);
    // Change the page however you want here if needed
    }
function failureFunction(error) {
    console.log(error);
    // Change the page however you want here if needed
    }
axios.request({
    method: 'GET',
    
    url: 'https://www.balldontlie.io/api/v1/players'
}).then(successFunction).catch(failureFunction);
*/



// I successfully retrieved the data from balldontlie.io
function successFunction(response) {
    console.log(response);
    console.log(response.data.data);
    // Change the page however you want here if needed
    const players = response.data.data;
    const playersDiv = document.getElementById('playerName');
    players.forEach(player => {
        const playerElement = document.createElement('p');
        playerElement.innerText = `${player.first_name} ${player.last_name} ${player.position}`;
        playersDiv.append(playerElement);
    })
    }
function failureFunction(error) {
    console.log(error);
    // Change the page however you want here if needed
    }
let players = axios.request({
        method: 'GET',
        
        url: 'https://www.balldontlie.io/api/v1/players'
    }).then(successFunction).catch(failureFunction);
/*    
    axios.request({ 
    url: 'https://api.fantasynerds.com/v1/nfl/adp?apikey=TEST',
    method: 'POST',
    mode: 'no-cors'
    

    }).then(successFunction).catch(failureFunction);
console.log(players);

fetch('https://www.balldontlie.io/api/v1/players')
    .then(response => response.json())
    .then(players => showPlayers(players.results));
    
showPlayers = players => {
    const playersDiv = document.getElementById('playerName');
    players.forEach(player => {
    const playerElement = document.createElement('p');
    playerElement.innerText = `Player Name: ${player.first_name}`;
    playersDiv.append(playerElement);
        });
}
*/ 