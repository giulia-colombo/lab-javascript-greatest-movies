const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    }
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //get array where Spielber is the director and the genre is drama
  //count the length of array
  const spielbergDramas = moviesArray.filter((movie) => { 
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama") === true;
  });
  return spielbergDramas.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  //get the score of every movie
  //sum the scores of every movie
  //divide this sum by the number of movies (length of the array)
  if (moviesArray.length === 0) {
    return 0
  }   
  const allScores = moviesArray.map(movie => movie.score);
  const avgScore = allScores.reduce((score, currentValue) => score + currentValue, 0)/moviesArray.length;
  const avgScoreRounded = avgScore.toFixed(2);
  return parseInt(avgScoreRounded);
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  //get an array of movies where the genre is drama (filter?)
  //sum all the scores for the movies in that array
  //divide the sum by the number of movies in that array/its length
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  const sumDramaScores = dramaMovies.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);
  const avgDramaScore = sumDramaScores/dramaMovies.length;
  return avgDramaScore;

  //or: scoresAverage(dramaMovies);
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.sort((a, b) => a.year - b.year);
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitles = moviesArray.map(movie => movie.title);
  const sortedTitles = movieTitles.sort();

  for (i = 0; i < 20; i++) {
    console.log(`Movie ${i+1}: ${sortedTitles[i]}`);
  }
}

// orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //take duration property from movie object
  //extract the hours
  //extract the minutes
  //turn the string into integer
  //turn the hours into minutes
  //sum the hours (in minutes) and the minutes to get the total minutes

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average 
//find the year that had the highest average score for its movies
function bestYearAvg(moviesArray) {

}