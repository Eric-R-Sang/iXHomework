import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import PokemonTable from "./components/PokemonTable";
import { Pokemon } from "./models/pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  async function fetchPokemons() {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    
    let pokemonData = data.results.map((pokemon) => {
      return new Pokemon(pokemon.name, pokemon.url);
    });

    setPokemons(pokemonData);
  }


  return (
    <div className="text-center mt-5 mx-5">
      <button className="btn btn-primary me-1" onClick={fetchPokemons}>
        Get Pokemon
      </button>

      <PokemonTable pokemons={pokemons}></PokemonTable>
    </div>
  );
}

export default App;
