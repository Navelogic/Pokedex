let offset = 0;
let limit = 10;
let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

fetch(url)
    .then((response)=> response.json())
    .then((data)=> {
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].name);
        }
    });