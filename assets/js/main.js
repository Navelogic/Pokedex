let offset = 0;
let limit = 10;
let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

fetch(url)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    })
    .finally(function () {
    console.log('Request completed');
    });
