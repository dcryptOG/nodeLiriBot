var fs = require('fs');
var rp = require('request-promise');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "f52daf6c58314793b2210f2927de5377",
  secret: "51f5e7a5584e43289aa623889f792c80",
});

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

  spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then((data) => {
    console.log(data); 
  })
  .catch((err) => {
    console.error('Error occurred: ' + err); 
  });

  /*
  API SPOTIFY GET ***************************************************
       * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * external_urls:
   { spotify: 'https://open.spotify.com/track/7yCPwWs66K8Ba5lFuU2bcx' },
}
     * The album that the song is from
     *

********* * *************************************************************************


  At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

```js
require("dotenv").config();
```

9. Add the code required to import the `keys.js` file and store it in a variable.
  
* You should then be able to access your keys information like so

  ```js
  var spotify = new Spotify(keys.spotify);

  IMDB API CALL ==================================================================

  3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
     
     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
     
     * It's on Netflix!
   
   * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
   
RANDOM.TXT FS==================================================================================================

4. `node liri.js do-what-it-says`
   
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.

### BONUS=======================================================================

* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

* Make sure you append each command you run to the `log.txt` file. 

* Do not overwrite your file each time you run a command.

### Reminder: Submission on BCS

* Please submit the link to the Github Repository!

- - -

### Minimum Requirements=============================================================

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -
  */ 