const carouselContainer = document.querySelector('.carousel-container');
const carouselItem = document.querySelector('.carousel-item');
const teamLogo = document.querySelector('.carousel-item img');
const playerCard = document.querySelector('.player-card');
const playerImage = document.querySelector('.player-card img');
const playerName = document.querySelector('.player-card h3');
const playerInfo = document.querySelector('.player-card p');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

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
    const team = teams[index];
    teamLogo.src = team.logo;

    // Clear existing player cards
    playerCard.innerHTML = '';

    // Create player cards for each player
    team.players.forEach(player => {
        const card = document.createElement('article');
        card.classList.add('player-card');

        const playerImage = document.createElement('img');
        playerImage.src = player.image;
        playerImage.alt = 'Player Image';

        const playerName = document.createElement('h3');
        playerName.textContent = player.name;

        const playerInfo = document.createElement('p');
        playerInfo.textContent = player.info;

        card.appendChild(playerImage);
        card.appendChild(playerName);
        card.appendChild(playerInfo);

        playerCard.appendChild(card);
    });
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