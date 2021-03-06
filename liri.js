require("dotenv").config();

// var spotify = new Spotify(keys.spotify);

let input = process.argv[2];

if(input === 'concert-this'){
    concert();
} else if(input === 'spotify-this-song'){
    spotifyArtists();
} else if(input === 'movie-this') {
    movieThis();
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
     
    spotify
      .search({ type: 'track', query: song })
      .then(function(response) {
        var songData = response.tracks.items[0];
        console.log(songData.artists[0].name);
        console.log(songData.album.external_urls.spotify);
        console.log(songData.album.name);
      })
      .catch(function(err) {
        console.log(err);
      });
}

function movieThis () {
    const axios = require('axios');
    let movieName = process.argv.slice(3).join(' ');

    let url = 'http://www.omdbapi.com/?apikey=trilogy&t=' + movieName;

    axios.get(url)
    .then(function (response) {
        let results = response.data;
        console.log(results.Title);
        console.log(results.Year);
        console.log(results.Ratings[0].Value);
        console.log(results.Ratings[1].Value);
        console.log(results.Country);
        console.log(results.Language);
        console.log(results.Plot);
        console.log(results.Actors);
    })
}