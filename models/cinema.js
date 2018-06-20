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

module.exports = Cinema;
