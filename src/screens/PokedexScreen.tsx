import {
  View,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  TextStyle,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PokeList from '../components/PokeList';
import BoldText from '../components/Text/BoldText';

import {Pokemon} from '../types/pokemon';
import {fetchEnrichedPokemonResource} from '../api/pokemonAPI';
import {DEFAULT_LIMIT_BY_CALL} from '../constants/api';
import {COLORS} from '../constants/colors';

const PokedexScreen = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const loadMorePokemon = useRef(async () => {});

  loadMorePokemon.current = async () => {
    try {
      setLoading(true);
      const paginationOffset = pokemonList.length;
      const {results: nextPokemon, next} = await fetchEnrichedPokemonResource(
        DEFAULT_LIMIT_BY_CALL,
        paginationOffset,
      );
      if (!next) {
        setEndReached(true);
      }
      setPokemonList([...pokemonList, ...nextPokemon]);
    } catch (error) {
      console.log(`Error fetching paginated pokemon list ${error}`);
    } finally {
      setLoading(false);
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

  const renderPokemon = () => {
    if (pokemonList.length > 0) {
      return (
        <PokeList
          list={pokemonList}
          loadMorePokemon={loadMorePokemon.current}
          loading={loading}
          endReached={endReached}
        />
      );
    } else if (pokemonList.length === 0 && !loading) {
      return (
        // @TODO: Add a nicer UI for this case
        <BoldText
          text={
            'No pokemon could be fetched at this time. Please try again later'
          }
          textStyle={styles.header}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <BoldText text={'Pokedex'} textStyle={styles.header} />
      <View style={styles.listContainer}>
        {loading && pokemonList.length === 0 && (
          <ActivityIndicator size={'large'} color={COLORS.softBlue} />
        )}
        {renderPokemon()}
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  listContainer: ViewStyle;
  header: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  listContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 30,
  },
});

export default PokedexScreen;
