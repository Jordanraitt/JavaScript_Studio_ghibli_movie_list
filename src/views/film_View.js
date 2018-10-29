const FilmView = function (container, film) {
  this.container = container;
  this.film = film
  // console.log(this);
};

FilmView.prototype.render = function (film) {
  // console.log(film);
  const div = document.createElement('div');
  div.id = 'film'

  const name = document.createElement('h3');
  name.textContent = this.film.title;

  const description = document.createElement('p');
  description.textContent = `Description: ${this.film.description}`;

  const director  = document.createElement('p');
  director.textContent = `Director: ${this.film.director}`;

  const releaseDate = document.createElement('p');
  releaseDate.textContent = `Release Date: ${this.film.release_date}`;

  const rating = document.createElement('p');
  rating.textContent = `Rating: ${this.film.rt_score}`

  div.appendChild(name);
  div.appendChild(description);
  div.appendChild(director);
  div.appendChild(releaseDate);
  div.appendChild(rating);
  this.container.appendChild(div);
};

module.exports = FilmView;
