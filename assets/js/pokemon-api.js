
const pokeAPI = {
    offset:0,
    limite:10

};

pokeAPI.getDetails = (url) =>{
    return fetch(url).then((respose) => respose.json());

}

pokeAPI.getPokemons = (offset = 0,limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((details) => Promise.all (details.map(poke => pokeAPI.getDetails(poke.url))))
    .catch((error) => console.log(error))
}

pokeAPI.getPokemons().then(pokemons =>{
    console.log(pokemons)
    document.getElementById('pokedex-list').innerHTML += pokemons.map(handleAddPokemon).join('');
    
})
