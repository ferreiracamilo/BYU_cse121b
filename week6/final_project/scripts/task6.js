default_noimg_player = "https://www.hltv.org/img/static/player/player_silhouette.png"
defaul_noimg_country = "https://www.hltv.org/img/static/flags/30x20/WORLD.gif"

let playersInfo = [];
let playersStats = [];

function defaultContent(){
    for(let i = 1; i <=5; i++){
        
        player_img = document.querySelector('#player1-image');
        player_nickname = document.querySelector('#player1-nickname');
        player_fullname = document.querySelector('#player1-fullname');
        player_maps_played = document.querySelector('#player1-maps-played');
        player_kd = document.querySelector('#player1-kd');
        player_rating = document.querySelector('#player1-rating');
        player_country = document.querySelector('#player1-country');
        player_country_img = document.querySelector('#player1-country-img');
        //player1-image
        //player1-nickname
        //player1-fullname
        //player1-maps-played
        //player1-kd
        //player1-rating
        //player1-country
        //player1-country-img
    }
    
    //document.querySelector('#message2').textContent = msgToDisplay2;
}