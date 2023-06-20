import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {POKEMON_DETAILS_SCREEN} from '../constants/navigation';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  [POKEMON_DETAILS_SCREEN]: {
    pokemonId: number;
  };
};

export type PokemonDetailsNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type PokemonDetailsRouteProp = RouteProp<RootStackParamList>;
