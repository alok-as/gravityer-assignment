'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button/button';
import { cn } from '@/utils/common';

export type PokemonSearchProps = {
  className?: string;
  onSearch: (query: string) => void;
};

export const PokemonSearch = ({ className, onSearch }: PokemonSearchProps) => {
  const [query, setQuery] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={cn('w-full md:w-1/2', className)}>
      <form className="relative flex justify-between" onSubmit={onSubmit}>
        <div className="flex-1">
          <Search
            size={16}
            className="absolute ml-4 text-gray-400 -translate-y-1/2 top-1/2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-12 pr-4 bg-white border border-gray-100 outline-none rounded-l-md"
            value={query}
            onChange={onChange}
          />
        </div>

        <Button type="submit" className="rounded-r-md">
          Search
        </Button>
      </form>
    </div>
  );
};
