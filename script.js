const movieDiv = document.querySelector("movie-container");

const api_url = fetch(
  "https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=tt4154796",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "d0a8adab1emshcbaf23ad6f73065p1fa571jsneb56a6198206",
    },
  }
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

function getMovie() {
  const response = await fetch(api_url);
  const json = await response.json();
  const div = document.createElement("div");
  movieDiv.appendChild("div");

  console.log(json);
}

getMovie();
