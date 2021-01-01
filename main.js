'use strict';

let answer;

function start() {
    answer = +prompt('How much do you watch films');
    for (; answer == null || isNaN(answer) || answer == ``;) {
        answer = +prompt('How much do you watch films');
    }
}

start();

const personalMovieDB = {
    count: answer,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};



function rememberMyFilms () {
    for (let index = 0; index < answer; index++) {

        const lastFilm = prompt('What was last film you see?');
        const lastFilmRate = prompt('What rate is it?');
    
        if (lastFilm == null || lastFilm === `` || lastFilm.length > 50) {
            index--;
        }
        personalMovieDB.movies[lastFilm] = lastFilmRate;
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert(`too little`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert(`you are classic`);
    } else if (personalMovieDB.count > 30) {
        alert(`kinoman`);
    } else {
        alert(`error`);
    }
}

detectPersonalLevel();

function showMyBD () {
    if (personalMovieDB.privat === false) {
        console.log (personalMovieDB);
    }
}


function writeYourGenres () {
    personalMovieDB.geners = [];
    for (let index = 0; index < 3; index++) {
        personalMovieDB.geners.push(prompt (`What you favorit genre number ${index+1}`));   
    }
    console.log (personalMovieDB.geners);
}




