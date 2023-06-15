import {COLOR_BY_TYPE, LIGHT_COLOR_BY_TYPE} from '../constants/types';
import {PokemonType} from '../types/types';

export const getColorByType = (
  type: PokemonType,
  useLighterColor: boolean = false,
): string => {
  return useLighterColor ? LIGHT_COLOR_BY_TYPE[type] : COLOR_BY_TYPE[type];
};

export const upperCaseFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
