import { PokemonDetails } from '@/components/sections/pokemon-details/pokemon-details';

const PokemonDetailsPage = ({ params }: { params: { name: string } }) => {
  return <PokemonDetails name={params.name} />;
};

export default PokemonDetailsPage;
