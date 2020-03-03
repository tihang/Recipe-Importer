// Methods to return dried_shredded_pollock details
// Taking in cheerio instance $

const url = "https://www.maangchi.com/recipe/bugeopo-gochujang-muchim";

// Method for extracting recipe name
function getName($) {
  return $("h1", "div#content-header").text();
}

// Method for extracting ingredients
function getIngredients($) {
  let ingredients = [];
  $("ul", ".entry").each(function(i, elem) {
    $("li", elem).each(function(i, elem) {
      ingredients[i] = $(elem).text();
    });
  });
  return ingredients;
}

// Method for extracting steps
function getSteps($) {
  let steps = [];
  $("ol", ".entry").each(function(i, elem) {
    $("li", elem).each(function(j, elem) {
      steps.push(
        $(elem)
          .text()
          .replace(/(\r\n|\n|\r|\t)/gm, "")
      );
    });
  });
  return steps;
}

module.exports = { url, getName, getIngredients, getSteps };
