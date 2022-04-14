import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ModalPokemon from "./modalPokemon";

const CardPokemon = ({pokemon}) => {

  return (
    <div className={"section__allPokeBox container"}>
      {
        pokemon.map((poke) => {
          return (
            <div
              key={poke.id}
              className={"section__pokeBox"}
            >
              <div className="section__pokeBoxImg">
                <img src={poke.sprites.front_shiny} />
              </div>
              <div className="section__specification">
                <h2>{poke.name}</h2>
                <p>height: {poke.height}</p>
                <p>weight: {poke.weight}</p>
                <p>order: {poke.order}</p>
                <ModalPokemon pokemon={poke}/>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default CardPokemon;