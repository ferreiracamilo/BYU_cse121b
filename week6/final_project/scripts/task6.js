default_noimg_player = "https://www.hltv.org/img/static/player/player_silhouette.png"
defaul_noimg_country = "https://www.hltv.org/img/static/flags/30x20/WORLD.gif"

let playersInfo = [];
let playersStats = [];

function defaultContent(){
    for(let i = 1; i <=5; i++){   
        player_img = document.querySelector('#player'+ i +'-image');
        player_nickname = document.querySelector('#player'+ i +'-nickname');
        player_fullname = document.querySelector('#player'+ i +'-fullname');
        player_maps_played = document.querySelector('#player'+ i +'-maps-played');
        player_kd = document.querySelector('#player'+ i +'-kd');
        player_rating = document.querySelector('#player'+ i +'-rating');
        player_country = document.querySelector('#player'+ i +'-country');
        player_country_img = document.querySelector('#player'+ i +'-country-img');

        player_img.setAttribute("src","images/default_flag.png");
        player_nickname.textContent = "Placeholder " + i;
        player_fullname.textContent = "Lorem Ipsum";
        player_maps_played.textContent = "Lorem Ipsum";
        player_kd.textContent = "Lorem Ipsum";
        player_rating.textContent = "Lorem Ipsum";
        player_country.textContent = "Lorem Ipsum";
        player_country_img.setAttribute("src","images/default_flag.png");
        //player1-image
        //player1-nickname
        //player1-fullname
        //player1-maps-played
        //player1-kd
        //player1-rating
        //player1-country
        //player1-country-img
    }
    
    defaultContent();
}