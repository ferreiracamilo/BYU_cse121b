const teamLogo = document.querySelector('.carousel-item img');
const playerCard = document.querySelector('.player-card');
const sectionCards = document.querySelector('.grid-players');
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
        playerImage.alt = player.nickname + ' Image';

        const playerNickName = document.createElement('h3');
        playerNickName.textContent = player.nickname;

        const playerFullName = document.createElement('p');
        //Full Name includes nickname, so needs a treatment for removal
        nickNamePattern = "'"+ player.nickname + "'";
        cleanFullName = player.fullname.replace(nickNamePattern,"");
        playerFullName.textContent = "Full name: " + cleanFullName;

        const playerCountry = document.createElement('p');
        playerCountry.textContent = "Country: " + player.country.name;

        card.appendChild(playerImage);
        card.appendChild(playerNickName);
        card.appendChild(playerFullName);
        card.appendChild(playerCountry);

        sectionCards.appendChild(card);
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