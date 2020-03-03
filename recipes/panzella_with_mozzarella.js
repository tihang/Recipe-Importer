// Methods to return Panzella with Mozarella and herbs details
// Taking in cheerio instance $

const url =
  "https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs";

// Method for extracting recipe name
function getName($) {
  return $("h1", "div.title-container")
    .text()
    .trim()
    .replace(/(\r\n|\n|\r|\t)/gm, ""); // Remove unwanted tags from string
}

// Method for extracting ingredients
function getIngredients($) {
  let ingredients = [];

  $("li", "ul.recipe-ingredients").each(function(i, elem) {
    if ($(elem).attr("itemprop") === "recipeIngredient") {
      const qty = $("span.quantity", elem)
        .text()
        .replace(/(\r\n|\n|\r|\t)/gm, "")
        .trim();
      const name = $("span.ingredient-name", elem)
        .text()
        .replace(/(\r\n|\n|\r|\t)/gm, "")
        .trim();
      const combined = qty + " " + name;
      ingredients.push(combined);
    }
  });

  return ingredients;
}

// Method for extracting steps
function getSteps($) {
  let steps = [];
  $("li", "ol.recipe-steps").each(function(i, elem) {
    const item = $(elem).text();
    steps.push(item);
  });
  return steps;
}

module.exports = { url, getName, getIngredients, getSteps };
