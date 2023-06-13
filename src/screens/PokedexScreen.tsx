import {View, StyleSheet, ViewStyle, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PokeList from '../components/PokeList';

import {Pokemon} from '../types/pokemon';
import {fetchEnrichedPokemonList} from '../api/pokemonAPI';
import {DEFAULT_LIMIT_BY_CALL} from '../constants/api';
import {COLORS} from '../constants/colors';

const PokedexScreen = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const loadMorePokemon = useRef(async () => {});

  loadMorePokemon.current = async () => {
    try {
      setLoading(true);
      const paginationOffset = pokemonList.length;
      const nextPokemon = await fetchEnrichedPokemonList(
        DEFAULT_LIMIT_BY_CALL,
        paginationOffset,
      );
      setPokemonList([...pokemonList, ...nextPokemon]);
      setLoading(false);
    } catch (error) {
      console.log(`Error fetching paginated pokemon list ${error}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await loadMorePokemon.current();
      } catch (error) {
        console.log(`Error fetching initial pokemon list ${error}`);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {pokemonList.length === 0 && loading && (
        <ActivityIndicator size={'large'} color={COLORS.softBlue} />
      )}
      {pokemonList.length > 0 && (
        <PokeList
          list={pokemonList}
          loadMorePokemon={loadMorePokemon.current}
          loading={loading}
        />
      )}
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    marginHorizontal: 10,
  },
});

export default PokedexScreen;
