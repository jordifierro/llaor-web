![Logo](screenshots/logo.png)

# Llaor web

This project aims to store information about Pallars culture and language.
You can visit it online [here](https://llaor.com)

For the moment is composed by the dictionary welcome page and 3 other info pages.
Dictionary is composed by a set of words
that can be visualized by a first letter menu or searching by text.
Users can also navigate between words that are synonmis or related,
improving their discoverability.

![Home](screenshots/home.png)
![Project](screenshots/project.png)

## Documentation

This site has a tree structure with sections
but for the moment `/` and `/llengua/diccionari` contains the same,
a daily word view and links to:
* `/llengua/diccionari/cerca` (search page) and `/llengua/diccionari/lletres` (abc list).
* `/llengua/diccionari/cerca/<text>` is also a valid url to search for <text>.
* `/llengua/diccionari/lletres/o` will show the user all the words beggining with 'o'.
* `/llengua/diccionari/mots/<example>` prints the definitions of the word 'example'.

![Letters](screenshots/letters.png)
![Search](screenshots/search.png)

Technically, this web project is very easy. It uses plain react,
fetching the data from the [llaor-api](https://github.com/jordifierro/llaor-api).

Styles are compatible with computer and mobile.

![Home](screenshots/mobile_home.png)
![Project](screenshots/mobile_project.png)
![Letters](screenshots/mobile_letters.png)
![Search](screenshots/mobile_search.png)
![Menu](screenshots/mobile_menu.png)

## Setup

* Get firebase config and put it inside `public/firebase.js`:
```javascript
var firebaseConfig = {
    apiKey: "A",
    authDomain: "yourweb.firebaseapp.com",
    ...
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
```

_(remember that this file is gitignored, so needs to be created again on the deployment server)_

* Create `.env` file and add:
```bash
NODE_PATH=src
REACT_APP_API_HOST=llaorapihost.com
```
* Run `docker build -t llaor/web .`
* Then `docker run -t llaor/web bash -c "npm run test"` will run tests
* And `docker run -p 3000:3000 -t llaor/web` will make web locally available at `localhost:3000`
