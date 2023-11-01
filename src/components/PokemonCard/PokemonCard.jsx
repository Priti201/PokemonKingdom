import React, { useEffect, useState } from "react";
import KnowMore from "../KnowMore/KnowMore";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  // console.log(pokemon);
  const [info, setInfo] = useState({});

  async function fetchingInfo(url) {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data[0]);
    setInfo(data[0]);
  }
  useEffect(() => {
    fetchingInfo(pokemon.url);
  }, [pokemon]);

  // console.log(info);
  return (
    <div className={`card ${info.type}`}>
      <h4 className="id">#{info.id}</h4>
      <img src={info.image} className="image" />
      <h3 className="name">{pokemon.name}</h3>
      <p className="type">Type: {info.type}</p>
      <KnowMore info={info} />
    </div>
  );
};

export default PokemonCard;
