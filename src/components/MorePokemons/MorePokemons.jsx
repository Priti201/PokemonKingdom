import React, { useContext, useState } from 'react'
import './MorePokemons.css'
import PokemonContext from '../../context/PokemonContext';
const MorePokemons = () => {

    const {pokemonUrl,setPokemonData, setPokemonUrl, pokemonData} = useContext(PokemonContext);
    const[error, setError] = useState('');
    const[more, setMore]= useState(true)
    async function hadleMorePokemon(){
        try {
              const response = await fetch(pokemonUrl);
              const data = await response.json();
              setPokemonUrl(data?.[0].next);
              // console.log(data[0].next);
              if(!data[0].next)
              {
                setMore(false);
              }
            //   setPokemonData([...pokemonData, data?.[0].results]);
              const mergedArray = data?.[0].results.map(item => ({

                ...item, // Spread the properties of the object from the array
                
                ...pokemonData, // Spread the properties of the object to merge
                
                }));
                setPokemonData([...pokemonData, ...mergedArray])
            } catch (error) {
              setError("Error occured during fetching data");
            }
      }
      // console.log(pokemonData, "pokemondata");
  return (
    <div className='load-more'>

        {
          (more)&&
           (<button className='more-pokemons'onClick={hadleMorePokemon}>More Pokemons</button> )
        }

    </div>
  )
}

export default MorePokemons

