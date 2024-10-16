import type {
  TPokemonListResponse,
  TPokemonTypeListResponse,
  TPokemonTypeResponse,
  TPokemonDetails,
} from '@/types/pokemon';

const baseURL = `https://pokeapi.co/api/v2`;

export const getPokemonTypes = async () => {
  try {
    const response = await fetch(`${baseURL}/type`);
    if (!response.ok) {
      throw new Error('Error fetching pokemon types');
    }

    const data = (await response.json()) as TPokemonTypeListResponse;
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPokemons = async () => {
  try {
    const response = await fetch(`${baseURL}/pokemon`);
    if (!response.ok) {
      throw new Error('Error fetching pokemons');
    }

    const data = (await response.json()) as TPokemonListResponse;
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPokemonsByType = async (typeId: string) => {
  try {
    const response = await fetch(`${baseURL}/type/${typeId}`);
    if (!response.ok) {
      throw new Error('Error fetching pokemons by type');
    }

    const data = (await response.json()) as TPokemonTypeResponse;
    return data.pokemon.map((item) => item.pokemon);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const response = await fetch(`${baseURL}/pokemon/${name}`);
    if (!response.ok) {
      throw new Error('Error fetching pokemon details');
    }

    const data = (await response.json()) as TPokemonDetails;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
