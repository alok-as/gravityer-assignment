import Image from 'next/image';
import Link from 'next/link';

import { MoveRight } from 'lucide-react';

export type PokemonCardProps = {
  name: string;
  imageURL: string;
};

export const PokemonCard = ({ name, imageURL }: PokemonCardProps) => {
  return (
    <Link href={`/${name}`}>
      <div className="bg-white rounded-md">
        <div className="py-4">
          <div className="relative mx-auto aspect-square max-w-60">
            <Image src={imageURL} alt={name} fill className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col gap-8 p-4 bg-gray-100">
          <strong className="capitalize">{name}</strong>
          <span className="flex items-center gap-1 text-sm text-blue-600">
            <span>Details</span>
            <MoveRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};
