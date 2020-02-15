// Make a call to https://api.rawg.io/api/games/4200 and pass the JSON object it returns to a function called createGameDetails.
// Inside createGameDetails replace the placeholder values in the HTML above with properties from the object returned from the API call.


const detailsUrl = `https://api.rawg.io/api/games/4200`;

function theResponse(response) {
  return response.json();
}

function createGamesDetails(json) {
  console.dir(json);

  const name = document.querySelector("h1");
  name.innerHTML = json.name;

  const image = document.querySelector(".image");
  image.style.backgroundImage =
    "url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')";

  const description = document.querySelector(".description");
  description.innerHTML = json.description;
}

function theError(error) {
  console.log(error);
}

fetch(detailsUrl)
  .then(theResponse)
  .then(createGamesDetails)
  .catch(theError);
