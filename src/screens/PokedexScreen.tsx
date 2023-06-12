import {View, StyleSheet, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import PokeList from '../components/PokeList';

import {Pokemon} from '../types/pokemon';
import {fetchEnrichedPokemonList} from '../api/pokemonAPI';
import {DEFAULT_LIMIT_BY_CALL} from '../constants/api';

const PokedexScreen = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const loadMorePokemon = async (): Promise<void> => {
    try {
      const paginationOffset = pokemonList.length;
      const nextPokemon = await fetchEnrichedPokemonList(
        DEFAULT_LIMIT_BY_CALL,
        paginationOffset,
      );
      setPokemonList([...pokemonList, ...nextPokemon]);
    } catch (error) {
      console.log('Error fetching paginated pokemon list');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        // @TODO: indicate with a spinner that the list is loading
        const initialPokemon = await fetchEnrichedPokemonList();
        setPokemonList(initialPokemon);
      } catch (error) {
        console.log('Error fetching initial pokemon list');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <PokeList list={pokemonList} loadMorePokemon={loadMorePokemon} />
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
});

export default PokedexScreen;
