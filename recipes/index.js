// This file is responsible to hold all scrapers
// and switches according to given URL and cheerio instance

// Import recipies
const corque_madam = require("./corque_madam");
const dired_shredded_pollock = require("./dried_shredded_pollock");
const cookies_and_cream = require("./cookies_and_cream");
const panzella_with_mozzarella = require("./panzella_with_mozzarella");

// This function recieves a URL and Cheerio instance and returns a valid usable recipe object
function recipe_url_to_object(url, $) {
  // Pre-declaring values that we want to extract from page
  let name = "";
  let ingredients;
  let steps = [];

  // Switch accoding to the URL provided
  switch (url) {
    case corque_madam.url:
      name = corque_madam.getName($);
      ingredients = corque_madam.getIngredients($);
      steps = corque_madam.getSteps($);
      return Object.assign({}, { url, name, ingredients, steps });

    case dired_shredded_pollock.url:
      name = dired_shredded_pollock.getName($);
      ingredients = dired_shredded_pollock.getIngredients($);
      steps = dired_shredded_pollock.getSteps($);
      return Object.assign({}, { url, name, ingredients, steps });

    case cookies_and_cream.url:
      name = cookies_and_cream.getName($);
      ingredients = cookies_and_cream.getIngredients($);
      steps = cookies_and_cream.getSteps($);
      return Object.assign(
        {},
        { url: cookies_and_cream.url, name, ingredients, steps }
      );

    case panzella_with_mozzarella.url:
      name = panzella_with_mozzarella.getName($);
      ingredients = panzella_with_mozzarella.getIngredients($);
      steps = panzella_with_mozzarella.getSteps($);
      return Object.assign({}, { url, name, ingredients, steps });

    default:
      return { message: "Oops! provide a valid URL" };
  }
}

module.exports = recipe_url_to_object;
