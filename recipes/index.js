// This file is responsible to hold all scrapers
// and switches according to given URL and cheerio instance

// Import recipies
const corque_madam = require("./corque_madam");
const dired_shredded_pollock = require("./dried_shredded_pollock");
const cookies_and_cream = require("./cookies_and_cream");
const panzella_with_mozzarella = require("./panzella_with_mozzarella");

// This function recieves a URL and Cheerio instance and returns a valid usable recipe object
function recipe_url_to_object(url, $) {
  // Declare instance
  let recipie_instance;

  // Switch and assign instance accoding to the URL provided
  switch (url) {
    case corque_madam.url:
      recipie_instance = corque_madam;
      break;

    case dired_shredded_pollock.url:
      recipie_instance = dired_shredded_pollock;
      break;

    case cookies_and_cream.url:
      recipie_instance = cookies_and_cream;
      break;

    case panzella_with_mozzarella.url:
      recipie_instance = panzella_with_mozzarella;
      break;

    default:
      recipie_instance = null;
      break;
  }

  return Object.assign(
    {},
    {
      url,
      name: recipie_instance.getName($),
      ingredients: recipie_instance.getIngredients($),
      steps: recipie_instance.getSteps($)
    }
  );
}

module.exports = recipe_url_to_object;
