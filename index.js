const express = require("express");
const request = require("request");
const cheerio = require("cheerio");

// Import helpers
const strip_trailing_slash = require("./helpers/strip_trailing_slash");

// Import recipies
const corque_madam = require("./recipies/corque_madam");
const dired_shredded_pollock = require("./recipies/dried_shredded_pollock");
const cookies_and_cream = require("./recipies/cookies_and_cream");
const panzella_with_mozzarella = require("./recipies/panzella_with_mozzarella");

const app = express();

// GET @recipe
// Route - Recieves link to site and sends scraped instance
app.get("/recipe", (req, res) => {
  const url = strip_trailing_slash(req.query.url);

  request(url, (error, response, body) => {
    if (error) {
      res.json({ message: "Oops! provide a valid URL" });
    }
    // Proceed if no error
    // Load the page into cheerio instance
    const $ = cheerio.load(body);

    // Declaring values that we want to extract from page
    let name = "";
    let ingredients;
    let steps = [];
    let recipeObj;

    // Switch accoding to the URL provided
    switch (url) {
      case corque_madam.url:
        name = corque_madam.getName($);
        ingredients = corque_madam.getIngredients($);
        steps = corque_madam.getSteps($);
        recipeObj = Object.assign(
          {},
          { url: corque_madam.url, name, ingredients, steps }
        );
        break;

      case dired_shredded_pollock.url:
        name = dired_shredded_pollock.getName($);
        ingredients = dired_shredded_pollock.getIngredients($);
        steps = dired_shredded_pollock.getSteps($);
        recipeObj = Object.assign(
          {},
          { url: dired_shredded_pollock.url, name, ingredients, steps }
        );
        break;

      case cookies_and_cream.url:
        name = cookies_and_cream.getName($);
        ingredients = cookies_and_cream.getIngredients($);
        steps = cookies_and_cream.getSteps($);
        recipeObj = Object.assign(
          {},
          { url: cookies_and_cream.url, name, ingredients, steps }
        );
        break;

      case panzella_with_mozzarella.url:
        name = panzella_with_mozzarella.getName($);
        ingredients = panzella_with_mozzarella.getIngredients($);
        steps = panzella_with_mozzarella.getSteps($);
        recipeObj = Object.assign(
          {},
          { url: panzella_with_mozzarella.url, name, ingredients, steps }
        );
        break;

      default:
        res.json({ message: "Oops! provide a valid URL" });
        break;
    }
    res.send(recipeObj);
  });
});

app.listen(8080, () => {
  console.log(`Server started on port`, 8080);
});
