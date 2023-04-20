let pokemonList = document.getElementById('pokemonList');
const totalPokemons = 151;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.pokeNumber}</span>
    <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
    
    <div class="detail">
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <a href=""><img src="${pokemon.photo}" alt="${pokemon.name}"></a>
    </div>
    </li>`;
}
// Identação Removida pois o WebStorm não está identando corretamente

function detalhesDePokemon(pokemon, details_pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.pokeNumber}</span>
    <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
    
    <div class="detail">
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    
    
    

`}


pokeApi.getPokemons().then((pokemons= []) => {
    let newHtml = pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
});