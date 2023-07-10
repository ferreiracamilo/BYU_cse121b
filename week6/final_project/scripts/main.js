const teamLogo = document.querySelector('.carousel-item img');
const playerCard = document.querySelector('.player-card');
const sectionCards = document.querySelector('.grid-players');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const teamname = document.querySelector('#teamname');

let currentIndex = 0;
let teams = [];

// Fetch team data from API
fetch('https://hltv-api.vercel.app/api/player.json')
    .then(response => response.json())
    .then(data => {
        teams = data;
        showTeam(currentIndex);
    })
    .catch(error => {
        console.log('Error fetching team data:', error);
    });

// Show team data in carousel
function showTeam(index) {
    //Based on index retrieve which team to work with
    const team = teams[index];

    //Update Logo and Team Name
    teamLogo.src = team.logo;
    teamname.textContent = team.name;

    //Clear existing player cards
    playerCard.innerHTML = '';

    //Create player cards for each player from team picked
    team.players.forEach(player => createPlayerCard(player));
}

function createPlayerCard(player){
    //Create article to contain player information and add required class
    const card = document.createElement('article');
    card.classList.add('player-card');

    //Create image element besides assigning src and alt for accessibility scope
    const playerImage = document.createElement('img');
    playerImage.src = player.image;
    playerImage.alt = player.nickname + ' Profile Image';

    const playerNickName = document.createElement('h3');
    playerNickName.textContent = player.nickname;

    const playerFullName = document.createElement('p');
    playerFullName.textContent = "Full name: " + removeTextBetweenQuotes(player.fullname);

    const playerCountry = document.createElement('p');
    playerCountry.textContent = "Country: " + player.country.name;

    //Create image element besides assigning required class, src and alt for accessibility scope
    const countryImage = document.createElement('img');
    countryImage.classList.add('countryflag');
    countryImage.src = player.country.flag;
    countryImage.alt = player.nickname + ' Country Flag Image';

    //Append subelements into new player card
    card.appendChild(playerImage);
    card.appendChild(playerNickName);
    card.appendChild(playerFullName);
    card.appendChild(playerCountry);
    card.appendChild(countryImage);

    //Append new card to players section
    sectionCards.appendChild(card);
}

function removeTextBetweenQuotes(str) {
    //Full Name includes nickname, so needs a treatment for removal
    return str.replace(/'.*?'/g, '');
  }

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + teams.length) % teams.length;
    showTeam(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % teams.length;
    showTeam(currentIndex);
});