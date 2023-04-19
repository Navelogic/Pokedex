let pokeApi = {}
function convertPokeApiDetailToPokemon(pokemonDetail) {
    let pokemon = new Pokemon()
    pokemon.name = pokemonDetail.name
    pokemon.pokeNumber = pokemonDetail.id

    let types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    let [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonDetail.sprites.other['official-artwork']['front_default']

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 151) => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;


    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => (pokemonDetails))
}