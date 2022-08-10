// Sélectionner tout le form
//Écouter le submit du form
// Récupérer la valeur de l'input du form
// Exécuter le fetch de l'API
// Afficher les infos

const url = "https://person.clearbit.com/v1/people/email/";

const displayData = (key, data) => {
  const element = key === 'Name' ? data.name.fullName : data[key.toLowerCase()];

  const userElement = document.querySelector(`#user${key}`);
  userElement.innerText = element;
};

const getData = (event)=> {
  const input = document.querySelector("#clearbitEmail").value;

  fetch(`${url}${input}`, {
    headers: {
      Authorization: "Bearer API_KEY_HERE"
    }
  })
  .then((response) => response.json())
  .then((data)=> {
    displayData('Name', data);
    displayData('Email', data);
    displayData('Bio', data);
    displayData('Location', data);
  });
};

const form = document.querySelector("#clearbitForm");
form.addEventListener("submit", getData);




