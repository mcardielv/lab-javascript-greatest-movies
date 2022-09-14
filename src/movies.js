const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}
console.log(`1.A list of director of this data is ${getAllDirectors(movies)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//ARROW FUNCTION
function howManyMovies(moviesArray) {
  const steven = moviesArray.filter((movieItem) => {
    return movieItem.director === "Steven Spielberg";
  });

  const dramaMovies = steven.filter((spielbergMovies) => {
    return spielbergMovies.genre.includes("Drama");
  });
  return dramaMovies;
}
console.log(howManyMovies(movies));

//REGULAR FUNCTION
// function howManyMovies(moviesArray) {
//   const spielberg = howManyMovies.filter(moviesArray);

//   return spielberg.director === "Steven Spielberg";
// }
// howManyMovies(movies);inacabada :(

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//Done with for
function scoresAverage(moviesArray) {
  let totalSum = 0;
  const scores = moviesArray.map((movie) => movie.score);
  for (let i = 0; i < scores.length; i++) {
    totalSum = totalSum + scores[i];
  }
  const numFixed = totalSum / moviesArray.length;
  return numFixed.toFixed(2);
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
//Done with forEach
function dramaMoviesScore(moviesArray) {
  let totalSum = 0;
  const dramaMovies = moviesArray.filter((drama) =>
    drama.genre.includes("Drama")
  );
  const scores = dramaMovies.map((movie) => movie.score);
  scores.forEach((dramaElement) => (totalSum += dramaElement));
  const numFixed = totalSum / moviesArray.length;
  return numFixed.toFixed(2);
  //maybe fix the return instead number returns string parse int?
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = (a, b) =>
    a.moviesArray.year > b.moviesArray.year ? 1 : -1;
  return sortedArray;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
