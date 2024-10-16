import { PokemonGallery } from '@/components/sections/pokemon-gallery/pokemon-gallery';

import { getPokemons, getPokemonTypes } from '@/services/pokemon';
import { formatPokemonsList, formatPokemonTypes } from '@/utils/pokemon';

const HomePage = async () => {
  const [pokemonList, typesList] = await Promise.all([
    getPokemons(),
    getPokemonTypes(),
  ]);

  const pokemons = formatPokemonsList(pokemonList);
  const types = formatPokemonTypes(typesList);

  return <PokemonGallery initialPokemons={pokemons} types={types} />;
};

export default HomePage;
