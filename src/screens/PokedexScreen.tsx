import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PokeList from '../components/PokeList';
import BoldText from '../components/Text/BoldText';

import {Pokemon} from '../types/pokemon';
import {fetchEnrichedPokemonResource} from '../api/pokemonAPI';
import {DEFAULT_LIMIT_BY_CALL} from '../constants/api';
import NoPokemon from '../components/NoPokemon';

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

  const handleEndReached = async () => {
    if (loading || endReached) {
      return;
    }
    try {
      await loadMorePokemon.current();
    } catch (error) {
      console.log(`Error adding elements at the end of the list ${error}`);
    }
  };

  const renderPokemon = () => {
    if (pokemonList.length > 0) {
      return (
        <PokeList
          list={pokemonList}
          onEndReached={handleEndReached}
          loading={loading}
        />
      );
    }
    return <NoPokemon />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <BoldText text={'Pokedex'} textStyle={styles.header} />
        <View style={styles.listContainer}>{renderPokemon()}</View>
      </View>
    </SafeAreaView>
  );
};

interface IStyles {
  container: ViewStyle;
  listContainer: ViewStyle;
  screen: ViewStyle;
  header: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  screen: {marginHorizontal: 10, flex: 1},
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
