import {Pokemon} from '../types/pokemon';
import {ResourceResponse} from '../types/responses';
import {api} from './requestWrapper';
import {DEFAULT_LIMIT_BY_CALL, POKE_API} from '../constants/api';

export const fetchPokemonDetails = async (
  pokemon: string,
): Promise<Pokemon> => {
  console.log('fetchPokemonDetails()');
  const url = `${POKE_API}/pokemon/${pokemon}`;
  try {
    return await api.get<Pokemon>(url);
  } catch (error) {
    console.log('fetchPokemonDetails => error:', error);
    throw error;
  }
};

export const fetchEnrichedPokemonList = async (
  limit: number = DEFAULT_LIMIT_BY_CALL,
  offset: number = 0,
): Promise<Pokemon[]> => {
  console.log('fetchEnrichedPokemonList()');
  const url = `${POKE_API}/pokemon/?limit=${limit}&offset=${offset}`;
  try {
    const {results} = await api.get<ResourceResponse>(url);
    const enrichedPokemonList = [];
    for (const pokemon of results) {
      const enrichedPokemon = await fetchPokemonDetails(pokemon.name);
      enrichedPokemonList.push(enrichedPokemon);
    }
    return enrichedPokemonList;
  } catch (error) {
    console.log('fetchEnrichedPokemonList => error:', error);
    throw error;
  }
};
