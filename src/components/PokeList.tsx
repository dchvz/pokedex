import {ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import PokeCard from './PokeCard';
import {Pokemon} from '../types/pokemon';
import {COLORS} from '../constants/colors';

type Props = {
  list: Pokemon[];
  loadMorePokemon: () => Promise<void>;
  loading: boolean;
  endReached: boolean;
};

const PokeList = ({list, loadMorePokemon, loading, endReached}: Props) => {
  const handleEndReached = (): void => {
    (async () => {
      if (loading || endReached) {
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
      numColumns={2}
      onEndReached={handleEndReached}
      ListFooterComponent={renderLoadingFooter()}
      renderItem={({item}) => (
        <PokeCard
          id={item.id}
          name={item.name}
          imgUrl={
            item.sprites.other['official-artwork'].front_default as string
          }
          types={item.types.map(type => type.type.name)}
        />
      )}
    />
  );
};

export default PokeList;
