require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
var request_promise = require("request-promise");
const cheerio = require("cheerio");
const app = express();

// Import helpers
const sanitize_url = require("./helpers/sanitize_url.js");

// Import recipe helper
const recipe_url_to_object = require("./recipes");

// GET @recipe
// Route - Recieves link to site and sends scraped instance
app.get("/recipe", (req, res) => {
  // Sanitize he URL- Helper method is stripping the trailing slash and changing http to https
  const url = sanitize_url(req.query.url);

  request_promise(url)
    .then(function(htmlString) {
      const $ = cheerio.load(htmlString);
      // Process html...
      recipe_object = recipe_url_to_object(url, $);
      res.json(recipe_object);
    })
    .catch(function(err) {
      // Crawling failed...
      res.json({ message: "Oops! provide a valid URL" });
    });
});

app.get("/", (req, res) => {
  res.json({
    message: "Go to GET /recipe?url= and enter a valid URL",
    quick_links: [
      "https://recipe-importer.herokuapp.com/recipe?url=https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs",
      "https://recipe-importer.herokuapp.com/recipe?url=https://www.eatthelove.com/cookies-and-cream-cookies",
      "https://recipe-importer.herokuapp.com/recipe?url=https://www.maangchi.com/recipe/bugeopo-gochujang-muchim",
      "https://recipe-importer.herokuapp.com/recipe?url=https://www.laurainthekitchen.com/recipes/croque-madam"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
