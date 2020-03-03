// Methods to return Corque Madam details
// Taking in cheerio instance $

const url = "https://www.laurainthekitchen.com/recipes/croque-madam";

// Method for extracting recipe name
function getName($) {
  return $("h1", "div#recipe-title").text();
}

// Method for extracting ingredients
function getIngredients($) {
  let ingredients = [];
  $("li", "div#recipe-ingredients").each(function(i, elem) {
    ingredients[i] = $(elem).text();
  });
  return ingredients;
}

// Method for extracting steps
function getSteps($) {
  let steps = [];
  $("ul", "div#recipe-process").each(function(i, elem) {
    const filteredItem = $(elem)
      .text()
      .replace(/(\r\n|\n|\r|\t)/gm, "") // Remove unwanted tags from string
      .replace("Report a problem", "") // Removing unwanted attached string
      .trim() // Remove whitespace
      .split(/[0-9][)]/) // Split by number
      .filter(Boolean); // Remove empty string "");

    steps.push(filteredItem);
  });
  return steps.flat();
}

module.exports = { url, getName, getIngredients, getSteps };
