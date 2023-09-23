import Pokedex from './Pokedex'

const Pokegame = ({pokemon=[
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]}) => {

    
    const pokedexArray1 = []
    const pokedexArray2 = []

    let pokedex1Score = 0;
    let pokedex2Score = 0;

    const elementsPerArray = Math.floor(pokemon.length/2)
    const shuffledPokemon = [...pokemon]

     for (let i = pokemon.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPokemon[i], shuffledPokemon[j]] = [shuffledPokemon[j], shuffledPokemon[i]];
    }

    for (let i = 0; i < pokemon.length; i++) {
        if (i < elementsPerArray) {
        pokedexArray1.push(shuffledPokemon[i]);
        pokedex1Score += shuffledPokemon[i].base_experience;
        } else {
        pokedexArray2.push(shuffledPokemon[i]);
        pokedex2Score += shuffledPokemon[i].base_experience;
        }
    }

    const pokedex1 = {
        player: 1,
        pokedexArray: pokedexArray1,
        score: pokedex1Score,
        isWinner: false
    }

    const pokedex2 = {
        player: 2,
        pokedexArray: pokedexArray2,
        score: pokedex2Score,
        isWinner: false
    }

    pokedex1Score > pokedex2Score ? pokedex1.isWinner = true : pokedex2.isWinner = true;

    console.log(pokedex1, pokedex2)

    return(
        <div className="Pokegame">
            <Pokedex player={pokedex1.player} pokemon={pokedex1.pokedexArray} score={pokedex1.score} isWinner={pokedex1.isWinner}/>;
            <Pokedex player={pokedex2.player} pokemon={pokedex2.pokedexArray} score={pokedex2.score} isWinner={pokedex2.isWinner}/>;
            
        </div>
        
    )

    
}

export default Pokegame