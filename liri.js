require("dotenv").config();

// var spotify = new Spotify(keys.spotify);

let input = process.argv[2];

if(input === 'concert-this'){
    concert();
} else if(input === 'spotify-this-song'){
    spotifyArtists();
}

function concert(){
    let artist = process.argv.slice(3).join(' ');
    let url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    const axios = require('axios');
 
    axios.get(url)
    .then(function (response) {
        let jsonData = response.data[0];
        console.log(jsonData.venue.name);
        console.log(jsonData.venue.city);
        console.log(jsonData.datetime);
    })
};

function spotifyArtists() {
    var Spotify = require('node-spotify-api');
    let song = process.argv.slice(3).join(' ');
 
    var spotify = new Spotify({
        id: '3d419acd23004f0f89dabf71dc9d55eb',
        secret: 'a8ccb7135445419385d5ffeb43efa3ad'
    });
    
    spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    
    console.log(data); 
    });
}
