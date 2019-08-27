require("dotenv").config();

var spotify = new Spotify(keys.spotify);

let input = process.argv[2];

function concert(){
    let artist = process.argv.slice(3).join(' ');
    let url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    const axios = require('axios');
 
    axios.get(url)
    .then(function (response) {
        console.log(response);
    })
}
concert();