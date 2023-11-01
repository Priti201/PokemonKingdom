import React, { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./Cards.css";

const Cards = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonContext);
  // console.log(pokemonData);

  return (
    <div className="container">
      {pokemonData?.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Cards;
