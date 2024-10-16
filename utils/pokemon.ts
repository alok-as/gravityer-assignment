import type {
  TPokemonDetails,
  TPokemonListItemResponse,
  TPokemonTypeListItemResponse,
} from '../types/pokemon';

export const extractTypeIdFromURL = (url: string) => {
  const formattedUrl = new URL(url);
  const parts = formattedUrl.pathname.split('/');
  return parts[parts.length - 2];
};

export const formatPokemonTypes = (data: TPokemonTypeListItemResponse[]) => {
  const types = data.map((type) => ({
    label: type.name,
    value: extractTypeIdFromURL(type.url),
  }));

  return types;
};

export const getPokemonImageURL = (pokemonId: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

export const formatPokemonsList = (data: TPokemonListItemResponse[]) => {
  const pokemons = data.map((pokemon) => {
    const id = extractTypeIdFromURL(pokemon.url);

    return {
      id,
      name: pokemon.name,
      imageURL: getPokemonImageURL(id),
    };
  });

  return pokemons;
};

export const formatPokemonDetails = (details: TPokemonDetails) => {
  const imageURL = getPokemonImageURL(details.id);
  const types = details.types.map((item) => item.type.name).join(', ');
  const stats = details.stats.map((item) => item.stat.name).join(', ');
  const abilities = details.abilities
    .map((item) => item.ability.name)
    .join(', ');
  const moves = details.moves.map((item) => item.move.name).join(', ');

  return { imageURL, types, stats, abilities, moves };
};
