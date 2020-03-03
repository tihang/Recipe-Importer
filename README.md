### Website

Live at **https://recipe-importer.herokuapp.com/** 🔨

### Directory

    ├── helpers                             # Helper methods
    ├── recipes                             # Contains all recipie crawlers
       ├── cookies_and_cream.js
       ├── corque_madam.js
       ├── dried_shredded_pollock.js
       ├── panzella_with_mozzarella.js
       ├── index.js                         # Index for all recipies
    ├── .gitignore                          # Igore files to be added to git
    ├── Procfile                            # heroku deploy script
    ├── README.md
    ├── index.js                            # App entrypoint and also contains recipe route
    ├── package.json
    └── yarn.lock

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

### Notes

- Works with following URL's

```shell
    https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs
    https://www.eatthelove.com/cookies-and-cream-cookies/
    https://www.maangchi.com/recipe/bugeopo-gochujang-muchim
    https://www.laurainthekitchen.com/recipes/croque-madam/
```
