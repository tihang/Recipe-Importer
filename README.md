## Table of Contents (Optional)

- [Directory](#Directory)
- [Installation](#Installation)
- [Clone](#Clone)
- [Setup](#Setup)
- [3rd-party-libraries](#3rd party libraries)
- [Notes](#Notes)

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
    ├── index.js                            # App entrypoint
    ├── package.json
    └── yarn.lock

### Installation

- All the `code` required to get started

### Clone

- Clone this repo to your local machine using `https://github.com/tihang/Recipe-Importer.git`

### Setup

```shell
$ npm install
or
$ yarn install
```

```shell
$ npm start
or
$ yarn start
```

### 3rd party libraries

- "cheerio": "^1.0.0-rc.3",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "request": "^2.88.2",
- "request-promise": "^4.2.5"

### Notes

- Works with following URL's

- https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs (Should be possible despite pay-wall)
- https://www.eatthelove.com/cookies-and-cream-cookies/
- https://www.maangchi.com/recipe/bugeopo-gochujang-muchim
- http://www.laurainthekitchen.com/recipes/croque-madam/
