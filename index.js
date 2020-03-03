require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const app = express();

// Import helpers
const strip_trailing_slash = require("./helpers/strip_trailing_slash");

// Import recipe helper
const recipe_url_to_object = require("./recipes");

// GET @recipe
// Route - Recieves link to site and sends scraped instance
app.get("/recipe", (req, res) => {
  // Sanitize he URL- Helper method is stripping the trailing slash
  const url = strip_trailing_slash(req.query.url);

  request(url, (error, response, body) => {
    if (error) {
      res.json({ message: "Oops! provide a valid URL" });
    }
    // Proceed if no error
    // Load the page into cheerio instance
    const $ = cheerio.load(body);

    // Getting a recipe object after providing URL and cheerio instace to the method /recipes/index.js
    recipe_object = recipe_url_to_object(url, $);
    res.json(recipe_object);
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Go to GET /recipe and enter a valid URL"
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
