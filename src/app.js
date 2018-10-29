const FilmsListView = require('./views/films_list_view.js');
const Films = require('./models/films.js');

document.addEventListener('DOMContentLoaded', () =>{
  console.log('Hi there Jordan! Good luck on this! JS Loaded');

  const FilmsListViewContainer = document.querySelector('#film-info');
  const filmsListView = new FilmsListView(FilmsListViewContainer);
  filmsListView.bindEvents();

  const films = new Films();
  films.getData();
});
