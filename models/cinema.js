const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titlesArray = this.films.map((film) => {
    return film.title;
  })

  return titlesArray;
}

console.log(filmTitles());

module.exports = Cinema;
