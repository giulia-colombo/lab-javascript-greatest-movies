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
const directorsArr = moviesArray.map (array => array.director);

console.log(directorsArr);
return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
const spielbergDramaArr = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama") === true)
console.log(spielbergDramaArr.length)
return spielbergDramaArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals (toRound method)
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }    

    const scoreArr = moviesArray.map (array => array.score);
    const avgRating = scoreArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/scoreArr.length
    const avgRatingRounded = avgRating.toFixed(2);
    
    return Number(avgRatingRounded)

    //return ratingsArr
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

const dramaArr = moviesArray.filter(movie => movie.genre.includes("Drama") && movie.genre.length === 1)
console.log(dramaArr)

if(dramaArr.length === 0) {
    return null
}

const dramaScoreArr = moviesArray.map (array => array.score);

const avgDramaRating = dramaScoreArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/dramaScoreArr.length

return avgDramaRating
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
//numbers.sort((a, b) => a - b);
    const moviesSorted = movies.year.sort((a, b) => a - b)
    return moviesSorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
