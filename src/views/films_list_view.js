const PubSub = require('../helper/pub_sub.js');
const FilmView = require('./film_View.js');

const FilmsListView = function (container) {
  this.container = container;
}

FilmsListView.prototype.bindEvents = function() {
  PubSub.subscribe('Films:data-ready', (event) => {
    // console.log(event.detail);
    this.films = event.detail;
    this.render();
  });
};

FilmsListView.prototype.render = function () {
  this.films.forEach((film) => {
    // console.log(film);
      const filmView = new FilmView(this.container, film);
      filmView.render();
  });
};

module.exports = FilmsListView;
