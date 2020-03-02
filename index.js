const express = require("express");
var request = require("request");
const cheerio = require("cheerio");

const app = express();

// GET @recipe
// Route to digest recipe URL to JSON
app.get("/recipe", (req, res) => {
  const url = "https://www.laurainthekitchen.com/recipes/croque-madam/";

  request(url, (error, response, body) => {
    if (error) {
      res.json(error);
      // If error shows error in this format
      //   {
      //     "errno": -3008,
      //     "code": "ENOTFOUND",
      //     "syscall": "getaddrinfo",
      //     "hostname": "www.laurainthkitchen.com"
      //     }
    }
    // Proceed if no error
    // Load the page into cheerio instance
    const $ = cheerio.load(body);

    // Declaring values that we want to extract from page
    let name = "";
    let ingredients = [];
    let steps = [];

    // Method for extracting recipe name
    name = $("h1", "div[id=recipe-title]").text();

    // Method for extracting ingredients
    $("li", "div[id=recipe-ingredients]").each(function(i, elem) {
      ingredients[i] = $(this).text();
    });

    // Method for extracting steps
    $("ul", "div[id=recipe-process]").each(function(i, elem) {
      steps[i] = $(this)
        .text()
        .replace(/(\r\n|\n|\r|\t)/gm, "") // Remove \n \t tags from string
        .replace("Report a problem", "") // Removing unnecessaryu attached string
        .trim() // Remove whitespace
        .split(/[0-9][)]/) // Split by numbering
        .filter(Boolean); // Remove empty string characters
    });

    const recipeObj = Object.assign({}, { name, ingredients, steps });

    res.send(recipeObj);
  });
});

app.listen(8000, () => {
  console.log(`Server started on port`, 8000);
});
