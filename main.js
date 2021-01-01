'use strict';



const personalMovieDB = {
    count: ``,
    movies: {},
    actors: {},
    geners: [],
    privat: false,

    start: () => {
        this.count = +prompt('How much do you watch films');
        for (; this.count == null || isNaN(this.count) || this.count == ``;) {
            this.count = +prompt('How much do you watch films');
        }
        console.log(this.count);
    },

    rememberMyFilms: () => {
        for (let index = 0; index < this.count; index++) {

            const lastFilm = prompt('What was last film you see?');
            const lastFilmRate = prompt('What rate is it?');

            if (lastFilm == null || lastFilm === `` || lastFilm.length > 50) {
                index--;
            }
            personalMovieDB.movies[lastFilm] = lastFilmRate;
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert(`too little`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert(`you are classic`);
        } else if (personalMovieDB.count > 30) {
            alert(`kinoman`);
        } else {
            alert(`error`);
        }
    },

    showMyBD: () => {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: () => {
        personalMovieDB.geners = [];
        for (let index = 0; index < 3; index++) {
            personalMovieDB.geners[index] = prompt(`What you favorit genre number ${index+1}`);
            if (this.geners[index] == null || this.geners[index] == ``) {
                index--;
            }
        }
        this.geners.forEach((item, index) => console.log(`Favorite gener number ${index+1} is ${item}`));
        
    },

    toogleVisibleMyBD: () => {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};

 

