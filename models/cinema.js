const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titlesArray = this.films.map((film) => {
    return film.title;
  });

  return titlesArray;
}

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  })
}

Cinema.prototype.filterByGenre = function (genre) {
  const genreArray = this.films.filter((film) => {
    return film.genre === genre;
  })

  return genreArray;
}

Cinema.prototype.filterByYear = function (year) {
  const yearArray = this.films.filter((film) => {
    return film.year === year;
  })

  return yearArray;
}

Cinema.prototype.areThereFilmsFromYear = function (year) {
  if (this.filterByYear(year).length > 0) {
    return true;
  }
  return false;
}

Cinema.prototype.areAllFilmsOverSpecificLength = function (length) {
  const filmsOverLength = this.films.filter((film) => {
    return film.length > length;
  })
  if (filmsOverLength.length === this.films.length) {
    return true;
  }
  return false;
}

Cinema.prototype.totalRunTimeOfAllFilms = function () {

  let totalRuntime = 0;

    this.films.forEach((film) => {
    totalRuntime += film.length;
  })

  return totalRuntime;
}

Cinema.prototype.filterFilmsByProperty = function (property, value) {
  const filteredFilmArray = this.films.filter((film) => {
    return film[property] === value;
  })

  return filteredFilmArray;
}



module.exports = Cinema;
