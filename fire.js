"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("stations");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patlN7lFJDjr0bXKm.21979782974675bc45bb920b61ba4fdb17c5764fe5540b8a3ec39c6c585a172f
`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appZSaLixrkPZ7PTk/Fire`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let image = data.records[i].fields["Images"]; // here we are getting column values
        let name = data.records[i].fields["Corporation"]; //here we are using the Field ID to fecth the name property
        let address = data.records[i].fields["Address"];

        newHtml += `
        
        
    <div class="card" style="width: 18rem;">
 ${
          image
            ? `<img class="card-img-top rounded" alt="${name}" src="${image[0].url}">`
            : ``
        }
  <div class="card-body">
    <h2 class="card-text">${name}</h2>
    <p class="card-text">${address}</p>

  </div>
</div>
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}



// look up window.location.search and split, so this would take
// https://dmspr2021-airtable-app.glitch.me/index.html?id=receHhOzntTGZ44I5
// and look at the ?id=receHhOzntTGZ44I5 part, then split that into an array
// ["?id=", "receHhOzntTGZ44I5"] and then we only choose the second one
let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  getOneRecord(idParams[1]); // create detail view HTML w/ our id
} else {
  getAllRecords(); // no id given, fetch summaries
}