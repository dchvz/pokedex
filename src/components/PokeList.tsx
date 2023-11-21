import {FlatList} from 'react-native';
import React from 'react';
import PokeCard from './PokeCard/PokeCard';
import {Pokemon} from '../types/pokemon';
import LoadingAnimation from './LoadingAnimation';

type Props = {
  list: Pokemon[];
  onEndReached: () => Promise<void>;
  loading: boolean;
};

const PokeList = ({list, onEndReached, loading}: Props) => {
  if (loading && list.length === 0) {
    return <LoadingAnimation />;
  }

  return (
    <FlatList
      data={list}
      numColumns={2}
      onEndReached={onEndReached}
      ListFooterComponent={loading ? <LoadingAnimation /> : null}
      testID="pokemon-list"
      renderItem={({item}) => (
        <PokeCard
          id={item.id}
          name={item.name}
          imgUrl={item.sprites.other['official-artwork'].front_default}
          types={item.types.map(type => type.type.name)}
        />
      )}
    />
  );
};

export default PokeList;
