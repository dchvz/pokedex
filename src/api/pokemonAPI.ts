import {Pokemon} from '../types/pokemon';
import {EnrichedResourceResponse} from '../types/responses';
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

export const fetchEnrichedPokemonResource = async (
  limit: number = DEFAULT_LIMIT_BY_CALL,
  offset: number = 0,
): Promise<EnrichedResourceResponse> => {
  console.log('fetchEnrichedPokemonList()');
  const url = `${POKE_API}/pokemon/?limit=${limit}&offset=${offset}`;
  try {
    const {count, next, previous, results} =
      await api.get<EnrichedResourceResponse>(url);
    const enrichedPokemonList = [];
    for (const pokemon of results) {
      const enrichedPokemon = await fetchPokemonDetails(pokemon.name);
      enrichedPokemonList.push(enrichedPokemon);
    }
    return {count, next, previous, results: enrichedPokemonList};
  } catch (error) {
    console.log('fetchEnrichedPokemonList => error:', error);
    throw error;
  }
};
