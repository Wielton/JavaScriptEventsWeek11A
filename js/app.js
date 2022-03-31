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




// I successfully retrieved the data from balldontlie.io

    /*
axios.request({
        method: 'GET',
        
        Ocp-Apim-Subscription-Key: {key},
        url: 'https://api.sportsdata.io/api/nfl/fantasy/json/FantasyPlayers'
    }).then(successFunction).catch(failureFunction);

    axios.request({
    url: 'https://api.fantasynerds.com/v1/nfl/adp?apikey=TEST',
    method: 'POST',
    mode: 'no-cors'

let playersADP = 'https://api.sportsdata.io/api/nfl/fantasy/json/FantasyPlayers';

    }).then(successFunction).catch(failureFunction);
console.log(players);


/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'ea9a39d57emsh162d2ea3a3d4eaep18453ejsn7c2bec6ad961'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players?season=2022', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
    function successFunction(response) {
        console.log(response);
        console.log(response.data);
        // Change the page however you want here if needed
        const players = response;
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
        */
/*
Create an event listener for each of the following scenarios:
            // The user hovers their mouse over an element
            
        

*/





// The user clicks an element
function apiCallSuccess(response) {
    console.log(response);
    console.log(response.data.data);
        // Change the page however you want here if needed
    // create a variable to hold the player objects
    const players = response.data.data;
    // create an element to display player cards
    const adpDisplay = document.createElement('div');
    adpDisplay.setAttribute('id', 'ADP');
    document.body.append(adpDisplay);
    players.forEach(player => {
         // for each player a card is created with the following elements:
        const playerCard = document.createElement('div');
        const playerImg = document.createElement('img');
        const draftButton = document.createElement('button');
        const dropButton = document.createElement('button');
        playerCard.className = 'playerCard';
        playerImg.className = 'playerCardImage';
        playerImg.src = 'https://png.pngtree.com/png-clipart/20210928/ourmid/pngtree-american-football-player-pop-style-white-png-image_3959555.png';
        draftButton.className = 'draftbtn';
        dropButton.className = 'dropbtn';
        draftButton.innerText = 'Draft'; 
        dropButton.innerText = 'Drop';
        playerCard.innerText = `${player.first_name} ${player.last_name} ${player.position}`;
        playerCard.append(playerImg, draftButton, dropButton);
        adpDisplay.append(playerCard);
        return playerCard;
        })
}

function apiCallFailed(error) {
        console.log(error);
        // Change the page however you want here if needed
}

function startDraft(){
        axios.request({
        method: 'GET',
        url: 'https://www.balldontlie.io/api/v1/players'
    }).then(apiCallSuccess).catch(apiCallFailed);
}

// The user hovers their mouse over the startDraftBTN it will highlight green
function turnGreen(eventDetails){
    console.log(eventDetails.target);
    eventDetails.target.style.color = 'green';
}
function colorReset(eventDetails){
    eventDetails.target.style.color = 'initial';
}

// The user presses the space key on their keyboard

// I first wanted to utilize the keypressed notifier again
function keyboardPressed(e){
    console.log(e); 
    if(e.key){
        console.log(e);
    }
}
function whiteout(eventDetails){
    console.log(eventDetails);
    if(eventDetails.keyCode == 32){
        document.body.style.display='none';
    }
}

document.body.addEventListener('keypress', keyboardPressed);
document.body.addEventListener('keypress', whiteout);



let startDraftBTN = document.getElementById('startDraftBTN');
startDraftBTN.addEventListener('click', startDraft);
startDraftBTN.addEventListener('mouseover', turnGreen);
startDraftBTN.addEventListener('mouseleave', colorReset);

