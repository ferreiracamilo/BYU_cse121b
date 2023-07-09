default_noimg_player = "https://www.hltv.org/img/static/player/player_silhouette.png"
defaul_noimg_country = "https://www.hltv.org/img/static/flags/30x20/WORLD.gif"

let playersInfo = [];
let playersStats = [];

function defaultContent(){
    for(let i=1; i<=5; i++){ 
        setContentPlayer(i, "images/default_player.png", "Placeholder " + i, "Lorem Ipsum", 0, 0.0, 0, "Lorem Ipsum", "images/default_flag.png");
    }
}

function setContentPlayer(id, playerImageURL, nickname, fullname, maps_played, kd, rating, country, countryImageURL){
    player_img = document.querySelector('#player'+ id +'-image');
    player_nickname = document.querySelector('#player'+ id +'-nickname');
    player_fullname = document.querySelector('#player'+ id +'-fullname');
    player_maps_played = document.querySelector('#player'+ id +'-maps-played');
    player_kd = document.querySelector('#player'+ id +'-kd');
    player_rating = document.querySelector('#player'+ id +'-rating');
    player_country = document.querySelector('#player'+ id +'-country');
    player_country_img = document.querySelector('#player'+ id +'-country-img');

    player_img.setAttribute("src", playerImageURL);
    player_nickname.textContent = nickname;
    player_fullname.textContent = fullname;
    player_maps_played.textContent = maps_played;
    player_kd.textContent = kd;
    player_rating.textContent = rating;
    player_country.textContent = country;
    player_country_img.setAttribute("src",countryImageURL);  
}

// Function to check if the target elements are present
function checkElements() {
    return new Promise((resolve) => {
      const targetElements = document.querySelectorAll('article');
      if (targetElements.length === 5) {
        resolve(targetElements);
      } else {
        const observer = new MutationObserver(() => {
          const updatedTargetElements = document.querySelectorAll('article');
          if (updatedTargetElements.length === 5) {
            observer.disconnect();
            resolve(updatedTargetElements);
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    });
}

// Usage
(async () => {
    try {
      const elements = await checkElements();
      defaultContent();
    } catch (error) {
      console.error("Error:", error);
    }
  })();