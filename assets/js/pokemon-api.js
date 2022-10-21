
//Object that contains the API results
const pokeAPI = {
    offset:0,
    limite:10,
    pokemons:[],
    evolution:[],
    pokeAll: []
};

//handle each pokemon url
pokeAPI.getDetails = (url) =>{
    return fetch(url).then((response) => response.json());
}

//handle each pokemon evolution url
pokeAPI.getEvolution = (url)=>{
    return fetch(url).then((response) =>response.json());
}

// Pokemons consuming API method
pokeAPI.getPokemons = (offset = 0,limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((details) => Promise.all (details.map(poke => pokeAPI.getDetails(poke.url))))
    .catch((error) => console.log(error))
}

//Calling method, then access objetcs
pokeAPI.getPokemons().then(pokemons =>{
    // console.log(pokemons)
    pokemons.map(pokemon=>{pokeAPI.pokemons.push(pokemon)})
    document.getElementById('pokedex-list').innerHTML += pokemons.map(handleAddPokemon).join('');
    
})

// Get Object at once, then storage into pokeAPI.pokeAll
pokeAPI.getAll = (offset = 0,limit = 151) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((details) => Promise.all (details.map(poke => pokeAPI.getDetails(poke.url))))
    .catch((error) => console.log(error))
}
pokeAPI.getAll().then(pokemons=>{
    pokemons.map(pokemon =>{pokeAPI.pokeAll.push(pokemon)});
})


// Evolutions
// pokeAPI.getEvolutions = () =>{
//     const url = `https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=458`;
//     return fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.results)
//     .then((details) => Promise.all(details.map(poke => pokeAPI.getEvo(poke.url))))
//     .catch((error) => console.log(error));
// }
// pokeAPI.getEvolutions().then(pokemons =>{
    
//     console.log(pokemons);

//     pokemons.map(pokemon => {pokeAPI.evolution.push(pokemon)});
      
// })

// function seeEvolves(id){
//     let evolutions = []

//     if(evolution.evolves_to.length > 0){
//         evolutions.push(evolution.evolves_to[0].species.name)
        
//         if(evolution.evolves_to[0].evolves_to.length > 0){
//             evolutions.push(evolution.evolves_to[0].evolves_to[0].species.name)

//         }else console.log('sem evolução')

//     }else console.log('sem evolução')

// }


