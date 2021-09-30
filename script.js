const picture = document.getElementById("picture");
const title = document.getElementById("title");
const description = document.getElementById("description");

fetch(
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
    (data) => {
      picture.src = response.Poster;

      title.innerHTML = response.Title;

      description.innerHTML = response.Plot;
    };
    console.log(response);
  });
