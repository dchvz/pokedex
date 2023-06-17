import {
  COLOR_BY_TYPE,
  DARK_COLOR_BY_TYPE,
  LIGHT_COLOR_BY_TYPE,
} from '../constants/types';
import {PokemonType} from '../types/types';

export const getColorByType = (
  type: PokemonType,
  colorType: 'light' | 'regular' | 'dark' = 'regular',
): string => {
  const pokemonColor = {
    light: LIGHT_COLOR_BY_TYPE[type],
    dark: DARK_COLOR_BY_TYPE[type],
    regular: COLOR_BY_TYPE[type],
  };
  return pokemonColor[colorType];
};

export const upperCaseFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
