// Make a call to https://api.rawg.io/api/games and pass the JSON object it returns to a function called createGames.
// For each game object in the results, the createGames function should create the following HTML in a loop. Replace the placeholder values with the relevant properties from each object
// After the loop, all the HTML that was created should be assigned as the innerHTML value to the element above.


const gamesUrl = `https://api.rawg.io/api/games`;

function theResponse(response) {
  return response.json();
}

function createGames(json) {
  const results = json.results;
  console.dir(results);

  const resultsContainer = document.querySelector(".results");

  let html = "";

  results.forEach(function(result) {
    html += `<div class="game">
                    <h2>${result.name}</h2>
                    <img class="gamesImg" src="${result.background_image}" alt="${result.name}">
                </div>`;
  });
  resultsContainer.innerHTML = html;
}

function theError(error) {
  console.log(error);
}

fetch(gamesUrl)
  .then(theResponse)
  .then(createGames)
  .catch(theError);
