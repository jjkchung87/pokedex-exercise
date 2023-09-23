import "./styles/Pokecard.css"

import React from 'react';

const Pokecard = ({key, name, image, type, exp}) => {
    return (
        <div className="Pokecard" id={key}>
            <h3 className="Pokecard-name">{name}</h3>
            <img className="Pokecard-img" src={image}/>
            <p className="Pokecard-type"><b>Type:</b> {type}</p>
            <p className="Pokecard-exp"><b>Exp:</b> {exp}</p>
        </div>
    )
}

export default Pokecard