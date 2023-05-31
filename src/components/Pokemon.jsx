import { useState, useEffect } from "react"

function PokemonViewer() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonIndex, setPokemonIndex] = useState(1);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    const data = await response.json()
    setPokemon(data)
  };

  useEffect(() => {
    fetchPokemon()    
  }, [pokemonIndex])

  const handlePrevPokemon = () => {
    if (pokemonIndex > 1) {
      setPokemonIndex(pokemonIndex - 1)
      console.log(pokemonIndex)
    }
  };

  const handleNextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1)
    console.log(pokemonIndex)
  };

  if (!pokemon) return <div>Cargando...</div>

  return (

    <div>
      <img width="600" height="300" src="https://i.blogs.es/30680b/juegos-pokemon-moviles-android/1366_2000.jpg" alt="Pokemon"/>      
      <hr /><button onClick={handlePrevPokemon}>Anterior Pokemon</button>
      <hr /><img width="200" height="200" src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <h2>{pokemon.name}</h2>
      <hr /><button onClick={handleNextPokemon}>Siguiente Pokemon</button>
      <hr />
    </div>
  );
}

export default PokemonViewer;

