const playersList = document.querySelector('#players');

const luke = playersList.querySelector('.green');
luke.style.backgroundColor = "red";


const countriesList = document.querySelector('#fifa-wins');
countriesList.insertAdjacentHTML('beforeend', "<li>France (2 wins)</li>");

const winners = document.querySelectorAll('#fifa-wins li');


const input = document.querySelector('#email');
input.value = 'lyon@lewagon.com';


const image = document.querySelector('#romain');

image.addEventListener('click', (event) => {
  event.target.style.borderRadius = '50%';
});

const images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('click', (event) => {
    event.currentTarget.style.borderRadius = '50%';
  });
});
