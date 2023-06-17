import {PokemonType} from './types';

export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: Metadata[];
  game_indices: GameIndex[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: Metadata;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

type Type = {
  slot: string;
  type: TypeMetadata;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: Metadata;
};

type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string;
  front_shiny: string | null;
  front_shiny_female: string;
  other: OtherSprites;
  // @TODO add versions
};

type OtherSprites = {
  dream_world: {
    front_default: string;
    front_female: string;
  };
  home: {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  };
};

type Move = {
  move: Metadata;
  version_group_details: VersionGroupDetail[];
};

type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: Metadata;
  version_group: Metadata;
};

type GameIndex = {
  game_index: number;
  version: Metadata;
};

type Ability = {
  ability: Metadata;
  is_hidden: boolean;
  slot: number;
};

type Metadata = {
  name: string;
  url: string;
};

type TypeMetadata = {
  name: PokemonType;
  url: string;
};
