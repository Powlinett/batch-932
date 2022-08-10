// click me button

const button = document.querySelector('#click-me');

button.addEventListener('click', (event) => {
  event.currentTarget.innerText = "Clicked";
  event.currentTarget.setAttribute('disabled', '');
});

// movies search form
const moviesList = document.querySelector('#results');

const getMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=48727053`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const listItem = `
        <li>
          <p>${movie.Title}</p>
          <img src="${movie.Poster}">
        </li>
      `;

        moviesList.innerHTML = '';
        moviesList.insertAdjacentHTML('beforeend', listItem);
      });
    });
};

getMovies('harry potter');

const form = document.querySelector('#search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#search-input');

  getMovies(input.value);
});


// User form

const createUser = (email, password) => {
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

const userForm = document.querySelector('#form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  createUser(email, password);
});
