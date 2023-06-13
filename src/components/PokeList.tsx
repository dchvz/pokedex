import {ActivityIndicator, FlatList, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import PokeCard from './PokeCard';
import BoldText from './Text/BoldText';
import {Pokemon} from '../types/pokemon';
import {COLORS} from '../constants/colors';

type Props = {
  list: Pokemon[];
  loadMorePokemon: () => Promise<void>;
  loading: boolean;
};

const PokeList = ({list, loadMorePokemon, loading}: Props) => {
  const handleEndReached = (): void => {
    (async () => {
      if (loading) {
        return;
      }
      try {
        await loadMorePokemon();
      } catch (error) {
        console.log(`Error adding elements at the end of the list ${error}`);
      }
    })();
  };

  const renderLoadingFooter = () => {
    return loading ? (
      <ActivityIndicator size={'small'} color={COLORS.softBlue} />
    ) : null;
  };

  return (
    <FlatList
      data={list}
      onEndReached={handleEndReached}
      ListHeaderComponent={
        <BoldText text={'Pokedex'} textStyle={styles.header} />
      }
      ListFooterComponent={renderLoadingFooter()}
      renderItem={({item}) => (
        <PokeCard
          name={item.name}
          imgUrl={item.sprites.front_default as string}
          types={item.types.map(type => type.type.name)}
        />
      )}
    />
  );
};

interface IStyles {
  header: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 30,
  },
});

export default PokeList;
