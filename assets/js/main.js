
// Create elements functions <li>
function getPokemeonBaseStatusName(name){
    return`<li>${name}</li>`
}

function getPokemeonBaseStatus(status){
return `<li> ${status}</li>`
}

function getPokemonAbilities(ability){
    return` ${ability.name}`
}

function getPokemonTypes(type){
    return `<li>${type.name}</li>`
}
//Create elements to put into a section
function handleAddPokemon(pokemon){ 

    return `
    <li id="${pokemon.id}" class="card card__shadow card__effect" style = "${handleTypeColor(pokemon.types[0].type.name)}" value = "${pokemon.id}" onclick="getValue(this.value)">
    
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
//OnFind functions are triggered when the pokemon is lodade by search
function handleAddPokemonOnFind(pokemon){ 

    return `
    <li id="${pokemon.id}" class="card card__effect card__shadow" style = "${handleTypeColor(pokemon.types[0].type.name)}" value = "${pokemon.id}" onclick="getValueOnFind(this.value)">
    
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
//function that work when a pokemon card is clicked
function handlePokemonAbout(pokemon){
    return `
    
    <div id ="pokemon-about" class="content pokemon-about" style ="${handleTypeColor(pokemon.types[0].type.name)}">
    
    <button class="font-a" onClick = 'backToList(${pokemon.id})'>
    <i class="fa-solid fa-arrow-left-long"></i>
    </button>
            <div class="card card-about">    
            <div class="name-type">
                <h1>${pokemon.name}</h1>
                <ol class="d-flex">
                ${pokemon.types.map((type) => getPokemonTypes(type.type)).join('')}
                 </ol>
        
            </div>
           
        
            <span >${handleNumber(pokemon.id)}</span>
        
            <div class="poke-img">
                <img width="200px" height="200px"
                src="${pokemon.sprites.other['official-artwork'].front_default}">   
            </div>
        </div>
        
        <div class="pokemon-info" id="poke-card">
        
                <div id="poke-header">
                     <ul class="poke-navbar">
                        <li class="active t-about"> About</li>
                        <li class="t-base">Base Status</li>
               
                    </ul>

                </div>
                
                <div id="info-content">

                    <ul>
                        <li class="active t-about">
                            <div class="d-flex" id="poke-info">
                                <ol class="details-a">
                                    <li>Height</li>
                                    <li>Weight</li>
                                    <li>Abilities</li>
                                </ol>
                                <ol class="details-b">
                                    <li> ${(pokemon.height /10)} cm</li>
                                    <li>${(pokemon.weight /10)} kg</li>
                                    <li>${pokemon.abilities.map((poke) => getPokemonAbilities(poke.ability))} </li>
                                  
                                </ol>

                            </div>
                          
                        </li>
                        <li class="t-base">
                           <div class="d-flex" id="poke-info">
                                <ol class="details-a">
                                    ${pokemon.stats.map((poke) => getPokemeonBaseStatusName(poke.stat.name)).join('')} 
                                </ol>
                                <ol class="details-b">
                                    ${pokemon.stats.map((poke) => getPokemeonBaseStatus(poke.base_stat)).join('')} 
                                  
                                </ol>

                            </div>

                        
                        </li>
                        <li class="t-evolutions"></li>
                        <li class="t-moves"></li>
                    </ul>

                </div>
                   
        </div>

        </div>
    
    `
}

function handlePokemonAboutOnFind(pokemon){
    return `
    
    <div id ="pokemon-about" class="content pokemon-about" style ="${handleTypeColor(pokemon.types[0].type.name)}">
    
    <button class="font-a" onClick = 'backToListOnFind(${pokemon.id})'>
    <i class="fa-solid fa-arrow-left-long"></i>
    </button>
            <div class="card card-about">    
            <div class="name-type">
                <h1>${pokemon.name}</h1>
                <ol class="d-flex">
                ${pokemon.types.map((type) => getPokemonTypes(type.type)).join('')}
                 </ol>
        
            </div>
           
        
            <span >${handleNumber(pokemon.id)}</span>
        
            <div class="poke-img">
                <img width="200px" height="200px"
                src="${pokemon.sprites.other['official-artwork'].front_default}">   
            </div>
        </div>
        
        <div class="pokemon-info" id="poke-card">
        
                <div id="poke-header">
                     <ul class="poke-navbar">
                        <li class="active t-about"> About</li>
                        <li class="t-base">Base Status</li>
                    
                    </ul>

                </div>
                
                <div id="info-content">

                    <ul>
                        <li class="active t-about">
                            <div class="d-flex" id="poke-info">
                                <ol class="details-a">
                                    <li>Height</li>
                                    <li>Weight</li>
                                    <li>Abilities</li>
                                </ol>
                                <ol class="details-b">
                                    <li> ${(pokemon.height /10)} cm</li>
                                    <li>${(pokemon.weight /10)} kg</li>
                                    <li>${pokemon.abilities.map((poke) => getPokemonAbilities(poke.ability))} </li>
                                  
                                </ol>

                            </div>
                          
                        </li>
                        <li class="t-base">
                           <div class="d-flex" id="poke-info">
                                <ol class="details-a">
                                    ${pokemon.stats.map((poke) => getPokemeonBaseStatusName(poke.stat.name)).join('')} 
                                </ol>
                                <ol class="details-b">
                                    ${pokemon.stats.map((poke) => getPokemeonBaseStatus(poke.base_stat)).join('')} 
                                  
                                </ol>

                            </div>

                        
                        </li>
                     
                    </ul>

                </div>
                   
        </div>

        </div>
    
    `
}
// Event Listener functions
btn = document.getElementById('more')
//I decided to use Jquery after creating this function EventListener
btn.addEventListener('click',function(){
    let offset = pokeAPI.offset
    let limite = pokeAPI.limite

    offset += limite;

    pokeAPI.getPokemons(offset,limite).then(pokemons =>{
        // console.log(pokemons)
        pokemons.map(pokemon=>{pokeAPI.pokemons.push(pokemon)})
        pokemons.map(pokemon=>{
            lista = document.getElementById('pokedex-list');
            return pokemon.id <= 151 ? lista.innerHTML += handleAddPokemon(pokemon) : btn.disabled = true;
           
        })
        
    })
 

    pokeAPI.offset = offset
})

//Events functions
function getValue(valor){
    let id = valor
    let list = pokeAPI.pokemons

    document.getElementById('pokemons-list').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('pokemon-content').style.display = "block";

    location.href="#pokemon-about";

    list.map(pokemon => {
        if(pokemon.id == id){
            // console.log(pokemon.id+"\n"+pokemon.name+"\n"+pokemon.sprites.front_default)
            document.getElementById('pokemon-content').innerHTML = handlePokemonAbout(pokemon)

            scroll(0,0);

            // console.log(pokemon.sprites.other['official-artwork'].front_default)
            
            //navbar in pokemon about section
            $('#poke-header li').on('click',function(){
                let liClass = $(this).attr('class')
                $('#poke-card').find('li.active').removeClass('active');
                $('#poke-card').find('li.'+liClass).toggleClass('active');
               
                // $(this).addClass('active');
              
            });

        }
    })

}

function getValueOnFind(valor){
    document.getElementById('search-result').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('pokemon-content').style.display = "block";

    location.href="#pokemon-about";

    let id = valor
    let lista = pokeAPI.pokeAll

    lista.map(pokemon => {
        if(pokemon.id == id){
            // console.log(pokemon.id+"\n"+pokemon.name+"\n"+pokemon.sprites.front_default)
            document.getElementById('pokemon-content').innerHTML = handlePokemonAboutOnFind(pokemon)
            // console.log(pokemon.sprites.other['official-artwork'].front_default)

            scroll(0,0);

            $('#poke-header li').on('click',function(){
                let liClass = $(this).attr('class')
                $('#poke-card').find('li.active').removeClass('active');
                $('#poke-card').find('li.'+liClass).toggleClass('active');
                // $(this).addClass('active');
              
            });

        }
    })

}

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
        case 'ice':
            card = "background-color: var(--ice)";
            break;
        case 'dragon':
            card = "background-color: var(--dragon)";
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

function backToList(id){
    document.getElementById('pokemons-list').style.display = "block";
    document.getElementById('header').style.display = "block";
    document.getElementById('pokemon-about').style.display = "none";

    location.href = `#${id}`;
}

function backToListOnFind(id){
    document.getElementById('search-result').style.display = "block";
    document.getElementById('header').style.display = "block";
    document.getElementById('pokemon-about').style.display = "none";

    location.href = `#${id}`;
}



