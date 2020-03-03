// Methods to return Cookies and Cream details
// Taking in cheerio instance $

const url = "https://www.eatthelove.com/cookies-and-cream-cookies";

// Method for extracting recipe name
function getName($) {
  return $("h1", "header").text();
}

// Method for extracting ingredients
function getIngredients($) {
  let ingredients = [];
  $("span", "div.entry-content").each(function(i, elem) {
    if ($(elem).attr("itemprop") === "ingredients") {
      ingredients[i] = $(elem).text();
    }
  });
  return ingredients.filter(Boolean); // To clear out some null values in array
}

// Method for extracting steps
function getSteps($) {
  let steps = [];
  $("p", "div.entry-content").each(function(i, elem) {
    const filteredItem = $(elem)
      .text()
      .replace(/(\r\n|\n|\r|\t)/gm, "")
      .replace("Directions", "");
    steps.push(filteredItem);
  });
  // Removing unwanted similarly tagged items
  steps.splice(0, 15);
  steps.splice(4, 6);

  return steps;
}

module.exports = { url, getName, getIngredients, getSteps };
