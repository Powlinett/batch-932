import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    this.getMovies('harry potter');
  }

  getMovies(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=48727053`)
    .then(response => response.json())
    .then((data) => {
      this.listTarget.innerHTML = '';

      data.Search.forEach((movie) => {
        const listItem = `
        <li class="list-inline">
          <img src="${movie.Poster}">
        </li>
      `;

        this.listTarget.insertAdjacentHTML('beforeend', listItem);
      });
    });
  }

  searchMovies(event) {
    event.preventDefault();
  
    this.getMovies(this.inputTarget.value);
  }
}
