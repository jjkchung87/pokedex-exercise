import React from 'react';
import Pokecard from './Pokecard'
import "./styles/Pokedex.css"

const Pokedex = ({player, pokemon, score, isWinner}) => {
    
    pokemon = pokemon.map(p => { 
        return {...p, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
    })


    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Player {player} Pokedex</h2>
            <h3 className="Pokedex-score">Score: {score}</h3>
           { pokemon.map((p) => (
                <Pokecard key={p.id} name={p.name} image={p.img} type={p.type} exp={p.base_experience}/>
            ))}
            <div className="Pokedex-winner">{ isWinner ? 'THIS HAND WINS!': ''}</div>
        </div>
    )
}

export default Pokedex;