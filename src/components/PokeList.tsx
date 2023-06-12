import {FlatList, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import PokeCard from './PokeCard';
import BoldText from './Text/BoldText';
import {Pokemon} from '../types/pokemon';

type Props = {
  list: Pokemon[];
  loadMorePokemon: () => Promise<void>;
};

const PokeList = ({list, loadMorePokemon}: Props) => {
  const handleEndReached = (): void => {
    (async () => {
      try {
        // @TODO set footer is loading or some parameter here
        await loadMorePokemon();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <FlatList
      data={list}
      onEndReached={handleEndReached}
      ListHeaderComponent={
        <BoldText text={'Pokedex'} textStyle={styles.header} />
      }
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
