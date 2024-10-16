import Breadcrumb from '@/components/ui/breadcrumb/breadcrumb';
import PokemonDetailsCard from '@/components/ui/pokemon-details-card/pokemon-details-card';

import { getPokemonByName } from '@/services/pokemon';
import { formatPokemonDetails } from '@/utils/pokemon';

export type PokemonDetailsProps = {
  name: string;
};

export const PokemonDetails = async ({ name }: PokemonDetailsProps) => {
  const details = await getPokemonByName(name);

  if (!details) {
    return <div>Pokemon not found</div>;
  }

  const { imageURL, types, stats, abilities, moves } =
    formatPokemonDetails(details);

  return (
    <section id="pokemon-details">
      <div className="container p-8">
        <Breadcrumb />
        <PokemonDetailsCard
          className="mt-8"
          name={name}
          imageURL={imageURL}
          types={types}
          stats={stats}
          abilities={abilities}
          moves={moves}
        />
      </div>
    </section>
  );
};
