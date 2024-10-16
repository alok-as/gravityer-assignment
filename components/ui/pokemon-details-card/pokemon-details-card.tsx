import Image from 'next/image';
import { cn } from '@/utils/common';

export type PokemonDetailProps = {
  label: string;
  value: string;
};

export type PokemonDetailsCardProps = {
  name: string;
  imageURL: string;
  types: string;
  stats: string;
  moves: string;
  abilities: string;
  className?: string;
};

const PokemonDetail = ({ label, value }: PokemonDetailProps) => (
  <li>
    <strong>{label}: </strong>
    <span>{value}</span>
  </li>
);

const PokemonDetailsCard = ({
  name,
  types,
  stats,
  abilities,
  moves,
  imageURL,
  className,
}: PokemonDetailsCardProps) => {
  return (
    <div className={cn('w-full max-w-md mx-auto', className)}>
      <div className="py-8 bg-teal-400 rounded-tl-md rounded-tr-md">
        <div className="relative mx-auto max-w-48 aspect-square">
          <Image src={imageURL} alt={name} fill className="object-contain" />
        </div>
      </div>
      <div className="p-8 bg-amber-500">
        <ul className="flex flex-col gap-2">
          <PokemonDetail label="Name" value={name} />
          <PokemonDetail label="Type" value={types} />
          <PokemonDetail label="Stats" value={stats} />
          <PokemonDetail label="Abilities" value={abilities} />
          <PokemonDetail label="Some Moves" value={moves} />
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
