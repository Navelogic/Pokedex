function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.pokeNumber}</span>
        <span class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
        
        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            
            </ol>
           
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
     </li>
`;
}
const pokemonList = document.getElementById('pokemonList');
pokeApi.getPokemons().then((pokemons= []) => {
    let newHtml = pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
});