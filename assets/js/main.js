
function getPokemonTypes(type){
    return `<li>${type.name}</li>`
}

function handleAddPokemon(pokemon){  
    return `
    <li class="card" style = "${handleTypeColor(pokemon.types[0].type.name)}">
    
    <span id="number">${handleNumber(pokemon.id)}</span>
    <span id="name">${pokemon.name}</span>
    <div class="card-body">
        <ol>
           ${pokemon.types.map((type) => getPokemonTypes(type.type)).join('')}
        </ol>
        <div class="poke-image">
        <img width="100px" height="100px"
        src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
    </div>
</li>
    `
}

btn = document.getElementById('more')
btn.addEventListener('click',function(){
    let offset = pokeAPI.offset
    let limite = pokeAPI.limite
    offset += limite

    pokeAPI.getPokemons(offset,limite).then(pokemons =>{
        console.log(pokemons)
        document.getElementById('pokedex-list').innerHTML += pokemons.map(handleAddPokemon).join('');
    })
    pokeAPI.offset = offset
})

function handleTypeColor(handleType){
    var card = "";
    switch (handleType){
        case 'normal':
            card = "background-color: var(--normal)";
            break;
        case 'fire':
            card = "background-color: var(--fire)";
            break;
        case 'grass':
            card = "background-color: var(--grass)";
            break;
        case 'water':
            card = "background-color: var(--water)";
            break;
        case 'bug':
            card = "background-color: var(--bug)";
            break;
        case 'poison':
            card = "background-color: var(--poison)";
            break;
        case 'electric':
            card = "background-color: var(--electric)";
            break;
        case 'ground':
            card = "background-color: var(--ground)";
            break;
        case 'fairy':
            card = "background-color: var(--fairy)";
            break;
        case 'fighting':
            card = "background-color: var(--fighting)";
            break;
        case 'psychic':
            card = "background-color: var(--psychic)";
            break;
        case 'rock':
            card = "background-color: var(--rock)";
            break;
        case 'ghost':
            card = "background-color: var(--ghost)";
            break;
        default:
            card = "background-color: var(--normal)";
    }
    return card;

}

function handleNumber(id){
    let number;

    if(id < 10)number = "#00"+id.toString();
    else if(id >=10 && id < 100) number = "#0"+id.toString();
    else if (id >= 100 ) number = "#"+id.toString();

    return number;
}






