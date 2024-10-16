import { useEffect, useState } from 'react';

import { getPokemonsByType } from '@/services/pokemon';
import { formatPokemonsList } from '@/utils/pokemon';

import type { TSelectOption } from '@/types/common';
import type { TPokemonItem } from '@/types/pokemon';

export const usePokemonGallery = (initialPokemons: TPokemonItem[]) => {
  const [pokemons, setPokemons] = useState<TPokemonItem[]>(initialPokemons);
  const [type, setType] = useState<TSelectOption | null>(null);
  const [filter, setFilter] = useState('');

  const onChangeType = (type: TSelectOption) => setType(type);
  const onSearch = (query: string) => setFilter(query);

  const filterPokemons = (pokemons: TPokemonItem[], query: string) =>
    pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(query.toLowerCase())
    );

  const getPokemonsByTypeHandler = async (type: TSelectOption) => {
    const data = await getPokemonsByType(type.value);
    const pokemons = formatPokemonsList(data);
    setPokemons(pokemons);
  };

  useEffect(() => {
    if (!type) return;
    getPokemonsByTypeHandler(type);
  }, [type]);

  return { pokemons, filter, type, onChangeType, onSearch, filterPokemons };
};
