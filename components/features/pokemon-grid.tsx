import { PokemonCard } from '@/components/ui/pokemon-card/pokemon-card';
import type { TPokemonItem } from '@/types/pokemon';

export type PokemonGridProps = {
  pokemons: TPokemonItem[];
};

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => (
  <div>
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {pokemons.length === 0 && <p>No Pokemons exists</p>}
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          imageURL={pokemon.imageURL}
        />
      ))}
    </ul>
  </div>
);
