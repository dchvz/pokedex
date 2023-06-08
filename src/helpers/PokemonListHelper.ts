import {COLOR_BY_TYPE} from '../constants/types';
import {PokemonType} from '../types/types';

export const getColorByType = (type: PokemonType): string => {
  return COLOR_BY_TYPE[type];
};

export const upperCaseFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
