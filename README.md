### Website

Live at **https://recipe-importer.herokuapp.com/** 🔨

### Directory

    ├── helpers                             # Helper methods
    ├── recipes                             # Contains all recipe crawlers
       ├── cookies_and_cream.js
       ├── corque_madam.js
       ├── dried_shredded_pollock.js
       ├── panzella_with_mozzarella.js
       ├── index.js                         # Index for all recipes
    ├── .gitignore                          # Igore files to be added to git
    ├── Procfile                            # heroku deploy script
    ├── README.md
    ├── index.js                            # App entrypoint and also contains recipe route
    ├── package.json
    └── yarn.lock

### Architecture

This is an implementation of a webcrawler which works on 4 given websites below. All the recipe crawlers logic are seperated into different files inside /recipes directory so that it is easy to make edits if something breaks, all these files are imported in the recipes/index.js, this file also contains a function which holds logic and return the required recipe object to our route. Later on if we have many routes to handle, /routes directory can be made with different routes, but for this, as we only had one endpoint to handle I decided it do it in index.js

**Note on the deliverable:**

Ingredients was request to be an array of objects with diffrent fields like such =>

```shell
    "ingredients": [{"name": "Corn","quantity": "2}]
```

I implemented it as array of stings with all fields togther in a string like such =>

```shell
    "ingredients": ["3 ounces pollock", "1 cup rice"]
```

This could be done an array of objects with more code instead of string if absolutely necessary.

**Works only with following URL's**

```shell
    https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs
    https://www.eatthelove.com/cookies-and-cream-cookies/
    https://www.maangchi.com/recipe/bugeopo-gochujang-muchim
    https://www.laurainthekitchen.com/recipes/croque-madam/
```

### Routes

Method: GET
Path: /recipe
Parameters:
url: string

Fully formed url would look similar to =>
https://recipe-importer.herokuapp.com/recipe?url=https://www.eatthelove.com/cookies-and-cream-cookies

```shell
Response:
    {
        "url": String,
        "name": String,
        "ingredients": [String],
        "steps": [String]
    }
```

### Clone

- Clone this repo to your local machine using `https://github.com/tihang/Recipe-Importer.git`

### Setup

```shell
$ npm install
or
$ yarn install
```

### Start

```shell
$ npm start
or
$ yarn start
```

### Libraries

> cheerio
> request
> request-promise
> express
> dotenv
