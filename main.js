'use strict';
const answer = +prompt('How much do you watch films');


const personalMovieDB = {
    count: answer,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

if (personalMovieDB.count == 2) {
    alert (`too little`);
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert (`you are classic`);
}
else if (personalMovieDB.count > 30) {
    alert (`kinoman`);
}
else {
    alert (`error`);
}

if (personalMovieDB.count > 0 && Number.isInteger(personalMovieDB.count)) {
    for (let index = 0; index < answer; index++) {
        let lastFilm;
        for (let index = 0; index < 1;) {
            lastFilm = prompt('What was last film you see?');
            if (lastFilm == null) {
                continue;}
            else if (lastFilm,length < 50 && lastFilm.length > 0){
                break;
            }
            
        }        
        let lastFilmRate = prompt('What rate is it?');
        
        personalMovieDB.movies[lastFilm] = lastFilmRate;       
    }
}

console.log(personalMovieDB.movies);


