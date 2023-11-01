import React, { useEffect, useState } from "react";
import PokemonContext from "./context/PokemonContext";
import Cards from "./components/Card/Cards";
import "./App.css";
import MorePokemons from "./components/MorePokemons/MorePokemons";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const[pokemonUrl, setPokemonUrl]=useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1")
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonUrl(data?.[0].next);
      // console.log(data[0].results);
      setPokemonData(data?.[0].results);
    } catch (error) {
      console.error("Error occured during fetching data");
    }
  }
  if (!pokemonData) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData, setPokemonUrl, pokemonUrl}}>
      <div className="box">
        <h1 className="title">Pokemon KingDom</h1>

        <div>
          <Cards />
          <MorePokemons />
        </div>
        {clicked && <Modal data={{ info, setClicked }} />}
      </div>
    </PokemonContext.Provider>
  );
};
export default App;
