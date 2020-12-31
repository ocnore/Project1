const answer = prompt('How much do you watch films');

const personalMovieDB = {
    count: answer,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const lastFilm = prompt('What was last film you see?');
const lastFilmRate = prompt('What rate is it?');

personalMovieDB.movies.lastFilm = lastFilmRate;