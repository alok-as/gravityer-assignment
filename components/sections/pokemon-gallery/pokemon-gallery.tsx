'use client';
import { PokemonSearch } from '@/components/features/pokemon-search';
import { PokemonGrid } from '@/components/features/pokemon-grid';
import { Select } from '@/components/ui/select/select';

import { usePokemonGallery } from '@/components/sections/pokemon-gallery/use-pokemon-gallery';

import type { TSelectOption } from '@/types/common';
import type { TPokemonItem } from '@/types/pokemon';

export type PokemonGalleryProps = {
  initialPokemons: TPokemonItem[];
  types: TSelectOption[];
};

export const PokemonGallery = ({
  initialPokemons,
  types,
}: PokemonGalleryProps) => {
  const { pokemons, filter, type, onChangeType, onSearch, filterPokemons } =
    usePokemonGallery(initialPokemons);

  return (
    <section id="pokemon-gallery">
      <div className="container p-8">
        <div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Select options={types} value={type} onChange={onChangeType} />
          </div>
          <PokemonSearch className="mt-4" onSearch={onSearch} />
        </div>
        <div className="mt-10">
          <PokemonGrid pokemons={filterPokemons(pokemons, filter)} />
        </div>
      </div>
    </section>
  );
};
