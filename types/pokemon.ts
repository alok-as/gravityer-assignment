export type TApiListResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type TResourceItem = {
  name: string;
  url: string;
};

export type TPokemonItem = {
  id: string;
  name: string;
  imageURL: string;
};

export type TPokemonListItemResponse = TResourceItem;
export type TPokemonListResponse = TApiListResponse<TPokemonListItemResponse>;

export type TPokemonTypeListItemResponse = TResourceItem;
export type TPokemonTypeListResponse =
  TApiListResponse<TPokemonTypeListItemResponse>;

export type TPokemonType = {
  id: string;
  name: string;
  imageURL: string;
};

export type TMoveSlot = {
  move: TResourceItem;
  slot: number;
};

export type TPokemonSlot = {
  pokemon: TResourceItem;
  slot: number;
};

export type TAbilitySlot = {
  ability: TResourceItem;
  is_hidden: boolean;
  slot: number;
};

export type TStatSlot = {
  stat: TResourceItem;
  slot: number;
};

export type TPokemonTypeSlot = {
  type: TResourceItem;
  slot: number;
};

export type TPokemonTypeResponse = {
  name: string;
  pokemon: TPokemonSlot[];
};

export type TPokemonDetails = {
  id: string;
  abilities: TAbilitySlot[];
  moves: TMoveSlot[];
  stats: TStatSlot[];
  types: TPokemonTypeSlot[];
};
