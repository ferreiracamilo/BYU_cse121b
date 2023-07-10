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
    const team = teams[index];
    teamLogo.src = team.logo;

    // Clear existing player cards
    playerCard.innerHTML = '';

    teamname.textContent = team.name;

    // Create player cards for each player
    team.players.forEach(player => {
        const card = document.createElement('article');
        card.classList.add('player-card');

        const playerImage = document.createElement('img');
        playerImage.src = player.image;
        playerImage.alt = player.nickname + ' Profile Image';

        const playerNickName = document.createElement('h3');
        playerNickName.textContent = player.nickname;

        const playerFullName = document.createElement('p');
        //Full Name includes nickname, so needs a treatment for removal
        nickNamePattern = "'"+ player.nickname + "'";
        cleanFullName = player.fullname.replace(nickNamePattern,"");
        playerFullName.textContent = "Full name: " + cleanFullName;

        const playerCountry = document.createElement('p');
        playerCountry.textContent = "Country: " + player.country.name;

        const countryImage = document.createElement('img');
        countryImage.classList.add('countryflag');
        countryImage.src = player.country.flag;
        countryImage.alt = player.nickname + ' Country Flag Image';

        card.appendChild(playerImage);
        card.appendChild(playerNickName);
        card.appendChild(playerFullName);
        card.appendChild(playerCountry);
        card.appendChild(countryImage);

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